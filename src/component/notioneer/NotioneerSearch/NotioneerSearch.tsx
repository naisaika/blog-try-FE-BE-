"use client";

import Image from "next/image"
import styles from "./NotioneerSearch.module.scss"
import { FormEvent, useState } from "react";

export const NotioneerSearch = () => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = async(e:FormEvent) => {
    e.preventDefault();
    
    if(inputText === "") {
      return;
    }

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "content-type": "json-application"
        },
        body: JSON.stringify({ keyword: inputText })
      });

      if(response.ok) {
        const data = response.json();
        console.log("検索結果:", data)
      } else {
        console.error("検索に失敗しました。")
      }
    } catch(error) {
      console.error("エラーが発生しました:", error)
    }
  }

  return (
    <div className={styles.notioneerSearchSection}>
        <p className={styles.searchTitleContainer}>
            <span className={styles.titleDecolation}>＼</span>
            <span className={styles.title}>気になるキーワードで検索</span>
            <span className={styles.titleDecolation}>／</span>
        </p>
        <form onSubmit={handleSubmit} className={styles.inputContainer}>
            <input 
            type="text" 
            name="keyword"
            value={inputText}
            placeholder="キーワードで検索" 
            className={styles.searchInput}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" aria-label="検索" className={styles.searchIcon}>
            <Image src="/search-icon-black.png" alt="検索アイコン" width={25} height={25} priority></Image>
          </button>
        </form>
        <div className={styles.popularWordsContainer}>
            <p>人気のキーワード:</p>
            <p className={styles.tagContainer}>
                <span className={styles.tag}>Notion 使い方</span>
                <span className={styles.tag}>Notion テンプレート</span>
            </p>
        </div>
    </div>
  )
}