using Charts.Data.SampleData;
using Charts.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charts.Data
{
    public class ChartsContext : DbContext 
    {
        public ChartsContext() : base ("DefaultConnection") { }

        static ChartsContext()
        {
            Database.SetInitializer(new ChartsDatabaseInitializer());
        }

        public DbSet<Item> Items { get; set; }

    }
}
