import { BreadCrumb } from "../breadCrumb/BreadCrumb"
import { SnsShare } from "../snsShare/SnsShare"
import { FormInput } from "./formInput/FormInput"
import styles from "./ContactFormSection.module.scss"

export const ContactFormSection = () => {
  return (
    <div className={styles.contactFormSection}>
      <BreadCrumb/>
      <h1 className={styles.contactFormTitle}>お問い合わせ</h1>
      <FormInput/>
      <SnsShare/>
    </div>
  )
}
