import { SubHeader } from "../../header/subHeader/SubHeader";
import { Footer } from "@/component/footer/Footer";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SubHeader />
        {children}
        <Footer />
      </>
    );
  };
  
export default CommonLayout;