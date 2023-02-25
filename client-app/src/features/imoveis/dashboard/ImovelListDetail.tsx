import { Link } from 'react-router-dom';
import { Button, Icon, Item, Segment } from 'semantic-ui-react';
import { Imovel } from '../../../app/models/imovel';

interface Props{
    imovel: Imovel
}

export default function ImovelListDetail({imovel}: Props){

    return(
    <Item>
        <Item.Image size='medium' src='/assets/images/cajuru.jfif'/>
        <Item.Content>
            <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        
                        <Item.Content>
                            <Item.Header>{imovel.nome}</Item.Header>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='marker'/>{imovel.bairro}, {imovel.rua}, {imovel.numero}
                </span>
            </Segment>
            <Segment secondary>
                <span>{imovel.descricao}</span>
            </Segment>
            <Segment clearing>
                <span>R$ {imovel.preco}</span>
                <Button
                    as={Link}
                    to={`/imoveis/${imovel.id}`}
                    floated='right'
                    content='View'
                    color='teal'
                />
            </Segment>
        </Segment.Group>
        </Item.Content>
    </Item>
)
}
