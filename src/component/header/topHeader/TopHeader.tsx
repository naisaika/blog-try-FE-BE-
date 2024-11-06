import { NAV_LIST } from "@/data/data"
import Link from "next/link"
import styles from "./TopHeader.module.scss";

export const TopHeader = () => {
  return (
    <header className={styles.nav}>
      <nav>
        <ul className={styles.navList}>
           {NAV_LIST.map((list) => (
              <Link href={list.link} key={list.id}>
                <li className={styles.listText}>{list.text}</li>
              </Link>
           ))}
        </ul>
      </nav>
    </header>
  )
}