import { NotioneerType } from "@/data/type";
import { NextResponse } from "next/server";

export const getNotioneerSlideData = async():Promise<NotioneerType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/notioneer`)

    if(!res.ok) {
        throw new Error (`Error: ${res.status}`)
    }
    
    const notioneerData = await res.json();
    return notioneerData;
}

export async function GET() {

    try {
        const data = await getNotioneerSlideData();
        return NextResponse.json(data);
    } catch(error) {
        const errorMessage = error instanceof Error ? error.message: `Unknown error`;
        return NextResponse.json({error: errorMessage}, {status: 500})
    }
}