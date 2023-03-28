using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.models
{
    public class Cidade
    {
        public int Id { get; set; }
        public string CidadeNome { get; set; }
        public ICollection<Bairro> Bairros { get; set; }
    }
}