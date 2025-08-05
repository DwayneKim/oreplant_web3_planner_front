'use client'
import React, { useEffect , useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "../../create/css/CreateEventPage.css"

type CreateEventDataPageProps = {
    onClose: () => void;
};


const CreateRewardDataPage  = ({ onClose }: CreateEventDataPageProps) => {
    const [rewardFunc, setRewardFunc] = useState<string>("NONE");
    const [rewardConditionType, setRewardConditionType] = useState<string>("NONE");
    const [rankType, setRankType] = useState<string | null>(null);
    const [day, setDay] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number | null>(null);
    const [level, setLevel] = useState<number | null>(null);
    const [startRank, setStartRank] = useState<number | null>(null);
    const [endRank, setEndRank] = useState<number | null>(null);
    const [otherRank, setOtherRank] = useState<number | null>(null);
    const [rankGroupId, setRankGroupId] = useState<number | null>(null);
    const [rewardType, setRewardType] = useState<string>("ITEM");
    const [rewardReferenceId, setRewardReferenceId] = useState<number | null>(null);
    const [pay, setPay] = useState<string>("NONE");
    const [startTime, setStartTime] = useState<Date | null>(null);
    const [endTime, setEndTime] = useState<Date | null>(null);
    const [eventType, setEventType] = useState<string>("OTHER");

    const itemId = [1,2,3,4,5,6,7]

    return (
        <div className="event-page">
            <div className="event-form">
                <label>보상 구성 방식</label>
                <select
                    value={rewardFunc}
                    onChange={(e) => setRewardFunc(e.target.value)}
                    className="event-select"
                >
                    <option value="NONE">없음</option>
                    <option value="NORMAL" title="일반 적인 달성 시에 바로 보상 수여">일반 형식</option>
                    <option value="RANK" title="특정 순위에 달성시에 보상 수여">랭크 형식</option>
                </select>
                {
                    rewardFunc == 'RANK' ?
                        <div>
                            <label>랭크 구간별 보상 설정</label>
                            <select
                                value={rankType ?? ''}
                                onChange={(e) => setRankType(e.target.value)}
                                className="event-select"
                            >
                                <option value="NONE">없음</option>
                                <option value="SINGLE" title="특정 1명만 부여">특정 인원</option>
                                <option value="PANEL" title="n ~ m 까지 인원 부여">특정 등수 구간</option>
                                <option value="PERCENT" title="상위 n% 부여">특정 퍼센트 구간</option>
                            </select>
                        </div>
                         : null
                }
                {
                    (rankType == 'SINGLE') ?
                        <div>
                            <label>특정 등수 입력</label>
                            <input
                                className="event-input"
                                placeholder="등수를 입력하세요"
                                value={rankGroupId ?? ''}
                                onChange={(e) => setRankGroupId(e.target.value === '' ? null : Number(e.target.value))}
                            />
                        </div> : (rankType == 'PANEL') ?
                            <div>
                                <label>특정 등수 입력</label>
                                <div className="input-row">
                                    <input
                                        className="event-input panel"
                                        placeholder="n부터"
                                        value={startRank ?? ''}
                                        onChange={(e) => setStartRank(e.target.value === '' ? null : Number(e.target.value))}
                                    />
                                    <h3>~</h3>
                                    <input
                                        className="event-input panel"
                                        placeholder="m까지"
                                        value={endRank ?? ''}
                                        onChange={(e) => setEndRank(e.target.value === '' ? null : Number(e.target.value))}
                                    />
                                </div>
                            </div> : (rankType == 'PERCENT') ?
                            <div>
                                <label>퍼센트 입력</label>
                                <div className="input-row">
                                    <input
                                        className="event-input"
                                        placeholder="등수를 입력하세요"
                                        value={otherRank ?? ''}
                                        onChange={(e) => setOtherRank(e.target.value === '' ? null : Number(e.target.value))}
                                    />
                                    <h3 style={{'marginLeft' : "20px", "marginRight" : "20px", "marginTop" : "10px"}}>%</h3>
                                </div>
                            </div> : null

                }
                <label>보상 수여 방법</label>
                <select
                    value={rewardConditionType}
                    onChange={(e) => setRewardConditionType(e.target.value)}
                    className="event-select"
                >
                    <option value="NONE">없음</option>
                    <option value="DAY" title="특정 일에 달성 시에 수여">날짜</option>
                    <option value="LEVEL" title="특정 레벨에 달성 시에 수여">레벨</option>
                    <option value="INSTANT" title="특정 조건에 달성 시에 수여">조건</option>
                </select>
                {
                    rewardConditionType === "DAY" ?
                        <input
                            className="event-input"
                            placeholder="요일을 입력하세요"
                            value={day ?? ''}
                            onChange={(e) => setDay(e.target.value === '' ? null : Number(e.target.value))}
                        /> :
                        rewardConditionType === "LEVEL" ? <input
                                className="event-input"
                                placeholder="레벨을 입력하세요"
                                value={level ?? ''}
                                onChange={(e) => setLevel(e.target.value === '' ? null : Number(e.target.value))}
                            /> :
                            rewardConditionType === "INSTANT" ? null : null
                }

                <label>보상 타입</label>
                <select
                    value={rewardType}
                    onChange={(e) => setRewardType(e.target.value)}
                    className="event-select"
                >
                    <option value="NONE">없음</option>
                    <option value="GP">GP</option>
                    <option value="PP">PP</option>
                    <option value="ITEM">아이템</option>
                </select>
                {
                    rewardType === "ITEM" ?
                        <div>
                        <select
                            value={rewardReferenceId ?? ''}
                            onChange={(e) => setRewardReferenceId(e.target.value === '' ? null : Number(e.target.value))}
                            className="event-select"
                        >
                            {itemId.map((id, index) => (
                                <option key={index} value={id}>
                                    {id}
                                </option>
                            ))}
                        </select>
                        </div> : null
                }
                <label>수량</label>
                <input
                    className="event-input"
                    placeholder="수량을 입력하세요"
                    value={quantity ?? ''}
                    onChange={(e) => setQuantity(e.target.value === '' ? null : Number(e.target.value))}
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
                <div className="button-row">
                    <button type="button" className="event-button">
                        이벤트 보상 등록
                    </button>
                    <button type="button" className="event-button cancel" onClick={onClose}>
                        닫기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateRewardDataPage;