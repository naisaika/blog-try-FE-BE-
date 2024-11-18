import Link from 'next/link'
import styles from "./PrivacyPolicyContents.module.scss"
import { AnchorLink } from '../anchorLink/AnchorLink'
import { PRIVACY_POLICY_CONTENTS_LISTS } from '@/data/data'
import { PrivacyPolicyContentsText } from '../privacyPolicyContentsText/PrivacyPolicyContentsText'

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
      {PRIVACY_POLICY_CONTENTS_LISTS.map((list) => (
        <div key={list.id} id={list.anchorlink}>
          <h3 className={styles.listTitle}>{list.title}</h3>
          <PrivacyPolicyContentsText id={list.id}/>
        </div>
      ))}
    </>
  )
}