using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Charts.Data.SampleData
{
    public class ChartsDatabaseInitializer : DropCreateDatabaseIfModelChanges<ChartsContext>
    {
        protected override void Seed(ChartsContext context)
        {
            context.Items.Add(new Model.Item { Name = "Sample A", Quantity = 10 });
            context.Items.Add(new Model.Item { Name = "Sample B", Quantity = 20 });
            context.Items.Add(new Model.Item { Name = "Sample C", Quantity = 30 });
            context.SaveChanges();
        }
    }
}
