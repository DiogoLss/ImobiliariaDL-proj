import { observer } from 'mobx-react-lite'
import React from 'react'
import { Dropdown} from 'semantic-ui-react'
import { useStore } from '../../../app/stores/stores'


export default observer( function ImoveisFilter(){
    const {imoveisStore} = useStore();
    const {bairros} = imoveisStore;

    
    const SelectExample = () => (
    <Dropdown
        placeholder='Selecione o bairro'
        fluid
        search
        selection
        options=
        {bairros.map<{key: number, value: number, text: string}>((opt) =>(
            { key: opt.id, value: opt.id, text: opt.nome }
        ))}
      />)
    
    
    return(
        <> 
            <h1>Filters</h1>
            <SelectExample/>
        </>
       
)
})