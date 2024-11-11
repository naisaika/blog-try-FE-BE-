import Image from "next/image"
import styles from "./NewPosts.module.scss"
import { getNewPostData } from "@/app/api/notioneer/newposts/route"
import { Button } from "@/component/button/Button";

export const NewPosts = async() => {

    const newPostData = await getNewPostData();

  return (
    <section className={styles.newPostSection}>
        <div className={styles.newPostsTitleContainer}>
            <Image src="/notioneer/newpost/new-page-decolation.svg" alt="New Postタイトル" width={422} height={10} priority></Image>
            <h2 className={styles.newPostTitle}>New Posts</h2>
            <Image src="/notioneer/newpost/new-page-decolation.svg" alt="New Postタイトル" width={422} height={10} priority></Image>
        </div>
        <div className={styles.newPostListContainer}>
            <ul className={styles.newPostList}>
                {newPostData.map((data) => (
                    <li key={data.id} className={styles.newPostItem}>
                        <Image src={data.img} alt="new post画像" width={318} height={184} priority className={styles.newPostImg}></Image>
                        <p className={styles.newPostText}>{data.title}</p>
                        <span className={styles.newPostDate}>
                            <Image src="/notioneer/update-icon.png" alt="更新アイコン" width={20} height={14} priority></Image>
                            {data.createdAt}
                        </span>
                    </li>
                ))}
            </ul>
            <Button>View More</Button>
        </div>
        <div className={styles.notioneerSearchSection}>
            <p className={styles.searchTitleContainer}>
                <span className={styles.titleDecolation}>＼</span>
                <span className={styles.title}>気になるキーワードで検索</span>
                <span className={styles.titleDecolation}>／</span>
            </p>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="キーワードで検索" className={styles.searchInput}></input>
                <Image src="/search-icon-black.png" alt="検索アイコン" width={25} height={25} priority className={styles.searchIcon}></Image>
            </div>
            <div className={styles.popularWordsContainer}>
                <p>人気のキーワード:</p>
                <p className={styles.tagContainer}>
                    <span className={styles.tag}>Notion 使い方</span>
                    <span className={styles.tag}>Notion テンプレート</span>
                </p>
            </div>
        </div>
    </section>
  )
}