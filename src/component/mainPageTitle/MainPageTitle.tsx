"use client";

import { usePathname } from "next/navigation";
import { BreadCrumb } from "../breadCrumb/BreadCrumb";
import styles from "./MainPageTitle.module.scss"
import { BREADCRUMB_LABELS } from "@/data/data"

export const MainPageTitle = () => {

  const pathname = usePathname();

  const decodedPath = decodeURIComponent(pathname); // パス全体をデコード
  const pathSegments = decodedPath.split("/").filter(segment => segment); // 空のセグメントを除外
  const lastSegment = pathSegments[pathSegments.length - 1]; // 最後のセグメントを取得
  const title = BREADCRUMB_LABELS[lastSegment] || lastSegment;

  return (
    <div className={styles.pageTitleSection}>
      <BreadCrumb/>
      <h1>{`「${title}」の記事一覧`}</h1>
    </div>
  )
}