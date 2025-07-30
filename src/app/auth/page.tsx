import Form from "@/components/form/form";
import styles from "./page.module.scss";

export default function AuthPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Enter Your Phone Number to Log In</h1>
      </div>
      <Form />
    </main>
  );
}
