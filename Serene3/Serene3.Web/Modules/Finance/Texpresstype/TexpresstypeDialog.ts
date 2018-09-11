
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TexpresstypeDialog extends Serenity.EntityDialog<TexpresstypeRow, any> {
        protected getFormKey() { return TexpresstypeForm.formKey; }
        protected getIdProperty() { return TexpresstypeRow.idProperty; }
        protected getLocalTextPrefix() { return TexpresstypeRow.localTextPrefix; }
        protected getNameProperty() { return TexpresstypeRow.nameProperty; }
        protected getService() { return TexpresstypeService.baseUrl; }

        protected form = new TexpresstypeForm(this.idPrefix);

    }
}