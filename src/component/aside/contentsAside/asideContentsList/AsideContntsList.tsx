"use client";

import { PRIVACY_POLICY_CONTENTS_LISTS } from "@/data/data"
import styles from "./AsideContentsList.module.scss"
import { useAnchorLinkScroll } from "@/hooks/useAnchorLinkScroll";
import Link from "next/link";
import { useEffect, useState } from "react";

export const AsideContntsList = () => {

    const [activeSection, setActiveSection] = useState<string | null>(null);
    
    useEffect(() => {
        const ovserveInterSecction = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }
        const observer = new IntersectionObserver(ovserveInterSecction, {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
        });

        PRIVACY_POLICY_CONTENTS_LISTS.forEach((list) => {
            const section = document.getElementById(list.anchorlink);
            if (section) {
              observer.observe(section);
            }
        });

        return () => observer.disconnect();
    },[])

    useAnchorLinkScroll();

  return (
    <div>
        <h3 className={styles.contentsListTitle}>目次</h3>
        <ul className={styles.contentsList}>
        {PRIVACY_POLICY_CONTENTS_LISTS.map((list) => (
            <li key={list.id} 
                className={`${styles.contentsListItem} 
                ${activeSection === list.anchorlink ? styles.active : ""}`}>
                <Link href={`#${list.anchorlink}`}>{list.title}</Link>
            </li>
        ))}
        </ul>
    </div>
  )
}