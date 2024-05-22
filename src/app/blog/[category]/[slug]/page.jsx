import PostUser from "@/components/postUser/page";
import styles from "./singlepost.module.css";
import Image from "next/image";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { firebase_config } from "../../../../../util/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { unstable_noStore as noStore } from 'next/cache';

//**FETCH DATA WITH AN API**
// const getData = async (slug) => {
//   // console.log(slug);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };
export const generateMetadata = async ({ params }) => {
  const { slug,category } = params;
  const post = await getPost(slug,category);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
    noStore()
  const { slug,category } = params;
  //**FETCH DATA WITH AN API**
  // const post = await getData(slug);
  //**FETCH DATA WITHOUT AN API**
  const post = await getPost(slug,category);
  const storage = getStorage(firebase_config);

  const fetchImage = async (img) => {
    const downloadURL = await getDownloadURL(ref(storage, img));
    return downloadURL;
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={ await fetchImage(post.img)} alt={post.title} fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* user container */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.post_user_id} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;