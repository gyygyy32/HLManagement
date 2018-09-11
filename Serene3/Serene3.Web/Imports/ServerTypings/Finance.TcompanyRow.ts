namespace Serene3.Finance {
    export interface TcompanyRow {
        Id?: number;
        Company?: string;
    }

    export namespace TcompanyRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Company';
        export const localTextPrefix = 'Finance.Tcompany';
        export const lookupKey = 'Finance.Tcompany';

        export function getLookup(): Q.Lookup<TcompanyRow> {
            return Q.getLookup<TcompanyRow>('Finance.Tcompany');
        }

        export declare const enum Fields {
            Id = "Id",
            Company = "Company"
        }
    }
}

