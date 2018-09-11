
namespace Serene3.Document.Entities
{
    using Serene3.Document.Scripts;
    
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;


    [ConnectionKey("Document"), Module("Document"), TableName("[dbo].[requirement]")]
    [DisplayName("Requirement"), InstanceName("Requirement")]
    [ReadPermission("*")]
    [ModifyPermission("*")]
    public sealed class RequirementRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Subject"), Size(250), NotNull, QuickSearch]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        //客户id
        [Column("customerid"),DisplayName("CustomerID")]
        [LookupEditor(typeof(CustomerRow), InplaceAdd = true)]
        [ForeignKey(typeof(CustomerRow)), LeftJoin("cus"), LookupInclude]
        public Int32? CustomerID
        {
            get { return Fields.CustomerID[this]; }
            set { Fields.CustomerID[this] = value; }
        }

        [Column("productid"), DisplayName("ProductID")]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        [ForeignKey(typeof(ProductRow)), LeftJoin("pro")]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [Column("statusid"), DisplayName("StatusID")]
        [LookupEditor(typeof(StatusRow))]
        [ForeignKey(typeof(StatusRow)), LeftJoin("sta"), LookupInclude]
        public Int32? StatusID
        {
            get { return Fields.StatusID[this]; }
            set { Fields.StatusID[this] = value; }
        }
        [Origin("sta"),DisplayName("状态")]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }


        [Expression("pro.product"), DisplayName("所属产品")]
        //[QuickFilter, QuickFilterOption("multiple", true), EditLink, LookupEditor(typeof(ProductLookup))]
        //(ItemType = "Document.Product")
        [EditLink, Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String Product
        {
            get { return Fields.Customer[this]; }
            set { Fields.Customer[this] = value; }
        }


        [Origin("cus"), DisplayName("Customer")]
        //LookupEditor(typeof(CustomerLookup))
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String Customer
        {
            get { return Fields.Customer[this]; }
            set { Fields.Customer[this] = value; }
        }

        [DisplayName("Contents"), Size(2147483647)]
        public String Contents
        {
            get { return Fields.Contents[this]; }
            set { Fields.Contents[this] = value; }
        }

        [DisplayName("Priority"), Column("priority"), Size(10), NotNull]
        public String Priority
        {
            get { return Fields.Priority[this]; }
            set { Fields.Priority[this] = value; }
        }

        [DisplayName("Developer"), Column("developer"), Size(20)]
        public String Developer
        {
            get { return Fields.Developer[this]; }
            set { Fields.Developer[this] = value; }
        }

        [DisplayName("Starttime"), Column("starttime"), NotNull]
        public DateTime? Starttime
        {
            get { return Fields.Starttime[this]; }
            set { Fields.Starttime[this] = value; }
        }

        [DisplayName("Finishtime"), Column("finishtime"), NotNull,DateTimeEditor,DateTimeFiltering]
        public DateTime? Finishtime
        {
            get { return Fields.Finishtime[this]; }
            set { Fields.Finishtime[this] = value; }
        }

        [DisplayName("Attachments"), Size(500)]
        public String Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }
        [DisplayName("Create By"), Column("createBy"), Size(30)]
        public String CreateBy
        {
            get { return Fields.CreateBy[this]; }
            set { Fields.CreateBy[this] = value; }
        }

        [DisplayName("Create Time"), Column("createTime")]
        public DateTime? CreateTime
        {
            get { return Fields.CreateTime[this]; }
            set { Fields.CreateTime[this] = value; }
        }
        


        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Subject; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RequirementRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public StringField Subject;

            public StringField Customer;

            public StringField Contents;

            public StringField Priority;

            public StringField Developer;

            public DateTimeField Starttime;

            public DateTimeField Finishtime;

            public StringField Attachments;
            public StringField CreateBy;
            public DateTimeField CreateTime;
            public StringField Product;
            public Int32Field CustomerID;
            public Int32Field ProductID;
            public Int32Field StatusID;
            public StringField Status;


        }
    }
}
