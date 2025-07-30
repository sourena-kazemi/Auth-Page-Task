"use client";

import { userData } from "@/types/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./userInfo.module.scss";

export default function UserInfo() {
  const router = useRouter();
  const [userData, setUserData] = useState<userData>();
  useEffect(() => {
    const stringData = localStorage.getItem("userData");
    if (stringData) {
      try {
        const jsonData: userData = JSON.parse(stringData);
        setUserData(jsonData);
      } catch (err) {
        console.error("Failed to parse user data : ", err);
        router.push("/auth");
      }
    } else {
      router.push("/auth");
    }
  }, []);
  return <span className={styles.text}>{userData?.name.first}</span>;
}
