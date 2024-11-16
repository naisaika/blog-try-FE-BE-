"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import styles from "./SecondPostList.module.scss"
import { NewPostsType } from "@/data/type";

export const SecondPostList = () => {
  const { slug } = useParams();
  const router = useRouter();

  const [newPostData, setNewPostData] = useState<NewPostsType[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const limit = 20;
  const currentPage = Number(slug) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/newposts?page=${currentPage}&limit=${limit}`);
        const { posts, totalCount } = await response.json();
        setNewPostData(posts);
        setTotalCount(totalCount);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      }
    };
    fetchData();
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      if (newPage === 1) {
        router.push(`/new-posts`);
      } else {
        router.push(`/new-posts/page/${newPage}`);
      }
    }
  };

  return (
    <div>
      <div className={styles.articleList}>
        {newPostData.map((data) => (
          <article key={data.id} className={styles.articleItem}>
            <Image
              src={data.img}
              alt="新規記事一覧サムネイル"
              width={100}
              height={100}
              priority
              className={styles.articleImg}
            />
            <div className={styles.textContainer}>
              <div className={styles.articleDateContainer}>
                <Image src="/update-icon.png" alt="更新アイコン" width={20} height={14} priority />
                <span className={styles.articleDate}>{data.createdAt}</span>
              </div>
              <h2 className={styles.articleTitle}>{data.title}</h2>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.pagination}>
         <button type="button" aria-label="前へ戻る"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`${styles.backBtn} ${currentPage === 1 ? styles.hidden : ""}`}
        >
          <Image src="/back-icon.svg" alt="前へアイコン" width={18} height={18} priority />
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button type="button" aria-label="ページネーション"
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activePage : ""}`}
          >
            {i + 1}
          </button>
        ))}
        <button type="button" aria-label="前へ進む"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`${styles.nextBtn} ${currentPage === totalPages ? styles.hidden : ""}`}
        >
          <Image src="/next-icon.svg" alt="次へアイコン" width={18} height={18} priority />
        </button>
      </div>
    </div>
  );
};