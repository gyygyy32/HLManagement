
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TproducttypeGrid extends Serenity.EntityGrid<TproducttypeRow, any> {
        protected getColumnsKey() { return 'Finance.Tproducttype'; }
        protected getDialogType() { return TproducttypeDialog; }
        protected getIdProperty() { return TproducttypeRow.idProperty; }
        protected getLocalTextPrefix() { return TproducttypeRow.localTextPrefix; }
        protected getService() { return TproducttypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}