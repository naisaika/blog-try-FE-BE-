"use client";

import { getNewData } from "@/app/api/top/new/route";
import { getPopularData } from "@/app/api/top/popular/route";
import { useEffect, useState } from "react";
import { TopDataType } from "../../../../data/type";
import Image from "next/image";

interface NewSectionListProps {
    clickTitle: string;
}

export const NewSectionList = ({ clickTitle }: NewSectionListProps) => {
    const [newData, setNewData] = useState<TopDataType[]>([]);
    const [popularData, setPopularData] = useState<TopDataType[]>([]);
    const [, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNewData = async () => {
            try {
                const getdata = await getNewData();
                setNewData(getdata);
                console.log("Fetched New Data:", getdata.new); // ここを修正
            } catch (error) {
                console.error("Error fetching new data:", error);
                setError("データの取得に失敗しました。");
            }
        };
        fetchNewData();
    }, []);

    useEffect(() => {
        const fetchPopularData = async () => {
            try {
                const getdata = await getPopularData();
                setPopularData(getdata);
                console.log("Popular Data:", getdata); // デバッグ用
            } catch (error) {
                console.error("Error fetching popular data:", error);
                setError("データの取得に失敗しました。");
            }
        };

        // clickTitleが"POPULAR"の場合のみデータを取得
        if (clickTitle === "POPULAR") {
            fetchPopularData();
        }
    }, [clickTitle]); // clickTitleが変更されるたびに実行

    return (
        <div>
            {clickTitle === "NEW" ? (
            <ul>
                {newData.length > 0 ? ( // newDataが空でないかを確認
                    newData.map((data) => (
                        <li key={data.id}>
                            <Image src={data.img} alt="最新記事画像" width={316} height={182} priority />
                            <span>{data.title}</span>
                        </li>
                    ))
                ) : (
                    <p>新しいデータがありません。</p> // ここが実行される原因を確認
                )}
            </ul>
            ) : clickTitle === "POPULAR" ? (
                <ul>
                    {popularData && popularData.length > 0 ? (
                        popularData.map((data) => (
                            <li key={data.id}>
                                <Image src={data.img} alt="人気記事画像" width={316} height={182} priority />
                                <span>{data.title}</span>
                            </li>
                        ))
                    ) : (
                        <p>人気のデータがありません。</p>
                    )}
                </ul>
            ) : (
                <p>タブが選択されていません。</p>
            )}
        </div>
    );
};