
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcollectionstatusGrid extends Serenity.EntityGrid<TcollectionstatusRow, any> {
        protected getColumnsKey() { return 'Finance.Tcollectionstatus'; }
        protected getDialogType() { return TcollectionstatusDialog; }
        protected getIdProperty() { return TcollectionstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TcollectionstatusRow.localTextPrefix; }
        protected getService() { return TcollectionstatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}