import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getNotionData = async():Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/notion`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const notionData = res.json();
    return notionData;
}

export async function GET() {

    try {
        const data = await getNotionData();
        return NextResponse.json(data);
    } catch(error) {
        const errorMessage = error instanceof Error? error.message : `Unkonwn Error`;
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}