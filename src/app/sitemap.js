import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from 'next/cache';
const prisma= new PrismaClient()

export default async function sitemap() {
  noStore()
  const url = "https://www.webstackpros.net";
  const baseUrl = url;
    const posts = await prisma.post.findMany();
    const postUrls=posts.map((post)=>({
      url:`${baseUrl}/blog/${post.category}/${post.slug}`,
      lastModified:post.updatedAt,
      changeFrequency:"always",
      priority:1
    }))
   
  return [

    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
     ...postUrls,
  ];
}
