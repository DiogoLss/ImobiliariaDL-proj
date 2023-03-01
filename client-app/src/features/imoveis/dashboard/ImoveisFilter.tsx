import { observer } from 'mobx-react-lite'
import { SyntheticEvent, useEffect, useState } from 'react'
import { Button, DropdownProps, Form, Grid, GridColumn} from 'semantic-ui-react'
import FiltrosParameters from '../../../app/DTOs/filtrosParameters'
import { useStore } from '../../../app/stores/stores'


export default observer( function ImoveisFilter(){
    const {imoveisStore} = useStore();
    const {loadFilters, loadImoveisFiltered ,bairros,cidades,tipos} = imoveisStore;

    const [filter, setFilter] = useState<FiltrosParameters>({
        cidade: null,
        bairro: null,
        tipo: null
    })

    useEffect(()=>{
        if(cidades.length === 0 || bairros.length === 0 || tipos.length === 0)loadFilters();
      }, [loadFilters, cidades,bairros,tipos])

    function handleFilter(){
        if(filter.cidade || filter.bairro || filter.tipo){
            loadImoveisFiltered(filter)

        }
        else{
            alert('especifique o imóvel que deseja')
        }
    }
    function handleInputChange(event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps)
    {
        const {name,value} = data;
        setFilter({...filter, [name]: value})
        
    }
    
    const SelectExample = () => (
        <div className='divFilters'>
            <h1 className='titFiltro'>Procure os imóveis que deseja!</h1>
            <Form onSubmit={handleFilter}>
                <Grid centered stackable columns={4}>
                    <GridColumn width={3}>
                        <Form.Select
                        onChange={handleInputChange}
                        placeholder='Selecione a cidade'
                        name='cidade'
                        value={filter.cidade!}
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
                        <Form.Select
                        onChange={handleInputChange}
                        placeholder='Selecione o bairro'
                        name='bairro'
                        value={filter.bairro!}
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
                        <Form.Select
                        onChange={handleInputChange}
                        placeholder='Selecione o tipo'
                        name='tipo'
                        value={filter.tipo!}
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
                        <Button fluid content='Procurar' color='blue' type='submit'/>
                    </GridColumn>
                </Grid>
            </Form>
                
        </div>
      )
    
    return(  
        <SelectExample/>     
)
})