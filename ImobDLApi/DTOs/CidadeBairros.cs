using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.DTOs
{
    public class CidadeBairros
    {
        public int IdCidade { get; set; }
        public string Cidade { get; set; }
        public int IdBairro { get; set; }
        public string Bairro { get; set; }
    }
}