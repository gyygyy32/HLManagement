
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tinputticketstatus]")]
    [DisplayName("Tinputticketstatus"), InstanceName("Tinputticketstatus")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TinputticketstatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Inputticketstatus"), Column("inputticketstatus"), Size(20), NotNull, QuickSearch]
        public String Inputticketstatus
        {
            get { return Fields.Inputticketstatus[this]; }
            set { Fields.Inputticketstatus[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Inputticketstatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TinputticketstatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Inputticketstatus;


		}
    }
}
