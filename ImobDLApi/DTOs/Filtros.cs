using ImobDLApi.models;

namespace ImobDLApi.DTOs
{
    public class Filtros
    {
        //public List<CidadeBairros> Localizacoes { get; set; }
        public List<Cidade> Cidades { get; set; }
        public List<Bairro> Bairros { get; set; }
        public List<Tipo> Tipos { get; set; }
        public decimal ValorMinV { get; set; }
        public decimal ValorMaxV { get; set; }
        public decimal ValorMinA { get; set; }
        public decimal ValorMaxA { get; set; }
    }
}