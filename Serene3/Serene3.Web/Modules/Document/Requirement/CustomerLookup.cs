
namespace Serene3.Document.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Web;

    [LookupScript("Requirement.Customer")]
    
    public class CustomerLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerLookup()
        {
            IdField = TextField = "Customer";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Customer)
                .Where(
                    new Criteria(fld.Customer) != "" &
                    new Criteria(fld.Customer).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}