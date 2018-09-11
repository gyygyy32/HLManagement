namespace Serene3.Finance {
    export interface TcollectionstatusRow {
        Id?: number;
        Collectionstatus?: string;
    }

    export namespace TcollectionstatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Collectionstatus';
        export const localTextPrefix = 'Finance.Tcollectionstatus';
        export const lookupKey = 'Finance.Tcollectionstatus';

        export function getLookup(): Q.Lookup<TcollectionstatusRow> {
            return Q.getLookup<TcollectionstatusRow>('Finance.Tcollectionstatus');
        }

        export declare const enum Fields {
            Id = "Id",
            Collectionstatus = "Collectionstatus"
        }
    }
}

