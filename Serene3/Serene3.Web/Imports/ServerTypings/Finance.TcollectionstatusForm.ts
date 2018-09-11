namespace Serene3.Finance {
    export interface TcollectionstatusForm {
        Collectionstatus: Serenity.StringEditor;
    }

    export class TcollectionstatusForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tcollectionstatus';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TcollectionstatusForm.init)  {
                TcollectionstatusForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TcollectionstatusForm, [
                    'Collectionstatus', w0
                ]);
            }
        }
    }
}

