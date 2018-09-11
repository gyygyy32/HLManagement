
namespace Serene3.Document {

    @Serenity.Decorators.registerClass()
    export class RequirementDialog extends Serenity.EntityDialog<RequirementRow, any> {
        protected getFormKey() { return RequirementForm.formKey; }
        protected getIdProperty() { return RequirementRow.idProperty; }
        protected getLocalTextPrefix() { return RequirementRow.localTextPrefix; }
        protected getNameProperty() { return RequirementRow.nameProperty; }
        protected getService() { return RequirementService.baseUrl; }

        protected form = new RequirementForm(this.idPrefix);

        constructor() {
            super();
            //this.form.StatusID. = StatusRow.Fields.Id;
            console.log(this.form.StatusID.items);
            var items = this.form.StatusID.items;
            items.sort((a, b) => (Number(a.id) - Number(b.id)));
            

        }

    }
}