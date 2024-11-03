import { NAV_LIST } from "@/data/data"
import Link from "next/link"
import styles from "./SubHeader.module.scss";
import Image from "next/image";

export const SubHeader = () => {
  return (
    <div className={styles.nav}>
        <Link href="/">
            <Image src="/logo.webp" alt="ロゴ画像" width={350} height={60} priority className={styles.img}></Image>
        </Link>
        <nav>
            <ul className={styles.navList}>
                {NAV_LIST.map((list) => (
                    <Link href={list.link} key={list.id}>
                    <li>{list.text}</li>
                    </Link>
                ))}
            </ul>
        </nav>
    </div>
  )
}
