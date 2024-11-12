import { CommonFooter } from "@/component/footer/commonfooter/CommonFooter";
import { SubHeader } from "../../header/subHeader/SubHeader";
import { Aside } from "@/component/aside/Aside";
import styles from "./AsideLayout.module.scss"

const AsideLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <SubHeader/>
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <section className={styles.mainSection}>{children}</section>
            <Aside/>
          </div>
        </main>
        <CommonFooter/>
      </>
    );
  };
  
export default AsideLayout;