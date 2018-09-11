
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TorderunitDialog extends Serenity.EntityDialog<TorderunitRow, any> {
        protected getFormKey() { return TorderunitForm.formKey; }
        protected getIdProperty() { return TorderunitRow.idProperty; }
        protected getLocalTextPrefix() { return TorderunitRow.localTextPrefix; }
        protected getNameProperty() { return TorderunitRow.nameProperty; }
        protected getService() { return TorderunitService.baseUrl; }

        protected form = new TorderunitForm(this.idPrefix);

    }
}