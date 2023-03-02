import axios, { AxiosResponse } from 'axios';
import Filtros from '../DTOs/filtros';
import FiltrosParameters from '../DTOs/filtrosParameters';
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
    filtros: () => requests.get<Filtros>('/Imoveis/Filters'),
    filtered: (filtros: FiltrosParameters) => axios.get<Imovel[]>('/Imoveis/Filtrados',{
        params: {
            cidade: filtros.cidade,
            bairro: filtros.bairro,
            tipo: filtros.tipo,
            precoMin: filtros.min,
            precoMax: filtros.max
        }
    }).then(responseBody),
    details: (id: string) => requests.get<Imovel>(`/Imoveis/${id}`),
    create: (imovel: Imovel) => axios.post<void>('/imoveis/',imovel),
    update: (imovel: Imovel) => axios.put<void>(`/imoveis/${imovel.id}`, imovel),
    delete: (id: string) => axios.delete<void>(`/imoveis/${id}`)
}
const agent = {
    Imoveis
}
export default agent;