import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getGasData = async (): Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/gas`)

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const gasData = await res.json();
    
    return gasData;
}

export async function GET() {
    try {
        const data = await getGasData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : 'Unknown Error';
        return NextResponse.json({ error: errorMessage}, {status: 500})
    }
}