
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TproducttypeDialog extends Serenity.EntityDialog<TproducttypeRow, any> {
        protected getFormKey() { return TproducttypeForm.formKey; }
        protected getIdProperty() { return TproducttypeRow.idProperty; }
        protected getLocalTextPrefix() { return TproducttypeRow.localTextPrefix; }
        protected getNameProperty() { return TproducttypeRow.nameProperty; }
        protected getService() { return TproducttypeService.baseUrl; }

        protected form = new TproducttypeForm(this.idPrefix);

    }
}