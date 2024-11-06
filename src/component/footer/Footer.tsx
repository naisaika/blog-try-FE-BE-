import Image from "next/image"
import styles from "./Footer.module.scss"
import { FOOTER_OTHERS } from "@/data/data"
import Link from "next/link"
import { getCategoryData } from "@/app/api/footer/category/route"
import { getTagData } from "@/app/api/footer/tag/route"

export const Footer = async() => {

  const categoryData = await getCategoryData();
  const tagData = await getTagData();

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div>
          <div>
            <div className={styles.footerTitleContainer}>
              <Image src="/footer/search-icon.png" alt="検索アイコン" width={24} height={24} priority></Image>
              <h3>検索</h3>
            </div>
            <div></div>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="検索ワードを入力" className={styles.searchInput}></input>
              <span className={styles.searchIconContainer}>
                <Image 
                  src="/search-icon.png" alt="検索アイコン" 
                  width={25} height={25} priority 
                  className={styles.searchIcon}>
                </Image>
              </span>
            </div>
          </div>
          <div>
            <div className={styles.footerTitleContainer}>
              <Image src="/footer/archive-icon.png" alt="アーカイブアイコン" width={24} height={24} priority></Image>
              <h3>アーカイブ</h3>
            </div>
            <div></div>
            <div>
              <label htmlFor="month-select" className={styles.srOnly}>月を選択</label>
              <select id="month-select">
                  <option value="">月を選択</option>
                  <option value="2023年7月">2023年7月</option>
                  <option value="2022年8月">2022年8月</option>
              </select>
            </div>
          </div>
          <ul>
            {FOOTER_OTHERS.map((other) => (
              <li key={other.id}>
                {other.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <div className={styles.footerTitleContainer}>
              <Image src="/footer/category-icon.png" alt="カテゴリーアイコン" width={24} height={24} priority></Image>
              <h3>カテゴリー</h3>
            </div>
            <div></div>
            <ul>
              {categoryData.map((list) => (
                <li key={list.id}>
                  <Image src="/footer/list-icon.png" alt="カテゴリーアイコン" width={24} height={24} priority></Image>
                  <p>
                    {list.text}
                    <span>{list.count}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className={styles.footerTitleContainer}>
              <Image src="/footer/tag-icon.png" alt="タグアイコン" width={24} height={24} priority></Image>
              <h3>タグ</h3>
            </div>
            <div></div>
            <ul>
              {tagData.map((list) => (
                  <li key={list.id}>
                    {`#${list.text}`}
                    <span>{`(${list.count})`}</span>
                  </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.footerTitleContainer}>
            <Image src="/footer/person-icon.png" alt="人アイコン" width={24} height={24} priority></Image>
            <h3>プロフィール</h3>
          </div>
          <div></div>
          <div>
            <Image 
              src="https://zatsugaku-engineer.com/wp-content/uploads/2022/04/image-min.gif" 
              alt="プロフィール画像" 
              width={280} height={280} priority>
            </Image>
            <Image src="/footer/avatar.webp" alt="アバター画像" width={80} height={80} priority></Image>
            <p>チャベス</p>
            <p>
              機械機器メーカーで研究開発をしている機械系エンジニアです。<br></br>
              Notion、SANGO（WordPress）、Pythonが好きです。<br></br>
              詳細プロフィールは<Link href="#">こちら</Link>。<Link href="#">note</Link>にNotionの記事も書いています。<br></br>
              Notion公式資格のNotion Essentials Badge取得。
            </p>
            <Image src="/footer/twitter-icon.png" alt="twitterアイコン" width={40} height={40} priority></Image>
          </div>
          <p><Link href="#">WP-Search</Link>にサイト事例として掲載されています。</p>
        </div>
      </div>

    </footer>
  )
}