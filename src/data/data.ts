import { NavType, TopDataType } from "./type"

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