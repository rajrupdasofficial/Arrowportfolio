import { unstable_noStore as noStore } from 'next/cache';
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient()
//get all the posts

export const getPosts = async () => {
    noStore()
    const posts = await prisma.post.findMany();
    return posts;
  };

//get posts by slug
export const getPost=async(slug)=>{
    noStore()
    const signlepost= await prisma.post.findUniqueOrThrow({
        where:{
            slug:slug
        }, 
         select:{
            uid:true,
            title:true,
            category:true,
            desc:true,
            img:true,
            slug:true,
            post_user_id:true,
            updatedAt:true,
            createdAt:true   
         }
    })
    return signlepost  ;
    
}

//get user by id

export const getUser =  async(id)=>{
    noStore()
    const user = await prisma.user.findUniqueOrThrow({
        where:{
            uid:id
        },
        select:{
            email:true,
            username:true
        }
    })
    return user;
}

//get users 
export const getUsers =  async (id)=>{
    const users = ""
    return users;
}