import Link from "next/link";
import styles from "./button.module.scss";
export default function Button({
  href,
  value,
}: {
  href: string;
  value: string;
}) {
  return (
    <Link href={href} className={styles.button}>
      {value}
    </Link>
  );
}
