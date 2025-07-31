import TopMenuPage from "@/app/topMenu/pages/topMenuPage";
import EventDataPage from "@/app/event/pages/EventDataPage";
import SubMenuPage from "@/app/topMenu/pages/subMenuPage";

export default async function Page() {

    return (
        <div>
            <main>
                <TopMenuPage></TopMenuPage>
                <SubMenuPage></SubMenuPage>
                <EventDataPage></EventDataPage>
            </main>
        </div>
    );
}