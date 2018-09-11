namespace Serene3.Finance {
    export interface TfinanceForm {
        Companyid: Serenity.LookupEditor;
        Ordertime: Serenity.DateTimeEditor;
        Demandtime: Serenity.DateTimeEditor;
        Contractnumber: Serenity.StringEditor;
        Usediscription: Serenity.StringEditor;
        Customerid: Serenity.LookupEditor;
        Producttypeid: Serenity.LookupEditor;
        Productdescription: Serenity.StringEditor;
        Specificationid: Serenity.LookupEditor;
        Orderqty: Serenity.IntegerEditor;
        Orderunitid: Serenity.LookupEditor;
        Orderunitprice: Serenity.DecimalEditor;
        Ordertotalprice: Serenity.DecimalEditor;
        Taxrate: Serenity.DecimalEditor;
        Suppliercompanyid: Serenity.LookupEditor;
        Suppliercustomername: Serenity.StringEditor;
        Bookingtime: Serenity.DateEditor;
        Bookingqty: Serenity.IntegerEditor;
        Bookingunitid: Serenity.LookupEditor;
        Bookingunitprice: Serenity.DecimalEditor;
        Bookingtotalprice: Serenity.DecimalEditor;
        Storagetime: Serenity.DateEditor;
        Arrivalqty: Serenity.IntegerEditor;
        Inputticketstatusid: Serenity.LookupEditor;
        Inputtickettime: Serenity.DateEditor;
        Paymentstatusid: Serenity.LookupEditor;
        Deliverytime: Serenity.DateEditor;
        Deliveryinfo: Serenity.StringEditor;
        Expresstypeid: Serenity.LookupEditor;
        Expressnumber: Serenity.StringEditor;
        Expressprice: Serenity.DecimalEditor;
        Deliveryqty: Serenity.IntegerEditor;
        Undeliveryqty: Serenity.IntegerEditor;
        Ticketstatusid: Serenity.LookupEditor;
        Collectionstatusid: Serenity.LookupEditor;
        Remark: Serenity.StringEditor;
    }

    export class TfinanceForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tfinance';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TfinanceForm.init)  {
                TfinanceForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateTimeEditor;
                var w2 = s.StringEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.DateEditor;

                Q.initFormType(TfinanceForm, [
                    'Companyid', w0,
                    'Ordertime', w1,
                    'Demandtime', w1,
                    'Contractnumber', w2,
                    'Usediscription', w2,
                    'Customerid', w0,
                    'Producttypeid', w0,
                    'Productdescription', w2,
                    'Specificationid', w0,
                    'Orderqty', w3,
                    'Orderunitid', w0,
                    'Orderunitprice', w4,
                    'Ordertotalprice', w4,
                    'Taxrate', w4,
                    'Suppliercompanyid', w0,
                    'Suppliercustomername', w2,
                    'Bookingtime', w5,
                    'Bookingqty', w3,
                    'Bookingunitid', w0,
                    'Bookingunitprice', w4,
                    'Bookingtotalprice', w4,
                    'Storagetime', w5,
                    'Arrivalqty', w3,
                    'Inputticketstatusid', w0,
                    'Inputtickettime', w5,
                    'Paymentstatusid', w0,
                    'Deliverytime', w5,
                    'Deliveryinfo', w2,
                    'Expresstypeid', w0,
                    'Expressnumber', w2,
                    'Expressprice', w4,
                    'Deliveryqty', w3,
                    'Undeliveryqty', w3,
                    'Ticketstatusid', w0,
                    'Collectionstatusid', w0,
                    'Remark', w2
                ]);
            }
        }
    }
}

