
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TticketstatusGrid extends Serenity.EntityGrid<TticketstatusRow, any> {
        protected getColumnsKey() { return 'Finance.Tticketstatus'; }
        protected getDialogType() { return TticketstatusDialog; }
        protected getIdProperty() { return TticketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TticketstatusRow.localTextPrefix; }
        protected getService() { return TticketstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}