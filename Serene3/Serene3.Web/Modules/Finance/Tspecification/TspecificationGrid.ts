
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TspecificationGrid extends Serenity.EntityGrid<TspecificationRow, any> {
        protected getColumnsKey() { return 'Finance.Tspecification'; }
        protected getDialogType() { return TspecificationDialog; }
        protected getIdProperty() { return TspecificationRow.idProperty; }
        protected getLocalTextPrefix() { return TspecificationRow.localTextPrefix; }
        protected getService() { return TspecificationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}