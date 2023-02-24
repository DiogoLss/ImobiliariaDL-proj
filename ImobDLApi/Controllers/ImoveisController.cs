using ImobDLApi.DTOs;
using ImobDLApi.models;
using ImobDLApi.Repository;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ImobDLApi.Controllers
{
    public class ImoveisController : BaseApiController
    {
        private readonly IUnitOfWork _ouw;
        public ImoveisController(IUnitOfWork ouw)
        {
            _ouw = ouw;
        }

        [HttpGet("Home")]
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
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Imovel>> Update(Guid id, Imovel imovel)
        {
            imovel.Id = id;
            _ouw.ImovelRepository.Update(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Imovel>> Create(Imovel imovel)
        {
            imovel.Id = Guid.NewGuid();
            _ouw.ImovelRepository.Add(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Imovel>> Delete(Guid id)
        {
            var imovel = await _ouw.ImovelRepository.GetById(i => i.Id == id);
            _ouw.ImovelRepository.Delete(imovel);
            await _ouw.Commit();
            return Ok(imovel);
        }
    }
}