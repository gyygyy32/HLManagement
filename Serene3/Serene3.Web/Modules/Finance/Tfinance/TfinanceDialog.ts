
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TfinanceDialog extends Serenity.EntityDialog<TfinanceRow, any> {
        protected getFormKey() { return TfinanceForm.formKey; }
        protected getIdProperty() { return TfinanceRow.idProperty; }
        protected getLocalTextPrefix() { return TfinanceRow.localTextPrefix; }
        protected getNameProperty() { return TfinanceRow.nameProperty; }
        protected getService() { return TfinanceService.baseUrl; }

        protected form = new TfinanceForm(this.idPrefix);

    }
}