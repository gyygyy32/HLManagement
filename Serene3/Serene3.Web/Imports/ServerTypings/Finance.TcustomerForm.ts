namespace Serene3.Finance {
    export interface TcustomerForm {
        Customer: Serenity.StringEditor;
    }

    export class TcustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tcustomer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TcustomerForm.init)  {
                TcustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TcustomerForm, [
                    'Customer', w0
                ]);
            }
        }
    }
}

