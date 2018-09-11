namespace Serene3.Finance {
    export interface TsuppliercompanyRow {
        Id?: number;
        Suppliercompany?: string;
    }

    export namespace TsuppliercompanyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Suppliercompany';
        export const localTextPrefix = 'Finance.Tsuppliercompany';
        export const lookupKey = 'Finance.Tsuppliercompany';

        export function getLookup(): Q.Lookup<TsuppliercompanyRow> {
            return Q.getLookup<TsuppliercompanyRow>('Finance.Tsuppliercompany');
        }

        export declare const enum Fields {
            Id = "Id",
            Suppliercompany = "Suppliercompany"
        }
    }
}

