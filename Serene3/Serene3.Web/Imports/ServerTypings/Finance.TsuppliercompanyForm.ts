namespace Serene3.Finance {
    export interface TsuppliercompanyForm {
        Suppliercompany: Serenity.StringEditor;
    }

    export class TsuppliercompanyForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tsuppliercompany';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TsuppliercompanyForm.init)  {
                TsuppliercompanyForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TsuppliercompanyForm, [
                    'Suppliercompany', w0
                ]);
            }
        }
    }
}

