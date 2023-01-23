using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ImobDLApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ImoveisController : ControllerBase
    {
        // private readonly IUnitOfWork _ouw;
        // public ImoveisController(IUnitOfWork ouw)
        // {
        //     _ouw = ouw;
        // }

        // [HttpGet("imoveis")]
        // public ActionResult<IEnumerable<Imovel>> GetImoveis()
        // {
        //     var imoveis = _ouw.Imoveis.Get();
        //     return Ok(imoveis);
        // }
    }
}