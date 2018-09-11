
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TorderunitGrid extends Serenity.EntityGrid<TorderunitRow, any> {
        protected getColumnsKey() { return 'Finance.Torderunit'; }
        protected getDialogType() { return TorderunitDialog; }
        protected getIdProperty() { return TorderunitRow.idProperty; }
        protected getLocalTextPrefix() { return TorderunitRow.localTextPrefix; }
        protected getService() { return TorderunitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}