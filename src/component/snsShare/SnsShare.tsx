import Image from "next/image"
import styles from "./SnsShare.module.scss"
import { SNS_LISTS } from "@/data/data"

export const SnsShare = () => {
  return (
    <div className={styles.shareContainer}>
        <p className={styles.shareTitle}>＼ SHARE ／</p>
        <ul className={styles.shareList}>
            {SNS_LISTS.map((sns) => (
                <li key={sns.id} className={styles.snsListItem}>
                    <Image src={sns.img} alt="SNSアイコン" width={sns.width} height={sns.height} priority/>
                    <p className={styles[`snsText${sns.id}`]}>{sns.text}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}