namespace Serene3.Finance {
    export interface TproducttypeForm {
        Producttype: Serenity.StringEditor;
    }

    export class TproducttypeForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tproducttype';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TproducttypeForm.init)  {
                TproducttypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TproducttypeForm, [
                    'Producttype', w0
                ]);
            }
        }
    }
}

