import { getPopularData } from "@/app/api/popular/route"
import Image from "next/image";
import styles from "./PopularList.module.scss"

export const PopularList = async() => {

  const popularData = await getPopularData();

  return (
    <div className={styles.articleList}>
      {popularData.map((data) => (
        <article key={data.id} className={styles.articleItem}>
          <Image
            src={data.img}
            alt="新規記事一覧サムネイル"
            width={100}
            height={100}
            priority
            className={styles.articleImg}
          />
          <div className={styles.textContainer}>
            <div className={styles.articleDateContainer}>
              <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority />
              <span className={styles.articleDate}>{data.createdAt}</span>
            </div>
            <h2 className={styles.articleTitle}>{data.title.length > 34? `${data.title.slice(0, 34)}...`: data.title}</h2>
          </div>
        </article>
      ))}
    </div>
  )
}