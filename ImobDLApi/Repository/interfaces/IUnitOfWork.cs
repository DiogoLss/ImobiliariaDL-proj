using ImobDLApi.Repository.interfaces;

namespace ImobDLApi.Repository
{
    public interface IUnitOfWork
    {
        IImovelRepository ImovelRepository { get; }
        IImageRepository ImageRepository { get; }

        Task<bool> Commit();
    }
}