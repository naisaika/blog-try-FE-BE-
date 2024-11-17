import Image from "next/image"
import styles from "./CommonFooter.module.scss"
import { FOOTER_TITLES, FOOTER_OTHERS } from "@/data/data"
import Link from "next/link"
import { getCategoryData } from "@/app/api/footer/category/route"
import { getTagData } from "@/app/api/footer/tag/route"
import { getBlogMonthData } from "@/app/api/footer/blogmonth/route"
import { FooterTitle } from "../footerTitle/FooterTitle"
import { FooterSearchSection } from "../footerSearchSection/FooterSearchSection"

export const CommonFooter = async() => {

  const categoryData = await getCategoryData();
  const tagData = await getTagData();
  const blogMonthData= await getBlogMonthData();

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerRowContaier}>
          {FOOTER_TITLES.map((title) => (
            <div key={title.id}>
              {title.id === 0 && (
                <>
                  <FooterTitle 
                    img={title.img} 
                    alt={title.alt} 
                    width={title.width} 
                    height={title.height}
                    title={title.title}
                  />
                  <FooterSearchSection/>
                </>
              )}
              {title.id === 1 && (
                <>
                  <FooterTitle 
                    img={title.img} 
                    alt={title.alt} 
                    width={title.width} 
                    height={title.height}
                    title={title.title}
                  />
                  <div className={styles.selectBoxContainer}>
                    <label htmlFor="monthSelect" className={styles.srOnly}>
                      月を選択
                    </label>
                    <select id="monthSelect" defaultValue="" className={styles.selectBox}>
                      {blogMonthData.map((data) => (
                        <option value={data.value} key={data.id}>
                          {`${data.date}${data.count ? `(${data.count})` : ""}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <ul className={styles.othersList}>
                    {FOOTER_OTHERS.map((other) => (
                      <Link href={other.link} key={other.id} className={styles.otherItem}>
                        <li>{other.text}</li>
                      </Link>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className={styles.footerRowContaier}>
          {FOOTER_TITLES.map((title) => (
            <div key={title.id}>
              <div className={styles.footerRow}>
                {title.id === 2 && (
                  <>
                    <FooterTitle 
                      img={title.img} 
                      alt={title.alt} 
                      width={title.width} 
                      height={title.height}
                      title={title.title}
                    />
                    <ul className={styles.categoryList}>
                      {categoryData.map((list) => (
                        <li key={list.id} className={styles.categoryItem}>
                          <div className={styles.categoryTitle}>
                            <Image
                              src="/footer/list-icon.png"
                              alt="カテゴリーアイコン"
                              width={24}
                              height={20}
                              priority
                            />
                            <Link href={list.link} className={styles.categoryText}>
                              {list.text}
                              <span className={styles.categoryCount}>{list.count}</span>
                            </Link>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {title.id === 3 && (
                  <>
                    <FooterTitle 
                      img={title.img} 
                      alt={title.alt} 
                      width={title.width} 
                      height={title.height}
                      title={title.title}
                    />
                    <ul className={styles.tagList}>
                      {tagData.map((list) => (
                        <li key={list.id} className={styles.tagItem}>
                          {`#${list.text}`}
                          <span className={styles.tagCount}>{`(${list.count})`}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footerRowContaier}>
          {FOOTER_TITLES.map((title) => (
            title.id === 4 ? (
              <div key={title.id} className={styles.footerRow}>
                <FooterTitle 
                  img={title.img} 
                  alt={title.alt} 
                  width={title.width} 
                  height={title.height}
                  title={title.title}
                />
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
                  <p>
                    <Link href="#" className={styles.linkColor}>WP-Search</Link>にサイト事例として掲載されています。
                  </p>
                </div>
              </div>
            ) : null
          ))}
        </div>
      </div>
    </footer>
  )
}