using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.models
{
    public class Cidade
    {
        public int Id { get; set; }
        [StringLength(30)]
        [Required]
        public string CidadeNome { get; set; }
        [StringLength(2)]
        [Required]
        public string UF {get; set;}
        public ICollection<Bairro> Bairros { get; set; }
    }
}