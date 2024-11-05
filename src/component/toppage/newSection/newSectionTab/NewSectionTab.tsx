"use client";

import Image from "next/image"
import styles from "./NewSectionTab.module.scss"

interface NewSectionTabProps {
    onClick: (title: string) => void;
    listClicked: string;
}

interface ListType {
    id: number;
    title: string;
    imgOn: string;
    imgOff: string;
}

const TAB_LISTS: ListType[] = [
    { id: 0, title: "NEW", imgOn: "/top/new/newicon-on.png", imgOff: "/top/new/newicon-off.png" },
    { id: 1, title: "POPULAR", imgOn: "/top/popular/popularicon-on.png", imgOff: "/top/popular/popularicon-off.png" },
];

export const NewSectionTab = ({onClick, listClicked}:NewSectionTabProps) => {
    
  return (
    <ul className={styles.selectList}>
        {TAB_LISTS.map((list) => {

            const img = listClicked === list.title? list.imgOn : list.imgOff;

            return (
                <li 
                    key={list.id} 
                    className={`${styles.selectItem} ${listClicked === list.title? styles.clicked: ""}`} 
                    onClick={() => onClick(list.title)}>
                    <Image src={img} alt="new選択アイコン" width={list.id === 0? 13 : 18} height={list.id === 1? 16 : 18} priority></Image>
                    <span className={styles.listText}>{list.title}</span>
                </li>
            )
        })}
    </ul>
  )
}
