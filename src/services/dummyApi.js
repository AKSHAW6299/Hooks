import { axiosInstance } from "./axiosInstance";

let URL = `https://jsonplaceholder.typicode.com`

export async function apiGetDummyData() {
    return await axiosInstance.get(`${URL}/posts`)
}