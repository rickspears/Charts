namespace Charts.Data
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;
    using System.Linq.Expressions;

    public class Repository<T> : IRepository<T> where T : class
    {
        #region Constructors
        public Repository(ChartsContext context) {
            this.Context = context;
            DbSet = Context.Set<T>();
        }
        #endregion

        #region Properties
        protected ChartsContext Context { get; set; }
        protected DbSet<T> DbSet { get; set; }
        #endregion

        #region Methods

        public IQueryable<T> GetAll() {
            return DbSet;
        }

        public IQueryable<T> GetBy(System.Linq.Expressions.Expression<Func<T, bool>> predicate) {
            return DbSet.Where(predicate);
        }

        public T GetBy(int id) {
            return DbSet.Find(id);
        }

        public void Add(T entity) {
            var entry = Context.Entry(entity);
            if (entry.State == EntityState.Detached)
                DbSet.Add(entity);
            else
                entry.State = EntityState.Added;
        }

        public void Remove(T entity) {
            var entry = Context.Entry(entity);
            if (entry.State == EntityState.Deleted)
            {
                DbSet.Attach(entity);
                DbSet.Remove(entity);
            }
            else
                entry.State = EntityState.Deleted;
        }

        public void Remove(int id) {
            var entity = GetBy(id);
            if (entity != null)
                Remove(entity);
        }

        public void Update(T entity) {
            var entry = Context.Entry(entity);
            if (entry.State == EntityState.Detached)
                DbSet.Attach(entity);
            entry.State = EntityState.Modified;
        }

        public void Commit()
        {
            Context.SaveChanges();
        }

        #endregion
    }
}
