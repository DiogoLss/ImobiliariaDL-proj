using ImobDLApi.models;

namespace ImobDLApi.DTOs
{
    public class Filtros
    {
        public List<Bairro> Bairros { get; set; }
        public List<Tipo> Tipos { get; set; }
        public List<Cidade> Cidades { get; set; }
        public decimal ValorMin { get; set; }
        public decimal ValorMax { get; set; }
    }
}