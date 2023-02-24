using System.ComponentModel.DataAnnotations;

namespace ImobDLApi.DTOs
{
    public class LoginDTO
    {
        public string Login { get; set; }
        [DataType(DataType.Password)]
        public string Senha { get; set; }
    }
}