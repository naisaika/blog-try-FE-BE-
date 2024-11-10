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
    { "id": 0, "img": "/footer/search-icon.png", "alt": "検索アイコン", "width": 20, "height": 20, "title": "検索" },
    { "id": 1, "img": "/footer/archive-icon.png", "alt": "アーカイブアイコン", "width": 20, "height": 16, "title": "アーカイブ" },
    { "id": 2, "img": "/footer/category-icon.png", "alt": "カテゴリアイコン", "width": 20, "height": 16, "title": "カテゴリ" },
    { "id": 3, "img": "/footer/tag-icon.png", "alt": "タグアイコン", "width": 20, "height": 22, "title": "タグ" },
    { "id": 4, "img": "/footer/person-icon.png","alt": "プロフィールアイコン", "width": 24, "height": 20, "title": "プロフィール" }
]

export const FOOTER_OTHERS:FooterLinkType[] = [
    { "id": 0, "text": "サイトマップ" },
    { "id": 1, "text": "お問い合わせ" },
    { "id": 2, "text": "プライバシーポリシー" }
]
