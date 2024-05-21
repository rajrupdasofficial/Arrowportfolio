"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";


const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  

  return (
    <>
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="category" placeholder="define category"/>
      <input type="text" name="slug" placeholder="slug" />
      <input type="file" name="img"  placeholder="upload image" />
      <textarea name="desc" id="desc" cols={10} rows={10}></textarea>
      <button>Add</button>
      {state?.error}
      {state?.success}
    </form>
    <hr />
     <Link href="/admin/showposts" className="bg-blue-300 mt-10">
      Show All the posts
     </Link>
     
     </>
  );
};

export default AdminPostForm;
