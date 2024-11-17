import { getArduinoData } from "@/app/api/arduino/route";
import Image from "next/image";
import styles from "./Arduino.module.scss"

export const ArduinoList = async() => {
    const arduinoData = await getArduinoData();

    return (
      <div className={styles.articleList}>
          {arduinoData.map((data) => (
              <article key={data.id} className={styles.articleItem}>
                  <Image src={data.img} alt="wordpress一覧サムネイル" width={100} height={100} priority className={styles.articleImg}></Image>
                  <div className={styles.textContainer}>
                      <div className={styles.articleDateContainer}>
                          <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority></Image>
                          <span className={styles.articleDate}>{data.createdAt}</span>
                      </div>
                      <h2 className={styles.articleTitle}>{data.title.length > 34? `${data.title.slice(0, 34)}...`: data.title}</h2>
                  </div>
              </article>
          ))}
      </div>
    )
}