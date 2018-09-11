namespace Serene3.Finance {
    export interface TfinanceRow {
        Id?: number;
        Companyid?: number;
        Ordertime?: string;
        Demandtime?: string;
        Contractnumber?: string;
        Usediscription?: string;
        Customerid?: number;
        Producttypeid?: number;
        Productdescription?: string;
        Specificationid?: number;
        Orderqty?: number;
        Orderunitid?: number;
        Orderunitprice?: number;
        Ordertotalprice?: number;
        Taxrate?: number;
        Suppliercompanyid?: number;
        Suppliercustomername?: string;
        Bookingtime?: string;
        Bookingqty?: number;
        Bookingunitid?: number;
        Bookingunitprice?: number;
        Bookingtotalprice?: number;
        Storagetime?: string;
        Arrivalqty?: number;
        Inputticketstatusid?: number;
        Inputtickettime?: string;
        Paymentstatusid?: number;
        Deliverytime?: string;
        Deliveryinfo?: string;
        Expresstypeid?: number;
        Expressnumber?: string;
        Expressprice?: number;
        Deliveryqty?: number;
        Undeliveryqty?: number;
        Ticketstatusid?: number;
        Collectionstatusid?: number;
        Remark?: string;
        Company?: string;
        Customer?: string;
        ProductType?: string;
        Specification?: string;
        OrderUnit?: string;
        SupplierCompany?: string;
        BookingUnit?: string;
        InputTicketStatus?: string;
        PaymentStatus?: string;
        ExpressType?: string;
        TicketStatus?: string;
        CollectionStatus?: string;
    }

    export namespace TfinanceRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Contractnumber';
        export const localTextPrefix = 'Finance.Tfinance';
        export const lookupKey = 'Finance.Tfinance';

        export function getLookup(): Q.Lookup<TfinanceRow> {
            return Q.getLookup<TfinanceRow>('Finance.Tfinance');
        }

        export declare const enum Fields {
            Id = "Id",
            Companyid = "Companyid",
            Ordertime = "Ordertime",
            Demandtime = "Demandtime",
            Contractnumber = "Contractnumber",
            Usediscription = "Usediscription",
            Customerid = "Customerid",
            Producttypeid = "Producttypeid",
            Productdescription = "Productdescription",
            Specificationid = "Specificationid",
            Orderqty = "Orderqty",
            Orderunitid = "Orderunitid",
            Orderunitprice = "Orderunitprice",
            Ordertotalprice = "Ordertotalprice",
            Taxrate = "Taxrate",
            Suppliercompanyid = "Suppliercompanyid",
            Suppliercustomername = "Suppliercustomername",
            Bookingtime = "Bookingtime",
            Bookingqty = "Bookingqty",
            Bookingunitid = "Bookingunitid",
            Bookingunitprice = "Bookingunitprice",
            Bookingtotalprice = "Bookingtotalprice",
            Storagetime = "Storagetime",
            Arrivalqty = "Arrivalqty",
            Inputticketstatusid = "Inputticketstatusid",
            Inputtickettime = "Inputtickettime",
            Paymentstatusid = "Paymentstatusid",
            Deliverytime = "Deliverytime",
            Deliveryinfo = "Deliveryinfo",
            Expresstypeid = "Expresstypeid",
            Expressnumber = "Expressnumber",
            Expressprice = "Expressprice",
            Deliveryqty = "Deliveryqty",
            Undeliveryqty = "Undeliveryqty",
            Ticketstatusid = "Ticketstatusid",
            Collectionstatusid = "Collectionstatusid",
            Remark = "Remark",
            Company = "Company",
            Customer = "Customer",
            ProductType = "ProductType",
            Specification = "Specification",
            OrderUnit = "OrderUnit",
            SupplierCompany = "SupplierCompany",
            BookingUnit = "BookingUnit",
            InputTicketStatus = "InputTicketStatus",
            PaymentStatus = "PaymentStatus",
            ExpressType = "ExpressType",
            TicketStatus = "TicketStatus",
            CollectionStatus = "CollectionStatus"
        }
    }
}

