
namespace Serene3.Finance {

    @Serenity.Decorators.registerClass()
    export class TbookingunitDialog extends Serenity.EntityDialog<TbookingunitRow, any> {
        protected getFormKey() { return TbookingunitForm.formKey; }
        protected getIdProperty() { return TbookingunitRow.idProperty; }
        protected getLocalTextPrefix() { return TbookingunitRow.localTextPrefix; }
        protected getNameProperty() { return TbookingunitRow.nameProperty; }
        protected getService() { return TbookingunitService.baseUrl; }

        protected form = new TbookingunitForm(this.idPrefix);

    }
}