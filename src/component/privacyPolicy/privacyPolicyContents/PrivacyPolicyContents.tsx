import Link from 'next/link'
import styles from "./PrivacyPolicyContents.module.scss"
import { AnchorLink } from '../anchorLink/AnchorLink'
import { PRIVACY_POLICY_CONTENTS_LISTS } from '@/data/data'

export const PrivacyPolicyContents = () => {
  return (
    <>
        <div className={styles.notionLinkContainer}>
            <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.notionLink}>
                今話題の Notion を使ってみる
            </Link>
        </div>
        <div>
            <AnchorLink lists={PRIVACY_POLICY_CONTENTS_LISTS}/>
        </div>
    </>

  )
}
