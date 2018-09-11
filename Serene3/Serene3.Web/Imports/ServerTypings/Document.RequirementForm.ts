namespace Serene3.Document {
    export interface RequirementForm {
        ProductID: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        CustomerID: Serenity.LookupEditor;
        Contents: Serenity.HtmlContentEditor;
        Priority: Serenity.StringEditor;
        Developer: Serenity.StringEditor;
        Starttime: Serenity.DateEditor;
        Finishtime: Serenity.DateTimeEditor;
        StatusID: Serenity.LookupEditor;
        Attachments: Serenity.StringEditor;
    }

    export class RequirementForm extends Serenity.PrefixedContext {
        static formKey = 'Document.Requirement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RequirementForm.init)  {
                RequirementForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.HtmlContentEditor;
                var w3 = s.DateEditor;
                var w4 = s.DateTimeEditor;

                Q.initFormType(RequirementForm, [
                    'ProductID', w0,
                    'Subject', w1,
                    'CustomerID', w0,
                    'Contents', w2,
                    'Priority', w1,
                    'Developer', w1,
                    'Starttime', w3,
                    'Finishtime', w4,
                    'StatusID', w0,
                    'Attachments', w1
                ]);
            }
        }
    }
}

