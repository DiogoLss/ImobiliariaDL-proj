import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import ImovelComFiltros from '../DTOs/imovelComFiltros';
import { Bairro } from '../models/bairro';
import { Imovel } from '../models/imovel';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    imoveis: Imovel[] = [];
    bairros: Bairro[] = [];
    imoveisCF?: ImovelComFiltros;

    constructor(){
        makeAutoObservable(this)
    }
    loadImoveis = async() =>{
        try{
            const imoveisCF = await agent.Imoveis.imoveisComFiltros();
            runInAction(()=>{
                this.imoveis = imoveisCF.imoveis;
                this.bairros = imoveisCF.bairros;
                this.imoveis.forEach(obj => {
                    this.imoveisCF?.imoveis.push(obj);
                });
                this.bairros.forEach(obj => {
                    this.imoveisCF?.bairros.push(obj);
                });
            })
            
        }catch(error){
            console.log(error); 
        }
    }
}