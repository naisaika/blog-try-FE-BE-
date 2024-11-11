import { NotioneerFooter } from "@/component/footer/notioneerfooter/NotioneerFooter";
import { SubHeader } from "../../header/subHeader/SubHeader";

const NotioneerLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SubHeader />
        {children}
        <NotioneerFooter />
      </>
    );
  };
  
export default NotioneerLayout;