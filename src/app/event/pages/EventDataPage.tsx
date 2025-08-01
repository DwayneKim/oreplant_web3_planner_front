'use client'
import React, { useEffect , useState } from "react";
import "../css/EventPage.css"
import {Props} from "next/script";

type Event = {
    id: number;
    name: string;
    type: string;
    startTime: string;
    endTime: string;
};

const mockEvents: Event[] = Array.from({ length: 53 }, (_, index) => ({
    id: index + 1,
    name: `이벤트 ${index + 1}`,
    type: index % 2 === 0 ? "RANK" : "PERCENT",
    startTime: `2025-07-${(index % 30) + 1} 12:00`,
    endTime: `2025-07-${(index % 30) + 2} 23:59`,
}));


const EventDataPage = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [page, setPage] = useState(0);
    const size = 10;

    const totalPages = Math.ceil(mockEvents.length / size);

    useEffect(() => {
        const startIdx = page * size;
        const endIdx = startIdx + size;
        setEvents(mockEvents.slice(startIdx, endIdx));
    }, [page]);

    return (
        <div className="stat-container">
            <h2>이벤트 페이지</h2>
            <div className="event-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card" onClick={() => {
                        if (typeof window !== 'undefined') {
                            window.location.href = `/event/${event.id}`;
                        }
                    }}>
                        <p>이벤트 이름 : {event.name}</p>
                        <p>이벤트 타입 : {event.type}</p>
                        <p>이벤트 시작 시간 : {event.startTime}</p>
                        <p>이벤트 종료 시간 : {event.endTime}</p>
                    </div>
                ))}
            </div>

            <div className="pagination">
                <button disabled={page === 0} onClick={() => setPage((p) => p - 1)}>
                    이전
                </button>
                <span>
                    {page + 1} / {totalPages}
                </span>
                <button
                    disabled={page + 1 >= totalPages}
                    onClick={() => setPage((p) => p + 1)}
                >
                    다음
                </button>
            </div>
        </div>
    );
};

export default EventDataPage;