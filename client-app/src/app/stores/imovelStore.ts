import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import ImovelComFiltros from '../DTOs/imovelComFiltros';
import { Bairro } from '../models/bairro';
import { Cidade } from '../models/cidade';
import { Imovel } from '../models/imovel';
import { Tipo } from '../models/tipo';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    selectedImovel: Imovel | undefined = undefined;
    imoveis: Imovel[] = [];
    bairros: Bairro[] = [];
    cidades: Cidade[] = [];
    tipos: Tipo[] = [];
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
                this.cidades = imoveisCF.cidades;
                this.tipos = imoveisCF.tipos;
                // this.imoveis.forEach(obj => {
                //     this.imoveisCF?.imoveis.push(obj);
                // });
                // this.bairros.forEach(obj => {
                //     this.imoveisCF?.bairros.push(obj);
                // });
            })
            
        }catch(error){
            console.log(error); 
        }
    }
    loadImovel = async(id: string) =>{
        let imovel = this.getImovel(id);
        if(imovel){
            this.selectedImovel = imovel;
            return this.selectedImovel;
        }
        else{
            imovel = await agent.Imoveis.details(id);
            runInAction(()=>{
                this.selectedImovel = imovel;
                return this.selectedImovel;
            })
        }
    }
    private getImovel = (id: string) => {
        return this.imoveis.find(i => i.id === id);
    }
}