'use client'
import "../css/DetailEventPage.css"
import {ScriptProps} from "next/script";
import {useState} from "react";

interface DetailEventResponse {
    eventName: string;
    paid: string;
    startTime: string;
    endTime: string;
    eventType: string;
    rewardConditionType: string;
    eventRewards: EventRewardResponse[]
}

interface EventRewardResponse{
    rewardDay: number | null;
    rewardLevel: number | null;
    id: number;
    rewardType: string;
    rewardValue: string;
    quantity: number;
    rewardReferenceId: number;
}


const DetailEventDataPage = ({ id }: ScriptProps) => {

    const [detailEventData, setDetailEventData] = useState<DetailEventResponse>();

    const mockEventDetails: DetailEventResponse =
        {
            eventName: "출석 이벤트",
            paid: "FREE",
            startTime: "2025-08-01T00:00:00Z",
            endTime: "2025-08-15T23:59:59Z",
            eventType: "SEASON_PASS",
            rewardConditionType: "DAILY",
            eventRewards: [
                {
                    id: 1,
                    rewardDay: 1,
                    rewardLevel: null,
                    rewardType: "ITEM",
                    rewardValue: "포션",
                    quantity: 5,
                    rewardReferenceId: 1001
                },
                {
                    id: 2,
                    rewardDay: 2,
                    rewardLevel: null,
                    rewardType: "GOLD",
                    rewardValue: "1000",
                    quantity: 1,
                    rewardReferenceId: 1002
                }
            ]
        };


    return (
        <div className="event-container">
            <h1 className="event-title">이벤트: {mockEventDetails.eventName}</h1>
            <div className="event-info">
                <p><strong>결제 구성:</strong> {mockEventDetails.paid === 'FREE' ? '무료' : '유료'}</p>
                <p><strong>시작 시간:</strong> {new Date(mockEventDetails.startTime).toLocaleString()}</p>
                <p><strong>종료 시간:</strong> {new Date(mockEventDetails.endTime).toLocaleString()}</p>
                <p><strong>이벤트 타입:</strong> {mockEventDetails.eventType}</p>
                <p><strong>보상 조건:</strong> {mockEventDetails.rewardConditionType}</p>
            </div>

            <hr className="divider" />

            <div className="reward-section">
                <h2 className="reward-title">보상 목록</h2>
                {mockEventDetails.eventRewards.map((reward) => (
                    <div key={reward.id} className="reward-card">
                        <p><strong>보상 획득 시점:</strong> {reward.rewardDay ?? 'N/A'}</p>
                        <p><strong>보상 타입:</strong> {reward.rewardType}</p>
                        <p><strong>보상 값:</strong> {reward.rewardValue}</p>
                        <p><strong>수량:</strong> {reward.quantity}</p>
                        {reward.rewardType === "ITEM" && (
                            <p><strong>참고 아이템 ID:</strong> {reward.rewardReferenceId}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailEventDataPage;