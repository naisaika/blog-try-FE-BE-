import { ArduinoList } from "@/component/arduino/ArduinoList/ArduinoList"
import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"

const Arduino = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <ArduinoList/>
    </AsideLayout>
  )
}

export default Arduino