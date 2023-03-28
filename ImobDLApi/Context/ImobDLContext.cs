using ImobDLApi.models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ImobDLApi.Context
{
    public class ImobDLContext : IdentityDbContext
    {
        public ImobDLContext(DbContextOptions<ImobDLContext> options) : base(options)
        {
        }
        public DbSet<Imovel> Imoveis {get; set;}  
        public DbSet<Cidade> Cidades { get; set; }      
        public DbSet<Bairro> Bairros {get; set;}
        public DbSet<Tipo> Tipos { get; set; }
        public DbSet<Image> Images { get; set; }
    }
}