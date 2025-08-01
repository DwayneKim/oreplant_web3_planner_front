import TopMenuPage from "@/app/topMenu/pages/topMenuPage";
import SubMenuPage from "@/app/topMenu/pages/subMenuPage";
import DetailEventDataPage from "@/app/event/[id]/pages/DetailEventDataPage";

export default async function Page({ params }: { params: { id: string } }) {

    return (

        <div>
            <main>
                <TopMenuPage></TopMenuPage>
                <SubMenuPage></SubMenuPage>
                <div>이벤트 ID: {params.id}</div>
                <DetailEventDataPage id={params.id}/>
            </main>
        </div>
    );
}