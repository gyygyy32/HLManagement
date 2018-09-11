namespace Serene3.Finance {
    export interface TexpresstypeForm {
        Expresstype: Serenity.StringEditor;
    }

    export class TexpresstypeForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Texpresstype';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TexpresstypeForm.init)  {
                TexpresstypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TexpresstypeForm, [
                    'Expresstype', w0
                ]);
            }
        }
    }
}

