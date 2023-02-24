//using Application.Core;
using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.DependencyInjection;

namespace ImobDLApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        //  protected ActionResult HandleResult<T>(Result<T> result)
        //  {
        //     if(result.IsSuccess == true && result.Value != null) return Ok(result.Value);
        //     if(result.IsSuccess == true && result.Value == null) return NotFound();
        //     return BadRequest();
        //  }
    }
}