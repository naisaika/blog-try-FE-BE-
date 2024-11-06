import { FooterListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getCategoryData = async (): Promise<FooterListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/category`)

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const categoryData = await res.json();
    
    return categoryData;
}

export async function GET() {
    try {
        const data = await getCategoryData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : 'Unknown Error';
        return NextResponse.json({ error: errorMessage}, {status: 500})
    }
}