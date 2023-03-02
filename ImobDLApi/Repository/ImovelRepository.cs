using ImobDLApi.Context;
using ImobDLApi.DTOs;
using ImobDLApi.models;
using Microsoft.EntityFrameworkCore;

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
            var imoveis = _context.Imoveis
            .Include(i => i.Cidade)
            .Include(i => i.Bairro)
            .Include(i => i.Tipo)
            .ToList();
            var imoveisDTO = new List<ImovelDTO>();
            
            for(int i = 0; i < imoveis.Count; i++)
            {
                var imovel = new ImovelDTO();
                imovel.MapImoveis(imoveis[i]);
                imoveisDTO.Add(imovel);
            }
            return imoveisDTO;
        }
        public List<ImovelDTO> GetMappedImoveisFiltered(FiltrosQueryDTO filtros)
        {
            var imoveis = _context.Imoveis
            .Include(i => i.Cidade)
            .Include(i => i.Bairro)
            .Include(i => i.Tipo)
            .Where(i =>
                filtros.Cidade.HasValue ? i.CidadeId == filtros.Cidade : true
            )
            .Where(i=>
                filtros.Bairro.HasValue ? i.BairroId == filtros.Bairro : true
            )
            .Where(i=>
                filtros.Tipo.HasValue ? i.TipoId == filtros.Tipo : true
            )
            .Where(i=>
                filtros.PrecoMin.HasValue ? i.Preco > filtros.PrecoMin : true
            )
            .Where(i=>
            filtros.PrecoMax.HasValue ? i.Preco < filtros.PrecoMax :  true
            )
            .ToList();
            var imoveisDTO = new List<ImovelDTO>();
            
            for(int i = 0; i < imoveis.Count; i++)
            {
                var imovel = new ImovelDTO();
                imovel.MapImoveis(imoveis[i]);
                imoveisDTO.Add(imovel);
            }
            return imoveisDTO;
        }
        public Filtros GetFiltros()
        {
            var result = new Filtros();
            result.Bairros = _context.Bairros.ToList();
            result.Cidades = _context.Cidades.ToList();
            result.Tipos = _context.Tipos.ToList();
            return result;
        }
    }
}