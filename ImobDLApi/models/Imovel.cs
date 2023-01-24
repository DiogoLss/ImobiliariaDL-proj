using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ImobDLApi.models
{
    public class Imovel
    {
        [Key]
        public Guid Id { get; set; }
        public string Nome { get; set; }
        [Required]
        [StringLength(300)]
        public string Descricao { get; set; }
        [Column(TypeName = "decimal(10,2)")]
        [Required]
        [Display(Name ="Valor")]
        public decimal Preco { get; set; }
        [Required]
        [Range(1,100,ErrorMessage ="A quantidade de {0} deve ser entre {1} e {2}")]
        public int Quartos { get; set; }
        [Required]
        [Range(1, 100, ErrorMessage = "A quantidade de {0} deve ser entre {1} e {2}")]
        public int Banheiros { get; set; }
        [Required]
        [Range(1, 100, ErrorMessage = "A quantidade de {0} deve ser entre {1} e {2}")]
        public int Salas { get; set; }
        [Range(0, 100, ErrorMessage = "A quantidade de {0} deve ser entre {1} e {2}")]
        public int Garagens { get; set; }
        [Required]
        public bool ECondominio { get; set; }
        public bool EApartamento { get; set; }
        public int? NumeroDoApCd { get; set; }

        //ENDERECO

        [Required(ErrorMessage = "Informe o bairro do imóvel")]
        public int BairroId { get; set; }
        public Bairro Bairro { get; set; }
        //---
        [Required]
        [StringLength(9)]
        public string CEP { get; set; }
        public string Cidade { get; set; }
        [Required(ErrorMessage = "Informe a rua do imóvel}")]
        public string Rua { get; set; }
        [Required(ErrorMessage = "Informe o número do imóvel}")]
        public int Numero { get; set; }
    }
}