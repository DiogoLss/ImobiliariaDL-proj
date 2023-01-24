using ImobDLApi.Context;
using ImobDLApi.models;

namespace ImobDLApi.Repository
{
    public class ImovelRepository : Repository<Imovel>, IImovelRepository
    {
        //private readonly ImobDLContext _context;
        public ImovelRepository(ImobDLContext context) : base(context)
        {
            _context = context;
        }
    }
}