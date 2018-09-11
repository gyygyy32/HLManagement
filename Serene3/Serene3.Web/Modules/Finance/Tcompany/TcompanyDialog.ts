
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TcompanyDialog extends Serenity.EntityDialog<TcompanyRow, any> {
        protected getFormKey() { return TcompanyForm.formKey; }
        protected getIdProperty() { return TcompanyRow.idProperty; }
        protected getLocalTextPrefix() { return TcompanyRow.localTextPrefix; }
        protected getNameProperty() { return TcompanyRow.nameProperty; }
        protected getService() { return TcompanyService.baseUrl; }

        protected form = new TcompanyForm(this.idPrefix);

    }
}