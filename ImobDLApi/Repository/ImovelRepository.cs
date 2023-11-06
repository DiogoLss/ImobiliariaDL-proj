using CloudinaryDotNet.Actions;
using ImobDLApi.Context;
using ImobDLApi.DTOs;
using ImobDLApi.models;
using ImobDLApi.Pagination;
using Microsoft.EntityFrameworkCore;

namespace ImobDLApi.Repository
{
    public class ImovelRepository : Repository<Imovel>, IImovelRepository
    {
        public ImovelRepository(ImobDLContext context) : base(context)
        {
            _context = context;
        }
        public HomePage GetHomePage()
        {
            var homePage = new HomePage();
            return homePage;
        }
        public IEnumerable<ImovelDTO> GetPagedImoveis(ImoveisParameters parameters)
        {
            var imoveis =  Get()
                .Skip((parameters.PageNumber - 1) * parameters.PageSize)
                .Take(parameters.PageSize)
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
        public List<ImovelDTO> GetMappedImoveis()
        {
            var imoveis = _context.Imoveis
            .Include(i => i.Bairro.Cidade)
            .Include(i => i.Tipo)
            .Include(i => i.Images)
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
            .Include(i => i.Bairro.Cidade)
            .Include(i => i.Tipo)
            .Include(i => i.Images)
            .Where(i =>
                filtros.Cidade.HasValue ? i.Bairro.CidadeId == filtros.Cidade : true
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
            .Where(i=>
            i.EVenda == filtros.EVenda)
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
            result.Cidades = _context.Cidades.Select(c => new Cidade{
                Id = c.Id,
                CidadeNome = c.CidadeNome
            }).ToList();  
            result.Tipos = _context.Tipos.ToList();
            result.ValorMinA = _context.Imoveis.Where(x=>!x.EVenda).Min(i => i.Preco);
            result.ValorMaxA = _context.Imoveis.Where(x=>!x.EVenda).Max(i => i.Preco);
            result.ValorMinV = _context.Imoveis.Where(x=>x.EVenda).Min(i => i.Preco);
            result.ValorMaxV = _context.Imoveis.Where(x=>x.EVenda).Max(i => i.Preco);
            return result;
        }
    }
}