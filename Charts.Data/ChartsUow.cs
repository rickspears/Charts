using Charts.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charts.Data
{
    public class ChartsUow : IChartsUow, IDisposable
    {
        #region Constructors
        public ChartsUow(ChartsContext context)
        {
            this.context = context;
        }
        #endregion

        #region Fields
        private ChartsContext context;
        #endregion

        #region Properties
        public IRepository<Item> Items
        {
            get { return new Repository<Item>(context); }
        }
        #endregion

        #region Methods
        public void Commit() 
        { 
            context.SaveChanges(); 
        }
        #endregion

        #region IDisposable
        public void Dispose()
        {
            if (context != null)
                context.Dispose();
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}
