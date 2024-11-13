import { HtmlCssJavascriptList } from "@/component/htmlcssjavascript/htmlcssjavascriptList/HtmlCssJavascriptList"
import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"

const HtmlCssJavascript = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <HtmlCssJavascriptList/>
    </AsideLayout>
  )
}

export default HtmlCssJavascript