

namespace Serene3.Finance.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Finance"), Module("Finance"), TableName("[dbo].[tfinance]")]
    [DisplayName("Tfinance"), InstanceName("Tfinance")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class TfinanceRow : Row, IIdRow, INameRow
    {

        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        
        

        [DisplayName("Companyid"), Column("companyid"), NotNull]
        [LookupEditor(typeof(TcompanyRow), InplaceAdd = true)]
        [ForeignKey(typeof(TcompanyRow)), LeftJoin("company"), LookupInclude]
        
        public Int32? Companyid
        {
            get { return Fields.Companyid[this]; }
            set { Fields.Companyid[this] = value; }
        }
        [Origin("company"),DisplayName("Company")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String Company
        {
            get { return Fields.Company[this]; }
            set { Fields.Company[this] = value; }
        }


        [DisplayName("Ordertime"), Column("ordertime"), NotNull, DateTimeEditor]
        public DateTime? Ordertime
        {
            get { return Fields.Ordertime[this]; }
            set { Fields.Ordertime[this] = value; }
        }

        [DisplayName("Demandtime"), Column("demandtime"), DateTimeEditor,DateTimeFormatter(DisplayFormat ="yyyy-MM-dd HH:mm:ss")]
        public DateTime? Demandtime
        {
            get { return Fields.Demandtime[this]; }
            set { Fields.Demandtime[this] = value; }
        }

        [DisplayName("Contractnumber"), Column("contractnumber"), Size(30), NotNull, QuickSearch]
        public String Contractnumber
        {
            get { return Fields.Contractnumber[this]; }
            set { Fields.Contractnumber[this] = value; }
        }

        [DisplayName("Usediscription"), Column("usediscription"), Size(50)]
        public String Usediscription
        {
            get { return Fields.Usediscription[this]; }
            set { Fields.Usediscription[this] = value; }
        }
        
        [DisplayName("Customerid"), Column("customerid"), NotNull]
        [LookupEditor(typeof(TcustomerRow),InplaceAdd =true)]
        [ForeignKey(typeof(TcustomerRow)),LeftJoin("customer"),LookupInclude]
        public Int32? Customerid
        {
            get { return Fields.Customerid[this]; }
            set { Fields.Customerid[this] = value; }
        }

        [Origin("customer"),DisplayName("Customer")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String Customer
        {
            get { return Fields.Customer[this]; }
            set { Fields.Customer[this] = value; }
        }

        [DisplayName("Producttypeid"), Column("producttypeid"), NotNull]
        [LookupEditor(typeof(TproducttypeRow), InplaceAdd = true)]
        [ForeignKey(typeof(TproducttypeRow)), LeftJoin("producttype"), LookupInclude]
        public Int32? Producttypeid
        {
            get { return Fields.Producttypeid[this]; }
            set { Fields.Producttypeid[this] = value; }
        }
        [Origin("producttype"), DisplayName("ProductType")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String ProductType
        {
            get { return Fields.ProductType[this]; }
            set { Fields.ProductType[this] = value; }
        }

        [DisplayName("Productdescription"), Column("productdescription"), Size(50), NotNull]
        public String Productdescription
        {
            get { return Fields.Productdescription[this]; }
            set { Fields.Productdescription[this] = value; }
        }

        [DisplayName("Specificationid"), Column("specificationid"), NotNull]
        [LookupEditor(typeof(TspecificationRow), InplaceAdd = true)]
        [ForeignKey(typeof(TspecificationRow)), LeftJoin("specification"), LookupInclude]
        public Int32? Specificationid
        {
            get { return Fields.Specificationid[this]; }
            set { Fields.Specificationid[this] = value; }
        }
        [Origin("specification"), DisplayName("Specification")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String Specification
        {
            get { return Fields.Specification[this]; }
            set { Fields.Specification[this] = value; }
        }



        [DisplayName("Orderqty"), Column("orderqty"), NotNull]
        public Int32? Orderqty
        {
            get { return Fields.Orderqty[this]; }
            set { Fields.Orderqty[this] = value; }
        }

        [DisplayName("Orderunitid"), Column("orderunitid"), NotNull]
        [LookupEditor(typeof(TorderunitRow), InplaceAdd = true)]
        [ForeignKey(typeof(TorderunitRow)), LeftJoin("orderunit"), LookupInclude]
        public Int32? Orderunitid
        {
            get { return Fields.Orderunitid[this]; }
            set { Fields.Orderunitid[this] = value; }
        }

        [Origin("orderunit"), DisplayName("OrderUnit")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String OrderUnit
        {
            get { return Fields.OrderUnit[this]; }
            set { Fields.OrderUnit[this] = value; }
        }

        [DisplayName("Orderunitprice"), Column("orderunitprice"), Size(18), Scale(4), NotNull]
        public Decimal? Orderunitprice
        {
            get { return Fields.Orderunitprice[this]; }
            set { Fields.Orderunitprice[this] = value; }
        }

        [DisplayName("Ordertotalprice"), Column("ordertotalprice"), Size(18), Scale(4), NotNull]
        public Decimal? Ordertotalprice
        {
            get { return Fields.Ordertotalprice[this]; }
            set { Fields.Ordertotalprice[this] = value; }
        }

        [DisplayName("Taxrate"), Column("taxrate"), Size(18), Scale(4)]
        public Decimal? Taxrate
        {
            get { return Fields.Taxrate[this]; }
            set { Fields.Taxrate[this] = value; }
        }

        [DisplayName("Suppliercompanyid"), Column("suppliercompanyid")]
        [LookupEditor(typeof(TsuppliercompanyRow), InplaceAdd = true)]
        [ForeignKey(typeof(TsuppliercompanyRow)), LeftJoin("suppliercompany"), LookupInclude]
        public Int32? Suppliercompanyid
        {
            get { return Fields.Suppliercompanyid[this]; }
            set { Fields.Suppliercompanyid[this] = value; }
        }
        [Origin("suppliercompany"), DisplayName("SupplierCompany")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String SupplierCompany
        {
            get { return Fields.SupplierCompany[this]; }
            set { Fields.SupplierCompany[this] = value; }
        }

        [DisplayName("Suppliercustomername"), Column("suppliercustomername"), Size(15)]
        public String Suppliercustomername
        {
            get { return Fields.Suppliercustomername[this]; }
            set { Fields.Suppliercustomername[this] = value; }
        }

        [DisplayName("Bookingtime"), Column("bookingtime")]
        public DateTime? Bookingtime
        {
            get { return Fields.Bookingtime[this]; }
            set { Fields.Bookingtime[this] = value; }
        }

        [DisplayName("Bookingqty"), Column("bookingqty")]
        public Int32? Bookingqty
        {
            get { return Fields.Bookingqty[this]; }
            set { Fields.Bookingqty[this] = value; }
        }

        [DisplayName("Bookingunitid"), Column("bookingunitid")]
        [LookupEditor(typeof(TbookingunitRow), InplaceAdd = true)]
        [ForeignKey(typeof(TbookingunitRow)), LeftJoin("bookingunit"), LookupInclude]
        public Int32? Bookingunitid
        {
            get { return Fields.Bookingunitid[this]; }
            set { Fields.Bookingunitid[this] = value; }
        }
        [Origin("bookingunit"), DisplayName("BookingUnit")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String BookingUnit
        {
            get { return Fields.BookingUnit[this]; }
            set { Fields.BookingUnit[this] = value; }
        }

        [DisplayName("Bookingunitprice"), Column("bookingunitprice"), Size(18), Scale(4)]
        public Decimal? Bookingunitprice
        {
            get { return Fields.Bookingunitprice[this]; }
            set { Fields.Bookingunitprice[this] = value; }
        }

        [DisplayName("Bookingtotalprice"), Column("bookingtotalprice"), Size(18), Scale(4)]
        public Decimal? Bookingtotalprice
        {
            get { return Fields.Bookingtotalprice[this]; }
            set { Fields.Bookingtotalprice[this] = value; }
        }

        [DisplayName("Storagetime"), Column("storagetime")]
        public DateTime? Storagetime
        {
            get { return Fields.Storagetime[this]; }
            set { Fields.Storagetime[this] = value; }
        }

        [DisplayName("Arrivalqty"), Column("arrivalqty")]
        public Int32? Arrivalqty
        {
            get { return Fields.Arrivalqty[this]; }
            set { Fields.Arrivalqty[this] = value; }
        }

        [DisplayName("Inputticketstatusid"), Column("inputticketstatusid")]
        [LookupEditor(typeof(TinputticketstatusRow), InplaceAdd = true)]
        [ForeignKey(typeof(TinputticketstatusRow)), LeftJoin("inputticketstatus"), LookupInclude]
        public Int32? Inputticketstatusid
        {
            get { return Fields.Inputticketstatusid[this]; }
            set { Fields.Inputticketstatusid[this] = value; }
        }
        [Origin("inputticketstatus"), DisplayName("InputTicketStatus")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String InputTicketStatus
        {
            get { return Fields.InputTicketStatus[this]; }
            set { Fields.InputTicketStatus[this] = value; }
        }

        [DisplayName("Inputtickettime"), Column("inputtickettime")]
        public DateTime? Inputtickettime
        {
            get { return Fields.Inputtickettime[this]; }
            set { Fields.Inputtickettime[this] = value; }
        }

        [DisplayName("Paymentstatusid"), Column("paymentstatusid")]
        [LookupEditor(typeof(TpaymentstatusRow), InplaceAdd = true)]
        [ForeignKey(typeof(TpaymentstatusRow)), LeftJoin("paymentstatus"), LookupInclude]
        public Int32? Paymentstatusid
        {
            get { return Fields.Paymentstatusid[this]; }
            set { Fields.Paymentstatusid[this] = value; }
        }
        [Origin("paymentstatus"), DisplayName("PaymentStatus")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String PaymentStatus
        {
            get { return Fields.PaymentStatus[this]; }
            set { Fields.PaymentStatus[this] = value; }
        }


        [DisplayName("Deliverytime"), Column("deliverytime")]
        public DateTime? Deliverytime
        {
            get { return Fields.Deliverytime[this]; }
            set { Fields.Deliverytime[this] = value; }
        }

        [DisplayName("Deliveryinfo"), Column("deliveryinfo"), Size(100)]
        public String Deliveryinfo
        {
            get { return Fields.Deliveryinfo[this]; }
            set { Fields.Deliveryinfo[this] = value; }
        }

        [DisplayName("Expresstypeid"), Column("expresstypeid")]
        [LookupEditor(typeof(TexpresstypeRow), InplaceAdd = true)]
        [ForeignKey(typeof(TexpresstypeRow)), LeftJoin("expresstype"), LookupInclude]
        public Int32? Expresstypeid
        {
            get { return Fields.Expresstypeid[this]; }
            set { Fields.Expresstypeid[this] = value; }
        }
        [Origin("expresstype"), DisplayName("ExpressType")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String ExpressType
        {
            get { return Fields.ExpressType[this]; }
            set { Fields.ExpressType[this] = value; }
        }

        [DisplayName("Expressnumber"), Column("expressnumber"), Size(20)]
        public String Expressnumber
        {
            get { return Fields.Expressnumber[this]; }
            set { Fields.Expressnumber[this] = value; }
        }

        [DisplayName("Expressprice"), Column("expressprice"), Size(18), Scale(4)]
        public Decimal? Expressprice
        {
            get { return Fields.Expressprice[this]; }
            set { Fields.Expressprice[this] = value; }
        }

        [DisplayName("Deliveryqty"), Column("deliveryqty")]
        public Int32? Deliveryqty
        {
            get { return Fields.Deliveryqty[this]; }
            set { Fields.Deliveryqty[this] = value; }
        }

        [DisplayName("Undeliveryqty"), Column("undeliveryqty")]
        public Int32? Undeliveryqty
        {
            get { return Fields.Undeliveryqty[this]; }
            set { Fields.Undeliveryqty[this] = value; }
        }

        [DisplayName("Ticketstatusid"), Column("ticketstatusid")]
        [LookupEditor(typeof(TticketstatusRow), InplaceAdd = true)]
        [ForeignKey(typeof(TticketstatusRow)), LeftJoin("ticketstatus"), LookupInclude]
        public Int32? Ticketstatusid
        {
            get { return Fields.Ticketstatusid[this]; }
            set { Fields.Ticketstatusid[this] = value; }
        }
        [Origin("ticketstatus"), DisplayName("TicketStatus")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String TicketStatus
        {
            get { return Fields.TicketStatus[this]; }
            set { Fields.TicketStatus[this] = value; }
        }

        [DisplayName("Collectionstatusid"), Column("collectionstatusid")]
        [LookupEditor(typeof(TcollectionstatusRow), InplaceAdd = true)]
        [ForeignKey(typeof(TcollectionstatusRow)), LeftJoin("collectionstatus"), LookupInclude]
        public Int32? Collectionstatusid
        {
            get { return Fields.Collectionstatusid[this]; }
            set { Fields.Collectionstatusid[this] = value; }
        }

        [Origin("collectionstatus"), DisplayName("CollectionStatus")]
        [QuickFilter, QuickFilterOption("multiple", true), EditLink]
        public String CollectionStatus
        {
            get { return Fields.CollectionStatus[this]; }
            set { Fields.CollectionStatus[this] = value; }
        }


        [DisplayName("Remark"), Column("remark"), Size(50)]
        public String Remark
        {
            get { return Fields.Remark[this]; }
            set { Fields.Remark[this] = value; }
        }



        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Contractnumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TfinanceRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field Companyid;

            public DateTimeField Ordertime;

            public DateTimeField Demandtime;

            public StringField Contractnumber;

            public StringField Usediscription;

            public Int32Field Customerid;

            public Int32Field Producttypeid;

            public StringField Productdescription;

            public Int32Field Specificationid;

            public Int32Field Orderqty;

            public Int32Field Orderunitid;

            public DecimalField Orderunitprice;

            public DecimalField Ordertotalprice;

            public DecimalField Taxrate;

            public Int32Field Suppliercompanyid;

            public StringField Suppliercustomername;

            public DateTimeField Bookingtime;

            public Int32Field Bookingqty;

            public Int32Field Bookingunitid;

            public DecimalField Bookingunitprice;

            public DecimalField Bookingtotalprice;

            public DateTimeField Storagetime;

            public Int32Field Arrivalqty;

            public Int32Field Inputticketstatusid;

            public DateTimeField Inputtickettime;

            public Int32Field Paymentstatusid;

            public DateTimeField Deliverytime;

            public StringField Deliveryinfo;

            public Int32Field Expresstypeid;

            public StringField Expressnumber;

            public DecimalField Expressprice;

            public Int32Field Deliveryqty;

            public Int32Field Undeliveryqty;

            public Int32Field Ticketstatusid;

            public Int32Field Collectionstatusid;

            public StringField Remark;

            public StringField Company;
            public StringField Customer;
            public StringField ProductType;
            public StringField Specification;
            public StringField OrderUnit;
            public StringField SupplierCompany;
            public StringField BookingUnit;
            public StringField InputTicketStatus;
            public StringField PaymentStatus;
            public StringField ExpressType;
            public StringField TicketStatus;
            public StringField CollectionStatus;



        }
    }
}
