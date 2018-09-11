
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TsuppliercompanyDialog extends Serenity.EntityDialog<TsuppliercompanyRow, any> {
        protected getFormKey() { return TsuppliercompanyForm.formKey; }
        protected getIdProperty() { return TsuppliercompanyRow.idProperty; }
        protected getLocalTextPrefix() { return TsuppliercompanyRow.localTextPrefix; }
        protected getNameProperty() { return TsuppliercompanyRow.nameProperty; }
        protected getService() { return TsuppliercompanyService.baseUrl; }

        protected form = new TsuppliercompanyForm(this.idPrefix);

    }
}