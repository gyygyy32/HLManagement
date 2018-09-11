
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TfinanceGrid extends Serenity.EntityGrid<TfinanceRow, any> {
        protected getColumnsKey() { return 'Finance.Tfinance'; }
        protected getDialogType() { return TfinanceDialog; }
        protected getIdProperty() { return TfinanceRow.idProperty; }
        protected getLocalTextPrefix() { return TfinanceRow.localTextPrefix; }
        protected getService() { return TfinanceService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}