using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.Context;

namespace ImobDLApi.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ImovelRepository _imovelRepository;

        public ImobDLContext _context;
        public UnitOfWork(ImobDLContext context)
        {
            _context = context;
        }
        public IImovelRepository ImovelRepository
        {
            get
            {
                return _imovelRepository = _imovelRepository ?? new ImovelRepository(_context);
            }
        }
        public async Task<bool> Commit()
        {
            var success = await _context.SaveChangesAsync() > 0;
            return success;
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}