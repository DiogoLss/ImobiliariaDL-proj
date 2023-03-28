using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ImobDLApi.DTOs;
using ImobDLApi.Images;
using ImobDLApi.models;

namespace ImobDLApi.Repository.interfaces
{
    public interface IImageRepository : IRepository<Image>
    {
        public Task<List<Image>> AddImagesToImovel(ImageDTO image);
        public Task DeleteImage(string id);
        public Task SetMain(string id);
    }
}