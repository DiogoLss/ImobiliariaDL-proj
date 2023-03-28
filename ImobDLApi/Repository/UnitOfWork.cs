using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.Context;
using ImobDLApi.Images;
using ImobDLApi.Repository.interfaces;

namespace ImobDLApi.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private ImovelRepository _imovelRepository;
        private ImageRepository _imageRepository;
        private readonly IPhotoAccessor _photoAccessor;

        public ImobDLContext _context;
        public UnitOfWork(ImobDLContext context, IPhotoAccessor photoAccessor)
        {
            _context = context;
            _photoAccessor = photoAccessor;
        }
        public IImovelRepository ImovelRepository
        {
            get
            {
                return _imovelRepository = _imovelRepository ?? new ImovelRepository(_context);
            }
        }
        public IImageRepository ImageRepository
        {
            get
            {
                return _imageRepository = _imageRepository ?? new ImageRepository(_context, _photoAccessor);
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