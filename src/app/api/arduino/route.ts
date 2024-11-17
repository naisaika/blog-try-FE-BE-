import { ArticleListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getArduinoData = async (): Promise<ArticleListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/arduino`)

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const arduinoData = await res.json();
    
    return arduinoData;
}

export async function GET() {
    try {
        const data = await getArduinoData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : 'Unknown Error';
        return NextResponse.json({ error: errorMessage}, {status: 500})
    }
}