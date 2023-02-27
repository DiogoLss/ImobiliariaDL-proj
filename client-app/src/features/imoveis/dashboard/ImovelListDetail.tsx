import { Link } from 'react-router-dom';
import { Button, Icon, Item, ItemDescription, Segment } from 'semantic-ui-react';
import { Imovel } from '../../../app/models/imovel';

interface Props{
    imovel: Imovel
}

export default function ImovelListDetail({imovel}: Props){

    return(
    <Item>
        <Item.Image size='medium' src='/assets/images/cajuru.jfif'/>
        <Item.Content>
            <Item.Extra>
                <p>{imovel.tipo}</p>
            </Item.Extra>
            <Item.Header>{imovel.nome}</Item.Header>
            <Item.Description>
                <p>Quartos: {imovel.quartos} Salas: {imovel.salas}</p>
                <p>Banheiros: {imovel.banheiros}</p>
            </Item.Description>
            <Item.Meta>
            <span>
                <Icon name='marker'/>{imovel.cidade}, {imovel.bairro}, {imovel.rua}
            </span>
            </Item.Meta>
            <Item.Description>
                <span>R$ {imovel.preco}</span>
            </Item.Description>
                
                <Button
                    as={Link}
                    to={`/imoveis/${imovel.id}`}
                    floated='right'
                    content='View'
                    color='blue'
                />
        </Item.Content>
    </Item>
)
}
