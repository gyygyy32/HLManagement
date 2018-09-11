
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TpaymentstatusGrid extends Serenity.EntityGrid<TpaymentstatusRow, any> {
        protected getColumnsKey() { return 'Finance.Tpaymentstatus'; }
        protected getDialogType() { return TpaymentstatusDialog; }
        protected getIdProperty() { return TpaymentstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TpaymentstatusRow.localTextPrefix; }
        protected getService() { return TpaymentstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}