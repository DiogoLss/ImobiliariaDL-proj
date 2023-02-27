import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default function NavBar(){
    return(
        <Menu inverted fixed='top' color='blue' className='navbar'>
            <Container>
                <Menu.Item as={Link} to='' header>
                     <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} />
                     Imobiliaria DL
                </Menu.Item>
                <Menu.Item as={Link} to='/imoveis/' name="Imoveis"/>
                <Menu.Item position='right' as={Link} to='/imoveis/' name='Entrar como adm' />
            </Container>
        </Menu>
    )
}