using ImobDLApi.Context;
using ImobDLApi.DTOs;
using ImobDLApi.models;

namespace ImobDLApi.Repository
{
    public class ImovelRepository : Repository<Imovel>, IImovelRepository
    {
        public ImovelRepository(ImobDLContext context) : base(context)
        {
            _context = context;
        }
        public List<ImovelDTO> GetMappedImoveis()
        {
            var imoveis = _context.Imoveis.ToList();
            var imoveisDTO = new List<ImovelDTO>();

            for(int i = 0; i < imoveis.Count; i++)
            {
                var imovel = new ImovelDTO();
                imoveis[i].Bairro = _context.Bairros.Find(imoveis[i].BairroId);
                imovel.MapImoveis(imoveis[i]);
                imoveisDTO.Add(imovel);
            }
            return imoveisDTO;
        }
        public ImovelComFiltros GetImoveisComFiltros()
        {
            var result = new ImovelComFiltros();
            result.Bairros = _context.Bairros.ToList();
            result.Imoveis = GetMappedImoveis();
            return result;
        }
    }
}