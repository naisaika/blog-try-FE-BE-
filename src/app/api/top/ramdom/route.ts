import { NextResponse } from "next/server"
import { TopDataType } from "../../../../data/type"

export const getRamdomData = async(): Promise<TopDataType[]> => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BE_API_URL}/ramdom`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const ramdomData = await res.json();

    return ramdomData;
}

export async function GET() {
    try {
        const data = await getRamdomData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage}, { status: 500 });
    }
}