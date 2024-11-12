import { NOTIONEER_FOOTER_LINK, NOTIONEER_FOOTER_TITLE } from "@/data/data"
import { FooterTitle } from "../footerTitle/FooterTitle"
import styles from "./NotioneerFooter.module.scss"
import Link from "next/link"
import { FooterProfileSection } from "../footerProfileSection/FooterProfileSection"

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
               <FooterProfileSection/>
            </div>
        </div>
    </footer>
  )
}
