namespace Serene3.Finance {
    export interface TcustomerRow {
        Id?: number;
        Customer?: string;
    }

    export namespace TcustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Customer';
        export const localTextPrefix = 'Finance.Tcustomer';
        export const lookupKey = 'Finance.Tcustomer';

        export function getLookup(): Q.Lookup<TcustomerRow> {
            return Q.getLookup<TcustomerRow>('Finance.Tcustomer');
        }

        export declare const enum Fields {
            Id = "Id",
            Customer = "Customer"
        }
    }
}

