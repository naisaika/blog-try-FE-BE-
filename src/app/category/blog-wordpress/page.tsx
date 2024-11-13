import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { WordPressList } from "@/component/wordPress/wordPressList/WordPressList"

const BlogWordpress = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <WordPressList/>
    </AsideLayout>
  )
}

export default BlogWordpress
