export default async function sitemap() {
  const url = "https://www.webstackpros.net";
  const baseUrl = url;
  //   const posts = await fetchBlogPosts();
  //   const postUrls = posts.map((post: BlogPost) => ({
  //     url: `${baseUrl}/${post.category}/${post.slug}`,
  //     lastModified: post.updated,
  //     changeFrequency: "always",
  //     priority: 1,
  //   }));

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
    // ...postUrls,
  ];
}
