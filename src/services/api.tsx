import axios from 'axios';
import { RegisterDayModel } from '../types/types';

const instanceAxios = (auth: string) => {
    return axios.create({
        baseURL: 'https://api.notion.com',
        headers: {
            'Notion-Version': '2022-06-28',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth}`
        }
    })
}

export const getData = async (authorization: string) => {
    const instance = instanceAxios(authorization);
    return (await instance.post('/v1/databases/c57d98830f7e44f4a0ebca12bcbb33b5/query')).data;
}