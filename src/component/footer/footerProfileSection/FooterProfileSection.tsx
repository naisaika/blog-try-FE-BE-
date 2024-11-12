import Image from "next/image"
import Link from "next/link"
import styles from "./FooterProfileSection.module.scss"

export const FooterProfileSection = () => {
  return (
    <div className={styles.profileSection}>
    <div className={styles.profileImgContainer}>
        <Image
            src="https://zatsugaku-engineer.com/wp-content/uploads/2022/04/image-min.gif"
            alt="プロフィール画像"
            width={280}
            height={280}
            priority
            className={styles.profImg}
        />
        <Image
            src="/footer/avatar.webp"
            alt="アバター画像"
            width={80}
            height={80}
            priority
            className={styles.avatar}
        />
    </div>
    <p className={styles.authorName}>チャベス</p>
    <p className={styles.profText}>
        機械機器メーカーで研究開発をしている機械系エンジニアです。<br />
        Notion、SANGO（WordPress）、Pythonが好きです。<br />
        詳細プロフィールは<Link href="#" className={styles.linkColor}>こちら</Link>。
        <Link href="#" className={styles.linkColor}>note</Link>にNotionの記事も書いています。<br />
        Notion公式資格のNotion Essentials Badge取得。
    </p>
    <Image
        src="/footer/twitter-icon.png"
        alt="twitterアイコン"
        width={40}
        height={40}
        priority
        className={styles.SNS}
    />
</div>
  )
}