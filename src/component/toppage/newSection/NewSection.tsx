"use client";

import styles from "./NewSection.module.scss"
import { NewSectionTab } from './newSectionTab/NewSectionTab'
import { NewSectionList } from "./newSectionList/NewSectionList";
import { useState } from "react";

export const NewSection = () => {

  const [listClicked, setListClicked] = useState("NEW")

  const listChange = (title: string) => {
      setListClicked(title)
  }

  return (
    <div className={styles.newContainer}>
      <NewSectionTab onClick={listChange} listClicked={listClicked}/>
      <NewSectionList clickTitle={listClicked}/>
    </div>
  )
}