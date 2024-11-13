"use client";

import Image from "next/image"
import styles from "./SearchInputSection.module.scss"
import { useSearchKeyword } from "@/hooks/useSearchKeyword";

export const SearchInputSection = () => {

    const {inputText, searchResult, onChangeInput, handleSubmit} = useSearchKeyword();

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input 
            type="text" 
            name="keyword"
            value={inputText}
            placeholder="キーワードを入力してください" 
            className={styles.topSearchInput}
            onChange={onChangeInput}>
        </input>
        <button type="submit" aria-label="検索" className={styles.submitBtn}>
            <Image src="/search-icon.png" alt="検索アイコン" width={25} height={25} priority></Image>
        </button>
    </form>
  )
}