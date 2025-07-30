import UserInfo from "@/components/userInfo/userInfo";
import Button from "@/components/button/button";
import styles from "./page.module.scss";

export default function dashboardPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Welcome to the Dashboard, <UserInfo />
      </h1>
      <Button href="/" value="Home Page" />
    </main>
  );
}
