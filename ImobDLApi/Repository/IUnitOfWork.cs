namespace ImobDLApi.Repository
{
    public interface IUnitOfWork
    {
        IImovelRepository ImovelRepository { get; }
        Task Commit();
    }
}