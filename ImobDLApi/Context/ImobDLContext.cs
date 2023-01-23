using ImobDLApi.models;
using Microsoft.EntityFrameworkCore;

namespace ImobDLApi.Context
{
    public class ImobDLContext : DbContext
    {
        public ImobDLContext(DbContextOptions<ImobDLContext> options) : base(options)
        {
        }
        public DbSet<Imovel> Imoveis {get; set;}        
        public DbSet<Bairro> Bairros {get; set;}
        
    }
}