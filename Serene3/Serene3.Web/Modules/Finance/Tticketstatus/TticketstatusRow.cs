
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tticketstatus]")]
    [DisplayName("Tticketstatus"), InstanceName("Tticketstatus")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TticketstatusRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Ticketstatus"), Column("ticketstatus"), Size(20), NotNull, QuickSearch]
        public String Ticketstatus
        {
            get { return Fields.Ticketstatus[this]; }
            set { Fields.Ticketstatus[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Ticketstatus; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TticketstatusRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Ticketstatus;


		}
    }
}
