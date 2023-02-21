using ImobDLApi.models;

namespace ImobDLApi.DTOs
{
    public class ImovelComFiltros
    {
        public List<ImovelDTO> Imoveis { get; set; }
        public List<Bairro> Bairros { get; set; }
    }
}