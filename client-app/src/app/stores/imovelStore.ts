import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import { Imovel } from '../models/imovel';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    imoveis: Imovel[] = [];

    constructor(){
        makeAutoObservable(this)
    }
    loadImoveis = async() =>{
        try{
            const imoveis = await agent.Imoveis.list();
            runInAction(()=>{
                this.imoveis = imoveis;
            })
            
        }catch(error){
            console.log(error); 
        }
    }
}