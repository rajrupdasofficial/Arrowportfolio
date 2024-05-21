import React from 'react'
import { Suspense } from 'react'
import styles from "./showpost.module.css"
import AdminPosts from "@/components/adminPosts/adminPosts";

const ShowPosts = () => {
  return (
    <div className={styles.container} >
    <div className={styles.row}>
    <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminPosts />
      </Suspense>
    </div>
    </div>
    </div>
  )
}

export default ShowPosts