import Image from "next/image"
import styles from "./Footer.module.scss"
import { FOOTER_TITLES, FOOTER_OTHERS } from "@/data/data"
import Link from "next/link"
import { getCategoryData } from "@/app/api/footer/category/route"
import { getTagData } from "@/app/api/footer/tag/route"
import { getBlogMonthData } from "@/app/api/footer/blogmonth/route"

export const Footer = async() => {

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
                  <div className={styles.footerTitleContainer}>
                    <div className={styles.footerTitle}>
                      <Image
                        src={title.img}
                        alt={title.alt}
                        width={title.width}
                        height={title.height}
                        priority
                      />
                      <h3 className={styles.footerTitleText}>{title.title}</h3>
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.inputContainer}>
                    <input
                      type="text"
                      placeholder="検索ワードを入力"
                      className={styles.searchInput}
                    />
                    <span className={styles.searchIconContainer}>
                      <Image
                        src="/search-icon.png"
                        alt="検索アイコン"
                        width={20}
                        height={20}
                        priority
                        className={styles.searchIcon}
                      />
                    </span>
                  </div>
                </>
              )}
              {title.id === 1 && (
                <>
                 <div className={styles.footerTitleContainer}>
                  <div className={styles.footerTitle}>
                      <Image
                        src={title.img}
                        alt={title.alt}
                        width={title.width}
                        height={title.height}
                        priority
                      />
                      <h3>{title.title}</h3>
                    </div>
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.selectBoxContainer}>
                    <label htmlFor="month-select" className={styles.srOnly}>
                      月を選択
                    </label>
                    <select id="month-select" defaultValue="" className={styles.selectBox}>
                      {blogMonthData.map((data) => (
                        <option value={data.value} key={data.id}>
                          {`${data.date}${data.count ? `(${data.count})` : ""}`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <ul className={styles.othersList}>
                    {FOOTER_OTHERS.map((other) => (
                      <Link href="#" key={other.id} className={styles.otherItem}>
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
                    <div className={styles.footerTitleContainer}>
                      <div className={styles.footerTitle}>
                        <Image
                          src={title.img}
                          alt={title.alt}
                          width={title.width}
                          height={title.height}
                          priority
                        />
                        <h3>{title.title}</h3>
                      </div>
                      <div className={styles.line}></div>
                    </div>
                    <ul className={styles.categoryList}>
                      {categoryData.map((list) => (
                        <>
                          <li key={list.id} className={styles.categoryItem}>
                            <Image
                              src="/footer/list-icon.png"
                              alt="カテゴリーアイコン"
                              width={24}
                              height={20}
                              priority
                            />
                            <p>
                              {list.text}
                              <span>{list.count}</span>
                            </p>
                            <div className={styles.line}></div>
                          </li>
                        </>
                      ))}
                    </ul>
                  </>
                )}
                {title.id === 3 && (
                  <>
                    <div className={styles.footerTitleContainer}>
                      <div className={styles.footerTitle}>
                        <Image
                          src={title.img}
                          alt={title.alt}
                          width={title.width}
                          height={title.height}
                          priority
                        />
                        <h3>{title.title}</h3>
                      </div>
                    <div className={styles.line}></div>
                  </div>
                  <ul>
                    {tagData.map((list) => (
                      <li key={list.id}>
                        {`#${list.text}`}
                        <span>{`(${list.count})`}</span>
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
                <div className={styles.footerTitleContainer}>
                  <div className={styles.footerTitle}>
                    <Image
                      src={title.img}
                      alt={title.alt}
                      width={title.width}
                      height={title.height}
                      priority
                    />
                    <h3>{title.title}</h3>
                  </div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.profileSection}>
                  <Image
                    src="https://zatsugaku-engineer.com/wp-content/uploads/2022/04/image-min.gif"
                    alt="プロフィール画像"
                    width={280}
                    height={280}
                    priority
                  />
                  <Image
                    src="/footer/avatar.webp"
                    alt="アバター画像"
                    width={80}
                    height={80}
                    priority
                    className={styles.avatar}
                  />
                  <p>チャベス</p>
                  <p>
                    機械機器メーカーで研究開発をしている機械系エンジニアです。<br />
                    Notion、SANGO（WordPress）、Pythonが好きです。<br />
                    詳細プロフィールは<Link href="#">こちら</Link>。<Link href="#">note</Link>にNotionの記事も書いています。<br />
                    Notion公式資格のNotion Essentials Badge取得。
                  </p>
                  <Image
                    src="/footer/twitter-icon.png"
                    alt="twitterアイコン"
                    width={40}
                    height={40}
                    priority
                  />
                  <p>
                    <Link href="#">WP-Search</Link>にサイト事例として掲載されています。
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