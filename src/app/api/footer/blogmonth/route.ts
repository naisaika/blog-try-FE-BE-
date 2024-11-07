import { FooterBlogMonth } from "@/data/type";
import { NextResponse } from "next/server";

export const getBlogMonthData = async(): Promise<FooterBlogMonth[]> => {
    const res = await fetch (`${process.env.NEXT_PUBLIC_BE_API_URL}/blogMonth`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`)
    }

    const blogMonthData = await res.json();

    return blogMonthData;
}

export async function GET() {
   try {
        const data = await getBlogMonthData();
        return NextResponse.json(data);
   } catch (error) {
        const errorMessage = error instanceof Error? error.message : `Unknown Error`;
        return NextResponse.json({error: errorMessage}, {status: 500});
   }
}