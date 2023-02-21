using ImobDLApi.DTOs;
using ImobDLApi.models;
using ImobDLApi.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ImobDLApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ImoveisController : ControllerBase
    {
        private readonly IUnitOfWork _ouw;
        public ImoveisController(IUnitOfWork ouw)
        {
            _ouw = ouw;
        }

        [HttpGet("imoveisComFiltros")]
        public ActionResult<IEnumerable<ImovelComFiltros>> GetImoveisComFiltros()
        {
            return Ok(_ouw.ImovelRepository.GetImoveisComFiltros());
        }
        [HttpGet]
        public ActionResult<IEnumerable<Imovel>> GetImoveis()
        {
            return Ok(_ouw.ImovelRepository.GetMappedImoveis());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Imovel>> Get(Guid id)
        {
            return await _ouw.ImovelRepository.GetById(i => i.Id == id);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Imovel>> Update(Guid id, Imovel imovel)
        {
            imovel.Id = id;
            _ouw.ImovelRepository.Update(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
        [HttpPost]
        public async Task<ActionResult<Imovel>> Create(Imovel imovel)
        {
            _ouw.ImovelRepository.Add(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Imovel>> Delete(Guid id)
        {
            var imovel = await _ouw.ImovelRepository.GetById(i => i.Id == id);
            _ouw.ImovelRepository.Delete(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
    }
}