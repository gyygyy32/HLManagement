
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcompanyGrid extends Serenity.EntityGrid<TcompanyRow, any> {
        protected getColumnsKey() { return 'Finance.Tcompany'; }
        protected getDialogType() { return TcompanyDialog; }
        protected getIdProperty() { return TcompanyRow.idProperty; }
        protected getLocalTextPrefix() { return TcompanyRow.localTextPrefix; }
        protected getService() { return TcompanyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}