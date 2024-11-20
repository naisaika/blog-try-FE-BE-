"use client";

import { useParams } from "next/navigation";
import { TagListType } from "@/data/type";
import styles from "./TagList.module.scss";
import Image from "next/image";
import { TAG_GETDATA_CONVERSION } from "@/data/data";

interface TagListProps {
  tagData: Record<string, TagListType[]>;
}

export const TagList: React.FC<TagListProps> = ({ tagData }) => {
  const { tagname } = useParams();

  // `tagname` が文字列の場合のみ処理
  const decodedPath = typeof tagname === "string" ? decodeURIComponent(tagname) : "";

  // `decodedPath` をマッピングで変換
  const tagKey = TAG_GETDATA_CONVERSION[decodedPath] || decodedPath;

  // `tagyKey` に基づいてデータをフィルタリング
  const filteredData = tagData[tagKey] || [];

  return (
    <div className={styles.articleList}>
      {filteredData.map((data) => (
        <article key={data.id} className={styles.articleItem}>
          <Image src={data.img} alt={`${tagKey}のサムネイル`} width={100} height={100} priority className={styles.articleImg}></Image>
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
  );
};
