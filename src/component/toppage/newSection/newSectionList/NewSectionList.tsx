import { TopDataType } from "../../../../data/type";
import Image from "next/image";
import styles from "./NewSectionList.module.scss";

interface NewSectionListProps {
    clickTitle: string;
    newData: TopDataType[];
    popularData: TopDataType[];
}

export const NewSectionList = ({ clickTitle, newData, popularData }: NewSectionListProps) => {

    return (
        <div>
            {clickTitle === "NEW" ? (
            <ul className={styles.newSectionList}>
                {newData? (
                    newData.map((data) => (
                        <li key={data.id} className={styles.newSectionItem}>
                            <Image src={data.img} alt="最新記事画像" width={316} height={182} priority className={styles.newSectionImg}/>
                            <span className={styles.newSectionText}>{data.title}</span>
                        </li>
                    ))
                ) : (
                    <p>新しいデータがありません。</p>
                )}
            </ul>
            ) : (
                <ul className={styles.newSectionList}>
                    {popularData? (
                        popularData.map((data) => (
                            <li key={data.id} className={styles.newSectionItem}>
                                <Image src={data.img} alt="人気記事画像" width={316} height={182} priority className={styles.newSectionImg}/>
                                <span className={styles.newSectionText}>{data.title}</span>
                            </li>
                        ))
                    ) : (
                        <p>人気のデータがありません。</p>
                    )}
                </ul>
            )}
        </div>
    );
};