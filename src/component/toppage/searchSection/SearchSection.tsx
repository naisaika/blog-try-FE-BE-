"use client";

import Image from "next/image"
import styles from "./SearchSection.module.scss"
import { useState, FormEvent } from "react";

export const SearchSection = () => {

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
                    "content-type" : "json-application"
                },
                body: JSON.stringify({ keyword: inputText })
            })

            if(response.ok) {
                const data = response.json();
                console.log("検索結果:", data) 

                setInputText("");
            } else {
                console.error("検索に失敗しました。")
            }

        } catch (error) {
            console.error("エラーが発生しました:", error);
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
        >
        </input>
        <button aria-label="検索" className={styles.searchIconContainer}>
            <Image 
                src="/search-icon.png" alt="検索アイコン" 
                width={25} height={25} priority 
                className={styles.searchIcon}>
            </Image>
        </button>
    </form>
  )
}
