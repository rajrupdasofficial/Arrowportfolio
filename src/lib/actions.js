"use server"
import bcrypt from "bcrypt"
import {auth,signIn,signOut} from "@/lib/auth"
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { S3 } from "@aws-sdk/client-s3";

const prisma = new PrismaClient()


//add post
const s3 = new S3({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  accessKeyId: `${process.env.R2_ACCESS_KEY_ID}`,
  secretAccessKey: `${process.env.R2_SECRET_ACCESS_KEY}`,
  signatureVersion: 'v4',
});

export const addPost=async(prevState,formData)=>{
  const {title,desc,slug,userId}=Object.fromEntries(formData);
  const imageData=formData.get('img')
  console.log(imageData)
  
  try{
    const uploadFile = await s3.putObject({
      Bucket: '',
      Key: imageData.name,
      Expires: 60,
    });
    console.log(uploadFile)
    if(uploadFile){
      console.log("success")
    }else{
      console.log("error")
    }

  }catch(err){
    console.log(err)
  }



 
}

 // try{
  // const create_post = await prisma.post.create({
  //     data:{
  //       title:title,
  //       desc:desc,
  //       slug:slug,
  //       userId:userId
  //     }
  // })
  // if(create_post){
  //   console.log("post created successfully")
  //   return { success: "success  post created successfully" };
  // }
  // }catch(err){
  //   console.log(err)
  //   return {error:"Failed some error occurred"}
  // }
//delete post
export const deletePost=async(formData)=>{
  const{id}=Object.fromEntries(formData)
  try{
      const deletepost = await prisma.post.delete({
        where:{
            id:id
        },
        select:{
          id:true
        }

      })
      if(deletepost){
        console.log("post successfully deleted")
      }
  }catch(err){
    console.log("error")
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
  }catch(err){
    console.log(err)
    if (err.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};
export const register=async(prevState,formData)=>{
  const {username,email,password,img,passwordRepeat}=Object.fromEntries(formData)
  if (password!==passwordRepeat){
    return {error:"Passwords not matched"}
  }
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