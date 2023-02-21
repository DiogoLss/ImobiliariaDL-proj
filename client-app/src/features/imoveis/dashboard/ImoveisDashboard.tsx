import { observer } from 'mobx-react-lite';
import {  useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
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
  <Grid>
    <Grid.Column width='3'>
      <ImoveisFilter/>
    </Grid.Column>
    <Grid.Column width='13'>
      <ImoveisList/>
    </Grid.Column>
  </Grid>
    )
})