using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.Context;
using ImobDLApi.Repository.interfaces;

namespace ImobDLApi.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ImovelRepository _imovelRepository;
        private BairroRepository _bairroRepository;

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
        public IBairroRepository BairroRepository
        {
            get
            {
                return _bairroRepository = _bairroRepository ?? new BairroRepository(_context);
            }
        }
        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }
        public void Dispose()
        {
            _context.Dispose();
        }
    }
}