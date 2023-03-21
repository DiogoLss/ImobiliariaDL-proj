import { observer } from "mobx-react";
import { ChangeEvent, ChangeEventHandler, SelectHTMLAttributes, useEffect, useState } from "react";
import FiltrosParameters from "../../../app/DTOs/filtrosParameters";
import { useStore } from "../../../app/stores/stores";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";

export default observer( function ImoveisFilter2(){
    const {imoveisStore} = useStore();
    const {loadImoveisFiltered ,loadFilters, filtros, isOpened,openOrClose,isOpenedMsg} = imoveisStore;
    const [arrow,setArrow] =useState<string>('dropdown-toggle');
    const [filter, setFilter] = useState<FiltrosParameters>({
        cidade: null,
        bairro: null,
        tipo: null,
        max: null,
        min: null
    })

    //CARREGA OS FILTROS
    useEffect(()=>{
        if(
            filtros.cidades.length <= 1
            || filtros.bairros.length <= 1
            || filtros.tipos.length <= 1
        )loadFilters();
      }, [loadFilters, filtros])

      //SETTA OS VALORES ESCOLHIDOS NO DROPDOWN
      function handleChangeSelect
      (event: React.ChangeEvent<HTMLSelectElement>){
        const {name, value} = event.target;
        setFilter({...filter, [name]: value})
      }

      //ABRE OU FECHA A DIV COM FILTROS DETALHADOS
      function openOpts(){
        if(isOpened){
            openOrClose(false)
            setArrow('dropdown-toggle')
        }else{
            openOrClose(true)
            setArrow('dropdown-toggleUpwards')
        }
      }
      function handleFilter(){
        loadImoveisFiltered(filter)
      }

    return(
        <>
            <h4 className="titFiltro">Encontre o imóvel de seus sonhos!</h4>
            <div className="row outsideButtonsDivBox">
                <div className="col-6 outsideButtonsDiv">
                    <button className="buttonFilter btn outsideButtons">Venda</button>
                </div>
                <div className="col-6 outsideButtonsDiv">
                    <button className="buttonFilter btn outsideButtons">Aluguel</button>
                </div>
            </div>
            <div className="boxFilter">
                <div className="itemsFilters row">
                    <div className="col-md-3 dropdownDiv">
                        <select onChange={handleChangeSelect} name="cidade" id="">
                        <option value="0" key='0'>Cidade</option>
                            {
                                filtros.cidades.map((cidade)=>(
                                        <option className="dropdownOptionFilter" key={cidade.id} value={cidade.id}>{cidade.cidadeNome}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-3 dropdownDiv">
                        <select onChange={handleChangeSelect} name="bairro" id="">
                        <option value="0" key='0'>Bairro</option>
                            {
                                filtros.bairros.map((bairro)=>(
                                        <option className="dropdownOptionFilter" key={bairro.id} value={bairro.id}>{bairro.nome}</option>
                                ))
                            }
                        </select>
                    </div>                    
                    <div className="col-md-3 dropdownDiv">
                        <select onChange={handleChangeSelect} name="tipo" id="">
                        <option value="0" key='0'>Tipo</option>
                            {
                                filtros.tipos.map((tipo)=>(
                                    <option className="dropdownOptionFilter" key={tipo.id} value={tipo.id}>{tipo.tipoDescricao}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col-md-3 buttonProcurar">
                        <button onClick={handleFilter} className="buttonFilter btn">Procurar</button>
                    </div>     
                        {isOpened &&
                        <div className="range">
                            <MultiRangeSlider
                            min={filtros.valorMin}
                            max={filtros.valorMax}
                            />
                        </div>
                        }    
                </div> 
            </div>
            <div className="outsideButtonsDivBox">
                <button className={`buttonFilter outsideButtons ${arrow}`} onClick={openOpts}>{isOpenedMsg}</button>
            </div>
        </>
    )
})