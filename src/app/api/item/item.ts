import { baseClient } from "../client";


export const createItem = async (item: DefaultItemRequest) => {
    return baseClient.post(`/item`, item);
};

export const getItem = async (params: BaseCondition) => {
    return baseClient.get(`/item`,{params: params}
);
};

export const updateItem = async (itemId: number, item: DefaultItemRequest) => {
    return baseClient.put(`/item/${itemId}`, item);
};

export const unUsedItem = async (itemId: number) => {
    return baseClient.patch(`/item/${itemId}`);
};

export const deleteItem = async (itemId: number) => {
    return baseClient.delete(`/item/${itemId}`);
};
