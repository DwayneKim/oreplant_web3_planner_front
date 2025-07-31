import axios from "axios";

export const baseClient = axios.create({
    // baseURL: "https://statistic.hypercent.co.kr/api/v1", // 변경 필요
    baseURL: "http://localhost:8173/api/v1",
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    },
});