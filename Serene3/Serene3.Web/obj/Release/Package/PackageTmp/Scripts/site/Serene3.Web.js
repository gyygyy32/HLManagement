var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CustomerForm, [
                        'Customer', w0
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Document.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Document.CustomerForm = CustomerForm;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.nameProperty = 'Customer';
            CustomerRow.localTextPrefix = 'Document.Customer';
            CustomerRow.lookupKey = 'Document.Customer';
            function getLookup() {
                return Q.getLookup('Document.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Document.CustomerRow || (Document.CustomerRow = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Document/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Document.CustomerService || (Document.CustomerService = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ProductForm, [
                        'Product', w0
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Document.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Document.ProductForm = ProductForm;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'Id';
            ProductRow.nameProperty = 'Product';
            ProductRow.localTextPrefix = 'Document.Product';
            ProductRow.lookupKey = 'Document.Product';
            function getLookup() {
                return Q.getLookup('Document.Product');
            }
            ProductRow.getLookup = getLookup;
        })(ProductRow = Document.ProductRow || (Document.ProductRow = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Document/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Document.ProductService || (Document.ProductService = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var RequirementForm = /** @class */ (function (_super) {
            __extends(RequirementForm, _super);
            function RequirementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RequirementForm.init) {
                    RequirementForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.HtmlContentEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.DateTimeEditor;
                    Q.initFormType(RequirementForm, [
                        'ProductID', w0,
                        'Subject', w1,
                        'CustomerID', w0,
                        'Contents', w2,
                        'Priority', w1,
                        'Developer', w1,
                        'Starttime', w3,
                        'Finishtime', w4,
                        'StatusID', w0,
                        'Attachments', w1
                    ]);
                }
                return _this;
            }
            RequirementForm.formKey = 'Document.Requirement';
            return RequirementForm;
        }(Serenity.PrefixedContext));
        Document.RequirementForm = RequirementForm;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var RequirementRow;
        (function (RequirementRow) {
            RequirementRow.idProperty = 'Id';
            RequirementRow.nameProperty = 'Subject';
            RequirementRow.localTextPrefix = 'Document.Requirement';
        })(RequirementRow = Document.RequirementRow || (Document.RequirementRow = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var RequirementService;
        (function (RequirementService) {
            RequirementService.baseUrl = 'Document/Requirement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RequirementService[x] = function (r, s, o) {
                    return Q.serviceRequest(RequirementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RequirementService = Document.RequirementService || (Document.RequirementService = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var StatusForm = /** @class */ (function (_super) {
            __extends(StatusForm, _super);
            function StatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!StatusForm.init) {
                    StatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(StatusForm, [
                        'Status', w0
                    ]);
                }
                return _this;
            }
            StatusForm.formKey = 'Document.Status';
            return StatusForm;
        }(Serenity.PrefixedContext));
        Document.StatusForm = StatusForm;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var StatusRow;
        (function (StatusRow) {
            StatusRow.idProperty = 'Id';
            StatusRow.nameProperty = 'Status';
            StatusRow.localTextPrefix = 'Document.Status';
            StatusRow.lookupKey = 'Document.Status';
            function getLookup() {
                return Q.getLookup('Document.Status');
            }
            StatusRow.getLookup = getLookup;
        })(StatusRow = Document.StatusRow || (Document.StatusRow = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var StatusService;
        (function (StatusService) {
            StatusService.baseUrl = 'Document/Status';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                StatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(StatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(StatusService = Document.StatusService || (Document.StatusService = {}));
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TbookingunitForm = /** @class */ (function (_super) {
            __extends(TbookingunitForm, _super);
            function TbookingunitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TbookingunitForm.init) {
                    TbookingunitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TbookingunitForm, [
                        'Bookingunit', w0
                    ]);
                }
                return _this;
            }
            TbookingunitForm.formKey = 'Finance.Tbookingunit';
            return TbookingunitForm;
        }(Serenity.PrefixedContext));
        Finance.TbookingunitForm = TbookingunitForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TbookingunitRow;
        (function (TbookingunitRow) {
            TbookingunitRow.idProperty = 'Id';
            TbookingunitRow.nameProperty = 'Bookingunit';
            TbookingunitRow.localTextPrefix = 'Finance.Tbookingunit';
            TbookingunitRow.lookupKey = 'Finance.Tbookingunit';
            function getLookup() {
                return Q.getLookup('Finance.Tbookingunit');
            }
            TbookingunitRow.getLookup = getLookup;
        })(TbookingunitRow = Finance.TbookingunitRow || (Finance.TbookingunitRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TbookingunitService;
        (function (TbookingunitService) {
            TbookingunitService.baseUrl = 'Finance/Tbookingunit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TbookingunitService[x] = function (r, s, o) {
                    return Q.serviceRequest(TbookingunitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TbookingunitService = Finance.TbookingunitService || (Finance.TbookingunitService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcollectionstatusForm = /** @class */ (function (_super) {
            __extends(TcollectionstatusForm, _super);
            function TcollectionstatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TcollectionstatusForm.init) {
                    TcollectionstatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TcollectionstatusForm, [
                        'Collectionstatus', w0
                    ]);
                }
                return _this;
            }
            TcollectionstatusForm.formKey = 'Finance.Tcollectionstatus';
            return TcollectionstatusForm;
        }(Serenity.PrefixedContext));
        Finance.TcollectionstatusForm = TcollectionstatusForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcollectionstatusRow;
        (function (TcollectionstatusRow) {
            TcollectionstatusRow.idProperty = 'Id';
            TcollectionstatusRow.nameProperty = 'Collectionstatus';
            TcollectionstatusRow.localTextPrefix = 'Finance.Tcollectionstatus';
            TcollectionstatusRow.lookupKey = 'Finance.Tcollectionstatus';
            function getLookup() {
                return Q.getLookup('Finance.Tcollectionstatus');
            }
            TcollectionstatusRow.getLookup = getLookup;
        })(TcollectionstatusRow = Finance.TcollectionstatusRow || (Finance.TcollectionstatusRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcollectionstatusService;
        (function (TcollectionstatusService) {
            TcollectionstatusService.baseUrl = 'Finance/Tcollectionstatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TcollectionstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TcollectionstatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TcollectionstatusService = Finance.TcollectionstatusService || (Finance.TcollectionstatusService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcompanyForm = /** @class */ (function (_super) {
            __extends(TcompanyForm, _super);
            function TcompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TcompanyForm.init) {
                    TcompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TcompanyForm, [
                        'Company', w0
                    ]);
                }
                return _this;
            }
            TcompanyForm.formKey = 'Finance.Tcompany';
            return TcompanyForm;
        }(Serenity.PrefixedContext));
        Finance.TcompanyForm = TcompanyForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcompanyRow;
        (function (TcompanyRow) {
            TcompanyRow.idProperty = 'Id';
            TcompanyRow.nameProperty = 'Company';
            TcompanyRow.localTextPrefix = 'Finance.Tcompany';
            TcompanyRow.lookupKey = 'Finance.Tcompany';
            function getLookup() {
                return Q.getLookup('Finance.Tcompany');
            }
            TcompanyRow.getLookup = getLookup;
        })(TcompanyRow = Finance.TcompanyRow || (Finance.TcompanyRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcompanyService;
        (function (TcompanyService) {
            TcompanyService.baseUrl = 'Finance/Tcompany';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TcompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(TcompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TcompanyService = Finance.TcompanyService || (Finance.TcompanyService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcustomerForm = /** @class */ (function (_super) {
            __extends(TcustomerForm, _super);
            function TcustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TcustomerForm.init) {
                    TcustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TcustomerForm, [
                        'Customer', w0
                    ]);
                }
                return _this;
            }
            TcustomerForm.formKey = 'Finance.Tcustomer';
            return TcustomerForm;
        }(Serenity.PrefixedContext));
        Finance.TcustomerForm = TcustomerForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcustomerRow;
        (function (TcustomerRow) {
            TcustomerRow.idProperty = 'Id';
            TcustomerRow.nameProperty = 'Customer';
            TcustomerRow.localTextPrefix = 'Finance.Tcustomer';
            TcustomerRow.lookupKey = 'Finance.Tcustomer';
            function getLookup() {
                return Q.getLookup('Finance.Tcustomer');
            }
            TcustomerRow.getLookup = getLookup;
        })(TcustomerRow = Finance.TcustomerRow || (Finance.TcustomerRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcustomerService;
        (function (TcustomerService) {
            TcustomerService.baseUrl = 'Finance/Tcustomer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TcustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(TcustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TcustomerService = Finance.TcustomerService || (Finance.TcustomerService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TexpresstypeForm = /** @class */ (function (_super) {
            __extends(TexpresstypeForm, _super);
            function TexpresstypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TexpresstypeForm.init) {
                    TexpresstypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TexpresstypeForm, [
                        'Expresstype', w0
                    ]);
                }
                return _this;
            }
            TexpresstypeForm.formKey = 'Finance.Texpresstype';
            return TexpresstypeForm;
        }(Serenity.PrefixedContext));
        Finance.TexpresstypeForm = TexpresstypeForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TexpresstypeRow;
        (function (TexpresstypeRow) {
            TexpresstypeRow.idProperty = 'Id';
            TexpresstypeRow.nameProperty = 'Expresstype';
            TexpresstypeRow.localTextPrefix = 'Finance.Texpresstype';
            TexpresstypeRow.lookupKey = 'Finance.Texpresstype';
            function getLookup() {
                return Q.getLookup('Finance.Texpresstype');
            }
            TexpresstypeRow.getLookup = getLookup;
        })(TexpresstypeRow = Finance.TexpresstypeRow || (Finance.TexpresstypeRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TexpresstypeService;
        (function (TexpresstypeService) {
            TexpresstypeService.baseUrl = 'Finance/Texpresstype';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TexpresstypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TexpresstypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TexpresstypeService = Finance.TexpresstypeService || (Finance.TexpresstypeService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TfinanceForm = /** @class */ (function (_super) {
            __extends(TfinanceForm, _super);
            function TfinanceForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TfinanceForm.init) {
                    TfinanceForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DateTimeEditor;
                    var w2 = s.StringEditor;
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.DateEditor;
                    Q.initFormType(TfinanceForm, [
                        'Companyid', w0,
                        'Ordertime', w1,
                        'Demandtime', w1,
                        'Contractnumber', w2,
                        'Usediscription', w2,
                        'Customerid', w0,
                        'Producttypeid', w0,
                        'Productdescription', w2,
                        'Specificationid', w0,
                        'Orderqty', w3,
                        'Orderunitid', w0,
                        'Orderunitprice', w4,
                        'Ordertotalprice', w4,
                        'Taxrate', w4,
                        'Suppliercompanyid', w0,
                        'Suppliercustomername', w2,
                        'Bookingtime', w5,
                        'Bookingqty', w3,
                        'Bookingunitid', w0,
                        'Bookingunitprice', w4,
                        'Bookingtotalprice', w4,
                        'Storagetime', w5,
                        'Arrivalqty', w3,
                        'Inputticketstatusid', w0,
                        'Inputtickettime', w5,
                        'Paymentstatusid', w0,
                        'Deliverytime', w5,
                        'Deliveryinfo', w2,
                        'Expresstypeid', w0,
                        'Expressnumber', w2,
                        'Expressprice', w4,
                        'Deliveryqty', w3,
                        'Undeliveryqty', w3,
                        'Ticketstatusid', w0,
                        'Collectionstatusid', w0,
                        'Remark', w2
                    ]);
                }
                return _this;
            }
            TfinanceForm.formKey = 'Finance.Tfinance';
            return TfinanceForm;
        }(Serenity.PrefixedContext));
        Finance.TfinanceForm = TfinanceForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TfinanceRow;
        (function (TfinanceRow) {
            TfinanceRow.idProperty = 'Id';
            TfinanceRow.nameProperty = 'Contractnumber';
            TfinanceRow.localTextPrefix = 'Finance.Tfinance';
            TfinanceRow.lookupKey = 'Finance.Tfinance';
            function getLookup() {
                return Q.getLookup('Finance.Tfinance');
            }
            TfinanceRow.getLookup = getLookup;
        })(TfinanceRow = Finance.TfinanceRow || (Finance.TfinanceRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TfinanceService;
        (function (TfinanceService) {
            TfinanceService.baseUrl = 'Finance/Tfinance';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TfinanceService[x] = function (r, s, o) {
                    return Q.serviceRequest(TfinanceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TfinanceService = Finance.TfinanceService || (Finance.TfinanceService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TinputticketstatusForm = /** @class */ (function (_super) {
            __extends(TinputticketstatusForm, _super);
            function TinputticketstatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TinputticketstatusForm.init) {
                    TinputticketstatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TinputticketstatusForm, [
                        'Inputticketstatus', w0
                    ]);
                }
                return _this;
            }
            TinputticketstatusForm.formKey = 'Finance.Tinputticketstatus';
            return TinputticketstatusForm;
        }(Serenity.PrefixedContext));
        Finance.TinputticketstatusForm = TinputticketstatusForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TinputticketstatusRow;
        (function (TinputticketstatusRow) {
            TinputticketstatusRow.idProperty = 'Id';
            TinputticketstatusRow.nameProperty = 'Inputticketstatus';
            TinputticketstatusRow.localTextPrefix = 'Finance.Tinputticketstatus';
            TinputticketstatusRow.lookupKey = 'Finance.Tinputticketstatus';
            function getLookup() {
                return Q.getLookup('Finance.Tinputticketstatus');
            }
            TinputticketstatusRow.getLookup = getLookup;
        })(TinputticketstatusRow = Finance.TinputticketstatusRow || (Finance.TinputticketstatusRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TinputticketstatusService;
        (function (TinputticketstatusService) {
            TinputticketstatusService.baseUrl = 'Finance/Tinputticketstatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TinputticketstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TinputticketstatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TinputticketstatusService = Finance.TinputticketstatusService || (Finance.TinputticketstatusService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TorderunitForm = /** @class */ (function (_super) {
            __extends(TorderunitForm, _super);
            function TorderunitForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TorderunitForm.init) {
                    TorderunitForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TorderunitForm, [
                        'Orderunit', w0
                    ]);
                }
                return _this;
            }
            TorderunitForm.formKey = 'Finance.Torderunit';
            return TorderunitForm;
        }(Serenity.PrefixedContext));
        Finance.TorderunitForm = TorderunitForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TorderunitRow;
        (function (TorderunitRow) {
            TorderunitRow.idProperty = 'Id';
            TorderunitRow.nameProperty = 'Orderunit';
            TorderunitRow.localTextPrefix = 'Finance.Torderunit';
            TorderunitRow.lookupKey = 'Finance.Torderunit';
            function getLookup() {
                return Q.getLookup('Finance.Torderunit');
            }
            TorderunitRow.getLookup = getLookup;
        })(TorderunitRow = Finance.TorderunitRow || (Finance.TorderunitRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TorderunitService;
        (function (TorderunitService) {
            TorderunitService.baseUrl = 'Finance/Torderunit';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TorderunitService[x] = function (r, s, o) {
                    return Q.serviceRequest(TorderunitService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TorderunitService = Finance.TorderunitService || (Finance.TorderunitService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TpaymentstatusForm = /** @class */ (function (_super) {
            __extends(TpaymentstatusForm, _super);
            function TpaymentstatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TpaymentstatusForm.init) {
                    TpaymentstatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TpaymentstatusForm, [
                        'Paymentstatus', w0
                    ]);
                }
                return _this;
            }
            TpaymentstatusForm.formKey = 'Finance.Tpaymentstatus';
            return TpaymentstatusForm;
        }(Serenity.PrefixedContext));
        Finance.TpaymentstatusForm = TpaymentstatusForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TpaymentstatusRow;
        (function (TpaymentstatusRow) {
            TpaymentstatusRow.idProperty = 'Id';
            TpaymentstatusRow.nameProperty = 'Paymentstatus';
            TpaymentstatusRow.localTextPrefix = 'Finance.Tpaymentstatus';
            TpaymentstatusRow.lookupKey = 'Finance.Tpaymentstatus';
            function getLookup() {
                return Q.getLookup('Finance.Tpaymentstatus');
            }
            TpaymentstatusRow.getLookup = getLookup;
        })(TpaymentstatusRow = Finance.TpaymentstatusRow || (Finance.TpaymentstatusRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TpaymentstatusService;
        (function (TpaymentstatusService) {
            TpaymentstatusService.baseUrl = 'Finance/Tpaymentstatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TpaymentstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TpaymentstatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TpaymentstatusService = Finance.TpaymentstatusService || (Finance.TpaymentstatusService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TproducttypeForm = /** @class */ (function (_super) {
            __extends(TproducttypeForm, _super);
            function TproducttypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TproducttypeForm.init) {
                    TproducttypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TproducttypeForm, [
                        'Producttype', w0
                    ]);
                }
                return _this;
            }
            TproducttypeForm.formKey = 'Finance.Tproducttype';
            return TproducttypeForm;
        }(Serenity.PrefixedContext));
        Finance.TproducttypeForm = TproducttypeForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TproducttypeRow;
        (function (TproducttypeRow) {
            TproducttypeRow.idProperty = 'Id';
            TproducttypeRow.nameProperty = 'Producttype';
            TproducttypeRow.localTextPrefix = 'Finance.Tproducttype';
            TproducttypeRow.lookupKey = 'Finance.Tproducttype';
            function getLookup() {
                return Q.getLookup('Finance.Tproducttype');
            }
            TproducttypeRow.getLookup = getLookup;
        })(TproducttypeRow = Finance.TproducttypeRow || (Finance.TproducttypeRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TproducttypeService;
        (function (TproducttypeService) {
            TproducttypeService.baseUrl = 'Finance/Tproducttype';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TproducttypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(TproducttypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TproducttypeService = Finance.TproducttypeService || (Finance.TproducttypeService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TspecificationForm = /** @class */ (function (_super) {
            __extends(TspecificationForm, _super);
            function TspecificationForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TspecificationForm.init) {
                    TspecificationForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TspecificationForm, [
                        'Specification', w0
                    ]);
                }
                return _this;
            }
            TspecificationForm.formKey = 'Finance.Tspecification';
            return TspecificationForm;
        }(Serenity.PrefixedContext));
        Finance.TspecificationForm = TspecificationForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TspecificationRow;
        (function (TspecificationRow) {
            TspecificationRow.idProperty = 'Id';
            TspecificationRow.nameProperty = 'Specification';
            TspecificationRow.localTextPrefix = 'Finance.Tspecification';
            TspecificationRow.lookupKey = 'Finance.Tspecification';
            function getLookup() {
                return Q.getLookup('Finance.Tspecification');
            }
            TspecificationRow.getLookup = getLookup;
        })(TspecificationRow = Finance.TspecificationRow || (Finance.TspecificationRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TspecificationService;
        (function (TspecificationService) {
            TspecificationService.baseUrl = 'Finance/Tspecification';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TspecificationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TspecificationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TspecificationService = Finance.TspecificationService || (Finance.TspecificationService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TsuppliercompanyForm = /** @class */ (function (_super) {
            __extends(TsuppliercompanyForm, _super);
            function TsuppliercompanyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TsuppliercompanyForm.init) {
                    TsuppliercompanyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TsuppliercompanyForm, [
                        'Suppliercompany', w0
                    ]);
                }
                return _this;
            }
            TsuppliercompanyForm.formKey = 'Finance.Tsuppliercompany';
            return TsuppliercompanyForm;
        }(Serenity.PrefixedContext));
        Finance.TsuppliercompanyForm = TsuppliercompanyForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TsuppliercompanyRow;
        (function (TsuppliercompanyRow) {
            TsuppliercompanyRow.idProperty = 'Id';
            TsuppliercompanyRow.nameProperty = 'Suppliercompany';
            TsuppliercompanyRow.localTextPrefix = 'Finance.Tsuppliercompany';
            TsuppliercompanyRow.lookupKey = 'Finance.Tsuppliercompany';
            function getLookup() {
                return Q.getLookup('Finance.Tsuppliercompany');
            }
            TsuppliercompanyRow.getLookup = getLookup;
        })(TsuppliercompanyRow = Finance.TsuppliercompanyRow || (Finance.TsuppliercompanyRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TsuppliercompanyService;
        (function (TsuppliercompanyService) {
            TsuppliercompanyService.baseUrl = 'Finance/Tsuppliercompany';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TsuppliercompanyService[x] = function (r, s, o) {
                    return Q.serviceRequest(TsuppliercompanyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TsuppliercompanyService = Finance.TsuppliercompanyService || (Finance.TsuppliercompanyService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TticketstatusForm = /** @class */ (function (_super) {
            __extends(TticketstatusForm, _super);
            function TticketstatusForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TticketstatusForm.init) {
                    TticketstatusForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TticketstatusForm, [
                        'Ticketstatus', w0
                    ]);
                }
                return _this;
            }
            TticketstatusForm.formKey = 'Finance.Tticketstatus';
            return TticketstatusForm;
        }(Serenity.PrefixedContext));
        Finance.TticketstatusForm = TticketstatusForm;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TticketstatusRow;
        (function (TticketstatusRow) {
            TticketstatusRow.idProperty = 'Id';
            TticketstatusRow.nameProperty = 'Ticketstatus';
            TticketstatusRow.localTextPrefix = 'Finance.Tticketstatus';
            TticketstatusRow.lookupKey = 'Finance.Tticketstatus';
            function getLookup() {
                return Q.getLookup('Finance.Tticketstatus');
            }
            TticketstatusRow.getLookup = getLookup;
        })(TticketstatusRow = Finance.TticketstatusRow || (Finance.TticketstatusRow = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TticketstatusService;
        (function (TticketstatusService) {
            TticketstatusService.baseUrl = 'Finance/Tticketstatus';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TticketstatusService[x] = function (r, s, o) {
                    return Q.serviceRequest(TticketstatusService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TticketstatusService = Finance.TticketstatusService || (Finance.TticketstatusService = {}));
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Serene3.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Serene3.LanguageList || (Serene3.LanguageList = {}));
})(Serene3 || (Serene3 = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Serene3;
(function (Serene3) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Serene3');
        Serenity.EntityDialog.defaultLanguageList = Serene3.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Serene3.ScriptInitialization || (Serene3.ScriptInitialization = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Serene3.Administration || (Serene3.Administration = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Serene3.BasicProgressDialog = BasicProgressDialog;
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Serene3.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Serene3.DialogUtils || (Serene3.DialogUtils = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Serene3.StaticTextBlock = StaticTextBlock;
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Serene3.Common || (Serene3.Common = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Document.CustomerForm(_this.idPrefix);
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Document.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Document.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Document.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Document.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Document.CustomerService.baseUrl; };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Document.CustomerDialog = CustomerDialog;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Document.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Document.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Document.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Document.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Document.CustomerService.baseUrl; };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Document.CustomerGrid = CustomerGrid;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Document.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Document.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Document.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Document.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Document.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Document.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Document.ProductDialog = ProductDialog;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'Document.Product'; };
            ProductGrid.prototype.getDialogType = function () { return Document.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Document.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Document.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Document.ProductService.baseUrl; };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Document.ProductGrid = ProductGrid;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var RequirementDialog = /** @class */ (function (_super) {
            __extends(RequirementDialog, _super);
            function RequirementDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Document.RequirementForm(_this.idPrefix);
                //this.form.StatusID. = StatusRow.Fields.Id;
                console.log(_this.form.StatusID.items);
                var items = _this.form.StatusID.items;
                items.sort(function (a, b) { return (Number(a.id) - Number(b.id)); });
                return _this;
            }
            RequirementDialog.prototype.getFormKey = function () { return Document.RequirementForm.formKey; };
            RequirementDialog.prototype.getIdProperty = function () { return Document.RequirementRow.idProperty; };
            RequirementDialog.prototype.getLocalTextPrefix = function () { return Document.RequirementRow.localTextPrefix; };
            RequirementDialog.prototype.getNameProperty = function () { return Document.RequirementRow.nameProperty; };
            RequirementDialog.prototype.getService = function () { return Document.RequirementService.baseUrl; };
            RequirementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RequirementDialog);
            return RequirementDialog;
        }(Serenity.EntityDialog));
        Document.RequirementDialog = RequirementDialog;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var RequirementGrid = /** @class */ (function (_super) {
            __extends(RequirementGrid, _super);
            function RequirementGrid(container) {
                return _super.call(this, container) || this;
            }
            RequirementGrid.prototype.getColumnsKey = function () { return 'Document.Requirement'; };
            RequirementGrid.prototype.getDialogType = function () { return Document.RequirementDialog; };
            RequirementGrid.prototype.getIdProperty = function () { return Document.RequirementRow.idProperty; };
            RequirementGrid.prototype.getLocalTextPrefix = function () { return Document.RequirementRow.localTextPrefix; };
            RequirementGrid.prototype.getService = function () { return Document.RequirementService.baseUrl; };
            RequirementGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                //var fld = Serene3.Document.RequirementRow.Fields;
                columns.unshift({
                    field: 'Read',
                    name: '',
                    format: function (ctx) { return _this.ReadFormatter(ctx); },
                    width: 30,
                    minWidth: 30,
                    maxWidth: 30
                });
                return columns;
            };
            RequirementGrid.prototype.ReadFormatter = function (ctx) {
                var klass = 'ButtonOnClick read-row';
                var item = ctx.item;
                return "<a class=\"inline-action view-details\"  title=\"Read\" href=\"/Document/Requirement/Read/" + ctx.item.Id + "\" target=\"_blank\">\n                    <i class=\" icon-book-open \" style=\"color: #6000ff;font-size:16px\" ></i></a>";
            };
            RequirementGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], RequirementGrid);
            return RequirementGrid;
        }(Serenity.EntityGrid));
        Document.RequirementGrid = RequirementGrid;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var StatusDialog = /** @class */ (function (_super) {
            __extends(StatusDialog, _super);
            function StatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Document.StatusForm(_this.idPrefix);
                return _this;
            }
            StatusDialog.prototype.getFormKey = function () { return Document.StatusForm.formKey; };
            StatusDialog.prototype.getIdProperty = function () { return Document.StatusRow.idProperty; };
            StatusDialog.prototype.getLocalTextPrefix = function () { return Document.StatusRow.localTextPrefix; };
            StatusDialog.prototype.getNameProperty = function () { return Document.StatusRow.nameProperty; };
            StatusDialog.prototype.getService = function () { return Document.StatusService.baseUrl; };
            StatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusDialog);
            return StatusDialog;
        }(Serenity.EntityDialog));
        Document.StatusDialog = StatusDialog;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Document;
    (function (Document) {
        var StatusGrid = /** @class */ (function (_super) {
            __extends(StatusGrid, _super);
            function StatusGrid(container) {
                return _super.call(this, container) || this;
            }
            StatusGrid.prototype.getColumnsKey = function () { return 'Document.Status'; };
            StatusGrid.prototype.getDialogType = function () { return Document.StatusDialog; };
            StatusGrid.prototype.getIdProperty = function () { return Document.StatusRow.idProperty; };
            StatusGrid.prototype.getLocalTextPrefix = function () { return Document.StatusRow.localTextPrefix; };
            StatusGrid.prototype.getService = function () { return Document.StatusService.baseUrl; };
            StatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StatusGrid);
            return StatusGrid;
        }(Serenity.EntityGrid));
        Document.StatusGrid = StatusGrid;
    })(Document = Serene3.Document || (Serene3.Document = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TbookingunitDialog = /** @class */ (function (_super) {
            __extends(TbookingunitDialog, _super);
            function TbookingunitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TbookingunitForm(_this.idPrefix);
                return _this;
            }
            TbookingunitDialog.prototype.getFormKey = function () { return Finance.TbookingunitForm.formKey; };
            TbookingunitDialog.prototype.getIdProperty = function () { return Finance.TbookingunitRow.idProperty; };
            TbookingunitDialog.prototype.getLocalTextPrefix = function () { return Finance.TbookingunitRow.localTextPrefix; };
            TbookingunitDialog.prototype.getNameProperty = function () { return Finance.TbookingunitRow.nameProperty; };
            TbookingunitDialog.prototype.getService = function () { return Finance.TbookingunitService.baseUrl; };
            TbookingunitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TbookingunitDialog);
            return TbookingunitDialog;
        }(Serenity.EntityDialog));
        Finance.TbookingunitDialog = TbookingunitDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TbookingunitGrid = /** @class */ (function (_super) {
            __extends(TbookingunitGrid, _super);
            function TbookingunitGrid(container) {
                return _super.call(this, container) || this;
            }
            TbookingunitGrid.prototype.getColumnsKey = function () { return 'Finance.Tbookingunit'; };
            TbookingunitGrid.prototype.getDialogType = function () { return Finance.TbookingunitDialog; };
            TbookingunitGrid.prototype.getIdProperty = function () { return Finance.TbookingunitRow.idProperty; };
            TbookingunitGrid.prototype.getLocalTextPrefix = function () { return Finance.TbookingunitRow.localTextPrefix; };
            TbookingunitGrid.prototype.getService = function () { return Finance.TbookingunitService.baseUrl; };
            TbookingunitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TbookingunitGrid);
            return TbookingunitGrid;
        }(Serenity.EntityGrid));
        Finance.TbookingunitGrid = TbookingunitGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcollectionstatusDialog = /** @class */ (function (_super) {
            __extends(TcollectionstatusDialog, _super);
            function TcollectionstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TcollectionstatusForm(_this.idPrefix);
                return _this;
            }
            TcollectionstatusDialog.prototype.getFormKey = function () { return Finance.TcollectionstatusForm.formKey; };
            TcollectionstatusDialog.prototype.getIdProperty = function () { return Finance.TcollectionstatusRow.idProperty; };
            TcollectionstatusDialog.prototype.getLocalTextPrefix = function () { return Finance.TcollectionstatusRow.localTextPrefix; };
            TcollectionstatusDialog.prototype.getNameProperty = function () { return Finance.TcollectionstatusRow.nameProperty; };
            TcollectionstatusDialog.prototype.getService = function () { return Finance.TcollectionstatusService.baseUrl; };
            TcollectionstatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TcollectionstatusDialog);
            return TcollectionstatusDialog;
        }(Serenity.EntityDialog));
        Finance.TcollectionstatusDialog = TcollectionstatusDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcollectionstatusGrid = /** @class */ (function (_super) {
            __extends(TcollectionstatusGrid, _super);
            function TcollectionstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            TcollectionstatusGrid.prototype.getColumnsKey = function () { return 'Finance.Tcollectionstatus'; };
            TcollectionstatusGrid.prototype.getDialogType = function () { return Finance.TcollectionstatusDialog; };
            TcollectionstatusGrid.prototype.getIdProperty = function () { return Finance.TcollectionstatusRow.idProperty; };
            TcollectionstatusGrid.prototype.getLocalTextPrefix = function () { return Finance.TcollectionstatusRow.localTextPrefix; };
            TcollectionstatusGrid.prototype.getService = function () { return Finance.TcollectionstatusService.baseUrl; };
            TcollectionstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TcollectionstatusGrid);
            return TcollectionstatusGrid;
        }(Serenity.EntityGrid));
        Finance.TcollectionstatusGrid = TcollectionstatusGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcompanyDialog = /** @class */ (function (_super) {
            __extends(TcompanyDialog, _super);
            function TcompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TcompanyForm(_this.idPrefix);
                return _this;
            }
            TcompanyDialog.prototype.getFormKey = function () { return Finance.TcompanyForm.formKey; };
            TcompanyDialog.prototype.getIdProperty = function () { return Finance.TcompanyRow.idProperty; };
            TcompanyDialog.prototype.getLocalTextPrefix = function () { return Finance.TcompanyRow.localTextPrefix; };
            TcompanyDialog.prototype.getNameProperty = function () { return Finance.TcompanyRow.nameProperty; };
            TcompanyDialog.prototype.getService = function () { return Finance.TcompanyService.baseUrl; };
            TcompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TcompanyDialog);
            return TcompanyDialog;
        }(Serenity.EntityDialog));
        Finance.TcompanyDialog = TcompanyDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcompanyGrid = /** @class */ (function (_super) {
            __extends(TcompanyGrid, _super);
            function TcompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            TcompanyGrid.prototype.getColumnsKey = function () { return 'Finance.Tcompany'; };
            TcompanyGrid.prototype.getDialogType = function () { return Finance.TcompanyDialog; };
            TcompanyGrid.prototype.getIdProperty = function () { return Finance.TcompanyRow.idProperty; };
            TcompanyGrid.prototype.getLocalTextPrefix = function () { return Finance.TcompanyRow.localTextPrefix; };
            TcompanyGrid.prototype.getService = function () { return Finance.TcompanyService.baseUrl; };
            TcompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TcompanyGrid);
            return TcompanyGrid;
        }(Serenity.EntityGrid));
        Finance.TcompanyGrid = TcompanyGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcustomerDialog = /** @class */ (function (_super) {
            __extends(TcustomerDialog, _super);
            function TcustomerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TcustomerForm(_this.idPrefix);
                return _this;
            }
            TcustomerDialog.prototype.getFormKey = function () { return Finance.TcustomerForm.formKey; };
            TcustomerDialog.prototype.getIdProperty = function () { return Finance.TcustomerRow.idProperty; };
            TcustomerDialog.prototype.getLocalTextPrefix = function () { return Finance.TcustomerRow.localTextPrefix; };
            TcustomerDialog.prototype.getNameProperty = function () { return Finance.TcustomerRow.nameProperty; };
            TcustomerDialog.prototype.getService = function () { return Finance.TcustomerService.baseUrl; };
            TcustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TcustomerDialog);
            return TcustomerDialog;
        }(Serenity.EntityDialog));
        Finance.TcustomerDialog = TcustomerDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TcustomerGrid = /** @class */ (function (_super) {
            __extends(TcustomerGrid, _super);
            function TcustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            TcustomerGrid.prototype.getColumnsKey = function () { return 'Finance.Tcustomer'; };
            TcustomerGrid.prototype.getDialogType = function () { return Finance.TcustomerDialog; };
            TcustomerGrid.prototype.getIdProperty = function () { return Finance.TcustomerRow.idProperty; };
            TcustomerGrid.prototype.getLocalTextPrefix = function () { return Finance.TcustomerRow.localTextPrefix; };
            TcustomerGrid.prototype.getService = function () { return Finance.TcustomerService.baseUrl; };
            TcustomerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TcustomerGrid);
            return TcustomerGrid;
        }(Serenity.EntityGrid));
        Finance.TcustomerGrid = TcustomerGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TexpresstypeDialog = /** @class */ (function (_super) {
            __extends(TexpresstypeDialog, _super);
            function TexpresstypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TexpresstypeForm(_this.idPrefix);
                return _this;
            }
            TexpresstypeDialog.prototype.getFormKey = function () { return Finance.TexpresstypeForm.formKey; };
            TexpresstypeDialog.prototype.getIdProperty = function () { return Finance.TexpresstypeRow.idProperty; };
            TexpresstypeDialog.prototype.getLocalTextPrefix = function () { return Finance.TexpresstypeRow.localTextPrefix; };
            TexpresstypeDialog.prototype.getNameProperty = function () { return Finance.TexpresstypeRow.nameProperty; };
            TexpresstypeDialog.prototype.getService = function () { return Finance.TexpresstypeService.baseUrl; };
            TexpresstypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TexpresstypeDialog);
            return TexpresstypeDialog;
        }(Serenity.EntityDialog));
        Finance.TexpresstypeDialog = TexpresstypeDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TexpresstypeGrid = /** @class */ (function (_super) {
            __extends(TexpresstypeGrid, _super);
            function TexpresstypeGrid(container) {
                return _super.call(this, container) || this;
            }
            TexpresstypeGrid.prototype.getColumnsKey = function () { return 'Finance.Texpresstype'; };
            TexpresstypeGrid.prototype.getDialogType = function () { return Finance.TexpresstypeDialog; };
            TexpresstypeGrid.prototype.getIdProperty = function () { return Finance.TexpresstypeRow.idProperty; };
            TexpresstypeGrid.prototype.getLocalTextPrefix = function () { return Finance.TexpresstypeRow.localTextPrefix; };
            TexpresstypeGrid.prototype.getService = function () { return Finance.TexpresstypeService.baseUrl; };
            TexpresstypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TexpresstypeGrid);
            return TexpresstypeGrid;
        }(Serenity.EntityGrid));
        Finance.TexpresstypeGrid = TexpresstypeGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TfinanceDialog = /** @class */ (function (_super) {
            __extends(TfinanceDialog, _super);
            function TfinanceDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TfinanceForm(_this.idPrefix);
                return _this;
            }
            TfinanceDialog.prototype.getFormKey = function () { return Finance.TfinanceForm.formKey; };
            TfinanceDialog.prototype.getIdProperty = function () { return Finance.TfinanceRow.idProperty; };
            TfinanceDialog.prototype.getLocalTextPrefix = function () { return Finance.TfinanceRow.localTextPrefix; };
            TfinanceDialog.prototype.getNameProperty = function () { return Finance.TfinanceRow.nameProperty; };
            TfinanceDialog.prototype.getService = function () { return Finance.TfinanceService.baseUrl; };
            TfinanceDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TfinanceDialog);
            return TfinanceDialog;
        }(Serenity.EntityDialog));
        Finance.TfinanceDialog = TfinanceDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TfinanceGrid = /** @class */ (function (_super) {
            __extends(TfinanceGrid, _super);
            function TfinanceGrid(container) {
                return _super.call(this, container) || this;
            }
            TfinanceGrid.prototype.getColumnsKey = function () { return 'Finance.Tfinance'; };
            TfinanceGrid.prototype.getDialogType = function () { return Finance.TfinanceDialog; };
            TfinanceGrid.prototype.getIdProperty = function () { return Finance.TfinanceRow.idProperty; };
            TfinanceGrid.prototype.getLocalTextPrefix = function () { return Finance.TfinanceRow.localTextPrefix; };
            TfinanceGrid.prototype.getService = function () { return Finance.TfinanceService.baseUrl; };
            TfinanceGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TfinanceGrid);
            return TfinanceGrid;
        }(Serenity.EntityGrid));
        Finance.TfinanceGrid = TfinanceGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TinputticketstatusDialog = /** @class */ (function (_super) {
            __extends(TinputticketstatusDialog, _super);
            function TinputticketstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TinputticketstatusForm(_this.idPrefix);
                return _this;
            }
            TinputticketstatusDialog.prototype.getFormKey = function () { return Finance.TinputticketstatusForm.formKey; };
            TinputticketstatusDialog.prototype.getIdProperty = function () { return Finance.TinputticketstatusRow.idProperty; };
            TinputticketstatusDialog.prototype.getLocalTextPrefix = function () { return Finance.TinputticketstatusRow.localTextPrefix; };
            TinputticketstatusDialog.prototype.getNameProperty = function () { return Finance.TinputticketstatusRow.nameProperty; };
            TinputticketstatusDialog.prototype.getService = function () { return Finance.TinputticketstatusService.baseUrl; };
            TinputticketstatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TinputticketstatusDialog);
            return TinputticketstatusDialog;
        }(Serenity.EntityDialog));
        Finance.TinputticketstatusDialog = TinputticketstatusDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TinputticketstatusGrid = /** @class */ (function (_super) {
            __extends(TinputticketstatusGrid, _super);
            function TinputticketstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            TinputticketstatusGrid.prototype.getColumnsKey = function () { return 'Finance.Tinputticketstatus'; };
            TinputticketstatusGrid.prototype.getDialogType = function () { return Finance.TinputticketstatusDialog; };
            TinputticketstatusGrid.prototype.getIdProperty = function () { return Finance.TinputticketstatusRow.idProperty; };
            TinputticketstatusGrid.prototype.getLocalTextPrefix = function () { return Finance.TinputticketstatusRow.localTextPrefix; };
            TinputticketstatusGrid.prototype.getService = function () { return Finance.TinputticketstatusService.baseUrl; };
            TinputticketstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TinputticketstatusGrid);
            return TinputticketstatusGrid;
        }(Serenity.EntityGrid));
        Finance.TinputticketstatusGrid = TinputticketstatusGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TorderunitDialog = /** @class */ (function (_super) {
            __extends(TorderunitDialog, _super);
            function TorderunitDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TorderunitForm(_this.idPrefix);
                return _this;
            }
            TorderunitDialog.prototype.getFormKey = function () { return Finance.TorderunitForm.formKey; };
            TorderunitDialog.prototype.getIdProperty = function () { return Finance.TorderunitRow.idProperty; };
            TorderunitDialog.prototype.getLocalTextPrefix = function () { return Finance.TorderunitRow.localTextPrefix; };
            TorderunitDialog.prototype.getNameProperty = function () { return Finance.TorderunitRow.nameProperty; };
            TorderunitDialog.prototype.getService = function () { return Finance.TorderunitService.baseUrl; };
            TorderunitDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TorderunitDialog);
            return TorderunitDialog;
        }(Serenity.EntityDialog));
        Finance.TorderunitDialog = TorderunitDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TorderunitGrid = /** @class */ (function (_super) {
            __extends(TorderunitGrid, _super);
            function TorderunitGrid(container) {
                return _super.call(this, container) || this;
            }
            TorderunitGrid.prototype.getColumnsKey = function () { return 'Finance.Torderunit'; };
            TorderunitGrid.prototype.getDialogType = function () { return Finance.TorderunitDialog; };
            TorderunitGrid.prototype.getIdProperty = function () { return Finance.TorderunitRow.idProperty; };
            TorderunitGrid.prototype.getLocalTextPrefix = function () { return Finance.TorderunitRow.localTextPrefix; };
            TorderunitGrid.prototype.getService = function () { return Finance.TorderunitService.baseUrl; };
            TorderunitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TorderunitGrid);
            return TorderunitGrid;
        }(Serenity.EntityGrid));
        Finance.TorderunitGrid = TorderunitGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TpaymentstatusDialog = /** @class */ (function (_super) {
            __extends(TpaymentstatusDialog, _super);
            function TpaymentstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TpaymentstatusForm(_this.idPrefix);
                return _this;
            }
            TpaymentstatusDialog.prototype.getFormKey = function () { return Finance.TpaymentstatusForm.formKey; };
            TpaymentstatusDialog.prototype.getIdProperty = function () { return Finance.TpaymentstatusRow.idProperty; };
            TpaymentstatusDialog.prototype.getLocalTextPrefix = function () { return Finance.TpaymentstatusRow.localTextPrefix; };
            TpaymentstatusDialog.prototype.getNameProperty = function () { return Finance.TpaymentstatusRow.nameProperty; };
            TpaymentstatusDialog.prototype.getService = function () { return Finance.TpaymentstatusService.baseUrl; };
            TpaymentstatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TpaymentstatusDialog);
            return TpaymentstatusDialog;
        }(Serenity.EntityDialog));
        Finance.TpaymentstatusDialog = TpaymentstatusDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TpaymentstatusGrid = /** @class */ (function (_super) {
            __extends(TpaymentstatusGrid, _super);
            function TpaymentstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            TpaymentstatusGrid.prototype.getColumnsKey = function () { return 'Finance.Tpaymentstatus'; };
            TpaymentstatusGrid.prototype.getDialogType = function () { return Finance.TpaymentstatusDialog; };
            TpaymentstatusGrid.prototype.getIdProperty = function () { return Finance.TpaymentstatusRow.idProperty; };
            TpaymentstatusGrid.prototype.getLocalTextPrefix = function () { return Finance.TpaymentstatusRow.localTextPrefix; };
            TpaymentstatusGrid.prototype.getService = function () { return Finance.TpaymentstatusService.baseUrl; };
            TpaymentstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TpaymentstatusGrid);
            return TpaymentstatusGrid;
        }(Serenity.EntityGrid));
        Finance.TpaymentstatusGrid = TpaymentstatusGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TproducttypeDialog = /** @class */ (function (_super) {
            __extends(TproducttypeDialog, _super);
            function TproducttypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TproducttypeForm(_this.idPrefix);
                return _this;
            }
            TproducttypeDialog.prototype.getFormKey = function () { return Finance.TproducttypeForm.formKey; };
            TproducttypeDialog.prototype.getIdProperty = function () { return Finance.TproducttypeRow.idProperty; };
            TproducttypeDialog.prototype.getLocalTextPrefix = function () { return Finance.TproducttypeRow.localTextPrefix; };
            TproducttypeDialog.prototype.getNameProperty = function () { return Finance.TproducttypeRow.nameProperty; };
            TproducttypeDialog.prototype.getService = function () { return Finance.TproducttypeService.baseUrl; };
            TproducttypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TproducttypeDialog);
            return TproducttypeDialog;
        }(Serenity.EntityDialog));
        Finance.TproducttypeDialog = TproducttypeDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TproducttypeGrid = /** @class */ (function (_super) {
            __extends(TproducttypeGrid, _super);
            function TproducttypeGrid(container) {
                return _super.call(this, container) || this;
            }
            TproducttypeGrid.prototype.getColumnsKey = function () { return 'Finance.Tproducttype'; };
            TproducttypeGrid.prototype.getDialogType = function () { return Finance.TproducttypeDialog; };
            TproducttypeGrid.prototype.getIdProperty = function () { return Finance.TproducttypeRow.idProperty; };
            TproducttypeGrid.prototype.getLocalTextPrefix = function () { return Finance.TproducttypeRow.localTextPrefix; };
            TproducttypeGrid.prototype.getService = function () { return Finance.TproducttypeService.baseUrl; };
            TproducttypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TproducttypeGrid);
            return TproducttypeGrid;
        }(Serenity.EntityGrid));
        Finance.TproducttypeGrid = TproducttypeGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TspecificationDialog = /** @class */ (function (_super) {
            __extends(TspecificationDialog, _super);
            function TspecificationDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TspecificationForm(_this.idPrefix);
                return _this;
            }
            TspecificationDialog.prototype.getFormKey = function () { return Finance.TspecificationForm.formKey; };
            TspecificationDialog.prototype.getIdProperty = function () { return Finance.TspecificationRow.idProperty; };
            TspecificationDialog.prototype.getLocalTextPrefix = function () { return Finance.TspecificationRow.localTextPrefix; };
            TspecificationDialog.prototype.getNameProperty = function () { return Finance.TspecificationRow.nameProperty; };
            TspecificationDialog.prototype.getService = function () { return Finance.TspecificationService.baseUrl; };
            TspecificationDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TspecificationDialog);
            return TspecificationDialog;
        }(Serenity.EntityDialog));
        Finance.TspecificationDialog = TspecificationDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TspecificationGrid = /** @class */ (function (_super) {
            __extends(TspecificationGrid, _super);
            function TspecificationGrid(container) {
                return _super.call(this, container) || this;
            }
            TspecificationGrid.prototype.getColumnsKey = function () { return 'Finance.Tspecification'; };
            TspecificationGrid.prototype.getDialogType = function () { return Finance.TspecificationDialog; };
            TspecificationGrid.prototype.getIdProperty = function () { return Finance.TspecificationRow.idProperty; };
            TspecificationGrid.prototype.getLocalTextPrefix = function () { return Finance.TspecificationRow.localTextPrefix; };
            TspecificationGrid.prototype.getService = function () { return Finance.TspecificationService.baseUrl; };
            TspecificationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TspecificationGrid);
            return TspecificationGrid;
        }(Serenity.EntityGrid));
        Finance.TspecificationGrid = TspecificationGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TsuppliercompanyDialog = /** @class */ (function (_super) {
            __extends(TsuppliercompanyDialog, _super);
            function TsuppliercompanyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TsuppliercompanyForm(_this.idPrefix);
                return _this;
            }
            TsuppliercompanyDialog.prototype.getFormKey = function () { return Finance.TsuppliercompanyForm.formKey; };
            TsuppliercompanyDialog.prototype.getIdProperty = function () { return Finance.TsuppliercompanyRow.idProperty; };
            TsuppliercompanyDialog.prototype.getLocalTextPrefix = function () { return Finance.TsuppliercompanyRow.localTextPrefix; };
            TsuppliercompanyDialog.prototype.getNameProperty = function () { return Finance.TsuppliercompanyRow.nameProperty; };
            TsuppliercompanyDialog.prototype.getService = function () { return Finance.TsuppliercompanyService.baseUrl; };
            TsuppliercompanyDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TsuppliercompanyDialog);
            return TsuppliercompanyDialog;
        }(Serenity.EntityDialog));
        Finance.TsuppliercompanyDialog = TsuppliercompanyDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TsuppliercompanyGrid = /** @class */ (function (_super) {
            __extends(TsuppliercompanyGrid, _super);
            function TsuppliercompanyGrid(container) {
                return _super.call(this, container) || this;
            }
            TsuppliercompanyGrid.prototype.getColumnsKey = function () { return 'Finance.Tsuppliercompany'; };
            TsuppliercompanyGrid.prototype.getDialogType = function () { return Finance.TsuppliercompanyDialog; };
            TsuppliercompanyGrid.prototype.getIdProperty = function () { return Finance.TsuppliercompanyRow.idProperty; };
            TsuppliercompanyGrid.prototype.getLocalTextPrefix = function () { return Finance.TsuppliercompanyRow.localTextPrefix; };
            TsuppliercompanyGrid.prototype.getService = function () { return Finance.TsuppliercompanyService.baseUrl; };
            TsuppliercompanyGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TsuppliercompanyGrid);
            return TsuppliercompanyGrid;
        }(Serenity.EntityGrid));
        Finance.TsuppliercompanyGrid = TsuppliercompanyGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TticketstatusDialog = /** @class */ (function (_super) {
            __extends(TticketstatusDialog, _super);
            function TticketstatusDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Finance.TticketstatusForm(_this.idPrefix);
                return _this;
            }
            TticketstatusDialog.prototype.getFormKey = function () { return Finance.TticketstatusForm.formKey; };
            TticketstatusDialog.prototype.getIdProperty = function () { return Finance.TticketstatusRow.idProperty; };
            TticketstatusDialog.prototype.getLocalTextPrefix = function () { return Finance.TticketstatusRow.localTextPrefix; };
            TticketstatusDialog.prototype.getNameProperty = function () { return Finance.TticketstatusRow.nameProperty; };
            TticketstatusDialog.prototype.getService = function () { return Finance.TticketstatusService.baseUrl; };
            TticketstatusDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TticketstatusDialog);
            return TticketstatusDialog;
        }(Serenity.EntityDialog));
        Finance.TticketstatusDialog = TticketstatusDialog;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Finance;
    (function (Finance) {
        var TticketstatusGrid = /** @class */ (function (_super) {
            __extends(TticketstatusGrid, _super);
            function TticketstatusGrid(container) {
                return _super.call(this, container) || this;
            }
            TticketstatusGrid.prototype.getColumnsKey = function () { return 'Finance.Tticketstatus'; };
            TticketstatusGrid.prototype.getDialogType = function () { return Finance.TticketstatusDialog; };
            TticketstatusGrid.prototype.getIdProperty = function () { return Finance.TticketstatusRow.idProperty; };
            TticketstatusGrid.prototype.getLocalTextPrefix = function () { return Finance.TticketstatusRow.localTextPrefix; };
            TticketstatusGrid.prototype.getService = function () { return Finance.TticketstatusService.baseUrl; };
            TticketstatusGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TticketstatusGrid);
            return TticketstatusGrid;
        }(Serenity.EntityGrid));
        Finance.TticketstatusGrid = TticketstatusGrid;
    })(Finance = Serene3.Finance || (Serene3.Finance = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Serene3.Authorization || (Serene3.Authorization = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
var Serene3;
(function (Serene3) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Serene3.Membership || (Serene3.Membership = {}));
})(Serene3 || (Serene3 = {}));
//# sourceMappingURL=Serene3.Web.js.map