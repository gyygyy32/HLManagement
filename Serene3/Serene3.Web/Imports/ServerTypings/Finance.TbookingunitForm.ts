namespace Serene3.Finance {
    export interface TbookingunitForm {
        Bookingunit: Serenity.StringEditor;
    }

    export class TbookingunitForm extends Serenity.PrefixedContext {
        static formKey = 'Finance.Tbookingunit';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TbookingunitForm.init)  {
                TbookingunitForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TbookingunitForm, [
                    'Bookingunit', w0
                ]);
            }
        }
    }
}

