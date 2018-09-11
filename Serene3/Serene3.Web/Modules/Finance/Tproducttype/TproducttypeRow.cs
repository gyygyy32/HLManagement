
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tproducttype]")]
    [DisplayName("Tproducttype"), InstanceName("Tproducttype")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TproducttypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Producttype"), Column("producttype"), Size(20), NotNull, QuickSearch]
        public String Producttype
        {
            get { return Fields.Producttype[this]; }
            set { Fields.Producttype[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Producttype; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TproducttypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Producttype;


		}
    }
}
