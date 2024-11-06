"use client";

import Image from "next/image"
import styles from "./NewSectionChange.module.scss"
import { useState } from "react";

interface listType {
    id: number;
    title: string;
    imgOn: string;
    imgOff: string;
}

const TAB_LISTS: listType[] = [
    { id: 0, title: "NEW", imgOn: "/top/new/newicon-on.png", imgOff: "/top/new/newicon-off.png" },
    { id: 1, title: "POPULAR", imgOn: "/top/popular/popularicon-on.png", imgOff: "/top/popular/popularicon-off.png" },
];


export const NewSectionChange = () => {

    const [listClicked, setListClicked] = useState("NEW")

    const listChange = (title: string) => {
        setListClicked(title)
    }

  return (
    <ul className={styles.selectList}>
        {TAB_LISTS.map((list) => {

            const img = listChecked === list.title? imgOn : imgOff;

            return (
                <li key={list.id} className={`${styles.selectItem} ${listClicked === list.title? styles.clicked: ""}`} onClick={() => listChange(list.title)}>

                <Image src={list.img} alt="new選択アイコン" width={list.id === 0? 13 : 18} height={list.id === 1? 16 : 18} priority></Image>
                <span className={styles.listText}>{list.title}</span>
        </li>
            )

    })}
  </ul>
  )
}
