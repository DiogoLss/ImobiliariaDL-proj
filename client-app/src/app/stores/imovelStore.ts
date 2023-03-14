import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import Filtros from '../DTOs/filtros';
import filtrosParameters from '../DTOs/filtrosParameters';
import { Imovel } from '../models/imovel';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    mensagem: string = 'Imóveis'
    selectedImovel: Imovel | undefined = undefined;
    imoveis: Imovel[] = [];
    isFiltered: boolean = false;
    filtroPage: filtrosParameters = {
        cidade: null,
        bairro: null,
        tipo:null,
        max:null,
        min:null
    }
    filtros: Filtros = {
        cidades: [
            {id: 0,
            cidadeNome: 'Nada'}
        ],
        bairros: [
            {id: 0,
            nome: 'Nada'}
        ],
        tipos: [
            {id: 0,
            tipoDescricao: 'Nada'}
        ],
        valorMax: 2,
        valorMin: 1
    }

    constructor(){
        makeAutoObservable(this)
    }
    loadImoveis = async() =>{
        try{
            const imoveis = await agent.Imoveis.list();
            console.log('imov')
            runInAction(()=>{
                this.imoveis = imoveis;
                
                this.mensagem = 'Imóveis'
            })
            this.isFiltered = false;
            
        }catch(error){
            console.log(error); 
        }
    }
    loadImoveisFiltered = async(filtros: filtrosParameters) =>{
        try{
            const imoveis = await agent.Imoveis.filtered(filtros)
            console.log('filtr')
            
            if(imoveis.length > 0){
                this.mensagem = 'Imóveis encontrados'
                runInAction(()=>{
                    this.imoveis = [];
                    this.imoveis = imoveis;
                    
                })
            this.isFiltered = true;
            }else{
                this.mensagem = 'Não achamos imóveis com as suas especificações'
            }
        }catch(error){
            console.log(error); 
        }
    }
    loadFilters = async() =>{
        try{
            const filtros = await agent.Imoveis.filtros();
            this.filtros = filtros
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
    updateFiltro = (filtro: filtrosParameters) =>{
        this.filtroPage = filtro
    }
    private getImovel = (id: string) => {
        return this.imoveis.find(i => i.id === id);
    }
}