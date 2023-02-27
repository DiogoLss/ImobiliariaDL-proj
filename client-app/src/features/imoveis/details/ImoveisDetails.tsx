import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Image, Container } from "semantic-ui-react"
import { useStore } from "../../../app/stores/stores"



export default observer(function ImoveisDetails()
{
    const {imoveisStore} = useStore();
    const {loadImovel, selectedImovel} = imoveisStore;
    const {id} = useParams<{id: string}>();

    useEffect(()=>{
        if(id) loadImovel(id);
    },[id,loadImovel])

    return(
        <Container>
            <h1> </h1>
            <h1> </h1>
            <h1>{selectedImovel?.nome}</h1>
            <Image src={`/assets/images/cajuru.jfif`} />
            
        </Container>
    )
})