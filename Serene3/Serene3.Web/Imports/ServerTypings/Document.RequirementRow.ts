namespace Serene3.Document {
    export interface RequirementRow {
        Id?: number;
        Subject?: string;
        Customer?: string;
        Contents?: string;
        Priority?: string;
        Developer?: string;
        Starttime?: string;
        Finishtime?: string;
        Attachments?: string;
        CreateBy?: string;
        CreateTime?: string;
        Product?: string;
        CustomerID?: number;
        ProductID?: number;
        StatusID?: number;
        Status?: string;
    }

    export namespace RequirementRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Subject';
        export const localTextPrefix = 'Document.Requirement';

        export declare const enum Fields {
            Id = "Id",
            Subject = "Subject",
            Customer = "Customer",
            Contents = "Contents",
            Priority = "Priority",
            Developer = "Developer",
            Starttime = "Starttime",
            Finishtime = "Finishtime",
            Attachments = "Attachments",
            CreateBy = "CreateBy",
            CreateTime = "CreateTime",
            Product = "Product",
            CustomerID = "CustomerID",
            ProductID = "ProductID",
            StatusID = "StatusID",
            Status = "Status"
        }
    }
}

