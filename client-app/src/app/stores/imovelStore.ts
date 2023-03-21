import {makeAutoObservable,runInAction} from 'mobx';
import agent from '../api/agent';
import Filtros from '../DTOs/filtros';
import filtrosParameters, { FiltrosParametersNumbers } from '../DTOs/filtrosParameters';
import { Imovel } from '../models/imovel';

export default class imovelStore{
    //imoveis = new Map<string,Imovel>();
    mensagem: string = 'Imóveis'
    isOpenedMsg: string = 'Mais opções';
    selectedImovel: Imovel | undefined = undefined;
    imoveis: Imovel[] = [];
    isOpened: boolean = false;
    isHorizontal: boolean = true;
    RangeNum: FiltrosParametersNumbers = {
        max: null,
        min: null
    }
    filtros: Filtros = {
        cidades: [
            {id: 0,
            cidadeNome: ''}
        ],
        bairros: [
            {id: 0,
            nome: ''}
        ],
        tipos: [
            {id: 0,
            tipoDescricao: ''}
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
            runInAction(()=>{
                this.imoveis = imoveis;
                
                this.mensagem = 'Imóveis'
            })            
        }catch(error){
            console.log(error); 
        }
    }
    loadImoveisFiltered = async(filtros: filtrosParameters) =>{
        try{
            filtros.max = this.RangeNum.max
            filtros.min = this.RangeNum.min
            if(filtros.cidade == null && filtros.cidade == null && filtros.max == null && filtros.max == null && filtros.min == null){
                const imoveis = await agent.Imoveis.list()
                runInAction(()=>{
                    this.imoveis = imoveis; 
                })
            }else{
                const imoveis = await agent.Imoveis.filtered(filtros)
                if(imoveis.length > 0){
                    this.mensagem = 'Imóveis encontrados'
                    runInAction(()=>{
                        this.imoveis = imoveis; 
                    })
                }else{
                    this.mensagem = 'Não achamos imóveis com as suas especificações'
                }
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
    setRangeNum=(name: string, valor: string)=>{
        if(name === "max"){
            this.RangeNum.max = parseInt(valor)
        }else{
            this.RangeNum.min = parseInt(valor)
        }
    }
    openOrClose = (action: boolean) =>{
        this.isOpened = action;
        if(action){
            this.isOpenedMsg = 'Menos opções'
        }
        else{
            this.isOpenedMsg = 'Mais opções'
        }
    }
    updateHorizontal = (valor: boolean) =>{
        this.isHorizontal = valor;
    }
    private getImovel = (id: string) => {
        return this.imoveis.find(i => i.id === id);
    }
}