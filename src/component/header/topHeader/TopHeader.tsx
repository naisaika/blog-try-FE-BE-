import { NAV_LIST } from "@/data/data"
import Link from "next/link"
import styles from "./TopHeader.module.scss";

export const TopHeader = () => {
  return (
    <div className={styles.nav}>
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