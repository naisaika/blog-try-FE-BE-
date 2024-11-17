import { BreadCrumb } from "../breadCrumb/BreadCrumb"
import styles from "./PrivacyPolicyPage.module.scss"
import { SnsShare } from "../snsShare/SnsShare"
import { PrivacyPolicyContents } from "./privacyPolicyContents/PrivacyPolicyContents"

export const PrivacyPolicyPage = () => {
  return (
    <div className={styles.privacyPolicySection}>
        <BreadCrumb/>
        <h1 className={styles.privacyPolicyTitle}>プライバシーポリシー</h1>
        <PrivacyPolicyContents/>
        <SnsShare/>
    </div>
  )
}
