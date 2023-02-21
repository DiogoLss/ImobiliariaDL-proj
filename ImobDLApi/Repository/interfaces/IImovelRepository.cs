using ImobDLApi.DTOs;
using ImobDLApi.models;

namespace ImobDLApi.Repository
{
    public interface IImovelRepository : IRepository<Imovel>
    {
        public ImovelComFiltros GetImoveisComFiltros();
        public List<ImovelDTO> GetMappedImoveis();
    }
}