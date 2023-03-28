import { Container, Header, HeaderContent } from "semantic-ui-react";
import Footer from "../Footer";
import ImoveisFilter from "../imoveis/filter/ImoveisFilter";
// import ImoveisFilter from "../imoveis/filter/ImoveisFilter";

export default function HomePage(){
    return(
    <>
        <ImoveisFilter/>
        <Container>
            <Header textAlign="center">
                <HeaderContent content='Inicio'/>
            </Header>
        </Container>
    </>
    )
}