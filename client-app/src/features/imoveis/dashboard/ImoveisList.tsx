import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { useStore } from '../../../app/stores/stores';
import '../../css/imoveis/ImoveisList.css'
import ImovelListDetailHorizontal from './ImovelListDetailHorizontal';
import ImovelListDetailVertical from './ImovelListDetailVertical';


export default observer(function ImoveisList(){
    const {imoveisStore} = useStore();
    const {loadImoveis, imoveis,mensagem,isHorizontal,updateHorizontal} = imoveisStore;
    
    useEffect(()=>{
      if(imoveis.length === 0)loadImoveis()
    }, [loadImoveis, imoveis])

    const Vertical = () => (
        <div className="row row-cols-3 container-imoveis">
        {
                imoveis.map((imovel) =>(
                        <ImovelListDetailVertical 
                    imovel={imovel}
                    key={imovel.id}
                    />                    
                ))
            }    
        </div>
    )
    const Horizontal = () => (
        <div className='container-imoveis'>
        {
            imoveis.map((imovel) =>(
                <ImovelListDetailHorizontal 
                imovel={imovel}
                key={imovel.id}
                />                    
            ))
        }
        </div>
    )
    function trocarHorizontal (){
        updateHorizontal(true)
    }
    function trocarVertical (){
        updateHorizontal(false)
    }
    return(
    <div className="container text-center">
        <h1 className='titImoveis'>Imóveis</h1>
            <div className='row justify-content-end'>
                <button className="fa-solid fa-list col-1 iconChange" onClick={trocarHorizontal}></button>
                <button className="fa-solid fa-grip-vertical col-1 iconChange" onClick={trocarVertical}></button>
            </div>     
        {isHorizontal && <Horizontal/>}        
        {!isHorizontal && <Vertical/>}       
    </div>
    )
})