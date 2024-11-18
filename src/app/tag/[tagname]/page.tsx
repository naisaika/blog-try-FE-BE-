import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { TagList } from "@/component/tag/tagList/TagList"

const Tag = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <TagList/>
    </AsideLayout>
  )
}

export default Tag