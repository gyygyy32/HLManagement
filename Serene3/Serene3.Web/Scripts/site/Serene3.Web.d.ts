/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Serene3.Administration {
}
declare namespace Serene3.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName",
        }
    }
}
declare namespace Serene3.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List",
        }
    }
}
declare namespace Serene3.Administration {
}
declare namespace Serene3.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene3.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Serene3.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName",
        }
    }
}
declare namespace Serene3.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List",
        }
    }
}
declare namespace Serene3.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Serene3.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
        }
    }
}
declare namespace Serene3.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List",
        }
    }
}
declare namespace Serene3.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Serene3.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Serene3.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update",
        }
    }
}
declare namespace Serene3.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Serene3.Administration {
}
declare namespace Serene3.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Serene3.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace Serene3.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys",
        }
    }
}
declare namespace Serene3.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Serene3.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Serene3.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Serene3.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User",
        }
    }
}
declare namespace Serene3.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List",
        }
    }
}
declare namespace Serene3.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Serene3.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate",
        }
    }
}
declare namespace Serene3.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List",
        }
    }
}
declare namespace Serene3.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace Serene3.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Serene3.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Serene3.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value",
        }
    }
}
declare namespace Serene3.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve",
        }
    }
}
declare namespace Serene3.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace Serene3.Document {
}
declare namespace Serene3.Document {
    interface CustomerForm {
        Customer: Serenity.StringEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Document {
    interface CustomerRow {
        Id?: number;
        Customer?: string;
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const nameProperty = "Customer";
        const localTextPrefix = "Document.Customer";
        const lookupKey = "Document.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const enum Fields {
            Id = "Id",
            Customer = "Customer",
        }
    }
}
declare namespace Serene3.Document {
    namespace CustomerService {
        const baseUrl = "Document/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Document/Customer/Create",
            Update = "Document/Customer/Update",
            Delete = "Document/Customer/Delete",
            Retrieve = "Document/Customer/Retrieve",
            List = "Document/Customer/List",
        }
    }
}
declare namespace Serene3.Document {
}
declare namespace Serene3.Document {
    interface ProductForm {
        Product: Serenity.StringEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Document {
    interface ProductRow {
        Id?: number;
        Product?: string;
    }
    namespace ProductRow {
        const idProperty = "Id";
        const nameProperty = "Product";
        const localTextPrefix = "Document.Product";
        const lookupKey = "Document.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const enum Fields {
            Id = "Id",
            Product = "Product",
        }
    }
}
declare namespace Serene3.Document {
    namespace ProductService {
        const baseUrl = "Document/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Document/Product/Create",
            Update = "Document/Product/Update",
            Delete = "Document/Product/Delete",
            Retrieve = "Document/Product/Retrieve",
            List = "Document/Product/List",
        }
    }
}
declare namespace Serene3.Document {
}
declare namespace Serene3.Document {
    interface RequirementForm {
        ProductID: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        CustomerID: Serenity.LookupEditor;
        Contents: Serenity.HtmlContentEditor;
        Priority: Serenity.StringEditor;
        Developer: Serenity.StringEditor;
        Starttime: Serenity.DateEditor;
        Finishtime: Serenity.DateTimeEditor;
        StatusID: Serenity.LookupEditor;
        Attachments: Serenity.StringEditor;
    }
    class RequirementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Document {
    interface RequirementRow {
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
    namespace RequirementRow {
        const idProperty = "Id";
        const nameProperty = "Subject";
        const localTextPrefix = "Document.Requirement";
        const enum Fields {
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
            Status = "Status",
        }
    }
}
declare namespace Serene3.Document {
    namespace RequirementService {
        const baseUrl = "Document/Requirement";
        function Create(request: Serenity.SaveRequest<RequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RequirementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RequirementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Document/Requirement/Create",
            Update = "Document/Requirement/Update",
            Delete = "Document/Requirement/Delete",
            Retrieve = "Document/Requirement/Retrieve",
            List = "Document/Requirement/List",
        }
    }
}
declare namespace Serene3.Document {
}
declare namespace Serene3.Document {
    interface StatusForm {
        Status: Serenity.StringEditor;
    }
    class StatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Document {
    interface StatusRow {
        Id?: number;
        Status?: string;
    }
    namespace StatusRow {
        const idProperty = "Id";
        const nameProperty = "Status";
        const localTextPrefix = "Document.Status";
        const lookupKey = "Document.Status";
        function getLookup(): Q.Lookup<StatusRow>;
        const enum Fields {
            Id = "Id",
            Status = "Status",
        }
    }
}
declare namespace Serene3.Document {
    namespace StatusService {
        const baseUrl = "Document/Status";
        function Create(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Document/Status/Create",
            Update = "Document/Status/Update",
            Delete = "Document/Status/Delete",
            Retrieve = "Document/Status/Retrieve",
            List = "Document/Status/List",
        }
    }
}
declare namespace Serene3 {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Serene3 {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TbookingunitForm {
        Bookingunit: Serenity.StringEditor;
    }
    class TbookingunitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TbookingunitRow {
        Id?: number;
        Bookingunit?: string;
    }
    namespace TbookingunitRow {
        const idProperty = "Id";
        const nameProperty = "Bookingunit";
        const localTextPrefix = "Finance.Tbookingunit";
        const lookupKey = "Finance.Tbookingunit";
        function getLookup(): Q.Lookup<TbookingunitRow>;
        const enum Fields {
            Id = "Id",
            Bookingunit = "Bookingunit",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TbookingunitService {
        const baseUrl = "Finance/Tbookingunit";
        function Create(request: Serenity.SaveRequest<TbookingunitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TbookingunitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TbookingunitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TbookingunitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tbookingunit/Create",
            Update = "Finance/Tbookingunit/Update",
            Delete = "Finance/Tbookingunit/Delete",
            Retrieve = "Finance/Tbookingunit/Retrieve",
            List = "Finance/Tbookingunit/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TcollectionstatusForm {
        Collectionstatus: Serenity.StringEditor;
    }
    class TcollectionstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TcollectionstatusRow {
        Id?: number;
        Collectionstatus?: string;
    }
    namespace TcollectionstatusRow {
        const idProperty = "Id";
        const nameProperty = "Collectionstatus";
        const localTextPrefix = "Finance.Tcollectionstatus";
        const lookupKey = "Finance.Tcollectionstatus";
        function getLookup(): Q.Lookup<TcollectionstatusRow>;
        const enum Fields {
            Id = "Id",
            Collectionstatus = "Collectionstatus",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TcollectionstatusService {
        const baseUrl = "Finance/Tcollectionstatus";
        function Create(request: Serenity.SaveRequest<TcollectionstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TcollectionstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TcollectionstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TcollectionstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tcollectionstatus/Create",
            Update = "Finance/Tcollectionstatus/Update",
            Delete = "Finance/Tcollectionstatus/Delete",
            Retrieve = "Finance/Tcollectionstatus/Retrieve",
            List = "Finance/Tcollectionstatus/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TcompanyForm {
        Company: Serenity.StringEditor;
    }
    class TcompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TcompanyRow {
        Id?: number;
        Company?: string;
    }
    namespace TcompanyRow {
        const idProperty = "Id";
        const nameProperty = "Company";
        const localTextPrefix = "Finance.Tcompany";
        const lookupKey = "Finance.Tcompany";
        function getLookup(): Q.Lookup<TcompanyRow>;
        const enum Fields {
            Id = "Id",
            Company = "Company",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TcompanyService {
        const baseUrl = "Finance/Tcompany";
        function Create(request: Serenity.SaveRequest<TcompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TcompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TcompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TcompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tcompany/Create",
            Update = "Finance/Tcompany/Update",
            Delete = "Finance/Tcompany/Delete",
            Retrieve = "Finance/Tcompany/Retrieve",
            List = "Finance/Tcompany/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TcustomerForm {
        Customer: Serenity.StringEditor;
    }
    class TcustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TcustomerRow {
        Id?: number;
        Customer?: string;
    }
    namespace TcustomerRow {
        const idProperty = "Id";
        const nameProperty = "Customer";
        const localTextPrefix = "Finance.Tcustomer";
        const lookupKey = "Finance.Tcustomer";
        function getLookup(): Q.Lookup<TcustomerRow>;
        const enum Fields {
            Id = "Id",
            Customer = "Customer",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TcustomerService {
        const baseUrl = "Finance/Tcustomer";
        function Create(request: Serenity.SaveRequest<TcustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TcustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TcustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TcustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tcustomer/Create",
            Update = "Finance/Tcustomer/Update",
            Delete = "Finance/Tcustomer/Delete",
            Retrieve = "Finance/Tcustomer/Retrieve",
            List = "Finance/Tcustomer/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TexpresstypeForm {
        Expresstype: Serenity.StringEditor;
    }
    class TexpresstypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TexpresstypeRow {
        Id?: number;
        Expresstype?: string;
    }
    namespace TexpresstypeRow {
        const idProperty = "Id";
        const nameProperty = "Expresstype";
        const localTextPrefix = "Finance.Texpresstype";
        const lookupKey = "Finance.Texpresstype";
        function getLookup(): Q.Lookup<TexpresstypeRow>;
        const enum Fields {
            Id = "Id",
            Expresstype = "Expresstype",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TexpresstypeService {
        const baseUrl = "Finance/Texpresstype";
        function Create(request: Serenity.SaveRequest<TexpresstypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TexpresstypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TexpresstypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TexpresstypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Texpresstype/Create",
            Update = "Finance/Texpresstype/Update",
            Delete = "Finance/Texpresstype/Delete",
            Retrieve = "Finance/Texpresstype/Retrieve",
            List = "Finance/Texpresstype/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TfinanceForm {
        Companyid: Serenity.LookupEditor;
        Ordertime: Serenity.DateTimeEditor;
        Demandtime: Serenity.DateTimeEditor;
        Contractnumber: Serenity.StringEditor;
        Usediscription: Serenity.StringEditor;
        Customerid: Serenity.LookupEditor;
        Producttypeid: Serenity.LookupEditor;
        Productdescription: Serenity.StringEditor;
        Specificationid: Serenity.LookupEditor;
        Orderqty: Serenity.IntegerEditor;
        Orderunitid: Serenity.LookupEditor;
        Orderunitprice: Serenity.DecimalEditor;
        Ordertotalprice: Serenity.DecimalEditor;
        Taxrate: Serenity.DecimalEditor;
        Suppliercompanyid: Serenity.LookupEditor;
        Suppliercustomername: Serenity.StringEditor;
        Bookingtime: Serenity.DateEditor;
        Bookingqty: Serenity.IntegerEditor;
        Bookingunitid: Serenity.LookupEditor;
        Bookingunitprice: Serenity.DecimalEditor;
        Bookingtotalprice: Serenity.DecimalEditor;
        Storagetime: Serenity.DateEditor;
        Arrivalqty: Serenity.IntegerEditor;
        Inputticketstatusid: Serenity.LookupEditor;
        Inputtickettime: Serenity.DateEditor;
        Paymentstatusid: Serenity.LookupEditor;
        Deliverytime: Serenity.DateEditor;
        Deliveryinfo: Serenity.StringEditor;
        Expresstypeid: Serenity.LookupEditor;
        Expressnumber: Serenity.StringEditor;
        Expressprice: Serenity.DecimalEditor;
        Deliveryqty: Serenity.IntegerEditor;
        Undeliveryqty: Serenity.IntegerEditor;
        Ticketstatusid: Serenity.LookupEditor;
        Collectionstatusid: Serenity.LookupEditor;
        Remark: Serenity.StringEditor;
    }
    class TfinanceForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TfinanceRow {
        Id?: number;
        Companyid?: number;
        Ordertime?: string;
        Demandtime?: string;
        Contractnumber?: string;
        Usediscription?: string;
        Customerid?: number;
        Producttypeid?: number;
        Productdescription?: string;
        Specificationid?: number;
        Orderqty?: number;
        Orderunitid?: number;
        Orderunitprice?: number;
        Ordertotalprice?: number;
        Taxrate?: number;
        Suppliercompanyid?: number;
        Suppliercustomername?: string;
        Bookingtime?: string;
        Bookingqty?: number;
        Bookingunitid?: number;
        Bookingunitprice?: number;
        Bookingtotalprice?: number;
        Storagetime?: string;
        Arrivalqty?: number;
        Inputticketstatusid?: number;
        Inputtickettime?: string;
        Paymentstatusid?: number;
        Deliverytime?: string;
        Deliveryinfo?: string;
        Expresstypeid?: number;
        Expressnumber?: string;
        Expressprice?: number;
        Deliveryqty?: number;
        Undeliveryqty?: number;
        Ticketstatusid?: number;
        Collectionstatusid?: number;
        Remark?: string;
        Company?: string;
        Customer?: string;
        ProductType?: string;
        Specification?: string;
        OrderUnit?: string;
        SupplierCompany?: string;
        BookingUnit?: string;
        InputTicketStatus?: string;
        PaymentStatus?: string;
        ExpressType?: string;
        TicketStatus?: string;
        CollectionStatus?: string;
    }
    namespace TfinanceRow {
        const idProperty = "Id";
        const nameProperty = "Contractnumber";
        const localTextPrefix = "Finance.Tfinance";
        const lookupKey = "Finance.Tfinance";
        function getLookup(): Q.Lookup<TfinanceRow>;
        const enum Fields {
            Id = "Id",
            Companyid = "Companyid",
            Ordertime = "Ordertime",
            Demandtime = "Demandtime",
            Contractnumber = "Contractnumber",
            Usediscription = "Usediscription",
            Customerid = "Customerid",
            Producttypeid = "Producttypeid",
            Productdescription = "Productdescription",
            Specificationid = "Specificationid",
            Orderqty = "Orderqty",
            Orderunitid = "Orderunitid",
            Orderunitprice = "Orderunitprice",
            Ordertotalprice = "Ordertotalprice",
            Taxrate = "Taxrate",
            Suppliercompanyid = "Suppliercompanyid",
            Suppliercustomername = "Suppliercustomername",
            Bookingtime = "Bookingtime",
            Bookingqty = "Bookingqty",
            Bookingunitid = "Bookingunitid",
            Bookingunitprice = "Bookingunitprice",
            Bookingtotalprice = "Bookingtotalprice",
            Storagetime = "Storagetime",
            Arrivalqty = "Arrivalqty",
            Inputticketstatusid = "Inputticketstatusid",
            Inputtickettime = "Inputtickettime",
            Paymentstatusid = "Paymentstatusid",
            Deliverytime = "Deliverytime",
            Deliveryinfo = "Deliveryinfo",
            Expresstypeid = "Expresstypeid",
            Expressnumber = "Expressnumber",
            Expressprice = "Expressprice",
            Deliveryqty = "Deliveryqty",
            Undeliveryqty = "Undeliveryqty",
            Ticketstatusid = "Ticketstatusid",
            Collectionstatusid = "Collectionstatusid",
            Remark = "Remark",
            Company = "Company",
            Customer = "Customer",
            ProductType = "ProductType",
            Specification = "Specification",
            OrderUnit = "OrderUnit",
            SupplierCompany = "SupplierCompany",
            BookingUnit = "BookingUnit",
            InputTicketStatus = "InputTicketStatus",
            PaymentStatus = "PaymentStatus",
            ExpressType = "ExpressType",
            TicketStatus = "TicketStatus",
            CollectionStatus = "CollectionStatus",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TfinanceService {
        const baseUrl = "Finance/Tfinance";
        function Create(request: Serenity.SaveRequest<TfinanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TfinanceRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TfinanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TfinanceRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tfinance/Create",
            Update = "Finance/Tfinance/Update",
            Delete = "Finance/Tfinance/Delete",
            Retrieve = "Finance/Tfinance/Retrieve",
            List = "Finance/Tfinance/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TinputticketstatusForm {
        Inputticketstatus: Serenity.StringEditor;
    }
    class TinputticketstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TinputticketstatusRow {
        Id?: number;
        Inputticketstatus?: string;
    }
    namespace TinputticketstatusRow {
        const idProperty = "Id";
        const nameProperty = "Inputticketstatus";
        const localTextPrefix = "Finance.Tinputticketstatus";
        const lookupKey = "Finance.Tinputticketstatus";
        function getLookup(): Q.Lookup<TinputticketstatusRow>;
        const enum Fields {
            Id = "Id",
            Inputticketstatus = "Inputticketstatus",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TinputticketstatusService {
        const baseUrl = "Finance/Tinputticketstatus";
        function Create(request: Serenity.SaveRequest<TinputticketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TinputticketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TinputticketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TinputticketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tinputticketstatus/Create",
            Update = "Finance/Tinputticketstatus/Update",
            Delete = "Finance/Tinputticketstatus/Delete",
            Retrieve = "Finance/Tinputticketstatus/Retrieve",
            List = "Finance/Tinputticketstatus/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TorderunitForm {
        Orderunit: Serenity.StringEditor;
    }
    class TorderunitForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TorderunitRow {
        Id?: number;
        Orderunit?: string;
    }
    namespace TorderunitRow {
        const idProperty = "Id";
        const nameProperty = "Orderunit";
        const localTextPrefix = "Finance.Torderunit";
        const lookupKey = "Finance.Torderunit";
        function getLookup(): Q.Lookup<TorderunitRow>;
        const enum Fields {
            Id = "Id",
            Orderunit = "Orderunit",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TorderunitService {
        const baseUrl = "Finance/Torderunit";
        function Create(request: Serenity.SaveRequest<TorderunitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TorderunitRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TorderunitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TorderunitRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Torderunit/Create",
            Update = "Finance/Torderunit/Update",
            Delete = "Finance/Torderunit/Delete",
            Retrieve = "Finance/Torderunit/Retrieve",
            List = "Finance/Torderunit/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TpaymentstatusForm {
        Paymentstatus: Serenity.StringEditor;
    }
    class TpaymentstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TpaymentstatusRow {
        Id?: number;
        Paymentstatus?: string;
    }
    namespace TpaymentstatusRow {
        const idProperty = "Id";
        const nameProperty = "Paymentstatus";
        const localTextPrefix = "Finance.Tpaymentstatus";
        const lookupKey = "Finance.Tpaymentstatus";
        function getLookup(): Q.Lookup<TpaymentstatusRow>;
        const enum Fields {
            Id = "Id",
            Paymentstatus = "Paymentstatus",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TpaymentstatusService {
        const baseUrl = "Finance/Tpaymentstatus";
        function Create(request: Serenity.SaveRequest<TpaymentstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TpaymentstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TpaymentstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TpaymentstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tpaymentstatus/Create",
            Update = "Finance/Tpaymentstatus/Update",
            Delete = "Finance/Tpaymentstatus/Delete",
            Retrieve = "Finance/Tpaymentstatus/Retrieve",
            List = "Finance/Tpaymentstatus/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TproducttypeForm {
        Producttype: Serenity.StringEditor;
    }
    class TproducttypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TproducttypeRow {
        Id?: number;
        Producttype?: string;
    }
    namespace TproducttypeRow {
        const idProperty = "Id";
        const nameProperty = "Producttype";
        const localTextPrefix = "Finance.Tproducttype";
        const lookupKey = "Finance.Tproducttype";
        function getLookup(): Q.Lookup<TproducttypeRow>;
        const enum Fields {
            Id = "Id",
            Producttype = "Producttype",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TproducttypeService {
        const baseUrl = "Finance/Tproducttype";
        function Create(request: Serenity.SaveRequest<TproducttypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TproducttypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TproducttypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TproducttypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tproducttype/Create",
            Update = "Finance/Tproducttype/Update",
            Delete = "Finance/Tproducttype/Delete",
            Retrieve = "Finance/Tproducttype/Retrieve",
            List = "Finance/Tproducttype/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TspecificationForm {
        Specification: Serenity.StringEditor;
    }
    class TspecificationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TspecificationRow {
        Id?: number;
        Specification?: string;
    }
    namespace TspecificationRow {
        const idProperty = "Id";
        const nameProperty = "Specification";
        const localTextPrefix = "Finance.Tspecification";
        const lookupKey = "Finance.Tspecification";
        function getLookup(): Q.Lookup<TspecificationRow>;
        const enum Fields {
            Id = "Id",
            Specification = "Specification",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TspecificationService {
        const baseUrl = "Finance/Tspecification";
        function Create(request: Serenity.SaveRequest<TspecificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TspecificationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TspecificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TspecificationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tspecification/Create",
            Update = "Finance/Tspecification/Update",
            Delete = "Finance/Tspecification/Delete",
            Retrieve = "Finance/Tspecification/Retrieve",
            List = "Finance/Tspecification/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TsuppliercompanyForm {
        Suppliercompany: Serenity.StringEditor;
    }
    class TsuppliercompanyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TsuppliercompanyRow {
        Id?: number;
        Suppliercompany?: string;
    }
    namespace TsuppliercompanyRow {
        const idProperty = "Id";
        const nameProperty = "Suppliercompany";
        const localTextPrefix = "Finance.Tsuppliercompany";
        const lookupKey = "Finance.Tsuppliercompany";
        function getLookup(): Q.Lookup<TsuppliercompanyRow>;
        const enum Fields {
            Id = "Id",
            Suppliercompany = "Suppliercompany",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TsuppliercompanyService {
        const baseUrl = "Finance/Tsuppliercompany";
        function Create(request: Serenity.SaveRequest<TsuppliercompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TsuppliercompanyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TsuppliercompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TsuppliercompanyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tsuppliercompany/Create",
            Update = "Finance/Tsuppliercompany/Update",
            Delete = "Finance/Tsuppliercompany/Delete",
            Retrieve = "Finance/Tsuppliercompany/Retrieve",
            List = "Finance/Tsuppliercompany/List",
        }
    }
}
declare namespace Serene3.Finance {
}
declare namespace Serene3.Finance {
    interface TticketstatusForm {
        Ticketstatus: Serenity.StringEditor;
    }
    class TticketstatusForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Finance {
    interface TticketstatusRow {
        Id?: number;
        Ticketstatus?: string;
    }
    namespace TticketstatusRow {
        const idProperty = "Id";
        const nameProperty = "Ticketstatus";
        const localTextPrefix = "Finance.Tticketstatus";
        const lookupKey = "Finance.Tticketstatus";
        function getLookup(): Q.Lookup<TticketstatusRow>;
        const enum Fields {
            Id = "Id",
            Ticketstatus = "Ticketstatus",
        }
    }
}
declare namespace Serene3.Finance {
    namespace TticketstatusService {
        const baseUrl = "Finance/Tticketstatus";
        function Create(request: Serenity.SaveRequest<TticketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TticketstatusRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TticketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TticketstatusRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Finance/Tticketstatus/Create",
            Update = "Finance/Tticketstatus/Update",
            Delete = "Finance/Tticketstatus/Delete",
            Retrieve = "Finance/Tticketstatus/Retrieve",
            List = "Finance/Tticketstatus/List",
        }
    }
}
declare namespace Serene3 {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Serene3 {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace Serene3.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene3.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Serene3.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Serene3.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Serene3.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Serene3.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Serene3 {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Serene3.LanguageList {
    function getValue(): string[][];
}
declare namespace Serene3.ScriptInitialization {
}
declare namespace Serene3.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Serene3.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Serene3.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Serene3.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Serene3.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Serene3.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Serene3.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace Serene3.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Serene3.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Serene3.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Serene3.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Serene3.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Serene3 {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Serene3.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Serene3.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Serene3.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace Serene3.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Serene3.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace Serene3.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Serene3 {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Serene3.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Serene3.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Serene3.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace Serene3.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Serene3.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Serene3.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Serene3.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Serene3.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Serene3.Document {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
    }
}
declare namespace Serene3.Document {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Document {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace Serene3.Document {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Document {
    class RequirementDialog extends Serenity.EntityDialog<RequirementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RequirementForm;
        constructor();
    }
}
declare namespace Serene3.Document {
    class RequirementGrid extends Serenity.EntityGrid<RequirementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RequirementDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        private ReadFormatter(ctx);
    }
}
declare namespace Serene3.Document {
    class StatusDialog extends Serenity.EntityDialog<StatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StatusForm;
    }
}
declare namespace Serene3.Document {
    class StatusGrid extends Serenity.EntityGrid<StatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TbookingunitDialog extends Serenity.EntityDialog<TbookingunitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TbookingunitForm;
    }
}
declare namespace Serene3.Finance {
    class TbookingunitGrid extends Serenity.EntityGrid<TbookingunitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TbookingunitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TcollectionstatusDialog extends Serenity.EntityDialog<TcollectionstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TcollectionstatusForm;
    }
}
declare namespace Serene3.Finance {
    class TcollectionstatusGrid extends Serenity.EntityGrid<TcollectionstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TcollectionstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TcompanyDialog extends Serenity.EntityDialog<TcompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TcompanyForm;
    }
}
declare namespace Serene3.Finance {
    class TcompanyGrid extends Serenity.EntityGrid<TcompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TcompanyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TcustomerDialog extends Serenity.EntityDialog<TcustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TcustomerForm;
    }
}
declare namespace Serene3.Finance {
    class TcustomerGrid extends Serenity.EntityGrid<TcustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TcustomerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TexpresstypeDialog extends Serenity.EntityDialog<TexpresstypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TexpresstypeForm;
    }
}
declare namespace Serene3.Finance {
    class TexpresstypeGrid extends Serenity.EntityGrid<TexpresstypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TexpresstypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TfinanceDialog extends Serenity.EntityDialog<TfinanceRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TfinanceForm;
    }
}
declare namespace Serene3.Finance {
    class TfinanceGrid extends Serenity.EntityGrid<TfinanceRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TfinanceDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TinputticketstatusDialog extends Serenity.EntityDialog<TinputticketstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TinputticketstatusForm;
    }
}
declare namespace Serene3.Finance {
    class TinputticketstatusGrid extends Serenity.EntityGrid<TinputticketstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TinputticketstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TorderunitDialog extends Serenity.EntityDialog<TorderunitRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TorderunitForm;
    }
}
declare namespace Serene3.Finance {
    class TorderunitGrid extends Serenity.EntityGrid<TorderunitRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TorderunitDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TpaymentstatusDialog extends Serenity.EntityDialog<TpaymentstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TpaymentstatusForm;
    }
}
declare namespace Serene3.Finance {
    class TpaymentstatusGrid extends Serenity.EntityGrid<TpaymentstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TpaymentstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TproducttypeDialog extends Serenity.EntityDialog<TproducttypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TproducttypeForm;
    }
}
declare namespace Serene3.Finance {
    class TproducttypeGrid extends Serenity.EntityGrid<TproducttypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TproducttypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TspecificationDialog extends Serenity.EntityDialog<TspecificationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TspecificationForm;
    }
}
declare namespace Serene3.Finance {
    class TspecificationGrid extends Serenity.EntityGrid<TspecificationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TspecificationDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TsuppliercompanyDialog extends Serenity.EntityDialog<TsuppliercompanyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TsuppliercompanyForm;
    }
}
declare namespace Serene3.Finance {
    class TsuppliercompanyGrid extends Serenity.EntityGrid<TsuppliercompanyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TsuppliercompanyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Finance {
    class TticketstatusDialog extends Serenity.EntityDialog<TticketstatusRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TticketstatusForm;
    }
}
declare namespace Serene3.Finance {
    class TticketstatusGrid extends Serenity.EntityGrid<TticketstatusRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TticketstatusDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Serene3.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Serene3.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
