import { observer } from 'mobx-react-lite'
import React from 'react'
import { Button, Dropdown, Grid, GridColumn, Menu, Segment} from 'semantic-ui-react'
import { useStore } from '../../../app/stores/stores'


export default observer( function ImoveisFilter(){
    const {imoveisStore} = useStore();
    const {bairros,cidades,tipos} = imoveisStore;

    
    const SelectExample = () => (
        <div className='divFilters'>
            <h1 className='titFiltro'>Procure os imóveis que deseja!</h1>
                <Grid centered stackable columns={4}>
                    <GridColumn width={3}>
                        <Dropdown
                        placeholder='Selecione o bairro'
                        fluid
                        search
                        selection
                        options=
                        {bairros.map<{key: number, value: number, text: string}>((opt) =>(
                            { key: opt.id, value: opt.id, text: opt.nome }
                        ))}
                        />
                    </GridColumn>
                    <GridColumn width={3}>
                        <Dropdown
                        placeholder='Selecione a cidade'
                        fluid
                        search
                        selection
                        options=
                        {cidades.map<{key: number, value: number, text: string}>((opt) =>(
                            { key: opt.id, value: opt.id, text: opt.cidadeNome }
                        ))}
                        />
                    </GridColumn>
                    <GridColumn width={3}>
                        <Dropdown
                        placeholder='Selecione o tipo'
                        fluid
                        search
                        selection
                        options=
                        {tipos.map<{key: number, value: number, text: string}>((opt) =>(
                            { key: opt.id, value: opt.id, text: opt.tipoDescricao }
                        ))}
                        />
                    </GridColumn>
                    <GridColumn width={2} >
                        <Button fluid content='Procurar' color='blue'/>
                    </GridColumn>
                </Grid>
        </div>
      )
    
    return(  
        <SelectExample/>     
)
})