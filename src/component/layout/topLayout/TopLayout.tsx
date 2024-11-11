
import { Footer } from "@/component/footer/commonfooter/CommonFooter";
import { TopHeader } from "@/component/header/topHeader/TopHeader";

const TopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <TopHeader />
        {children}
        <Footer />
      </>
    );
  };
  
export default TopLayout;