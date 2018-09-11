
namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[texpresstype]")]
    [DisplayName("Texpresstype"), InstanceName("Texpresstype")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TexpresstypeRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Expresstype"), Column("expresstype"), Size(20), NotNull, QuickSearch]
        public String Expresstype
        {
            get { return Fields.Expresstype[this]; }
            set { Fields.Expresstype[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Expresstype; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TexpresstypeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Expresstype;


		}
    }
}
