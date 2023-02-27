import { observer } from 'mobx-react';
import React from 'react';
import { Header, HeaderContent, Icon, Item, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/stores';
import ImovelListDetail from './ImovelListDetail';

export default observer(function ImoveisList(){
    const {imoveisStore} = useStore();
    const {imoveis} = imoveisStore;

    return(

        <Item.Group divided unstackable  className='itemGroup'>
            <Header textAlign='center' size='huge' >
                <HeaderContent content='Imóveis' />
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