import Image from "next/image";
import styles from "./page.module.css";
import TopMenuPage from "@/app/topMenu/pages/topMenuPage";

export default function Home() {
  return (
    <div>
        <TopMenuPage></TopMenuPage>
    </div>
  );
}
