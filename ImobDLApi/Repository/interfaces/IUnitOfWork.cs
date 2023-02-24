namespace ImobDLApi.Repository
{
    public interface IUnitOfWork
    {
        IImovelRepository ImovelRepository { get; }

        Task<bool> Commit();
    }
}