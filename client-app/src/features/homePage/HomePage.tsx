import { Container, Header, HeaderContent } from "semantic-ui-react";
// import ImoveisFilter from "../imoveis/filter/ImoveisFilter";

export default function HomePage(){
    return(
    <>
        {/* <ImoveisFilter/> */}
        <Container>
            <Header textAlign="center">
                <HeaderContent content='Inicio'/>
            </Header>
        </Container>
    </>
    )
}