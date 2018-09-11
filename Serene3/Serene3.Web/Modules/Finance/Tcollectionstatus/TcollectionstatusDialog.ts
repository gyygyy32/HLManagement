
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcollectionstatusDialog extends Serenity.EntityDialog<TcollectionstatusRow, any> {
        protected getFormKey() { return TcollectionstatusForm.formKey; }
        protected getIdProperty() { return TcollectionstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TcollectionstatusRow.localTextPrefix; }
        protected getNameProperty() { return TcollectionstatusRow.nameProperty; }
        protected getService() { return TcollectionstatusService.baseUrl; }

        protected form = new TcollectionstatusForm(this.idPrefix);

    }
}