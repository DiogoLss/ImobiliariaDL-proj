using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.models
{
    public class Image
    {
        public string Id { get; set; }
        public string Url { get; set; }
        public bool IsMain { get; set; }
        public Guid ImovelId { get; set; }
        public Imovel Imovel { get; set; }
    }
}