import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(){
    return(
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                     <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}} />
                     Imobiliaria DL
                </Menu.Item>
                <Menu.Item  name="Nav"/>
                <Menu.Item>
                    <Button  positive content="Nav" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}