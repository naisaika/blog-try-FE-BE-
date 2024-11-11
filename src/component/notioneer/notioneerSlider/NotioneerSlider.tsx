"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { TopDataType } from "@/data/type";
import styles from "./NotioneerSlider.module.scss";
import { getNotioneerSlideData } from "@/app/api/notioneer/slider/route";

export default function NotioneerSlider() {
  const [images, setImages] = useState<TopDataType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const slidesPerSection = 4; // 一度に表示するスライド数

  const totalSections = Math.ceil(images.length / slidesPerSection);

  const nextSection = useCallback(() => {
    setCurrentSection((prev) => (prev === totalSections - 1 ? 0 : prev + 1));
  }, [totalSections]); // totalSections が変わったときのみ再計算

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNotioneerSlideData();
        setImages(data);
      } catch (error) {
        console.error("Error fetching top data:", error);
        setError("データの取得に失敗しました。");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSection();
    }, 3000);
  
    return () => clearInterval(interval);
  }, [currentSection, nextSection]); // nextSection を依存配列に追加

  if (error) {
    return <div>{error}</div>;
  }

  if (images.length === 0) {
    return <div>Loading...</div>;
  }

  const prevSection = () => {
    setCurrentSection((prev) => (prev === 0 ? totalSections - 1 : prev - 1));
  };

  const getSectionImages = () => {
    const startIndex = currentSection * slidesPerSection;
    const endIndex = startIndex + slidesPerSection;
  
  // メインのスライドを取得します
  const mainSlides = [];
  
  for (let i = 0; i < slidesPerSection; i++) {
    // ループしてインデックスを配列の長さで割ってループさせる
    mainSlides.push(images[(startIndex + i) % images.length]);
  }
  
    // 左端のスライドを取得します（前ページの最後のスライド）
    const leftEdge = images[(startIndex - 1 + images.length) % images.length];
  
    // 右端のスライドを取得します（次ページの最初のスライド）
    const rightEdge = images[(endIndex % images.length)];
  
    // スライドの順序を返します：[左見切れスライド, メインスライド4つ, 右見切れスライド]
    return [leftEdge, ...mainSlides, rightEdge];
  };

  return (
    <div className={styles.sliderSection}>
      <div className={styles.sliderContainer}>
        <div role-type="button" onClick={prevSection} className={styles.prevButton}></div>
        <div className={styles.carouselTrack}>
          {getSectionImages().map((img, index) => (
            <div
              key={`${img.id}-${currentSection}-${index}`} // img.idが存在しない場合はindexでキーを設定
              className={`${styles.slide} ${index === 0 || index === getSectionImages().length - 1 ? styles.partialSlide : ""}`}
            >
              <Image src={img.img} alt={`slider画像${img.id}`} 
                width={200} height={115} priority className={styles.slideImg}/>
              <p className={styles.slideText}>{img.title}</p>
            </div>
          ))}
        </div>
        <div role-type="button" onClick={nextSection} className={styles.nextButton}></div>
      </div>
      <ul className={styles.pagination}>
        {Array.from({ length: totalSections }).map((_, index) => (
          <li
            key={index}
            className={`${styles.dot} ${index === currentSection ? styles.active : ""}`}
            onClick={() => setCurrentSection(index)} // クリックでそのセクションに移動
          />
        ))}
      </ul>
    </div>
  );
}
