import { TopDataType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getNewData = async(): Promise<TopDataType[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/new`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const newData = await res.json();

    return newData;
}

export async function GET() {
    try {
        const data = await getNewData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}