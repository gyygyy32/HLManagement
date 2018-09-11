namespace Serene3.Finance {
    export interface TspecificationForm {
        Specification: Serenity.StringEditor;
    }

    export class TspecificationForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tspecification';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TspecificationForm.init)  {
                TspecificationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TspecificationForm, [
                    'Specification', w0
                ]);
            }
        }
    }
}

