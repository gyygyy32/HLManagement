
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TspecificationDialog extends Serenity.EntityDialog<TspecificationRow, any> {
        protected getFormKey() { return TspecificationForm.formKey; }
        protected getIdProperty() { return TspecificationRow.idProperty; }
        protected getLocalTextPrefix() { return TspecificationRow.localTextPrefix; }
        protected getNameProperty() { return TspecificationRow.nameProperty; }
        protected getService() { return TspecificationService.baseUrl; }

        protected form = new TspecificationForm(this.idPrefix);

    }
}