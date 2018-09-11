
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcustomerGrid extends Serenity.EntityGrid<TcustomerRow, any> {
        protected getColumnsKey() { return 'Finance.Tcustomer'; }
        protected getDialogType() { return TcustomerDialog; }
        protected getIdProperty() { return TcustomerRow.idProperty; }
        protected getLocalTextPrefix() { return TcustomerRow.localTextPrefix; }
        protected getService() { return TcustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}