import CommonLayout from "@/component/layout/commonLayout/CommonLayout"
import NotioneerSlider from "@/component/notioneer/notioneerSlider/NotioneerSlider"
// import Image from "next/image"
import Link from "next/link"
import styles from "./Notionner.module.scss"

const Notioneer = () => {
  return (
    <CommonLayout>
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
            <h2>New Posts</h2>
          </div>
        </section>
    </CommonLayout>
  )
}

export default Notioneer