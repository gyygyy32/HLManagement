namespace Serene3.Finance {
    export interface TinputticketstatusRow {
        Id?: number;
        Inputticketstatus?: string;
    }

    export namespace TinputticketstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Inputticketstatus';
        export const localTextPrefix = 'Finance.Tinputticketstatus';
        export const lookupKey = 'Finance.Tinputticketstatus';

        export function getLookup(): Q.Lookup<TinputticketstatusRow> {
            return Q.getLookup<TinputticketstatusRow>('Finance.Tinputticketstatus');
        }

        export declare const enum Fields {
            Id = "Id",
            Inputticketstatus = "Inputticketstatus"
        }
    }
}

