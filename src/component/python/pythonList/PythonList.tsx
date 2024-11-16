import Image from "next/image";
import styles from "./PythonList.module.scss"
import { getPythonData } from "@/app/api/python/route";

export const PythonList = async() => {

    const pythonData = await getPythonData();

  return (
    <div className={styles.articleList}>
        {pythonData.map((data) => (
            <article key={data.id} className={styles.articleItem}>
                <Image src={data.img} alt="wordpress一覧サムネイル" width={100} height={100} priority className={styles.articleImg}></Image>
                <div className={styles.textContainer}>
                    <div className={styles.articleDateContainer}>
                        <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority></Image>
                        <span className={styles.articleDate}>{data.createdAt}</span>
                    </div>
                    <h2 className={styles.articleTitle}>{data.title.length > 40? `${data.title.slice(0, 40)}...`: data.title}</h2>
                </div>
            </article>
        ))}
    </div>
  )
}
