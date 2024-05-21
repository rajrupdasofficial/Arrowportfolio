import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { unstable_noStore as noStore } from 'next/cache';
import { firebase_config } from "../../../util/firebase";

const PostCard = async ({ post }) => {
  noStore()
  const storage = getStorage(firebase_config);

  const fetchImage = async (img) => {
    const downloadURL = await getDownloadURL(ref(storage, img));
    return downloadURL;
  };
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        { post.img && (
          <div className={styles.imgContainer}>
            <Image
              src={ post.img? await fetchImage(post.img) : ''}
              alt={post.title}
              fill
              className={styles.img}
            />
          </div>
        )}
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.category}/${post.slug}`}>
          KNOW MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
