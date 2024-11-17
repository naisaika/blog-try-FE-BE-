import { GasList } from "@/component/gas/gasList/GasList"
import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"

const Gas = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <GasList/>
    </AsideLayout>
  )
}

export default Gas