import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getWebKnowhowData = async (): Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/webknowhow`)

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const webKnowhowData = await res.json();
    
    return webKnowhowData;
}

export async function GET() {
    try {
        const data = await getWebKnowhowData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : 'Unknown Error';
        return NextResponse.json({ error: errorMessage}, {status: 500})
    }
}