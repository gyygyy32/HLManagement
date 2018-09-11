using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }

        }

        public static class Document
        {
            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Document/Customer/CustomerIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Document/Product/ProductIndex.cshtml";
            }

            public static class Requirement
            {
                public const string RequirementIndex = "~/Modules/Document/Requirement/RequirementIndex.cshtml";
                public const string RequirementRead = "~/Modules/Document/Requirement/RequirementRead.cshtml";
            }

            public static class Status
            {
                public const string StatusIndex = "~/Modules/Document/Status/StatusIndex.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Finance
        {
            public static class Tbookingunit
            {
                public const string TbookingunitIndex = "~/Modules/Finance/Tbookingunit/TbookingunitIndex.cshtml";
            }

            public static class Tcollectionstatus
            {
                public const string TcollectionstatusIndex = "~/Modules/Finance/Tcollectionstatus/TcollectionstatusIndex.cshtml";
            }

            public static class Tcompany
            {
                public const string TcompanyIndex = "~/Modules/Finance/Tcompany/TcompanyIndex.cshtml";
            }

            public static class Tcustomer
            {
                public const string TcustomerIndex = "~/Modules/Finance/Tcustomer/TcustomerIndex.cshtml";
            }

            public static class Texpresstype
            {
                public const string TexpresstypeIndex = "~/Modules/Finance/Texpresstype/TexpresstypeIndex.cshtml";
            }

            public static class Tfinance
            {
                public const string TfinanceIndex = "~/Modules/Finance/Tfinance/TfinanceIndex.cshtml";
            }

            public static class Tinputticketstatus
            {
                public const string TinputticketstatusIndex = "~/Modules/Finance/Tinputticketstatus/TinputticketstatusIndex.cshtml";
            }

            public static class Torderunit
            {
                public const string TorderunitIndex = "~/Modules/Finance/Torderunit/TorderunitIndex.cshtml";
            }

            public static class Tpaymentstatus
            {
                public const string TpaymentstatusIndex = "~/Modules/Finance/Tpaymentstatus/TpaymentstatusIndex.cshtml";
            }

            public static class Tproducttype
            {
                public const string TproducttypeIndex = "~/Modules/Finance/Tproducttype/TproducttypeIndex.cshtml";
            }

            public static class Tspecification
            {
                public const string TspecificationIndex = "~/Modules/Finance/Tspecification/TspecificationIndex.cshtml";
            }

            public static class Tsuppliercompany
            {
                public const string TsuppliercompanyIndex = "~/Modules/Finance/Tsuppliercompany/TsuppliercompanyIndex.cshtml";
            }

            public static class Tticketstatus
            {
                public const string TticketstatusIndex = "~/Modules/Finance/Tticketstatus/TticketstatusIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

