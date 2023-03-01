using ImobDLApi.DTOs;
using ImobDLApi.models;

namespace ImobDLApi.Repository
{
    public interface IImovelRepository : IRepository<Imovel>
    {
        public Filtros GetFiltros();
        public List<ImovelDTO> GetMappedImoveis();
        public List<ImovelDTO> GetMappedImoveisFiltered(int? cidade, int? bairro, int? tipo);
    }
}