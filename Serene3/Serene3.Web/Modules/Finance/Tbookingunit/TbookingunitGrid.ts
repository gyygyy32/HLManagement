
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TbookingunitGrid extends Serenity.EntityGrid<TbookingunitRow, any> {
        protected getColumnsKey() { return 'Finance.Tbookingunit'; }
        protected getDialogType() { return TbookingunitDialog; }
        protected getIdProperty() { return TbookingunitRow.idProperty; }
        protected getLocalTextPrefix() { return TbookingunitRow.localTextPrefix; }
        protected getService() { return TbookingunitService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}