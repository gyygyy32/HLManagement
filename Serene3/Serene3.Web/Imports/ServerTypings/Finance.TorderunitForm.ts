namespace Serene3.Finance {
    export interface TorderunitForm {
        Orderunit: Serenity.StringEditor;
    }

    export class TorderunitForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Torderunit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TorderunitForm.init)  {
                TorderunitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TorderunitForm, [
                    'Orderunit', w0
                ]);
            }
        }
    }
}

