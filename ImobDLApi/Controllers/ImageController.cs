using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.DTOs;
using ImobDLApi.Images;
using ImobDLApi.models;
using ImobDLApi.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace ImobDLApi.Controllers
{
    public class ImageController : BaseApiController
    {
        private readonly IUnitOfWork _ouw;
        public ImageController(IUnitOfWork ouw)
        {
            _ouw = ouw;
        }
        [HttpPost]
        public async Task<ActionResult<List<Image>>> AddImage([FromForm] ImageDTO info)
        {
            var image = _ouw.ImageRepository.AddImagesToImovel(info);
            var result = await _ouw.Commit();

            if (result)
            {
                return Ok(image.Result);
            }
            else
            {
                return BadRequest("Falha ao salvar imagem(ns)");
            }
            
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Image>>> DeleteImage(string id)
        {
            await _ouw.ImageRepository.DeleteImage(id);
            var result = await _ouw.Commit();

            if (result)
            {
                return Ok("Imagem removida com sucesso");
            }
            else
            {
                return BadRequest("Falha ao remover imagem(ns)");
            }

        }
        [HttpPost("set/{id}")]
        public async Task<ActionResult> SetMain(string id)
        {
            await _ouw.ImageRepository.SetMain(id);
            var result = await _ouw.Commit();

            if (result)
            {
                return Ok("Imagem agora é a principal");
            }
            else
            {
                return BadRequest("Falha, ou a imagem já é a principal");
            }
        }
    }
}