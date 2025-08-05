import TopMenuPage from "@/app/topMenu/pages/topMenuPage";
import SubMenuPage from "@/app/event/pages/subMenuPage";
import CreateEventDataPage from "@/app/event/create/pages/CreateEventDataPage";

export default async function Page() {

    return (
        <div>
            <main>
                <TopMenuPage></TopMenuPage>
                <SubMenuPage></SubMenuPage>
            </main>
        </div>
    );
}