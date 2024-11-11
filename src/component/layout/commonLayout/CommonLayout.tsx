import { Footer } from "@/component/footer/commonfooter/CommonFooter";
import { SubHeader } from "../../header/subHeader/SubHeader";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SubHeader/>
        {children}
        <Footer/>
      </>
    );
  };
  
export default CommonLayout;