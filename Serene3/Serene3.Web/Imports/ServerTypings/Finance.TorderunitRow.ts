namespace Serene3.Finance {
    export interface TorderunitRow {
        Id?: number;
        Orderunit?: string;
    }

    export namespace TorderunitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Orderunit';
        export const localTextPrefix = 'Finance.Torderunit';
        export const lookupKey = 'Finance.Torderunit';

        export function getLookup(): Q.Lookup<TorderunitRow> {
            return Q.getLookup<TorderunitRow>('Finance.Torderunit');
        }

        export declare const enum Fields {
            Id = "Id",
            Orderunit = "Orderunit"
        }
    }
}

