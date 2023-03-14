import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { Header, HeaderContent, Item } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/stores';
import ImovelListDetail from './ImovelListDetail';

export default observer(function ImoveisList(){
    const {imoveisStore} = useStore();
    const {loadImoveis, imoveis,mensagem,isFiltered} = imoveisStore;
    
    useEffect(()=>{
      if(imoveis.length === 0 && !isFiltered)loadImoveis()
    }, [loadImoveis, imoveis, isFiltered])

    return(

        <Item.Group divided unstackable  className='itemGroup'>
            <Header textAlign='center' size='huge' >
                <HeaderContent content={mensagem} />
            </Header>
                {
                imoveis.map((imovel) =>(
                        <ImovelListDetail 
                    imovel={imovel}
                    key={imovel.id}
                    />                    
                ))
            }    
        </Item.Group>
    )
})