'use client'
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '../css/TopMenu.css';

const TopMenuPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 시 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">OrePlant Web3 백엔드 시스템</div>

                <div className="dropdown-wrapper" ref={dropdownRef}>
                    <button
                        className="dropdown-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        게임 데이터 설정 ▾
                    </button>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li><Link href="/event">이벤트 설정</Link></li>
                            <li><Link href="/item">아이템 설정</Link></li>
                            <li><Link href="/reward">보상 설정</Link></li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default TopMenuPage;