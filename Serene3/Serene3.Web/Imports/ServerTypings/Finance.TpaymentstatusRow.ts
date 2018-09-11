namespace Serene3.Finance {
    export interface TpaymentstatusRow {
        Id?: number;
        Paymentstatus?: string;
    }

    export namespace TpaymentstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Paymentstatus';
        export const localTextPrefix = 'Finance.Tpaymentstatus';
        export const lookupKey = 'Finance.Tpaymentstatus';

        export function getLookup(): Q.Lookup<TpaymentstatusRow> {
            return Q.getLookup<TpaymentstatusRow>('Finance.Tpaymentstatus');
        }

        export declare const enum Fields {
            Id = "Id",
            Paymentstatus = "Paymentstatus"
        }
    }
}

