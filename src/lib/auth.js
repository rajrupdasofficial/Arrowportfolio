import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.Config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
const login = async (credentials) => {
  try {
    
    const user = await  prisma.user.findUnique({
    where: {
            email: credentials.email,
        },
        select: {
        email: true,
        },
           
    })

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({  account, profile }) {
      if (account.provider === "github") {
        try {
          // Check if the user already exists
          const existingUser = await prisma.user.findUnique({
            where: {
              email: profile.email,
            },
            select: {
              email: true,
            },
          });
  
          // If user doesn't exist, create a new one
          if (!existingUser) {
            await prisma.user.create({
              data: {
                username: profile.login,
                email: profile.email,
                image: profile.avatar_url,
              },
            });
          }
        } catch (err) {
          console.log(err);
          return false; // Indicate sign-in failure
        }
      }
      return true; // Indicate sign-in success
    },
    ...authConfig.callbacks,
  },
});