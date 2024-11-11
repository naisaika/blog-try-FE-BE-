import NotioneerSlider from "@/component/notioneer/notioneerSlider/NotioneerSlider"
import Link from "next/link"
import styles from "./Notionner.module.scss"
import { NewPosts } from "@/component/notioneer/newPosts/NewPosts"
import NotioneerLayout from "@/component/layout/notioneerLayout/NotioneerLayout"

const Notioneer = () => {
  return (
    <NotioneerLayout>
        <section>
          <div className={styles.notioneerTitleSection}>
            <h1 className={styles.notioneerTitle}>Notioneer!!</h1>
            <p className={styles.notioneerText}>Notion を好きな人が Notion の情報を発信します</p>
            <Link href="#" className={styles.useNotioneerLink}>Notionを使ってみる
            </Link>
          </div>
          <div className={styles.sliderSection}>
            <NotioneerSlider/>
          </div>
          <div>
            <NewPosts/>
          </div>
        </section>
    </NotioneerLayout>
  )
}

export default Notioneer