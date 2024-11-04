import Image from "next/image"
import styles from "./TopPage.module.scss"
import SlickSlider from "../slickSlider/SlickSlider"
import { CategorySection } from "./categorySection/CategorySection";
import { NewSection } from "./newSection/NewSection";

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
    <section className={styles.TopSection}>
        <div className={styles.topTitleSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>雑学エンジニアブログ</h1>
            <p className={styles.titleDesctiption}>
                機械系エンジニアが「雑多に学んだ」プログラミングネタを発信するブログ<br></br>
                Notion、SANGO（WordPress）、Pythonが中心
            </p>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="キーワードを入力してください" className={styles.topSearchInput}></input>
              <Image src="/search-icon.png" alt="検索アイコン" width={25} height={25} priority className={styles.searchIcon}></Image>
            </div>
          </div>
        </div>
        <div className={styles.subSection}>
          <div className={styles.sliderSection}>
            {TOP_SUBTITLE.filter(subtitle => subtitle.id === 0 || subtitle.id === 1 || subtitle.id === 2)
              .map((subtitle) => (
                <div key={subtitle.id} className={styles.sliderContainer}>
                  <h2 className={styles.subTitle}>{subtitle.title}</h2>
                  <p className={styles.subTitleText}>{subtitle.text}</p>
                  <div className={styles.sliderSection}>
                    <SlickSlider category={
                      subtitle.id === 0 ? "notion" : subtitle.id === 1 ? "sango" : "python"
                    } />
                  </div>
                </div>
              ))}
          </div>
          <div className={styles.categorySection}>
            {TOP_SUBTITLE.filter(subtitle => subtitle.id === 3).map((subtitle) => (
              <div key={subtitle.id} >
                  <div className={styles.categoryWrapper}>
                    <h2 className={styles.subTitle}>{subtitle.title}</h2>
                    <p className={styles.subTitleText}>{subtitle.text}</p>
                    <CategorySection/>
                  </div>
              </div>
            ))}
          </div>
          <div className={styles.searchSection}>
            {TOP_SUBTITLE.filter(subtitle => subtitle.id === 4).map((subtitle) => (
              <div key={subtitle.id} >
                  <div className={styles.searchWrapper}>
                    <h2 className={styles.subTitle}>{subtitle.title}</h2>
                    <p className={styles.subTitleText}>{subtitle.text}</p>
                    <div className={styles.inputContainer}>
                      <input type="text" placeholder="検索ワードを入力" className={styles.searchInput}></input>
                      <span className={styles.searchIconContainer}>
                        <Image 
                          src="/search-icon.png" alt="検索アイコン" 
                          width={25} height={25} priority 
                          className={styles.searchIcon}>
                        </Image>
                      </span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
          <div className={styles.newSection}>
            {TOP_SUBTITLE.filter(subtitle => subtitle.id === 5).map((subtitle) => (
              <div key={subtitle.id} >
                  <div className={styles.searchWrapper}>
                    <h2 className={styles.subTitle}>{subtitle.title}</h2>
                    <p className={styles.subTitleText}>{subtitle.text}</p>
                    <NewSection/>
                  </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}