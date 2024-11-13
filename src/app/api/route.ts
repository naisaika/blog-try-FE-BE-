import { TopDataType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getSliderData = async(): Promise<
    { 
        notion: TopDataType[], 
        sango: TopDataType[], 
        python: TopDataType[], 
        category: TopDataType[],
        new: TopDataType[] 
    }> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/posts`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const sliderData = await res.json();

    const notionData = sliderData[0]?.notion || [];
    const sangoData = sliderData[0]?.sango || [];
    const pythonData = sliderData[0]?.python || [];
    const categoryData = sliderData[0]?.category || [];
    const newData = sliderData[0]?.category || [];

    return { notion: notionData, sango: sangoData, python: pythonData, category: categoryData, new: newData };
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