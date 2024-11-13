"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BREADCRUMB_LABELS } from "@/data/data";
import styles from "./BreadCrumb.module.scss";

export const BreadCrumb = () => {

const pathname = usePathname();
const pathSegments = pathname.split("/").filter((segment) => segment); // 空のセグメントを除外

// categoryを含まないセグメントのリストを作成
const filteredPathSegments = pathSegments.filter(segment => segment !== "category");

return (
    <nav aria-label="パンくずリスト">
    <ol className={styles.breadCrumbList}>
        {/* ホームのリンク */}
        <li className={styles.breadCrumbItem}>
        <Link href="/" className={styles.breadCrumbLink}>
        <div className={styles.homeIconContainer}>
            <Image src="/home.svg" alt="ホームアイコン" width={24} height={20} priority className={styles.homeImg}/>
            <Image src="/home-hover.svg" alt="ホームアイコン" width={24} height={20} priority className={styles.homeImg__Hover}/>
        </div>

            <span className={styles.linkText}>ホーム</span>
        </Link>
        <span className={styles.triangle}></span>
        </li>

        {/* 各セグメントのリンク（categoryは除外） */}
        {filteredPathSegments.map((segment, index) => {
        // 各セグメントまでのパスを作成（categoryを含めたURL）
        const path = `/${pathSegments.slice(0, index + 2).join("/")}`; // index + 2 で `category` を含める

        // セグメントに対応するラベルを取得
        const label = BREADCRUMB_LABELS[segment] || (segment.charAt(0).toUpperCase() + segment.slice(1));

        // 最後のリンク（パンくずリストの末尾のリンク）かどうかをチェック
        const isLast = index === filteredPathSegments.length - 1;

        return (
            <li key={path} className={styles.breadCrumbItem}>
            {/* 最後のリンクでなければリンクとして表示 */}
            {!isLast ? (
                <Link href={path} className={styles.breadCrumbLink}>
                <span className={styles.linkText2}>{label}</span>
                </Link>
            ) : (
                <span className={styles.linkText__last}>{label}</span>
            )}
            {/* 最後のリンクでない場合は矢印（triangle）を表示 */}
            {!isLast && <span className={styles.triangle}></span>}
            </li>
        );
        })}
    </ol>
    </nav>
  );
};