﻿using Charts.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Charts.Data
{
    public interface IRepository<T> where T : class
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetBy(Expression<Func<T, bool>> predicate);
        T GetBy(int id);
        void Add(T entity);
        void Remove(T entity);
        void Remove(int id);
        void Update(T entity);
    }
}
