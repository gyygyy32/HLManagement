
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tbookingunit]")]
    [DisplayName("Tbookingunit"), InstanceName("Tbookingunit")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TbookingunitRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Bookingunit"), Column("bookingunit"), Size(20), NotNull, QuickSearch]
        public String Bookingunit
        {
            get { return Fields.Bookingunit[this]; }
            set { Fields.Bookingunit[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Bookingunit; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TbookingunitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Bookingunit;


		}
    }
}
