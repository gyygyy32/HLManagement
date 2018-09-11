
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tfinance")]
    [BasedOnRow(typeof(Entities.TfinanceRow), CheckNames = true)]
    public class TfinanceForm
    {
        [Category("Order")]
        [HalfWidth]
        public Int32 Companyid { get; set; }
        [HalfWidth]
        public DateTime Ordertime { get; set; }
        [HalfWidth]
        public DateTime Demandtime { get; set; }
        [HalfWidth]
        public String Contractnumber { get; set; }
        [HalfWidth]
        public String Usediscription { get; set; }
        [HalfWidth]
        public Int32 Customerid { get; set; }
        [HalfWidth]
        public Int32 Producttypeid { get; set; }
        [HalfWidth]
        public String Productdescription { get; set; }
        [HalfWidth]
        public Int32 Specificationid { get; set; }
        [HalfWidth]
        public Int32 Orderqty { get; set; }
        [HalfWidth]
        public Int32 Orderunitid { get; set; }
        [HalfWidth]
        public Decimal Orderunitprice { get; set; }
        [HalfWidth]
        public Decimal Ordertotalprice { get; set; }
        [HalfWidth]
        public Decimal Taxrate { get; set; }
        [Category("Booking")]
        [HalfWidth]
        public Int32 Suppliercompanyid { get; set; }
        [HalfWidth]
        public String Suppliercustomername { get; set; }
        [HalfWidth]
        public DateTime Bookingtime { get; set; }
        [HalfWidth]
        public Int32 Bookingqty { get; set; }
        [HalfWidth]
        public Int32 Bookingunitid { get; set; }
        [HalfWidth]
        public Decimal Bookingunitprice { get; set; }
        public Decimal Bookingtotalprice { get; set; }
        [Category("Arrival")]
        [HalfWidth]
        public DateTime Storagetime { get; set; }
        [HalfWidth]
        public Int32 Arrivalqty { get; set; }
        [HalfWidth]
        public Int32 Inputticketstatusid { get; set; }
        [HalfWidth]
        public DateTime Inputtickettime { get; set; }
        public Int32 Paymentstatusid { get; set; }
        [Category("Delivery")]
        [HalfWidth]
        public DateTime Deliverytime { get; set; }
        [HalfWidth]
        public String Deliveryinfo { get; set; }
        [HalfWidth]
        public Int32 Expresstypeid { get; set; }
        [HalfWidth]
        public String Expressnumber { get; set; }
        [HalfWidth]
        public Decimal Expressprice { get; set; }
        [HalfWidth]
        public Int32 Deliveryqty { get; set; }
        [HalfWidth]
        public Int32 Undeliveryqty { get; set; }
        [Category("Collection")]
        [HalfWidth]
        public Int32 Ticketstatusid { get; set; }
        [HalfWidth]
        public Int32 Collectionstatusid { get; set; }
        [Category("Remark")]
        public String Remark { get; set; }
    }
}