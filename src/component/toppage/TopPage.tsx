// import styles from "./TopPage.module.scss"
// import SlickSlider from "../slickSlider/SlickSlider"
// import { CategorySection } from "./categorySection/CategorySection";
// import { NewSection } from "./newSection/NewSection";
// import { Ramdom } from "./ramdomSection/Ramdom";
// import { getNewData } from "@/app/api/top/new/route";
// import { getPopularData } from "@/app/api/top/popular/route";
// import { getRamdomData } from "@/app/api/top/ramdom/route";
// import { SearchInputSection } from "./searchInputSection/SearchInputSection";
// import { SearchSection } from "./searchSection/SearchSection";

// interface TopSubTitleType {
//   id: number;
//   title: string;
//   text: string;
// }

// const TOP_SUBTITLE:TopSubTitleType[] = [
//   { id: 0, title: "Notion", text: "ピックアップ記事"},
//   { id: 1, title: "SANGO（WordPress）", text: "ピックアップ記事"},
//   { id: 2, title: "Python", text: "ピックアップ記事"},
//   { id: 3, title: "Category", text: "おすすめカテゴリー"},
//   { id: 4, title: "Search", text: "ブログ内を検索"},
//   { id: 5, title: "New", text: "新着記事"},
//   { id: 6, title: "Ramdom", text: "ランダム"},
// ]

// export const TopPage = async () => {

//   const newData = await getNewData();
//   const popularData = await getPopularData();
//   const ramdomData = await getRamdomData();

//   return (
//     <section className={styles.TopSection}>
//         <div className={styles.topTitleSection}>
//           <div className={styles.titleWrapper}>
//             <h1 className={styles.title}>雑学エンジニアブログ</h1>
//             <p className={styles.titleDesctiption}>
//                 機械系エンジニアが「雑多に学んだ」プログラミングネタを発信するブログ<br></br>
//                 Notion、SANGO（WordPress）、Pythonが中心
//             </p>
//             <SearchInputSection/>
//           </div>
//         </div>
//         <div className={styles.subSection}>
//           <div className={styles.sliderSection}>
//             {TOP_SUBTITLE.filter(subtitle => subtitle.id === 0 || subtitle.id === 1 || subtitle.id === 2)
//               .map((subtitle) => (
//                 <div key={subtitle.id} className={styles.sliderContainer}>
//                   <h2 className={styles.subTitle}>{subtitle.title}</h2>
//                   <p className={styles.subTitleText}>{subtitle.text}</p>
//                   <div className={styles.sliderSection}>
//                     <SlickSlider category={
//                       subtitle.id === 0 ? "notion" : subtitle.id === 1 ? "sango" : "python"
//                     } />
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <div className={styles.categorySection}>
//             {TOP_SUBTITLE.filter(subtitle => subtitle.id === 3).map((subtitle) => (
//               <div key={subtitle.id} >
//                   <div className={styles.categoryWrapper}>
//                     <h2 className={styles.subTitle}>{subtitle.title}</h2>
//                     <p className={styles.subTitleText}>{subtitle.text}</p>
//                     <CategorySection/>
//                   </div>
//               </div>
//             ))}
//           </div>
//           <div className={styles.searchSection}>
//             {TOP_SUBTITLE.filter(subtitle => subtitle.id === 4).map((subtitle) => (
//               <div className={styles.searchWrapper} key={subtitle.id}>
//                 <h2 className={styles.subTitle}>{subtitle.title}</h2>
//                 <p className={styles.subTitleText}>{subtitle.text}</p>
//                 <SearchSection/>
//               </div>
//             ))}
//           </div>
//           <div className={styles.newSection}>
//             <div className={styles.newSectionWrapper}>
//               {TOP_SUBTITLE.filter(subtitle => subtitle.id === 5).map((subtitle) => (
//                 <div key={subtitle.id} >
//                     <div className={styles.searchWrapper}>
//                       <h2 className={styles.subTitle}>{subtitle.title}</h2>
//                       <p className={styles.subTitleText}>{subtitle.text}</p>
//                       <NewSection newData={newData} popularData={popularData}/>
//                     </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className={styles.ramdomSection}>
//             <div className={styles.ramdomSectionWrapper}>
//               {TOP_SUBTITLE.filter(subtitle => subtitle.id === 6).map((subtitle) => (
//                 <div key={subtitle.id} >
//                     <div className={styles.searchWrapper}>
//                       <h2 className={styles.subTitle}>{subtitle.title}</h2>
//                       <p className={styles.subTitleText}>{subtitle.text}</p>
//                       <Ramdom ramdomData={ramdomData}/>
//                     </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//     </section>
//   )
// }

"use client";

import styles from "./TopPage.module.scss"
import SlickSlider from "../slickSlider/SlickSlider"
import { CategorySection } from "./categorySection/CategorySection";
import { NewSection } from "./newSection/NewSection";
import { Ramdom } from "./ramdomSection/Ramdom";
import { getNewData } from "@/app/api/top/new/route";
import { getPopularData } from "@/app/api/top/popular/route";
import { getRamdomData } from "@/app/api/top/ramdom/route";
import { SearchInputSection } from "./searchInputSection/SearchInputSection";
import { SearchSection } from "./searchSection/SearchSection";
import useSetScrollPosition from "@/hooks/useSetScrollPosition";
import { useState, useEffect } from "react";
import { TopDataType } from "@/data/type";


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

export const TopPage =  () => {

  useSetScrollPosition();

  const [newData, setNewData] = useState<TopDataType[]>([]);
  const [popularData, setPopularData] = useState<TopDataType[]>([]);
  const [ramdomData, setRamdomData] = useState<TopDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [newData, popularData, ramdomData] = await Promise.all([
          getNewData(),
          getPopularData(),
          getRamdomData(),
        ]);
        setNewData(newData);
        setPopularData(popularData);
        setRamdomData(ramdomData);
      } catch (error) {
        console.error("データ取得エラー:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <section className={styles.TopSection}>
        <div className={styles.topTitleSection}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>雑学エンジニアブログ</h1>
            <p className={styles.titleDesctiption}>
                機械系エンジニアが「雑多に学んだ」プログラミングネタを発信するブログ<br></br>
                Notion、SANGO（WordPress）、Pythonが中心
            </p>
            <SearchInputSection/>
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
              <div className={styles.searchWrapper} key={subtitle.id}>
                <h2 className={styles.subTitle}>{subtitle.title}</h2>
                <p className={styles.subTitleText}>{subtitle.text}</p>
                <SearchSection/>
              </div>
            ))}
          </div>
          <div className={styles.newSection}>
            <div className={styles.newSectionWrapper}>
              {TOP_SUBTITLE.filter(subtitle => subtitle.id === 5).map((subtitle) => (
                <div key={subtitle.id} >
                    <div className={styles.searchWrapper}>
                      <h2 className={styles.subTitle}>{subtitle.title}</h2>
                      <p className={styles.subTitleText}>{subtitle.text}</p>
                      <NewSection newData={newData} popularData={popularData}/>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.ramdomSection}>
            <div className={styles.ramdomSectionWrapper}>
              {TOP_SUBTITLE.filter(subtitle => subtitle.id === 6).map((subtitle) => (
                <div key={subtitle.id} >
                    <div className={styles.searchWrapper}>
                      <h2 className={styles.subTitle}>{subtitle.title}</h2>
                      <p className={styles.subTitleText}>{subtitle.text}</p>
                      <Ramdom ramdomData={ramdomData}/>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  )
}