import { CommonFooter } from "@/component/footer/commonfooter/CommonFooter";
import { SubHeader } from "../../header/subHeader/SubHeader";
import styles from "./ContentsAsideLayout.module.scss"
import { ContentsAside } from "@/component/aside/contentsAside/ContentsAside";

const ContentsAsideLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SubHeader/>
          <main className={styles.main}>
            <div className={styles.mainWrapper}>
              <section className={styles.mainSection}>{children}</section>
              <ContentsAside/>
            </div>
          </main>
        <CommonFooter/>
      </>
    );
  };
  
export default ContentsAsideLayout;