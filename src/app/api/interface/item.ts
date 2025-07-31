interface DefaultItemRequest{
    itemDefId: string;
    level: number;
    name: string;
    price: number;
    pay: string;
    rared: string;
    storeRegistrationPrice: number;
    itemType: string;
    rating: string; //1,2,3,4,5,6
}

interface BaseCondition{
    minPrice: number;
    maxPrice: number;
    minStorePrice: number;
    maxStorePrice: number;
    pay: string;
    rared: string;
    storeRegistrationPrice: number;
    used:boolean;
    itemType: string;
    rating: string; //1,2,3,4,5,6
}