namespace Serene3.Finance {
    export interface TpaymentstatusForm {
        Paymentstatus: Serenity.StringEditor;
    }

    export class TpaymentstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tpaymentstatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TpaymentstatusForm.init)  {
                TpaymentstatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TpaymentstatusForm, [
                    'Paymentstatus', w0
                ]);
            }
        }
    }
}

