"use server"
import bcrypt from "bcrypt"
import {auth,signIn,sigOut} from "@/lib/auth"


// export const login = async(prevState,formData)=>{
//   const {email,password}=Object.fromEntries(formData);
//   console.log(email)
//   console.log(password)
// }
// export const register=async(prevState,formData)=>{
//   const {email,password}=Object.fromEntries(formData)
//   console.log(email,password)
// }

//login action github
export const hadleGithubLogin = async () => {
    await signIn("github");
  };
  