import { observer } from 'mobx-react';
import React from 'react';
import { Item } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/stores';
import ImovelListDetail from './ImovelListDetail';

export default observer(function ImoveisList(){
    const {imoveisStore} = useStore();
    const {imoveis} = imoveisStore;

    return(
        <Item.Group>
            <h1>Imóveis</h1>
            {
                imoveis.map((imovel,bairro) =>(
                    <ImovelListDetail 
                    imovel={imovel}
                    />
                ))
            }
        </Item.Group>
    )
})