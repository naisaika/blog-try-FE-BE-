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
}

export interface FooterListType {
    id: number;
    text: string;
    count: number;
}

export interface FooterBlogMonth {
    id: number;
    date: string;
    count: number;
    value: string;
}
