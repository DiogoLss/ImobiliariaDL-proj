using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.DTOs
{
    public class FiltrosQueryDTO
    {
        public int? Cidade { get; set; }
        public int? Bairro { get; set; }
        public int? Tipo { get; set; }
    }
}