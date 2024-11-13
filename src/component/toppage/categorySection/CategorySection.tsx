import Image from "next/image";
import styles from "./CategorySection.module.scss"
import { CATEGORY } from "@/data/data";
import Link from "next/link";

export const CategorySection = () => {

  return (
    <ul className={styles.categoryList}>
        {CATEGORY.map((data) => (
            <li key={data.id} className={styles.categoryItem}>
              <Link href={data.link}>
                <Image 
                  src={data.img} 
                  alt="カテゴリー画像" 
                  width={245} height={166} priority 
                  className={styles.categoryImg}>
                </Image>
                <span className={styles.categoryTitle}>{data.title}</span>
              </Link>
            </li>
        ))}
    </ul>
  )
}