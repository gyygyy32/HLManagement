
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcustomerDialog extends Serenity.EntityDialog<TcustomerRow, any> {
        protected getFormKey() { return TcustomerForm.formKey; }
        protected getIdProperty() { return TcustomerRow.idProperty; }
        protected getLocalTextPrefix() { return TcustomerRow.localTextPrefix; }
        protected getNameProperty() { return TcustomerRow.nameProperty; }
        protected getService() { return TcustomerService.baseUrl; }

        protected form = new TcustomerForm(this.idPrefix);

    }
}