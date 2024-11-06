import { FooterListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getTagData = async (): Promise<FooterListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/tag`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const tagData = await res.json();

    return tagData
}

export async function GET() {
    try {
        const data = await getTagData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error? error.message : `Unknown Error`;
        return NextResponse.json({error: errorMessage}, { status: 500 });
    }
}