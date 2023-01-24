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

        [HttpGet()]
        public ActionResult<IEnumerable<Imovel>> GetImoveis()
        {
            var imoveis = _ouw.ImovelRepository.Get();
            return Ok(imoveis);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Imovel>> Get(Guid id)
        {
            return await _ouw.ImovelRepository.GetById(i => i.Id == id);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Imovel>> Update(Imovel imovel)
        {
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