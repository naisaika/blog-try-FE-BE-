// import styles from "./page.module.css";

import TopLayout from "@/component/layout/topLayout/TopLayout";
import { TopPage } from "@/component/toppage/TopPage";


export default function Home() {
  return (
    <TopLayout>
        <div><TopPage/></div>
    </TopLayout>
  );
}