import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import Filtros from '../DTOs/filtros';
import filtrosParameters from '../DTOs/filtrosParameters';
import { Bairro } from '../models/bairro';
import { Cidade } from '../models/cidade';
import { Imovel } from '../models/imovel';
import { Tipo } from '../models/tipo';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    mensagem: string = 'Imoveis'
    selectedImovel: Imovel | undefined = undefined;
    imoveis: Imovel[] = [];
    bairros: Bairro[] = [];
    cidades: Cidade[] = [];
    tipos: Tipo[] = [];
    imoveisCF?: Filtros;

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
    loadImoveisFiltered = async(filtros: filtrosParameters) =>{
        try{
            let str =
            `/Imoveis/Filtrados?${filtros.cidade ? `Cidade=${filtros.cidade}` : ''}${filtros.bairro ? `${filtros.cidade ? '&' : ''}Bairro=${filtros.bairro}` : ''}${filtros.tipo ? `${filtros.bairro ? '&' : ''}Tipo=${filtros.tipo}` : ''}`

            console.log(str)

            const imoveis = await agent.Imoveis.filtered(filtros,str)
            console.log(imoveis.length)
            
            if(imoveis){
                runInAction(()=>{
                    this.imoveis = [];
                    this.imoveis = imoveis;
                })
            }else{
                this.imoveis = []
                this.mensagem = 'Não achamos imóveis nas suas especificações'
            }
        }catch(error){
            console.log(error); 
        }
    }
    loadFilters = async() =>{
        try{
            const imoveisCF = await agent.Imoveis.filtros();
            runInAction(()=>{
                this.bairros = imoveisCF.bairros;
                this.cidades = imoveisCF.cidades;
                this.tipos = imoveisCF.tipos;
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