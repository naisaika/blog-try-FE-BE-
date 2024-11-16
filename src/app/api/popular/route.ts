import { PopularListType } from "@/data/type";
import { NextResponse } from "next/server";

export const getPopularData = async():Promise<PopularListType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/popularlist`)
    
    if(!res.ok) {
        throw new Error (`Error: ${res.status}`);
    }

    const popularData = await res.json();
    return popularData;
}

export async function GET() {
    try {
        const data = await getPopularData();
        return NextResponse.json(data);
    } catch(error) {
        const errorMessage = error instanceof Error? error.message : `Unknown Error`;
        return NextResponse.json({error: errorMessage}, {status: 500});
    }
}