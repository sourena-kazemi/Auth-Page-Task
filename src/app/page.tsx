import Button from "@/components/button/button";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Log In to Access Your Dashboard.</h1>
      <Button href="/auth" value="Log In" />
    </main>
  );
}
