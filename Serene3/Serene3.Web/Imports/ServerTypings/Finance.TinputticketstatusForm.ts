namespace Serene3.Finance {
    export interface TinputticketstatusForm {
        Inputticketstatus: Serenity.StringEditor;
    }

    export class TinputticketstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tinputticketstatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TinputticketstatusForm.init)  {
                TinputticketstatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TinputticketstatusForm, [
                    'Inputticketstatus', w0
                ]);
            }
        }
    }
}

