import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getWordPressData = async():Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/wordpress`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const wordPressData = res.json();
    return wordPressData;
}

export async function GET() {

    try {
        const data = await getWordPressData();
        return NextResponse.json(data);
    } catch(error) {
        const errorMessage = error instanceof Error? error.message : `Unkonwn Error`;
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}