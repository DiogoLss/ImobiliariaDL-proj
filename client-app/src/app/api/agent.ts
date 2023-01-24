import axios, { AxiosResponse } from 'axios';
import { Imovel } from '../models/imovel';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'https://localhost:7053/api';

axios.interceptors.response.use(async response => {
    try{
        await sleep(1000);
        return response;
    }catch (error){
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body:{}) => axios.post<T>(url,body).then(responseBody),
    put: <T> (url: string, body:{}) => axios.put<T>(url,body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody)
}

const Imoveis = {
    list: () => requests.get<Imovel[]>('/Imoveis'),
    details: (id: string) => requests.get<Imovel>(`/imoveis/${id}`),
    create: (imovel: Imovel) => axios.post<void>('/imoveis/',imovel),
    update: (imovel: Imovel) => axios.put<void>(`/imoveis/${imovel.id}`, imovel),
    delete: (id: string) => axios.delete<void>(`/imoveis/${id}`)
}
const agent = {
    Imoveis
}
export default agent;