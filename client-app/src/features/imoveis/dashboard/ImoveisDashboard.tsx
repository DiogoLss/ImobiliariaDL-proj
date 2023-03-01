import { observer } from 'mobx-react-lite';
import {  useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/stores';
import ImoveisFilter from './ImoveisFilter';
import ImoveisList from './ImoveisList';

export default observer(function ImoveisDashBoard(){
    const {imoveisStore} = useStore();
    const {loadImoveis, imoveis} = imoveisStore;
    
    useEffect(()=>{
      if(imoveis.length === 0)loadImoveis();
    }, [loadImoveis, imoveis])
  

    return(
      <>
        <ImoveisFilter/>
        <Container>
        <ImoveisList/>
        </Container>
      </>
    )
})