using ImobDLApi.models;
using System.Collections.Generic;

namespace ImobDLApi.DTOs
{
    public class ImovelDTO
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Preco { get; set; }
        public int Quartos { get; set; }
        public int Banheiros { get; set; }
        public int Salas { get; set; }
        public int Garagens { get; set; }
        public string Tipo { get; set; }
        public int? NumeroDoApCd { get; set; }
        //ENDERECO
        public string Bairro { get; set; }
        public string CEP { get; set; }
        public string Cidade { get; set; }
        public string Rua { get; set; }
        public int Numero { get; set; }
        public bool EVenda { get; set; }
        public List<ImageDTOMap> Images { get; set; }

        public void MapImoveis(Imovel imovel)
        {
            this.Id = imovel.Id;
            this.EVenda = imovel.EVenda;
            this.Nome = imovel.Nome;
            this.Descricao = imovel.Descricao;
            this.Preco = imovel.Preco;
            this.Quartos = imovel.Quartos;
            this.Salas = imovel.Salas;
            this.Garagens = imovel.Garagens;
            this.Banheiros = imovel.Banheiros;
            this.NumeroDoApCd = imovel.NumeroDoApCd is not null? imovel.NumeroDoApCd : null;
            this.Tipo = imovel.Tipo.TipoDescricao;
            this.Cidade = imovel.Bairro.Cidade.CidadeNome;
            this.Bairro = imovel.Bairro.Nome;
            this.CEP = imovel.CEP;
            this.Rua = imovel.Rua;
            this.Numero = imovel.Numero;
            List<ImageDTOMap> images = new List<ImageDTOMap>();
            foreach (var image in imovel.Images)
            {
                images.Add(MapImages(image));
            }
            this.Images = images;
        }
        public ImageDTOMap MapImages(Image image)
        {
            var newImage = new ImageDTOMap
            {
                IdImage = image.Id,
                IsMain = image.IsMain,
                UrlImage = image.Url
            };
            return newImage;
        }
    }
}