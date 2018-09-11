namespace Serene3.Finance {
    export interface TcompanyForm {
        Company: Serenity.StringEditor;
    }

    export class TcompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tcompany';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TcompanyForm.init)  {
                TcompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TcompanyForm, [
                    'Company', w0
                ]);
            }
        }
    }
}

