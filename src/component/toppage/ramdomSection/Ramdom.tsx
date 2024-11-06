import styles from "./Ramdom.module.scss";
import Image from "next/image";
import { TopDataType } from "../../../data/type";

interface RamdomProps {
    ramdomData: TopDataType[];
}

export const Ramdom = ({ramdomData}: RamdomProps) => {
  return (
    <ul className={styles.ramdomSectionList}>
        {ramdomData.map((data) => (
            <li key={data.id} className={styles.ramdomSectionItem}>
                <Image src={data.img} alt="ランダム画像" width={316} height={182} priority className={styles.ramdomSectionImg}></Image>
                <span className={styles.ramdomSectionText}>{data.title}</span>
            </li>
        ))}
    </ul>
  )
}
