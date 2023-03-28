using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.Context;
using ImobDLApi.DTOs;
using ImobDLApi.Images;
using ImobDLApi.models;
using ImobDLApi.Repository.interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ImobDLApi.Repository
{
    public class ImageRepository : Repository<Image>, IImageRepository
    {
        private readonly IPhotoAccessor _photoAccessor;
        public ImageRepository(ImobDLContext context, IPhotoAccessor photoAccessor) : base(context)
        {
            _context = context;
            _photoAccessor = photoAccessor;
        }
        public async Task<List<Image>> AddImagesToImovel(ImageDTO imageInfo)
        {
            var images = new List<Image>();
            foreach(var img in imageInfo.Files){
                if(imageInfo.IsMain){
                    var imageMain = _context.Images.FirstOrDefault(x => x.ImovelId == imageInfo.IdImovel && x.IsMain);

                    if(imageMain is null)
                    {
                        var imageUploadResult = await _photoAccessor.AddPhoto(img);
                        var image = new Image
                        {
                            Url = imageUploadResult.Url,
                            Id = imageUploadResult.PublicId,
                            ImovelId = imageInfo.IdImovel,
                            IsMain = imageInfo.IsMain
                        };
                        images.Add(image);
                        _context.Images.Add(image);
                    }
                    else
                    {
                        imageMain.IsMain = false;
                        _context.Entry(imageMain).State = EntityState.Modified;
                        _context.Set<Image>().Update(imageMain);
                        
                        var imageUploadResult = await _photoAccessor.AddPhoto(img);
                        var image = new Image
                        {
                            Url = imageUploadResult.Url,
                            Id = imageUploadResult.PublicId,
                            ImovelId = imageInfo.IdImovel,
                            IsMain = imageInfo.IsMain
                        };
                        images.Add(image);
                        _context.Images.Add(image);
                    }              
                }
                else
                {
                    var imageUploadResult = await _photoAccessor.AddPhoto(img);
                
                    var image = new Image
                    {
                        Url = imageUploadResult.Url,
                        Id = imageUploadResult.PublicId,
                        ImovelId = imageInfo.IdImovel,
                        IsMain = imageInfo.IsMain
                    };
                    images.Add(image);
                    _context.Images.Add(image);
                }               
                
            }
            return images;
        }
        public async Task DeleteImage(string id)
        {
            var image = _context.Images.FirstOrDefault(i => i.Id == id);

            if(image == null) { return; }
            if (image.IsMain)
            {
                var imageChange = _context.Images.FirstOrDefault(x => x.ImovelId == image.ImovelId);
                if(imageChange is null) 
                {
                    var result = await _photoAccessor.DeletePhoto(image.Id);
                    if (result == null) return;
                    _context.Images.Remove(image);
                }
                else
                {
                    imageChange.IsMain = true;
                    _context.Entry(imageChange).State = EntityState.Modified;
                    _context.Set<Image>().Update(imageChange);
                    var result = await _photoAccessor.DeletePhoto(image.Id);
                    if (result == null) return;
                    _context.Images.Remove(image);
                }
            }
            else
            {
                var result = await _photoAccessor.DeletePhoto(image.Id);
                if (result == null) return;
                _context.Images.Remove(image);
            }
        }
        public async Task SetMain(string id)
        {
            var imagemToMain = await _context.Images.FirstOrDefaultAsync(x => x.Id == id);
            if (imagemToMain is null || imagemToMain.IsMain) return;
            var imageMain = await _context.Images.FirstOrDefaultAsync(x => x.ImovelId == imagemToMain.ImovelId && x.IsMain);
            if (imageMain is null) return;

            imageMain.IsMain = false;
            imagemToMain.IsMain = true;

            _context.Entry(imageMain).State = EntityState.Modified;
            _context.Set<Image>().Update(imageMain);
            _context.Entry(imagemToMain).State = EntityState.Modified;
            _context.Set<Image>().Update(imagemToMain);
        }
    }
}