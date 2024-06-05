"use client";
import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import Link from "next/link";
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';


const AdminPostForm = ({ userId }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState(null);
  const [value, setValue] = useState("");
  const [userid, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('slug', slug);
    formData.append('img', img);
    formData.append('desc', value);
    formData.append('userId', userId);

    try {
      console.log("Form data before submission:", formData);
      await addPost(formData);
      console.log('Post saved successfully');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };


  return (
    <>
      <form onSubmit={handleSubmit} className={styles.container} encType="multipart/form-data">
        <h1>Add New Post</h1>
        <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='add title' />
        <input type="text" name='category' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='add category' />
        <input type="text" name='slug' value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='add slug' />
        <input type='file' name='img' onChange={(e) => setImg(e.target.files[0])} />

        <MDEditor
          value={value}
          onChange={setValue}
        />
        <button>Add</button>
      </form>
      <hr />
      <Link href="/admin/showposts" className="bg-blue-300 mt-10">
        Show All the posts
      </Link>
      <br />
      <br />
      <Link href="/admin/allcontacts">
        See all contacts
      </Link>
    </>
  );
};

export default AdminPostForm;
