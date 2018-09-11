
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TexpresstypeGrid extends Serenity.EntityGrid<TexpresstypeRow, any> {
        protected getColumnsKey() { return 'Finance.Texpresstype'; }
        protected getDialogType() { return TexpresstypeDialog; }
        protected getIdProperty() { return TexpresstypeRow.idProperty; }
        protected getLocalTextPrefix() { return TexpresstypeRow.localTextPrefix; }
        protected getService() { return TexpresstypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}