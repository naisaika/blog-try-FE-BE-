"use client";

import Image from "next/image"
import styles from "./SearchInputSection.module.scss"
import { useState, FormEvent } from "react";

export const SearchInputSection = () => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = async(e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch ("/api/search", {
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
            placeholder="キーワードを入力してください" 
            className={styles.topSearchInput}
            onChange={(e) => setInputText(e.target.value)}>
        </input>
        <button type="submit" aria-label="検索" className={styles.submitBtn}>
            <Image src="/search-icon.png" alt="検索アイコン" width={25} height={25} priority></Image>
        </button>
    </form>
  )
}