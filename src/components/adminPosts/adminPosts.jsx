import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

const AdminPosts = async () => {
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((p) => (
        <div className={styles.post} key={p.uid}>
          <div className={styles.detail}>
          <span>ID:{p.uid.toString()}</span>
            {/* <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            /> */}
            <span className={styles.postTitle}>{p.title}</span>
            <span > DESC:{p.desc}</span>
          <span>USERid:{p.userId} </span>
          </div>
          <form  action={deletePost}>
            <input type="hidden" name="id" value={p.uid.toString()} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
