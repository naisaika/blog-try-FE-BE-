import Image from 'next/image'
import styles from "./FooterTitle.module.scss"

interface FooterTitleProps {
  img: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

export const FooterTitle = ({img, alt, width, height, title}:FooterTitleProps) => {
  return (
    <div className={styles.footerTitleContainer}>
      <div className={styles.footerTitle}>
        <Image
          src={img}
          alt={alt}
          width={width}
          height={height}
          priority
        />
        <h3 className={styles.footerTitleText}>{title}</h3>
      </div>
    </div>
  )
}