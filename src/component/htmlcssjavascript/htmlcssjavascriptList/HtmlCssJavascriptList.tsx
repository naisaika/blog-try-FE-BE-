import { getHtmlCssJavascriptData } from "@/app/api/htmlcssjavascript/route"
import Image from "next/image";
import styles from "./HtmlCssJavascriptList.module.scss"

export const HtmlCssJavascriptList = async() => {

    const htmlCssJavascriptData = await getHtmlCssJavascriptData();

  return (

        <div className={styles.articleList}>
            {htmlCssJavascriptData.map((data) => (
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
