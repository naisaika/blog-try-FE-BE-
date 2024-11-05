import { TopDataType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getSliderData = async(): Promise<
    { 
        notion: TopDataType[], 
        sango: TopDataType[], 
        python: TopDataType[], 
    }> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/slider`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const topData = await res.json();

    const notionData = topData[0]?.notion || [];
    const sangoData = topData[0]?.sango || [];
    const pythonData = topData[0]?.python || [];

    return { 
        notion: notionData, 
        sango: sangoData, 
        python: pythonData,  
    };
}

export async function GET() {
    try {
        const data = await getSliderData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}