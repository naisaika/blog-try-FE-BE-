export interface NavType {
    id: number;
    text: string;
    link: string;
}

export interface TopDataType {
    id: number;
    title: string;
    img: string;
}

export interface TopCategoryType {
    id: number;
    title: string;
    img: string;
    link: string;
}

export interface FooterTitleType {
    id: number;
    img: string;
    alt: string;
    width: number;
    height: number;
    title: string;
}

export interface FooterLinkType {
    id: number;
    text: string;
    link: string;
}

export interface FooterListType {
    id: number;
    text: string;
    count: number;
    link: string;
}

export interface FooterTagType {
    id: number;
    text: string;
    count: number;
    url: string;
}

export interface FooterBlogMonth {
    id: number;
    date: string;
    count: number;
    value: string;
}

export interface NotioneerType {
    id: number;
    title: string;
    img: string;
}

export interface NewPostsType {
    id: number;
    title: string;
    img: string;
    createdAt: string;
}

export interface ArticleListType {
    id: number;
    title: string;
    img: string;
    createdAt: string;
}

export interface PopularListType {
    id: number;
    title: string;
    img: string;
    createdAt: string;
}

export interface SNSType {
    id: number;
    img: string;
    text: string;
    width: number;
    height: number;
}

export interface ContentsListType {
    id: number;
    title: string;
    anchorlink: string;
}

export interface ShoppingBtnType {
    id: number;
    text: string;
    link: string;
}

export interface TagListType {
    id: number;
    title: string;
    img: string;
    createdAt: string;
}

export interface CategoryListType {
    id: number;
    title: string;
    img: string;
    createdAt: string;
}

export interface FormTitleType {
    id: string;
    label: string;
    register: "yourname" | "email" | "title" | "message";
    autoComplete?: string;
    isTextArea: boolean;
}