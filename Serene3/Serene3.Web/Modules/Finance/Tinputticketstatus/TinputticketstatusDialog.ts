
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TinputticketstatusDialog extends Serenity.EntityDialog<TinputticketstatusRow, any> {
        protected getFormKey() { return TinputticketstatusForm.formKey; }
        protected getIdProperty() { return TinputticketstatusRow.idProperty; }
        protected getLocalTextPrefix() { return TinputticketstatusRow.localTextPrefix; }
        protected getNameProperty() { return TinputticketstatusRow.nameProperty; }
        protected getService() { return TinputticketstatusService.baseUrl; }

        protected form = new TinputticketstatusForm(this.idPrefix);

    }
}