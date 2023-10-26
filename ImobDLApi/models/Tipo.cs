using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImobDLApi.models
{
    public class Tipo
    {
        public int Id { get; set; }
        [Required]
        [StringLength(25)]
        public string TipoDescricao { get; set; }
    }
}