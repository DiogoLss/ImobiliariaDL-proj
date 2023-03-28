import { Images } from "../../../app/models/images"

interface Props{
    images: Images[]
}

export default function ImagesCarousel({images}: Props){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
                {
                    images.map((image)=>
                    (
                        <div key={image.idImage}>
                        {
                            image.isMain &&
                            <div  className="carousel-item active">
                                <img src={image.urlImage} className="d-block w-100 imageImovelList" alt="..."/>
                            </div>
                        }
                        {
                            !image.isMain &&
                            <div className="carousel-item">
                                <img src={image.urlImage} className="d-block w-100 imageImovelList" alt="..."/>
                            </div>
                        }
                        </div>
                    ))
                }     
                {/* {
                    images.length === 0 &&
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="carregando imagem do imóvel"/>
                    </div>
                } */}
                  
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}