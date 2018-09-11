
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tsuppliercompany]")]
    [DisplayName("Tsuppliercompany"), InstanceName("Tsuppliercompany")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TsuppliercompanyRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Suppliercompany"), Column("suppliercompany"), Size(20), NotNull, QuickSearch]
        public String Suppliercompany
        {
            get { return Fields.Suppliercompany[this]; }
            set { Fields.Suppliercompany[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Suppliercompany; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TsuppliercompanyRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Suppliercompany;


		}
    }
}
