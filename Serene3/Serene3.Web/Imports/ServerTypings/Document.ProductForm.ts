namespace Serene3.Document {
    export interface ProductForm {
        Product: Serenity.StringEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Document.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProductForm, [
                    'Product', w0
                ]);
            }
        }
    }
}

