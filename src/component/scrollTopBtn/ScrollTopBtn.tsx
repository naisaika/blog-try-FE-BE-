"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollTopBtn.module.scss"

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

export const ScrollTopBtn = () => {

    const [isviewBtn, setIsViewBtn] = useState(false);
    const scrollBtnRef = useRef(null);

    const viewBtn = () => {
        const pageHeight = document.documentElement.scrollHeight;
        const btnViewPosition = pageHeight * 0.1;
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition > btnViewPosition) {
          setIsViewBtn(true);
        } else {
          setIsViewBtn(false);
        }
      };

      useEffect (() => {
        window.addEventListener("scroll", viewBtn);
        return () => window.removeEventListener("scroll", viewBtn);
      }, []);

  return (
    <div className={`${styles.scrollTopBtn} ${isviewBtn? styles.isVeiwBtn: ""}`}
        onClick={scrollTop} onChange={viewBtn} ref={scrollBtnRef}>
        <span className={styles.btnMark}></span>
    </div>
  )
}
