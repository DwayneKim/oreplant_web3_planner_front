'use client'
import Link from 'next/link';
import '../../topMenu/css/SubMenu.css';
import React from "react";
import CreateEventDataPage from "@/app/event/create/pages/CreateEventDataPage";
import "../create/css/CreateEventPage.css"

const SubMenuPage = () => {

    const [showPopup, setShowPopup] = React.useState(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-sub">
                    <li>
                        <Link href="/event" className="sub-link">이벤트 목록</Link>
                    </li>
                    <li>
                        <button
                            className="sub-link"
                            onClick={() => setShowPopup(true)}>
                            이벤트 등록 하기
                        </button>
                    </li>
                </div>
            </nav>

            {/* 팝업 모달 */}
            {showPopup && (
                <div className="modal-backdrop">
                    <div className="modal-content">
                        <CreateEventDataPage onClose={() => setShowPopup(false)} />
                    </div>
                </div>
            )}
        </>
    );
};

export default SubMenuPage;
