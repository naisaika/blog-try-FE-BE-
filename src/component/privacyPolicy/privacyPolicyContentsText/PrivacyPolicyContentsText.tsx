import Link from "next/link"
import styles from "./PrivacyPolicyContentsText.module.scss"

export const CONTENTS_TEXT = [
    {
        id: 0,
        text: (
            <p className={styles.contentsText}>
                当サイトでは、第三者配信の広告サービス（Googleアドセンス、A8.net、Amazonアソシエイト）を利用しています。<br></br>
                このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 
                『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。<br></br>
                またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
                <Link href="#" target="_blank" className={styles.contentsLink}>こちら</Link>をご覧ください。
            </p>
        )
    },
    {
        id: 1,
        text: (
            <p className={styles.contentsText}>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br></br>
                このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。<br></br>
                このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br></br>
                この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br></br>
                この規約に関して、詳しくは<Link href="#" target="_blank" className={styles.contentsLink}>こちら</Link>をご覧ください。
            </p>
        )
    },
    {
        id: 2,
        text: (
            <div>
                <p className={styles.contentsText}>
                    当サイトでは、スパム・荒らしへの対応として、コメントの際に使用されたIPアドレスを記録しています。<br></br>
                    これはブログの標準機能としてサポートされている機能で、スパム・荒らしへの対応以外にこのIPアドレスを使用することはありません。<br></br>
                    また、メールアドレスとURLの入力に関しては、任意となっております。<br></br>
                    全てのコメントは管理人が事前にその内容を確認し、承認した上での掲載となりますことをあらかじめご了承下さい。<br></br>
                    加えて、次に掲げる内容を含むコメントは管理人の裁量によって承認せず、削除する事があります。
                </p>
                <ul className={styles.contentsText}>
                    <li>当サイトからのご連絡や業務のご案内やご質問に対する回答</li>
                    <li>ご注文いだいた商品を発送する場合</li>    
                    <li>禁制品の取引に関するものや、他者を害する行為の依頼など、法律によって禁止されている物品、行為の依頼や斡旋などに関するもの。</li>    
                    <li>その他、公序良俗に反し、または管理人によって承認すべきでないと認められるもの。</li>   
                </ul>
            </div>
        )
    },
    {
        id: 3,
        text: (
            <div>
                <p className={styles.contentsText}>
                    当サイトは、アフィリエイトプログラムにより商品をご紹介致しております。<br></br>
                    （Amazonのアソシエイトとして、当メディアは適格販売により収入を得ています。）<br></br>
                    アフィリエイトプログラムとは、商品及びサービスの提供元と業務提携を 結び商品やサービスを紹介するインターネット上のシステムです。<br></br>
                    従いまして、当サイトの商品は当サイトが販売している訳ではありません。
                </p>
                <p className={styles.contentsText}>
                    お客様ご要望の商 品、お支払い等はリンク先の販売店と直接のお取引となりますので、特定商取引法に基づく表記につきましてはリンク先をご確認頂けますようお願い致します。<br></br>
                    商品の価格 商品の詳細 消費税 送料 在庫数等の詳細は時として変わる場合も御座います。<br></br>
                    また、返品・返金保証に関しましてもリンク先の販売元が保証するものです。当サイトだけではなくリンク 先のサイトも良くご確認頂けますようお願い致します。<br></br>
                    また、当サイトの掲載情報をご利用頂く場合には、お客様のご判断と責任におきましてご利用頂けますようお願い致します。当サイトでは、一切の責任を負いかねます事ご了承願います。
                </p>
                <p className={styles.contentsText}>
                    尚、掲載商品に関するお問合せはリンク先に御座います企業宛までお願い致します。当サイト管理者側ではお答え致しかねます事、ご了承ください。
                </p>
            </div>
        )
    },
]

interface PrivacyPolicyContentsTextProps {
    id: number;
}

export const PrivacyPolicyContentsText = ({id}:PrivacyPolicyContentsTextProps) => {

    const contents = CONTENTS_TEXT.find((text) => text.id === id)

  return (
    <>{contents?.text}</>
  )
}
