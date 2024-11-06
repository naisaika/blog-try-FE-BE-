import { TopDataType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getPopularData = async(): Promise<TopDataType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/popular`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const popularData = await res.json();

    return popularData;
}

export async function GET() {
    try {
        const data = await getPopularData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}