import { NewPostsType } from "@/data/type";
import { NextResponse } from "next/server";

// ページと件数を引数に追加
export const getNewPostsData = async (page = 1, limit = 20): Promise<{ posts: NewPostsType[], totalCount: number }> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/newposts`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    // 全件データを取得
    const allData: NewPostsType[] = await res.json();

    // `page`と`limit`に基づいてデータをスライス
    const offset = (page - 1) * limit;
    const paginatedData = allData.slice(offset, offset + limit);

    // 総件数を返す
    return {
        posts: paginatedData,
        totalCount: allData.length
    };
};

// APIエンドポイントでページと件数を受け取り
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 20;

    try {
        const { posts, totalCount } = await getNewPostsData(page, limit);
        return NextResponse.json({ posts, totalCount });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown Error";
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}