"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";
import Tiptap from "../smarttexteditor/smartEditor";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      {/* <input type="text" name="img" placeholder="img" /> */}
      <input type="file" name="img"  placeholder="upload image" />
      <textarea name="desc" id="desc" cols={10} rows={10}></textarea>
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
