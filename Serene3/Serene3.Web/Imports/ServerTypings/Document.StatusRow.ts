namespace Serene3.Document {
    export interface StatusRow {
        Id?: number;
        Status?: string;
    }

    export namespace StatusRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Status';
        export const localTextPrefix = 'Document.Status';
        export const lookupKey = 'Document.Status';

        export function getLookup(): Q.Lookup<StatusRow> {
            return Q.getLookup<StatusRow>('Document.Status');
        }

        export declare const enum Fields {
            Id = "Id",
            Status = "Status"
        }
    }
}

