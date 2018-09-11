namespace Serene3.Finance {
    export interface TticketstatusRow {
        Id?: number;
        Ticketstatus?: string;
    }

    export namespace TticketstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Ticketstatus';
        export const localTextPrefix = 'Finance.Tticketstatus';
        export const lookupKey = 'Finance.Tticketstatus';

        export function getLookup(): Q.Lookup<TticketstatusRow> {
            return Q.getLookup<TticketstatusRow>('Finance.Tticketstatus');
        }

        export declare const enum Fields {
            Id = "Id",
            Ticketstatus = "Ticketstatus"
        }
    }
}

