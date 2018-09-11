
namespace Serene3.Document {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class RequirementGrid extends Serenity.EntityGrid<RequirementRow, any> {
        protected getColumnsKey() { return 'Document.Requirement'; }
        protected getDialogType() { return RequirementDialog; }
        protected getIdProperty() { return RequirementRow.idProperty; }
        protected getLocalTextPrefix() { return RequirementRow.localTextPrefix; }
        protected getService() { return RequirementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {

            var columns = super.getColumns();
            //var fld = Serene3.Document.RequirementRow.Fields;

            columns.unshift({
                field: 'Read',
                name: '',
                format: ctx => this.ReadFormatter(ctx),
                width: 30,
                minWidth: 30,
                maxWidth: 30
            });
            

            return columns;
        }

        private ReadFormatter(ctx) {
            var klass = 'ButtonOnClick read-row';
            var item = ctx.item as RequirementRow;

            
            return `<a class="inline-action view-details"  title="Read" href="/Document/Requirement/Read/${(ctx.item as RequirementRow).Id}" target="_blank">
                    <i class=" icon-book-open " style="color: #6000ff;font-size:16px" ></i></a>`;


            
        }
    }
}