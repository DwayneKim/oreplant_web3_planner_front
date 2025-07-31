import TopMenuPage from "@/app/topMenu/pages/topMenuPage";
import ItemDataPage from "@/app/item/pages/ItemDataPage";

export default async function Page() {

    return (
        <div>
            <main>
                <TopMenuPage></TopMenuPage>
                <ItemDataPage></ItemDataPage>
            </main>
        </div>
    );
}