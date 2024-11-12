import Image from "next/image"
import { FooterSearchSection } from "../footer/footerSearchSection/FooterSearchSection"
import styles from "./Aside.module.scss"
import { getCategoryData } from "@/app/api/footer/category/route"
import { getBlogMonthData } from "@/app/api/footer/blogmonth/route"
import { FooterProfileSection } from "../footer/footerProfileSection/FooterProfileSection"

export const Aside = async() => {

    const categoryData = await getCategoryData();
    const blogMonthData = await getBlogMonthData();

  return (
    <aside className={styles.asideSection}>
        <FooterSearchSection/>
        <div>
            <h3 className={styles.asideTitle}>
                <Image src="/aside/category-icon.png" alt="カテゴリーアイコン" width={20} height={16} priority></Image>
                カテゴリー
            </h3>
            <ul className={styles.categoryList}>
                {categoryData.map((data) => (
                    <li key={data.id} className={styles.categoryItem}>
                        <span>{data.text}</span> 
                        <span className={styles.count}>{data.count}</span>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className={styles.asideTitle}>
                <Image src="/aside/archive-icon.png" alt="カテゴリーアイコン" width={20} height={16} priority></Image>
                アーカイブ
            </h3>
            <label htmlFor="monthSelect-aside" className={styles.srOnly}>月を選択</label>
            <select id="monthSelect-aside" defaultValue="" className={styles.selectBox}>
                {blogMonthData.map((data) => (
                    <option value={data.value} key={data.id}>
                        {`${data.date} ${data.count? `(${data.count})` : ""}`}
                    </option>
                ))}
            </select>
        </div>
        <FooterProfileSection/>
    </aside>
  )
}