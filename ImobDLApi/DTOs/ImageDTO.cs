using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.models;

namespace ImobDLApi.DTOs
{
    public class ImageDTO
    {
        public Guid IdImovel { get; set; }
        public bool IsMain { get; set; }
        public List<IFormFile> Files { get; set; }
    }
}