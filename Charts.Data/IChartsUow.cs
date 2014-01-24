using Charts.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charts.Data
{
    public interface IChartsUow
    {
        IRepository<Item> Items { get; }

        void Commit();
    }
}
