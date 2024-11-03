import { SliderImgType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getSliderData = async(): Promise<SliderImgType[]> => {
    console.log("API URL:", process.env.NEXT_PUBLIC_BE_API_URL); 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/posts`);

    if(!res.ok) {
        throw new Error (`Error: ${res.status}`)
    }

    // await new Promise((resolve) => setTimeout(resolve, 1500))

    const sliderData = await res.json();
    return sliderData;
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