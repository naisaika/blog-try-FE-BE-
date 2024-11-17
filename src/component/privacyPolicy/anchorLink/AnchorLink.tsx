"use client";

import { SHOPPING_BTN } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link'
import styles from "./AnchorLink.module.scss"

interface AnchorLinkProps {
    lists: { id: number; anchorlink: string; title: string }[];
}

export const AnchorLink = ({lists}:AnchorLinkProps) => {
  return (
    <div>
        <h2 className={styles.contentsListTitle}>
            <div className={styles.imgContainer}>
                <Image src="/aside/category-icon.png" alt="目次アイコン" width={20} height={20} priority></Image>
            </div>
            <span>目次</span>
        </h2>
        <ul>
            {lists.map((list) => (
            <li key={list.id}>
                <Link href={`#${list.anchorlink}`}>{list.title}</Link>
            </li>
            ))}
        </ul>
        <div></div>
        <div>
            <Image src="/privacypolicy/book-img.webp" alt="書籍画像" width={110} height={157} priority></Image>
            <div>
                <p>Notionで実現する新クリエイティブ仕事術　万能メモツールによる最高のインプット＆アウトプット（できるビジネス）</p>
                <p>posted with ヨメレバ</p>
                <p>村上臣　インプレス 2022年02月17日頃</p>
                <ul>
                    {SHOPPING_BTN.map((btn) => (
                        <li key={btn.id}>
                            <Link href={btn.link}>
                                <span></span>
                                <span>{btn.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}