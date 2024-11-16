import { BreadCrumb } from "../breadCrumb/BreadCrumb"
import { PopularList } from "./popularList/PopularList"
import styles from "./PoplarList.module.scss"
import { SNS_LISTS } from "@/data/data"
import Image from "next/image"

export const PopularListPage = () => {
  return (
    <div className={styles.popularListSection}>
        <BreadCrumb/>
        <h1 className={styles.popularListTitle}>人気記事20件</h1>
        <PopularList/>
        <div className={styles.shareContainer}>
            <p className={styles.shareTitle}>＼ SHARE ／</p>
            <ul className={styles.shareList}>
                {SNS_LISTS.map((sns) => (
                    <li key={sns.id} className={styles.snsListItem}>
                        <Image src={sns.img} alt="SNSアイコン" width={sns.width} height={sns.height} priority/>
                        <p className={styles.snsText}>{sns.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}