using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.models
{
    public class Bairro
    {
        public int Id { get; set; }
        [Required(ErrorMessage="Adicione o nome do bairro")]
        public string Nome { get; set; }
        public int CidadeId { get; set; }
        public Cidade Cidade { get; set; }
    }
}