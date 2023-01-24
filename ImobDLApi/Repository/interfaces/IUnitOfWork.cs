using ImobDLApi.Repository.interfaces;

namespace ImobDLApi.Repository
{
    public interface IUnitOfWork
    {
        IImovelRepository ImovelRepository { get; }
        IBairroRepository BairroRepository { get; }

        Task Commit();
    }
}