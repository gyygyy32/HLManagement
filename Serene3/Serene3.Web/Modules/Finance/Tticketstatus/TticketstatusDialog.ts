
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TticketstatusDialog extends Serenity.EntityDialog<TticketstatusRow, any> {
        protected getFormKey() { return TticketstatusForm.formKey; }
        protected getIdProperty() { return TticketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TticketstatusRow.localTextPrefix; }
        protected getNameProperty() { return TticketstatusRow.nameProperty; }
        protected getService() { return TticketstatusService.baseUrl; }

        protected form = new TticketstatusForm(this.idPrefix);

    }
}