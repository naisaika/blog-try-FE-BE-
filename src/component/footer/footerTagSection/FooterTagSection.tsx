"use client";

import { useRouter } from "next/navigation";
import styles from "./FooterTagSection.module.scss";

interface FooterTagSectionProps {
    tagData: {
        id: number;
        text: string;
        count: number;
        url: string;
    }[]
}

export const FooterTagSection = ({tagData}:FooterTagSectionProps) => {

    const router = useRouter();

  return (
    <ul className={styles.tagList}>
      {tagData.map((list) => {

        return (
          <li
            key={list.id}
            className={styles.tagItem}
            onClick={() => router.push(`/tag/${list.url}`)}
          >
            {`#${list.text}`}
            <span className={styles.tagCount}>{`(${list.count})`}</span>
          </li>
        );
      })}
    </ul>
  )
}
