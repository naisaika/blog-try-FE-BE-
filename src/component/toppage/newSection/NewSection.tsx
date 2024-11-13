"use client";

import styles from "./NewSection.module.scss"
import { NewSectionTab } from './newSectionTab/NewSectionTab'
import { NewSectionList } from "./newSectionList/NewSectionList";
import { useState } from "react";
import { TopDataType } from "../../../data/type";
import Image from "next/image";
import Link from "next/link";

interface NewSectionProps {
  newData: TopDataType[];
  popularData: TopDataType[];
}

interface BtnType {
  id: number;
  img: string;
  text: string;
  type: string;
}

const BUTTON:BtnType[] = [
  {id: 0, img: "/arrow-icon.png", text: "最新記事一覧", type: "NEW"},
  {id: 1, img: "/arrow-icon.png", text: "人気記事一覧", type: "POPULAR"},
]


export const NewSection = ({ newData, popularData }: NewSectionProps) => {

  const [listClicked, setListClicked] = useState("NEW")

  const listChange = (title: string) => {
    setListClicked(title)
  }

  return (
    <div className={styles.newContainer}>
      <NewSectionTab onClick={listChange} listClicked={listClicked}/>
      <NewSectionList clickTitle={listClicked} newData={newData} popularData={popularData}/>
      {BUTTON.map((btn) => (
        listClicked === btn.type? (
          <Link key={btn.id} href="/new-posts" className={styles.newBtn}>
            <Image src={btn.img} alt="ボタンアイコン" width={10} height={16} priority />
            <span className={styles.newBtnText}>{btn.text}</span>
          </Link>
        ):null
      ))}
    </div>
  )
}