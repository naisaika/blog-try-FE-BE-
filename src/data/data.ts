import { 
    NavType, TopCategoryType, FooterLinkType, FooterTitleType, SNSType, ContentsListType,
    ShoppingBtnType,
    FormTitleType
 } from "./type"

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
    { "id": 0, "text": "サイトマップ", "link": "sitemap" },
    { "id": 1, "text": "お問い合わせ", "link": "contact-form" },
    { "id": 2, "text": "プライバシーポリシー", "link": "/privacy-policy" }
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
    "python": "Python",
    "gas": "Google App Script",
    "arduino": "Arduino",
    "web-knowhow": "Web制作ノウハウ",
    "wordpress": "WordPress",
    "zeroblog": "ゼロから始めるブログ運営",
    "sango": "SANGO",
    "web-design": "web制作",
    "img-tag": "画像",
    "automation": "自動化",
    "data-analysis": "分析",
    "plugin": "プラグイン",
    "statistics-tag": "統計学",
    "streamlit": "Streamlit",
    "web-apps": "webアプリ",
    "razicon": "ラジコン",
    "electronic-engineering": "電子工作",
    "udemy": "Udemy",
    "altair": "Altair",
    "notion-charts": "notion charts",
    "review": "レビュー",
    "study": "学習"
}

export const CATEGORY_GETDATA_CONVERSION: Record<string, string> = {
    "blog-wordpress": "wordpress",
    "notion": "notion",
    "python": "python",
    "html-css-javascript": "htmlcssjavascript",
    "gas": "gas",
    "arduino": "arduino",
    "web-knowhow": "webknowhow",
    "udemy": "udemy"
  };

export const TAG_GETDATA_CONVERSION: Record<string, string> = {
    "wordpress": "wordpress",
    "zeroblog": "zeroblog",
    "sango": "sango",
    "web-design": "webdesign",
    "img-tag": "imgtag",
    "automation": "automation",
    "data-analysis": "dataanalysis",
    "plugin": "plugin",
    "statistics-tag": "statisticstag",
    "streamlit": "streamlit",
    "web-apps": "webapps",
    "razicon": "razicon",
    "electronic-engineering": "electronicengineering",
    "udemy": "udemy",
    "altair": "altair",
    "notion-charts": "notioncharts",
    "review": "review",
    "study": "study",
    "ワードプレス": "wordpresskana",
    "スプレッドシート": "spreadsheet",
};

export const SNS_LISTS:SNSType[] = [
    { "id": 0, "img": "/snsicon/twitter.png", "text": "ツイート", "width": 40, "height": 40 },
    { "id": 1, "img": "/snsicon/fb.png", "text": "シェア", "width": 44, "height": 40 },
    { "id": 2, "img": "/snsicon/hatena.png", "text": "はてブ", "width": 40, "height": 40 },
    { "id": 3, "img": "/snsicon/line.png", "text": "LINE", "width": 44, "height": 40 },
]

export const PRIVACY_POLICY_CONTENTS_LISTS:ContentsListType[] = [
    { "id": 0, "title": "当サイトに掲載されている広告について", "anchorlink": "i-1"},
    { "id": 1, "title": "当サイトが使用しているアクセス解析ツールについて", "anchorlink": "i-2"},
    { "id": 2, "title": "当サイトへのコメントについて", "anchorlink": "i-3"},
    { "id": 3, "title": "責任の有無", "anchorlink": "i-4"}
]

export const SHOPPING_BTN:ShoppingBtnType[] = [
    { "id": 0, "text": "楽天ブックス", "link": "#" },
    { "id": 1, "text": "Amazon", "link": "#" },
    { "id": 2, "text": "Kindle", "link": "#" },
    { "id": 3, "text": "7net", "link": "#" },
]

export const FORM_TITLE:FormTitleType[] = [
    { "id": "yourname", "label": "氏名（必須）", "register": "yourname", "autoComplete": "name", "isTextArea": false},
    { "id": "email", "label": "メールアドレス（必須）", "register": "email", "autoComplete": "email", "isTextArea": false},
    { "id": "title", "label": "題名（任意）", "register": "title",  "isTextArea": false},
    { "id": "message", "label": "メッセージ本文（必須）", "register": "message", "isTextArea": true}
]