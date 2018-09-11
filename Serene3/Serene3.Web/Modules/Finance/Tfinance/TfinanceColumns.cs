
namespace Serene3.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Tfinance")]
    [BasedOnRow(typeof(Entities.TfinanceRow), CheckNames = true)]
    public class TfinanceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        //public Int32 Companyid { get; set; }
        public String Company { get; set; }
        public DateTime Ordertime { get; set; }
        public DateTime Demandtime { get; set; }
        [EditLink]
        public String Contractnumber { get; set; }
        public String Usediscription { get; set; }
        //public Int32 Customerid { get; set; }
        public String Customer { get; set; }
        //public Int32 Producttypeid { get; set; }
        public String ProductType;
        public String Productdescription { get; set; }
        public Int32 Specificationid { get; set; }
        public String Specification { get; set; }
        public Int32 Orderqty { get; set; }
        //public Int32 Orderunitid { get; set; }
        public String OrderUnit { get; set; }
        public Decimal Orderunitprice { get; set; }
        public Decimal Ordertotalprice { get; set; }
        public Decimal Taxrate { get; set; }
        //public Int32 Suppliercompanyid { get; set; }
        public String SupplierCompany { get; set; }
        public String Suppliercustomername { get; set; }
        public DateTime Bookingtime { get; set; }
        public Int32 Bookingqty { get; set; }
        //public Int32 Bookingunitid { get; set; }
        public String BookingUnit { get; set; }
        public Decimal Bookingunitprice { get; set; }
        public Decimal Bookingtotalprice { get; set; }
        public DateTime Storagetime { get; set; }
        public Int32 Arrivalqty { get; set; }
        //public Int32 Inputticketstatusid { get; set; }
        public String InputTicketStatus { get; set; }
        public DateTime Inputtickettime { get; set; }
        //public Int32 Paymentstatusid { get; set; }
        public String PaymentStatus { get; set; }
        public DateTime Deliverytime { get; set; }
        public String Deliveryinfo { get; set; }
        //public Int32 Expresstypeid { get; set; }
        public String ExpressType { get; set; }
        public String Expressnumber { get; set; }
        public Decimal Expressprice { get; set; }
        public Int32 Deliveryqty { get; set; }
        public Int32 Undeliveryqty { get; set; }
        //public Int32 Ticketstatusid { get; set; }
        public String TicketStatus { get; set; }
        //public Int32 Collectionstatusid { get; set; }
        public String CollectionStatus { get; set; }
        public String Remark { get; set; }
    }
}