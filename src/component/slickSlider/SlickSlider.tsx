"use client";

import { useEffect, useState } from "react";
import { getSliderData } from "@/app/api/route";
import Image from "next/image";
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderImgType } from "@/data/type";
import styles from "./SlickSlider.module.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SlickSlider() {
  const settings = {
    autoplay: true,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    onInit: () => {
      const dots = document.querySelectorAll('.slick-dots li');
      dots.forEach(dot => {
        const htmlDot = dot as HTMLElement; 
        htmlDot.style.margin = '0 16px';
        htmlDot.style.bottom = '-30px';
      });
    },
  };

  const [images, setImages] = useState<SliderImgType[]>([]);
  const [titles, setTitles] = useState<SliderImgType[]>([])
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSliderData();
        setImages(data);
        setTitles(data);
      } catch (error) {
        console.error("Error fetching slider data:", error);
        setError("データの取得に失敗しました。");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  if (!titles || titles.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <Slider {...settings}>
      {images.map((img) => {
        
        const titleText = titles.find((title) => title.id === img.id)

        return (
          <div key={img.id} className={styles.slideContainer}>
            <Image src={img.img} alt={`slider画像${img.id}`} width={280} height={162} className={styles.slideImg}/>
            <p className={styles.slideText}>{titleText?.title}</p>
          </div>
        )})}
    </Slider>
  );
}