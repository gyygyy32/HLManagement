namespace Serene3.Finance {
    export interface TbookingunitRow {
        Id?: number;
        Bookingunit?: string;
    }

    export namespace TbookingunitRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Bookingunit';
        export const localTextPrefix = 'Finance.Tbookingunit';
        export const lookupKey = 'Finance.Tbookingunit';

        export function getLookup(): Q.Lookup<TbookingunitRow> {
            return Q.getLookup<TbookingunitRow>('Finance.Tbookingunit');
        }

        export declare const enum Fields {
            Id = "Id",
            Bookingunit = "Bookingunit"
        }
    }
}

