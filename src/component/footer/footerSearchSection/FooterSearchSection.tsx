"use client";

import Image from 'next/image'
import styles from "./FooterSearchSection.module.scss"
import { useSearchKeyword } from '@/hooks/useSearchKeyword';

export const FooterSearchSection = () => {

    const {inputText, searchResult, onChangeInput, handleSubmit} = useSearchKeyword();

  return (
    <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <input
            type="text"
            name="keyword"
            value={inputText}
            placeholder="検索ワードを入力"
            className={styles.searchInput}
            onChange={onChangeInput}
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