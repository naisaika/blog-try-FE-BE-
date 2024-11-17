import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getUdemyData = async (): Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/udemy`)

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const udemyData = await res.json();
    
    return udemyData;
}

export async function GET() {
    try {
        const data = await getUdemyData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : 'Unknown Error';
        return NextResponse.json({ error: errorMessage}, {status: 500})
    }
}