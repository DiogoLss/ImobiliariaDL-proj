
import { observer } from 'mobx-react-lite'
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, DropdownProps, Form, Grid, GridColumn, InputOnChangeData} from 'semantic-ui-react'
import FiltrosParameters from '../../../app/DTOs/filtrosParameters'
import { useStore } from '../../../app/stores/stores'


export default observer( function ImoveisFilter(){
    const {imoveisStore} = useStore();
    const {loadImoveisFiltered ,loadFilters, filtros, loadImoveis} = imoveisStore;
    const [filter, setFilter] = useState<FiltrosParameters>({
        cidade: null,
        bairro: null,
        tipo: null,
        min: 0,
        max: 0
    })
    useEffect(()=>{
        if(
            filtros.cidades.length <= 1
            || filtros.bairros.length <= 1
            || filtros.tipos.length <= 1
        )loadFilters();
      }, [loadFilters, filtros]
    )
    function handleChange(event: ChangeEvent<HTMLInputElement>, data: InputOnChangeData){
        console.log(data.value)
        const {name,value} = data
        setFilter({...filter, [name]: value})
    }

    function handleInputChange(event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps)
    {
        const {name,value} = data
        setFilter({...filter, [name]: value})
    }
    function remove(){
        setFilter({
            cidade: null,
            bairro: null,
            tipo: null,
            min: null,
            max: null
        })
    }
    function handleFilter(){
        if(filter.bairro || filter.cidade || filter.tipo || filter.min! > 0 || filter.max! > 0){
            console.log('func')
            loadImoveisFiltered(filter)
        }
        else{
            loadImoveis()
        }
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
                            {filtros.cidades.map<{key: number, value: number, text: string}>((opt) =>(
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
                            {filtros.bairros.map<{key: number, value: number, text: string}>((opt) =>(
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
                            {filtros.tipos.map<{key: number, value: number, text: string}>((opt) =>(
                                { key: opt.id, value: opt.id, text: opt.tipoDescricao }
                            ))}
                            />
                    </GridColumn>
                </Grid>
                <Grid centered stackable columns={2}>
                    <GridColumn width={4}>
                    <Form.Input
                    label={filter.min?`Preço mínimo: ${filter.min}`:' '}
                    min={filtros.valorMin}
                    max={filtros.valorMax}
                    name='min'
                    onChange={handleChange}
                    type='range'
                    value={filter.min}
                    
                />
                    </GridColumn>
                    <GridColumn width={4}>
                    <Form.Input
                    label={filter.max?`Preço máximo: ${filter.max}`:' '}
                    min={filtros.valorMin}
                    max={filtros.valorMax}
                    name='max'
                    onChange={handleChange}
                    type='range'
                    value={filter.max}
                />
                    </GridColumn>
                </Grid>
                <Grid centered stackable columns={2}>
                    <GridColumn width={2} >
                        <Button onClick={remove} content='limpar' color='blue' type='submit'/>
                    </GridColumn>
                    <GridColumn width={2} >
                            <Button as={Link} to='/Imoveis/Filtrados' content='Procurar' color='blue' type='submit'/>
                    </GridColumn>
                </Grid>
            </Form>
        </div>
      )
    return(  
    <SelectExample/>     
)
})