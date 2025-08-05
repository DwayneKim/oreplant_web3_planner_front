'use client'
import Link from 'next/link';
import '../../../topMenu/css/SubMenu.css';
import React from "react";
import CreateEventDataPage from "@/app/event/create/pages/CreateEventDataPage";
import "../../create/css/CreateEventPage.css"
import CreateRewardDataPage from "@/app/event/[id]/pages/CreateRewardDataPage";

const DetailSubMenuPage = () => {

    const [showPopup, setShowPopup] = React.useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-sub">
                    <li>
                        <Link href="/event" className="sub-link">이벤트 목록으로 돌아가기</Link>
                    </li>
                    <li>
                        <button
                            className="sub-link"
                            onClick={() => setShowPopup(true)}>
                            보상 추가 하기
                        </button>
                    </li>
                </div>
            </nav>

            {/* 팝업 모달 */}
            {showPopup && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <CreateRewardDataPage onClose={() => setShowPopup(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default DetailSubMenuPage;
