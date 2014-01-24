namespace Charts.Data.SampleData
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public class ChartsDatabaseInitializer : DbMigrationsConfiguration<ChartsContext>
    {
        public ChartsDatabaseInitializer()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }
        protected override void Seed(ChartsContext context)
        {
            base.Seed(context);
            if (context.Items.Count() == 0) { 
                context.Items.Add(new Model.Item { Name = "Sample A", Quantity = 10 });
                context.Items.Add(new Model.Item { Name = "Sample B", Quantity = 20 });
                context.Items.Add(new Model.Item { Name = "Sample C", Quantity = 30 });
                context.SaveChanges();
            }
        }
    }
}
