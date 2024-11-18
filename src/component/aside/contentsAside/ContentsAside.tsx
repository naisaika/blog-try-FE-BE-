import Image from "next/image"
import styles from "./ContentsAside.module.scss"
import { getCategoryData } from "@/app/api/footer/category/route"
import { getBlogMonthData } from "@/app/api/footer/blogmonth/route"
import Link from "next/link"
import { FooterProfileSection } from "@/component/footer/footerProfileSection/FooterProfileSection"
import { FooterSearchSection } from "@/component/footer/footerSearchSection/FooterSearchSection"
import { AsideContntsList } from "./asideContentsList/AsideContntsList"

export const ContentsAside = async() => {

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
                    <li key={data.id}>
                        <Link  href={data.link} className={styles.categoryItem}>
                            <span>{data.text}</span> 
                            <span className={styles.count}>{data.count}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className={styles.archiveContainer}>
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
        <AsideContntsList/>
    </aside>
  )
}