import { TagListType } from "@/data/type";
import { NextResponse } from 'next/server';

export const getTagListData = async(): Promise<
    { 
        wordpress: TagListType[], 
        zeroblog: TagListType[], 
        sango: TagListType[], 
        webdesign: TagListType[],
        imgtag: TagListType[], 
        automation: TagListType[], 
        dataanalysis: TagListType[], 
        plugin: TagListType[], 
        statisticstag: TagListType[], 
        wordpresskana: TagListType[], 
        streamlit: TagListType[], 
        webapps: TagListType[], 
        razicon: TagListType[], 
        electronicengineering: TagListType[],
        udemy: TagListType[],
        spreadsheet: TagListType[],
        altair: TagListType[],
        notioncharts: TagListType[],
        review: TagListType[],
        study: TagListType[]
    }> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BE_API_URL}/taglist`);

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    const tagListData = await res.json();

    const wordPressData = tagListData[0]?.wordpress || [];
    const zeroblogData = tagListData[0]?.zeroblog || [];
    const sangoData = tagListData[0]?.sango || [];
    const webDesignData = tagListData[0]?.webdesign || [];
    const imgTagData = tagListData[0]?.imgtag || [];
    const automationData = tagListData[0]?.automation || [];
    const dataAnalysisData = tagListData[0]?.dataanalysis || [];
    const pluginData = tagListData[0]?.plugin || [];
    const statisticsTagData = tagListData[0]?.statisticstag || [];
    const wordPressKanaData = tagListData[0]?.wordpresskana || [];
    const streamlitData = tagListData[0]?.streamlit || [];
    const webAppsData = tagListData[0]?.cwebapps || [];
    const raziconData = tagListData[0]?.razicon || [];
    const electronicEngineeringData = tagListData[0]?.electronicengineering || [];
    const udemyData = tagListData[0]?.udemy || [];
    const spreadSheetData = tagListData[0]?.spreadsheet || [];
    const altairData = tagListData[0]?.altair || [];
    const notionChartsData = tagListData[0]?.notioncharts || [];
    const reviewData = tagListData[0]?.review || [];
    const studyData = tagListData[0]?.study || [];

    return { 

        wordpress: wordPressData, 
        zeroblog: zeroblogData, 
        sango: sangoData, 
        webdesign: webDesignData,
        imgtag: imgTagData, 
        automation: automationData, 
        dataanalysis: dataAnalysisData, 
        plugin: pluginData, 
        statisticstag: statisticsTagData, 
        wordpresskana: wordPressKanaData, 
        streamlit: streamlitData, 
        webapps: webAppsData, 
        razicon: raziconData, 
        electronicengineering: electronicEngineeringData,
        udemy: udemyData,
        spreadsheet: spreadSheetData,
        altair: altairData,
        notioncharts: notionChartsData,
        review: reviewData,
        study: reviewData
    };
}

export async function GET() {
    try {
        const data = await getTagListData();
        return NextResponse.json(data);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: errorMessage }, { status: 500 });
    }
}