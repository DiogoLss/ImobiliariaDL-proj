import { Link } from 'react-router-dom';
import { Imovel } from '../../../app/models/imovel';
import ImagesCarousel from './ImagesCarousel';
import '../../css/imoveis/ImovelHorizontal.css'

interface Props{
    imovel: Imovel
}
export default function ImovelListDetailHorizontal({imovel}: Props){

    return(
        <div className="card border-light mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <ImagesCarousel
            images={imovel.images}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text descricao">{imovel.descricao}</p>
              <h5 className="card-title">{imovel.nome}</h5>
              <p className="card-text infoImovel"><span className="text-muted">{imovel.cidade} {imovel.bairro}</span></p>
              <p className="card-text infoImovel"><span className="text-muted">endereço: {imovel.rua} número: {imovel.numero}</span></p>
              <p className="card-text imovelPreco">R$ {imovel.preco}</p>
              {
                imovel.eVenda && 
                <p className='infoImovel'><span>À venda</span></p>
              }
              {
                !imovel.eVenda && 
                <p className='infoImovel'><span>O aluguel</span></p>
              }
              
              <div className='card-footer'>
                <div className='iconesDivPai '>
                  <div className='iconesDiv'>
                    <span>{imovel.banheiros}</span>
                    <i className="fa-solid fa-shower fa-2xl icones"></i>
                  </div>
                  <div className='iconesDiv'>
                    <span>{imovel.quartos}</span>
                    <i className="fa-solid fa-bed fa-2xl icones"></i>
                  </div>
                  <div className=''>
                    <span>{imovel.garagens}</span>
                    <i className="fa-solid fa-car fa-2xl icones"></i>
                  </div>
                  <button className='btn btnDisplay btnConfig'>Ver imóvel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
