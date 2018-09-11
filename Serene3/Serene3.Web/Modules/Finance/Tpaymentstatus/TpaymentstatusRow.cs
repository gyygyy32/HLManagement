
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tpaymentstatus]")]
    [DisplayName("Tpaymentstatus"), InstanceName("Tpaymentstatus")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TpaymentstatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Paymentstatus"), Column("paymentstatus"), Size(20), NotNull, QuickSearch]
        public String Paymentstatus
        {
            get { return Fields.Paymentstatus[this]; }
            set { Fields.Paymentstatus[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Paymentstatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TpaymentstatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Paymentstatus;


		}
    }
}
