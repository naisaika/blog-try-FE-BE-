import { TopFooter } from "@/component/footer/topFooter/TopFooter";
import { TopHeader } from "@/component/header/topHeader/TopHeader";

const TopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <TopHeader />
        {children}
        <TopFooter />
      </>
    );
  };
  
export default TopLayout;