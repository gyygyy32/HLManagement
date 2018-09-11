
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TsuppliercompanyGrid extends Serenity.EntityGrid<TsuppliercompanyRow, any> {
        protected getColumnsKey() { return 'Finance.Tsuppliercompany'; }
        protected getDialogType() { return TsuppliercompanyDialog; }
        protected getIdProperty() { return TsuppliercompanyRow.idProperty; }
        protected getLocalTextPrefix() { return TsuppliercompanyRow.localTextPrefix; }
        protected getService() { return TsuppliercompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}