import { Link } from 'react-router-dom';
import { Button, Icon, Item } from 'semantic-ui-react';
import { Imovel } from '../../../app/models/imovel';

interface Props{
    imovel: Imovel
}

export default function ImovelListDetailVertical({imovel}: Props){

    return(
    <div className="card border-light col">
        <img src='/assets/images/cajuru.jfif' className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{imovel.nome}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    )
}


export function ImovelListDetailHorizontal({imovel}: Props){

    return(
        <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src='/assets/images/cajuru.jfif' className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{imovel.nome}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">{imovel.cidade}</small></p>
              <p className="card-text"><small className="text-muted">{imovel.preco}</small></p>
            </div>
          </div>
        </div>
      </div>
    )
}
