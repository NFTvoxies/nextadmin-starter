'use client';
import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className={styles.form}>
      <h1>Login</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="password" name="password" placeholder="password" />
      <button type="submit">Login</button>
      {state && state}
    </form>
  );
};

export default LoginForm;