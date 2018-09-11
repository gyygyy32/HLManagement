namespace Serene3.Finance {
    export interface TticketstatusForm {
        Ticketstatus: Serenity.StringEditor;
    }

    export class TticketstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tticketstatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TticketstatusForm.init)  {
                TticketstatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TticketstatusForm, [
                    'Ticketstatus', w0
                ]);
            }
        }
    }
}

