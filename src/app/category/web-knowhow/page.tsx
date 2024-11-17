import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { WebKnowhowList } from "@/component/webKnowhow/webKnowhowList/WebKnowhowList"

const Gas = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <WebKnowhowList/>
    </AsideLayout>
  )
}

export default Gas