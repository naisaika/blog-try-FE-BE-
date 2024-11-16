import AsideLayout from "@/component/layout/asideLayout/AsideLayout"
import {FirstPostsList} from "@/component/newPostsList/firstPostList/FirstPostList"

const NewPosts = () => {
  return (
    <AsideLayout>
      <FirstPostsList/>
    </AsideLayout>
  )
}

export default NewPosts
