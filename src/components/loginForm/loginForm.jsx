"use client";
import { signinuser } from "@/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
const LoginForm = () => {
  const [state, formAction] = useFormState(signinuser, undefined);
  return (
    <form className={styles.form} action={formAction}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button id="login" name="login" type="submit">Login</button>
      {state?.error}
      {/* <Link href="/register">
        Donot have an account? <b>Register</b>
      </Link> */}
    </form>
  );
};

export default LoginForm;
