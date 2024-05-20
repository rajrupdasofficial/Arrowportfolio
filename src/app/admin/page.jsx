import { Suspense } from "react";
import styles from "./admin.module.css";

import AdminPostForm from "@/components/adminPostFrom/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserFrom/adminUserForm";
import { auth } from "@/lib/auth";
import Link from "next/link";

const AdminPage = async () => {
  const session = await auth();
  return (
    <div className={styles.container}>
        <div className={styles.row}>
    <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminPostForm userId={session.user.uid} />
      </Suspense>
    </div>
  </div>
 
  {/* <div className={styles.row}>
    <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminUsers />
      </Suspense>
    </div>
    <div className={styles.col}>
      <Suspense fallback={<div>Loading...</div>}>
        <AdminUserForm />
      </Suspense>
    </div>
  </div> */}
    </div>
  );
};

export default AdminPage;
