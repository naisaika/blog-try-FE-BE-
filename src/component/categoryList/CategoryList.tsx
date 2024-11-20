"use client";

import { CATEGORY_GETDATA_CONVERSION } from "@/data/data";
import { CategoryListType } from "@/data/type";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./CategoryList.module.scss"

interface CategoryListProps {
   categoryData: Record<string, CategoryListType[]>;
}

export const CategoryList= ({categoryData}:CategoryListProps) => {

  const { categoryname } = useParams();

  const decodedPath = typeof categoryname === "string" ? decodeURIComponent(categoryname) : "";

  const categoryKey = CATEGORY_GETDATA_CONVERSION[decodedPath] || decodedPath;

  const filteredData = categoryData[categoryKey] || [];

  return (
    <div className={styles.articleList}>
    {filteredData.map((data) => (
      <article key={data.id} className={styles.articleItem}>
        <Image src={data.img} alt={`${categoryKey}のサムネイル`} width={100} height={100} priority className={styles.articleImg}></Image>
        <div className={styles.textContainer}>
          <div className={styles.articleDateContainer}>
              <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority></Image>
              <span className={styles.articleDate}>{data.createdAt}</span>
          </div>
          <h2 className={styles.articleTitle}>{data.title.length > 50? `${data.title.slice(0, 50)}...`: data.title}</h2>
        </div>
      </article>
    ))}
  </div>
  )
}