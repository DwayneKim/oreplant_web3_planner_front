interface CreateEventRequest {
    eventName: string;
    paid: string;
    startTime: string;
    endTime: string;
    eventType: string;
    rewardConditionType: string;
    eventNumber: string | null;
}

interface UpdateEventRequest {
    eventName: string;
    paid: string;
    startTime: string;
    endTime: string;
    eventType: string;
    rewardConditionType: string;
}

interface EventTimeRequest {
    startTime: string;
    endTime: string;
}

interface CreateEventRewardRequest {
    rewardFunc: string;
    rewardDay: number | null;
    rewardLevel: number | null;
    rewardType: string;
    rewardValue: string;
    rewardReferenceId: number | null;
    quantity: number;
    startRank: number | null;
    endRank: number | null;
    otherRank: number | null;
    rankGroupId: number | null;
    rankType: string | null;
}

interface UpdateEventRewardRequest {
    rewardFunc: string;
    rewardDay: number | null;
    rewardLevel: number | null;
    rewardType: string;
    rewardValue: string;
    rewardReferenceId: number | null;
    quantity: number;
    startRank: number | null;
    endRank: number | null;
    otherRank: number | null;
    rankGroupId: number | null;
    rankType: string | null;
}