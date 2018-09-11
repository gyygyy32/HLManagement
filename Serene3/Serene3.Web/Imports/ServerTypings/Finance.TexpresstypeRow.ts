namespace Serene3.Finance {
    export interface TexpresstypeRow {
        Id?: number;
        Expresstype?: string;
    }

    export namespace TexpresstypeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Expresstype';
        export const localTextPrefix = 'Finance.Texpresstype';
        export const lookupKey = 'Finance.Texpresstype';

        export function getLookup(): Q.Lookup<TexpresstypeRow> {
            return Q.getLookup<TexpresstypeRow>('Finance.Texpresstype');
        }

        export declare const enum Fields {
            Id = "Id",
            Expresstype = "Expresstype"
        }
    }
}

