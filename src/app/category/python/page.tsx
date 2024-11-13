import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"
import { PythonList } from "@/component/python/pythonList/PythonList"

const Python = () => {
  return (
    <AsideLayout>
      <MainPageTitle/>
      <PythonList/>
    </AsideLayout>
  )
}

export default Python