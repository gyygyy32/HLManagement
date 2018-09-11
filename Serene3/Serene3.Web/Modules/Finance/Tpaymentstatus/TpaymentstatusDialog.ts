
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TpaymentstatusDialog extends Serenity.EntityDialog<TpaymentstatusRow, any> {
        protected getFormKey() { return TpaymentstatusForm.formKey; }
        protected getIdProperty() { return TpaymentstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TpaymentstatusRow.localTextPrefix; }
        protected getNameProperty() { return TpaymentstatusRow.nameProperty; }
        protected getService() { return TpaymentstatusService.baseUrl; }

        protected form = new TpaymentstatusForm(this.idPrefix);

    }
}