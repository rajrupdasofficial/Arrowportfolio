import { unstable_noStore } from "next/cache";
import { PrismaClient } from "@prisma/client";

const prisma= new PrismaClient()
//get all the posts
export const getPosts=async()=>{
    const post = await prisma.post.findMany({
    }
    );

    return post;
}

//get posts by slug
export const getPost=async(slug)=>{
    const post = ""
    return post;
}

//get user by id

export const getUser =  async(id)=>{
    unstable_noStore()
    const user = ""
    return user;
}

//get users 
export const getUsers =  async (id)=>{
    const users = ""
    return users;
}