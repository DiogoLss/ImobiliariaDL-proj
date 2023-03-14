import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import ImoveisFilter from '../filter/ImoveisFilter';
import ImoveisList from './ImoveisList';

export default observer(function ImoveisDashBoard(){
    return(
      <>
        <ImoveisFilter/>
        <Container>
        <ImoveisList/>
        </Container>
      </>
    )
})