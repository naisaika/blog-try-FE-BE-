import Image from "next/image"
import styles from "./TopPage.module.scss"
import SlickSlider from "../slickSlider/SlickSlider"

interface TopSubTitleType {
  id: number;
  title: string;
  text: string;
}

const TOP_SUBTITLE:TopSubTitleType[] = [
  { id: 0, title: "Notion", text: "ピックアップ記事"},
  { id: 1, title: "SANGO（WordPress）", text: "ピックアップ記事"},
  { id: 2, title: "Python", text: "ピックアップ記事"},
  { id: 3, title: "Category", text: "おすすめカテゴリー"},
  { id: 4, title: "Search", text: "ブログ内を検索"},
  { id: 5, title: "New", text: "新着記事"},
  { id: 6, title: "Ramdom", text: "ランダム"},
]

export const TopPage = () => {
  return (
    <section className={styles.section}>
        <div className={styles.topTitleSection}>
            <h1>雑学エンジニアブログ</h1>
            <p>
                機械系エンジニアが「雑多に学んだ」プログラミングネタを発信するブログ<br></br>
                Notion、SANGO（WordPress）、Pythonが中心
            </p>
            <input type="text" placeholder="キーワードを入力してください" className={styles.topSearchInput}></input>
            <Image src="/search-icon.png" alt="検索アイコン" width={25} height={25} priority className={styles.searchIcon}></Image>
        </div>
        <div className={styles.subSection}>
          {TOP_SUBTITLE.map((subtitle) => (
            <div key={subtitle.id}>
           {subtitle.id === 0 || subtitle.id === 1 || subtitle.id === 2 ? (
            <>
              <h2 className={styles.subTitle}>{subtitle.title}</h2>
              <p className={styles.subTitleText}>{subtitle.text}</p>
              <div className={styles.sliderSection}>
                <SlickSlider/>
              </div>
            </>
           ): (
            <>
              <h2>{subtitle.title}</h2>
              <p>{subtitle.text}</p>
            </>
           ) }
           </div>
          ))}
        </div>
    </section>
  )
}