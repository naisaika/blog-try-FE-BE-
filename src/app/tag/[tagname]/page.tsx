import { getTagListData } from "@/app/api/tag/route"
import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { TagList } from "@/component/tag/tagList/TagList"

const Tag = async() => {

  const tagData = await getTagListData();

  return (
    <AsideLayout>
      <MainPageTitle/>
      <TagList tagData={tagData}/>
    </AsideLayout>
  )
}

export default Tag