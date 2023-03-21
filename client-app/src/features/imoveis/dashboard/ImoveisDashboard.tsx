import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
// import ImoveisFilter from '../filter/ImoveisFilter';
import ImoveisFilter from '../filter/ImoveisFilter';
import ImoveisList from './ImoveisList';

export default observer(function ImoveisDashBoard(){
    return(
      <>
      <div className="divFilters container-flex">
        <ImoveisFilter/>
      </div>
        <div className='container'>
        <ImoveisList/>
        </div>
      </>
    )
})