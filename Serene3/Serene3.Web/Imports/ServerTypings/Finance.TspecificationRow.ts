namespace Serene3.Finance {
    export interface TspecificationRow {
        Id?: number;
        Specification?: string;
    }

    export namespace TspecificationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Specification';
        export const localTextPrefix = 'Finance.Tspecification';
        export const lookupKey = 'Finance.Tspecification';

        export function getLookup(): Q.Lookup<TspecificationRow> {
            return Q.getLookup<TspecificationRow>('Finance.Tspecification');
        }

        export declare const enum Fields {
            Id = "Id",
            Specification = "Specification"
        }
    }
}

