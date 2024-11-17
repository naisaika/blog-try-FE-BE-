import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { UdemyList } from "@/component/udemy/udemyList/UdemyList"

const Gas = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <UdemyList/>
    </AsideLayout>
  )
}

export default Gas