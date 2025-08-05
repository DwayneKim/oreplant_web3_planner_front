import TopMenuPage from "@/app/topMenu/pages/topMenuPage";
import SubMenuPage from "@/app/event/pages/subMenuPage";
import DetailEventDataPage from "@/app/event/[id]/pages/DetailEventDataPage";
import DetailSubMenuPage from "@/app/event/[id]/pages/detailSubMenuPage";

export default async function Page({ params }: { params: { id: string } }) {

    return (

        <div>
            <main>
                <TopMenuPage></TopMenuPage>
                <DetailSubMenuPage></DetailSubMenuPage>
                <DetailEventDataPage id={params.id}/>
            </main>
        </div>
    );
}