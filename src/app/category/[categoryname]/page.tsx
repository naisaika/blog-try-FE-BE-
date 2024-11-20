import { getCategoryListData } from "@/app/api/category/route"
import { CategoryList } from "@/component/categoryList/CategoryList"
import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import { MainPageTitle } from "@/component/mainPageTitle/MainPageTitle"

const Category = async() => {

    const categoryData = await getCategoryListData();

  return (
    <AsideLayout>
      <MainPageTitle/>
      <CategoryList categoryData={categoryData}/>
    </AsideLayout>
  )
}

export default Category