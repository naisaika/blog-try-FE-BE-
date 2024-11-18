"use client";

import { SHOPPING_BTN } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link'
import styles from "./AnchorLink.module.scss"
import { useAnchorLinkScroll } from '@/hooks/useAnchorLinkScroll';

interface AnchorLinkProps {
    lists: { id: number; anchorlink: string; title: string }[];
}

export const AnchorLink = ({lists}:AnchorLinkProps) => {

    useAnchorLinkScroll();

  return (
    <div>
        <div className={styles.contentsListContainer}>
            <h2 className={styles.contentsListTitle}>
                <div className={styles.imgContainer}>
                    <Image src="/aside/category-icon.png" alt="目次アイコン" width={20} height={20} priority></Image>
                </div>
                <span className={styles.title}>目次</span>
            </h2>
            <ul className={styles.contentsList}>
                {lists.map((list) => (
                <li key={list.id}>
                    <Link href={`#${list.anchorlink}`}>{list.title}</Link>
                </li>
                ))}
            </ul>
        </div>
        <div className={styles.shopContainer}>
            <Image src="/privacypolicy/book-img.webp" alt="書籍画像" width={110} height={157} priority className={styles.shopImg}></Image>
            <div className={styles.shopTitleContainer}>
                <p className={styles.shopTitle}>Notionで実現する新クリエイティブ仕事術　万能メモツールによる最高のインプット＆アウトプット（できるビジネス）</p>
                <small className={styles.titleDetail}>posted with ヨメレバ</small>
                <small className={styles.titleDetail}>村上臣　インプレス 2022年02月17日頃</small>
                <ul className={styles.shopList}>
                    {SHOPPING_BTN.map((btn) => (
                        <li key={btn.id} className={styles[`shopListItem${btn.id}`]}>
                            <Link href={btn.link} className={styles.shopListText}>{btn.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}