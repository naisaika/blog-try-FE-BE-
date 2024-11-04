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

interface SlickSliderProps {
  category: string;
}

export default function SlickSlider({category}:SlickSliderProps) {
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
        htmlDot.style.bottom = '-20px';
      });
    },
  };

  const [images, setImages] = useState<SliderImgType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSliderData();

        if(category === "notion") {
          setImages(data.notion)
        } else if (category === "sango") {
          setImages(data.sango)
        } else {
          setImages(data.python)
        }

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

  return (
    <Slider {...settings}>
      {images.map((img) => (
        <div key={img.id} className={styles.slideContainer}>
          <Image src={img.img} alt={`slider画像${img.id}`} width={280} height={162} className={styles.slideImg}/>
          <p className={styles.slideText}>{img.title}</p>
        </div>
      ))}
    </Slider>
  );
}