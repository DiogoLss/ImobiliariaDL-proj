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
            //var cidades = 
            var bairros = _context.Bairros.ToList();
            var cidades = _context.Cidades.ToList();
            var tipos = _context.Tipos.ToList();
            
            for(int i = 0; i < imoveis.Count; i++)
            {
                var imovel = new ImovelDTO();
                imoveis[i].Bairro = bairros.Find(b => b.Id == imoveis[i].BairroId);
                imoveis[i].Cidade = cidades.Find(c => c.Id == imoveis[i].CidadeId);
                imoveis[i].Tipo = tipos.Find(t => t.Id == imoveis[i].TipoId);
                imovel.MapImoveis(imoveis[i]);
                imoveisDTO.Add(imovel);
            }
            return imoveisDTO;
        }
        public ImovelComFiltros GetImoveisComFiltros()
        {
            var result = new ImovelComFiltros();
            result.Bairros = _context.Bairros.ToList();
            result.Cidades = _context.Cidades.ToList();
            result.Tipos = _context.Tipos.ToList();
            result.Imoveis = GetMappedImoveis();
            return result;
        }
    }
}