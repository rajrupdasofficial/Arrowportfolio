"use server"
import bcrypt from "bcrypt"
import {auth,signIn,signOut} from "@/lib/auth"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { uploadImageToFirebase } from "./firebaselogics";
import {v4 as uuid4 } from 'uuid'

const prisma = new PrismaClient()


export const addPost=async(prevState,formData)=>{

  const {title,category,desc,slug,userId}=Object.fromEntries(formData);

  console.log("unique user id is",userId)
  const imageData=formData.get('img')
  
 try{
  const uniqueFilename = `${uuid4()}.${imageData.type.split('/')[1]}`;
  const firebase_storage_upload = await uploadImageToFirebase(imageData,uniqueFilename)

  const get_user_id=await prisma.user.findUniqueOrThrow({
    where:{
      email:userId
    },
    select:{
      uid:true
    }
  })
  const create_post = await prisma.post.create({
      data:{
        title:title,
        category:category,
        desc:desc,
        slug:slug,
        img:uniqueFilename,
        post_user_id:get_user_id.uid
      }
  })
  if(create_post){
    console.log("post created successfully")
    return { success: "success  post created successfully" };
  }
  }catch(err){
    console.log(err)
    return {error:"Failed some error occurred"}
  }
 
 
}
//save contact from
export const saveContact=async(prevState,formData)=>{
    const {user_message,user_email}= Object.fromEntries(formData);
    const savecontactdata = await prisma.contact.create({
      data:{
        user_message:user_message,
       user_email: user_email
      }
    })
    if(savecontactdata){
      return {success:"Thank you! we will touch with you shortly"}
    }else{
      return{error:"Sorry we cannot process this data at the moment"}
    }
}


//delete post
export const deletePost=async(formData)=>{
  const{id}=Object.fromEntries(formData)
  console.log("post id",id)
  try{
      const deletepost = await prisma.post.delete({
        where:{
            uid:id
        },
      })
    
      if(deletepost){
        console.log("post successfully deleted")
      }else{
        console.log("already been deleted")
      }
  }catch(err){
    console.log("error",err)
  }
}

//add user
export const  addUser= async(prevState,formData)=>{
  const {username,email,password,img}=Object.fromEntries(formData);
  console.log(username)
}
//delete user

export const deleteUser= async(formData)=>{
  const {id}= Object.fromEntries(formData)
  console.log(id)
}


//signin user

export const signinuser = async(prevState,formData)=>{
  const {email,password}=Object.fromEntries(formData);
  try {
    await signIn("credentials",{email,password})
    return {success:"Loggedin successfully"}
  }catch(err){
    console.log(err)
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
export const userregister=async(prevState,formData)=>{
  const {username,email,password}=Object.fromEntries(formData)
 
  try{
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        username:username,
    },
    select: {
    email: true,
    username:true
    },
    })
    if(user){
      return {error:"Username or Email exists"}
    }
    const salt= await bcrypt.genSalt(10)
    const hashedPassword= await bcrypt.hash(password,salt)
    const newUser= await prisma.user.create({
      data:{
        username:username,
        email:email,
        password:hashedPassword
      }
    })
    if (newUser){
      console.log("regis done")
      return { success: true };
    }else{
        return {error:true}
    }
  }catch(err){
    console.log(err)
    return {err:"Something went wrong"}
  }
}

//login action github
export const hadleGithubLogin = async () => {
    await signIn("github");
  };
  

  //logout 
  export const handelLogout = async () => {
    await signOut();
  };