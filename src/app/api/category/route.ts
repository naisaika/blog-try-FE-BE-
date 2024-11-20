import { CategoryListType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getCategoryListData = async(): Promise<
    { 
        wordpress: CategoryListType[], 
        htmlcssjavascript: CategoryListType[], 
        python: CategoryListType[], 
        notion: CategoryListType[],
        gas: CategoryListType[],
        arduino: CategoryListType[],
        webknowhow: CategoryListType[],
        udemy: CategoryListType[]
    }> => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/categorylist`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const categoryListData = await res.json();

    const wordPressData = categoryListData[0]?.wordpress || [];
    const htmlcssjavascriptData = categoryListData[0]?.htmlcssjavascript || [];
    const pythonData = categoryListData[0]?.python || [];
    const notionData = categoryListData[0]?.notion || [];
    const gasData = categoryListData[0]?.gas || [];
    const arduinoData = categoryListData[0]?.arduino || [];
    const webknowhowData = categoryListData[0]?.webknowhow || [];
    const udemyData = categoryListData[0]?.udemy || [];

    return { 

        wordpress: wordPressData, 
        htmlcssjavascript: htmlcssjavascriptData, 
        python: pythonData, 
        notion: notionData,
        gas: gasData, 
        arduino: arduinoData, 
        webknowhow: webknowhowData, 
        udemy: udemyData
    };
}

export async function GET() {
    try {
        const data = await getCategoryListData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}