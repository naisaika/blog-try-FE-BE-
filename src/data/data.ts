import { NavType, TopCategoryType, FooterLinkType, FooterTitleType, SNSType } from "./type"

export const NAV_LIST:NavType[] = [
    { id: 0, text: "Notioneer!! (Notionのページ)", link: "/notioneer" },
    { id: 1, text: "ブログ/WordPress", link: "/category/blog-wordpress" },
    { id: 2, text: "HTML/CSS/JavaScript", link: "/category/html-css-javascript" },
    { id: 3, text: "Python", link: "/category/python" },
]

export const CATEGORY:TopCategoryType[] = [
    {
        id: 0, 
        title: "Notion", 
        img: "/top/category/notion-logo.webp",
        link: "/notioneer"
    },
    {
        id: 1,
        title: "SANGO(WordPress)", 
        img: "/top/category/sango.webp",
        link: "/category/blog-wordpress" 
    },
    {
        id: 2,
        title: "HTML/CSS/JS", 
        img: "/top/category/htmlcssjs.webp",
        link: "/category/html-css-javascript"
    },
    {
        id: 3,
        title: "Python", 
        img: "/top/category/python-logo.webp",
        link: "/category/python" 
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
    { "id": 0, "text": "サイトマップ", "link": "#" },
    { "id": 1, "text": "お問い合わせ", "link": "#" },
    { "id": 2, "text": "プライバシーポリシー", "link": "#" }
]

export const NOTIONEER_FOOTER_TITLE:FooterTitleType[] = [
    { "id": 0, "img": "/footer/pencil-icon.png", "alt": "aboutアイコン", "width": 28, "height": 30, "title": "このサイトについて" },
    { "id": 1, "img": "/footer/tag-icon.png", "alt": "リンクアイコン", "width": 20, "height": 22, "title": "リンク" },
    { "id": 2, "img": "/footer/person-icon.png","alt": "プロフィールアイコン", "width": 24, "height": 20, "title": "プロフィール" }
]

export const NOTIONEER_FOOTER_LINK:FooterLinkType[] = [
    { "id": 0, "text": "雑学エンジニアブログ", "link": "/" },
    { "id": 1, "text": "Notionのページ", "link": "#" },
    { "id": 2, "text": "note", "link": "#" },
    { "id": 3, "text": "チャベログ", "link": "#" },
]

export const BREADCRUMB_LABELS: { [key: string]: string } = {
    "blog-wordpress": "ブログ / WordPress",
    "html-css-javascript": "HTML/CSS/JavaScript",
    "python": "Python"
}

export const SNS_LISTS:SNSType[] = [
    { "id": 0, "img": "/snsicon/twitter.png", "text": "ツイート", "width": 40, "height": 40 },
    { "id": 1, "img": "/snsicon/fb.png", "text": "シェア", "width": 44, "height": 40 },
    { "id": 2, "img": "/snsicon/hatena.png", "text": "はてブ", "width": 40, "height": 40 },
    { "id": 3, "img": "/snsicon/line.png", "text": "LINE", "width": 44, "height": 40 },
]
