import { NOTIONEER_FOOTER_LINK, NOTIONEER_FOOTER_TITLE } from "@/data/data"
import { FooterTitle } from "../footerTitle/FooterTitle"
import styles from "./NotioneerFooter.module.scss"
import Link from "next/link"
import Image from "next/image"

export const NotioneerFooter = () => {
  return (
    <footer className={styles.footerSection}>
        <div className={styles.footerWrapper}>
            <div className={styles.footerRowContaier}>
                {NOTIONEER_FOOTER_TITLE.filter(title => title.id === 0 ).map((title) => (
                    <FooterTitle 
                        key={title.id}
                        img={title.img} 
                        alt={title.alt} 
                        width={title.width} 
                        height={title.height}
                        title={title.title}
                    />
                ))}
                <div className={styles.aboutTextContainer}>
                    <p>
                        このサイト（Notioneer!!）は
                        <Link href="/" className={styles.textLink}>雑学エンジニアブログ</Link>
                        というブログサイトで公開されているNotion関連の記事を集めたサイトです。
                    </p>
                    <p>
                        記事ページは<Link href="/" className={styles.textLink}>雑学エンジニアブログ</Link>のページとなっています（このページも雑学エンジニアブログのページの一部です）。
                    </p>
                </div>
            </div>
            <div className={styles.footerRowContaier}>
                {NOTIONEER_FOOTER_TITLE.filter(title => title.id === 1).map((title) => (
                    <FooterTitle 
                        key={title.id}
                        img={title.img} 
                        alt={title.alt} 
                        width={title.width} 
                        height={title.height}
                        title={title.title}
                    />
                ))}
                <ul className={styles.linkList}>
                    {NOTIONEER_FOOTER_LINK.map((link) => {
                        return link.id !== 3 ? (
                        <li key={link.id} className={styles.linkItem}>
                            <Link href={link.link} className={styles.link}>{link.text}</Link>
                        </li>
                        ) : (
                        <li key={link.id} className={styles.linkItem}>
                            <Link href={link.link} className={styles.link}>
                                <span>{link.text}</span>
                            </Link>
                            <span>（Notion APIで作ったサイト）</span>
                        </li>
                        );
                    })}
                </ul>
            </div>
            <div className={styles.footerRowContaier}>
                {NOTIONEER_FOOTER_TITLE.filter(title => title.id === 2).map((title) => (
                    <FooterTitle 
                        key={title.id}
                        img={title.img} 
                        alt={title.alt} 
                        width={title.width} 
                        height={title.height}
                        title={title.title}
                    />
                ))}
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
            </div>
        </div>
    </footer>
  )
}
