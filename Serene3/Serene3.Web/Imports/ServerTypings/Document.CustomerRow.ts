namespace Serene3.Document {
    export interface CustomerRow {
        Id?: number;
        Customer?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Customer';
        export const localTextPrefix = 'Document.Customer';
        export const lookupKey = 'Document.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Document.Customer');
        }

        export declare const enum Fields {
            Id = "Id",
            Customer = "Customer"
        }
    }
}

