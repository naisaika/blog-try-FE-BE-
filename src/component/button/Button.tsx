import Image from "next/image";
import styles from "./Button.module.scss";

interface ButtonType {
    children: React.ReactNode;
}

export const Button = ({children}:ButtonType) => {
  return (
    <button type="button" className={styles.btn}>
        <span>{children}</span>
        <Image src="/btn-icon.svg" alt="ボタンアイコン" width={50} height={8} priority className={styles.btnImg}></Image>
    </button>
  )
}