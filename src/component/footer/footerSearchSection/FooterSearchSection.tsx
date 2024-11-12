"use client";

import Image from 'next/image'
import React, { useState, FormEvent } from 'react'
import styles from "./FooterSearchSection.module.scss"

export const FooterSearchSection = () => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = async(e:FormEvent) => {
        e.preventDefault();

        if(inputText === "") {
            return;
        }      

        try {
            const response = await fetch("api/search", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ keyword: inputText })
            });

            if(response.ok) {
                const data = await response.json();
                console.log("検索結果:", data);
                // dataを表示、またはstateに保存しUIに反映する処理を追加
                setInputText("");
            } else {
                console.error("検索に失敗しました。");
            }
        } catch(error) {
            console.error("エラーが発生しました:", error)
        }
    }

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
            type="text"
            name="keyword"
            value={inputText}
            placeholder="検索ワードを入力"
            className={styles.searchInput}
            onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" aria-label="検索" className={styles.searchIconBtn}>
            <Image
                src="/search-icon.png"
                alt="検索アイコン"
                width={20}
                height={20}
                priority
                className={styles.searchIcon}
            />
        </button>
    </form>
  )
}