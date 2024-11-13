import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { NotionList } from "@/component/notion/notionList/NotionList"

const Notion = () => {
  return (
    <AsideLayout>
        <MainPageTitle/>
        <NotionList/>
    </AsideLayout>
  )
}

export default Notion
