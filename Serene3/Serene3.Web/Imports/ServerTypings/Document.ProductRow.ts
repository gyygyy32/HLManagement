namespace Serene3.Document {
    export interface ProductRow {
        Id?: number;
        Product?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Product';
        export const localTextPrefix = 'Document.Product';
        export const lookupKey = 'Document.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Document.Product');
        }

        export declare const enum Fields {
            Id = "Id",
            Product = "Product"
        }
    }
}

