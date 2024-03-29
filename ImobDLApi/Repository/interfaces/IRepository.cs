using System.Linq.Expressions;

namespace ImobDLApi.Repository
{
    public interface IRepository<T>
    {
        IEnumerable<T> Get();
        Task<T> GetById(Expression<Func<T, bool>> predicate);
        void Add(T entity);
        void Update(T entity);
        void Delete(T entity);
    }
}