import { NewPostsType } from "@/data/type";
import { NextResponse } from "next/server";

export const getNewPostData = async():Promise<NewPostsType[]>  => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/notioneerNewPosts`);

    if(!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const newPostData = res.json();
    return newPostData;
}

export async function GET() {

    try {
        const data = await getNewPostData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : `Unknown error`;
        return NextResponse.json({error: errorMessage}, {status: 500});
    }
}