import { getWordPressData } from "@/app/api/wordpress/route"
import Image from "next/image";
import styles from "./WordPressList.module.scss"

export const WordPressList = async() => {

    const wordPressData = await getWordPressData();

  return (
    <div className={styles.articleList}>
        {wordPressData.map((data) => (
            <article key={data.id} className={styles.articleItem}>
                <Image src={data.img} alt="wordpress一覧サムネイル" width={100} height={100} priority className={styles.articleImg}></Image>
                <div className={styles.textContainer}>
                    <div className={styles.articleDateContainer}>
                        <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority></Image>
                        <span className={styles.articleDate}>{data.createdAt}</span>
                    </div>
                    <h2 className={styles.articleTitle}>{data.title}</h2>
                </div>
            </article>
        ))}
    </div>
  )
}

