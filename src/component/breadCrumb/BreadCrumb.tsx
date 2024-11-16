"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BREADCRUMB_LABELS } from "@/data/data";
import styles from "./BreadCrumb.module.scss";

export const BreadCrumb = () => {

const allPathname = usePathname();
const eachPathName = allPathname.split("/").filter((pathname) => pathname); // 空のセグメントを除外
const exceptCategoryPath = eachPathName.filter(pathname => pathname !== "category");
const exceptLastPath = exceptCategoryPath.slice(0, -1);

return (
    <nav aria-label="パンくずリスト">
        <ol className={styles.breadCrumbList}>
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
            {exceptLastPath.map((pathname, index) => {
                const path = `/${eachPathName.slice(0, index + 2).join("/")}`;
                const label = BREADCRUMB_LABELS[pathname] || (pathname.charAt(0).toUpperCase() + pathname.slice(1));

                return (
                    <li key={path} className={styles.breadCrumbItem}>
                        <Link href={path} className={styles.breadCrumbLink}>
                            <span className={styles.linkText2}>{label}</span>
                        </Link>
                        <span className={styles.triangle}></span>
                    </li>
                );
            })}
        </ol>
    </nav>
  );
};