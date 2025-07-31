import { baseClient } from "../client";


export const createEvent = async (event: CreateEventRequest) => {
    return baseClient.post(`/event`, event);
};

export const getEventList = async (size: number, page: number, sort: string) => {
    return baseClient.get(`/event`,{params: {
        size: size,
        page: page,
        sort: sort,
    }}
);
};

export const updateEvent = async (eventId: number, event: UpdateEventRequest) => {
    return baseClient.put(`/event/${eventId}`, event);
};

export const updateEventTime = async (eventId: number, event: EventTimeRequest) => {
    return baseClient.patch(`/event/${eventId}/time`, event);
};

export const deleteEvent = async (eventId: number) => {
    return baseClient.delete(`/event/${eventId}`);
};

export const createEventReward = async (eventId: number, event: CreateEventRewardRequest) => {
    return baseClient.post(`/event/${eventId}/reward`, event);
};

export const updateEventReward = async (eventId: number, event: UpdateEventRewardRequest) => {
    return baseClient.put(`/event/${eventId}`, event);
};

export const deleteEventReward = async (eventRewardId: number, rewardFunc: string) => {
    return baseClient.delete(`/event/reward/${eventRewardId}`, {params: {
            rewardFunc : rewardFunc
    }})
};