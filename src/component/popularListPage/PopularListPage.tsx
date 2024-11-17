import { BreadCrumb } from "../breadCrumb/BreadCrumb"
import { PopularList } from "./popularList/PopularList"
import styles from "./PoplarListPage.module.scss"
import { SnsShare } from "../snsShare/SnsShare"

export const PopularListPage = () => {
  return (
    <div className={styles.popularListSection}>
        <BreadCrumb/>
        <h1 className={styles.popularListTitle}>人気記事20件</h1>
        <PopularList/>
        <SnsShare/>
    </div>
  )
}