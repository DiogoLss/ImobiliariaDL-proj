using ImobDLApi.DTOs;
using ImobDLApi.models;
using ImobDLApi.Pagination;

namespace ImobDLApi.Repository
{
    public interface IImovelRepository : IRepository<Imovel>
    {
        public Filtros GetFiltros();
        IEnumerable<ImovelDTO> GetPagedImoveis(ImoveisParameters parameters);
        public List<ImovelDTO> GetMappedImoveis();
        public List<ImovelDTO> GetMappedImoveisFiltered(FiltrosQueryDTO filtros);
    }
}