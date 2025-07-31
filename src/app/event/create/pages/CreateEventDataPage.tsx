'use client'
import React, { useEffect , useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "../css/CreateEventPage.css"

type CreateEventDataPageProps = {
    onClose: () => void;
};


const CreateEventDataPage  = ({ onClose }: CreateEventDataPageProps) => {
    const [pay, setPay] = useState<string>("NONE");
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [eventType, setEventType] = useState<string>("OTHER");
    const [rewardConditionType, setRewardConditionType] = useState<string>("INSTANT");

    return (
        <div className="event-page">
            <div className="event-form">
                <label>이벤트 이름</label>
                <input className="event-input" placeholder="이름을 입력하세요" />

                <label>이벤트 유/무료 여부</label>
                <select
                    value={pay}
                    onChange={(e) => setPay(e.target.value)}
                    className="event-select"
                >
                    <option value="NONE">없음</option>
                    <option value="FREE">무료</option>
                    <option value="PAID">유료</option>
                </select>

                <label>시작 시간</label>
                <DatePicker
                    selected={startTime}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm"
                    placeholderText="날짜 / 시간 선택"
                    className="event-datepicker"
                />

                <label>종료 시간</label>
                <DatePicker
                    selected={endTime}
                    onChange={(date) => setEndTime(date)}
                    showTimeSelect
                    dateFormat="yyyy-MM-dd HH:mm"
                    placeholderText="날짜 / 시간 선택"
                    className="event-datepicker"
                />

                <label>이벤트 타입</label>
                <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="event-select"
                >
                    <option value="SEASON_PASS">시즌 패스</option>
                    <option value="LEADERBOARD">리더보드</option>
                    <option value="OTHER">기타 이벤트</option>
                </select>

                <label>보상 수여 방식</label>
                <select
                    value={rewardConditionType}
                    onChange={(e) => setRewardConditionType(e.target.value)}
                    className="event-select"
                >
                    <option value="DAY">특정 날짜</option>
                    <option value="LEVEL">특정 레벨</option>
                    <option value="INSTANT">이벤트 달성 즉시</option>
                </select>

                <label>이벤트 번호</label>
                <input className="event-input" placeholder="필요 시 입력하세요" />
                <div className="button-row">
                    <button type="button" className="event-button">
                        이벤트 등록
                    </button>
                    <button type="button" className="event-button cancel" onClick={onClose}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateEventDataPage;