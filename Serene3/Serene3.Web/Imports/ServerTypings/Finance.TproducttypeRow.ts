namespace Serene3.Finance {
    export interface TproducttypeRow {
        Id?: number;
        Producttype?: string;
    }

    export namespace TproducttypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Producttype';
        export const localTextPrefix = 'Finance.Tproducttype';
        export const lookupKey = 'Finance.Tproducttype';

        export function getLookup(): Q.Lookup<TproducttypeRow> {
            return Q.getLookup<TproducttypeRow>('Finance.Tproducttype');
        }

        export declare const enum Fields {
            Id = "Id",
            Producttype = "Producttype"
        }
    }
}

