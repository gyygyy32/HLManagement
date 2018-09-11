
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TinputticketstatusGrid extends Serenity.EntityGrid<TinputticketstatusRow, any> {
        protected getColumnsKey() { return 'Finance.Tinputticketstatus'; }
        protected getDialogType() { return TinputticketstatusDialog; }
        protected getIdProperty() { return TinputticketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TinputticketstatusRow.localTextPrefix; }
        protected getService() { return TinputticketstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}