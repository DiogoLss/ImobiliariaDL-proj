import { observer } from 'mobx-react-lite';
import Footer from '../../Footer';
import ImoveisFilter from '../filter/ImoveisFilter';
import ImoveisList from './ImoveisList';

export default observer(function ImoveisDashBoard(){
    return(
      <>
        <ImoveisFilter/>
        <div className='container'>
        <ImoveisList/>
        </div>

      </>
    )
})