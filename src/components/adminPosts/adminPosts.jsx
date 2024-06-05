import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { firebase_config } from "../../../util/firebase";
import Link from "next/link";
import { unstable_noStore as noStore } from 'next/cache';


const AdminPosts = async () => {
  noStore()
  const posts = await getPosts();
  const storage = getStorage(firebase_config);

  const fetchImage = async (img) => {
    const downloadURL = await getDownloadURL(ref(storage, img));
    return downloadURL;
  };

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      <Link href="/admin" className="bg-blue-500">
        go to create post
      </Link>
      {posts.map(async (p) => (
        <div className={styles.post} key={p.uid}>
          <div className={styles.detail}>
            <span>ID:{p.uid.toString()}</span>
            {p.img ? (
              <Image
                src={p.img ? await fetchImage(p.img) : ''}
                alt={p.title}
                width={50}
                height={50}
              />
            ) : (
              <Image src="/noAvatar.png" alt="" width={50} height={50} />
            )}
            <span className={styles.postTitle}>{p.title}</span>
            <span dangerouslySetInnerHTML={{ __html: p.desc }} />
            <span>userid:{p.userId} </span>
            <span>category:{p.category}</span>
            {/* <span>created:{p.createdAt}</span>
          <span>updated:{p.updatedAt}</span> */}
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={p.uid.toString()} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}

    </div>

  );
};

export default AdminPosts;
