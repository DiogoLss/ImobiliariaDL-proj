import { Link } from 'react-router-dom';
import { Imovel } from '../../../app/models/imovel';
import ImagesCarousel from './ImagesCarousel';
import '../../css/imoveis/ImovelVertical.css'


interface Props{
    imovel: Imovel
}

export default function ImovelListDetailVertical({imovel}: Props){

    return(
    <div className="card border-light col">
        <ImagesCarousel
        images={imovel.images}
        />
        <div className="card-body">
            <h5 className="card-title">{imovel.nome}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    )
}
