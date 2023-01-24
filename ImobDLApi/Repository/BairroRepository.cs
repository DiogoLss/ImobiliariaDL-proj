using ImobDLApi.Context;
using ImobDLApi.models;
using ImobDLApi.Repository.interfaces;

namespace ImobDLApi.Repository
{
    public class BairroRepository : Repository<Bairro>, IBairroRepository
    {
        public BairroRepository(ImobDLContext context) : base(context)
        {
        }
    }
}