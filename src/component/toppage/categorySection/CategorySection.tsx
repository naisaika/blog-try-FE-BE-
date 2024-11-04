import { getSliderData } from "@/app/api/route";
import Image from "next/image";
import styles from "./CategorySection.module.scss"

export const CategorySection = async () => {

    const categoryData = await getSliderData();

  return (
    <ul className={styles.categoryList}>
        {categoryData.category.map((data) => (
            <li key={data.id} className={styles.categoryItem}>
                <Image 
                  src={data.img} 
                  alt="カテゴリー画像" 
                  width={245} height={166} priority 
                  className={styles.categoryImg}>
                </Image>
                <span className={styles.categoryTitle}>{data.title}</span>
            </li>
        ))}
    </ul>
  )
}
