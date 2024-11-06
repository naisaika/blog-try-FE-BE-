import { NavType, TopDataType, FooterLinkType, FooterTitleType } from "./type"

export const NAV_LIST:NavType[] = [
    { id: 0, text: "Notioneer!! (Notionのページ)", link: "/notioneer" },
    { id: 1, text: "ブログ/WordPress", link: "/category/blog-wordpress" },
    { id: 2, text: "HTML/CSS/JavaScript", link: "/category/html-css-javascript" },
    { id: 3, text: "Python", link: "/category/python" },
]

export const CATEGORY:TopDataType[] = [
    {
        "id": 0, 
        "title": "Notion", 
        "img": "/top/category/notion-logo.webp" 
    },
    {
        "id": 1,
        "title": "SANGO(WordPress)", 
        "img": "/top/category/sango.webp" 
    },
    {
        "id": 2,
        "title": "HTML/CSS/JS", 
        "img": "/top/category/htmlcssjs.webp"
    },
    {
        "id": 3,
        "title": "Python", 
        "img": "/top/category/python-logo.webp" 
    }
]

export const FOOTER_TITLES:FooterTitleType[] = [
    { "id": 0, "img": "/footer/search-icon.png", "title": "検索" },
    { "id": 1, "img": "/footer/archive-icon.png", "title": "アーカイブ" },
    { "id": 2, "img": "/footer/category-icon.png", "title": "カテゴリー" },
    { "id": 3, "img": "/footer/tag-icon.png", "title": "タグ" },
    { "id": 4, "img": "/footer/person-icon.png", "title": "プロフィール" },
    { "id": 5, "img": "/footer/search-icon.png", "title": "検索" },
]

export const FOOTER_OTHERS:FooterLinkType[] = [
    { "id": 0, "text": "サイトマップ" },
    { "id": 1, "text": "お問い合わせ" },
    { "id": 2, "text": "プライバシーポリシー" },
]

// export const FOOTER_CATEGORY_LISTS:FooterListType[] = [
//     { "id": 0, "text": "ブログ / WordPress" },
//     { "id": 1, "text": "Notion" },
//     { "id": 2, "text": "Python" },
//     { "id": 3, "text": "HTML/CSS/JavaScript" },
//     { "id": 4, "text": "Google App Script" },
//     { "id": 5, "text": "Arduino" },
//     { "id": 6, "text": "Web制作ノウハウ" },
//     { "id": 7, "text": "Udemy" }
// ]

// export const TAG_LISTS:FooterListType[] = [
//     { "id": 0, "text": "WordPress" },
//     { "id": 1, "text": "ゼロから始めるブログ運営" },
//     { "id": 2, "text": "SANGO" },
//     { "id": 3, "text": "web制作" },
//     { "id": 4, "text": "画像" },
//     { "id": 5, "text": "自動化" },
//     { "id": 6, "text": "分析" },
//     { "id": 7, "text": "プラグイン" },
//     { "id": 8, "text": "統計学" },
//     { "id": 9, "text": "ワードプレス" },
//     { "id": 10, "text": "Streamlit" },
//     { "id": 11, "text": "webアプリ" },
//     { "id": 12, "text": "ラジコン" },
//     { "id": 13, "text": "電子工作" },
//     { "id": 14, "text": "Udemy" },
//     { "id": 15, "text": "スプレッドシート" },
//     { "id": 16, "text": "Altair" },
//     { "id": 17, "text": "notion charts" },
//     { "id": 18, "text": "レビュー" },
//     { "id": 19, "text": "学習" }
// ]

