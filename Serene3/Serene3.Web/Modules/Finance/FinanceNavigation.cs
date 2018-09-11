using Serenity.Navigation;
using MyPages = Serene3.Finance.Pages;
//fa-jpy

[assembly: NavigationMenu(3100, "Finance", icon: "fa-jpy")]
[assembly: NavigationLink(3200, "Finance/Tfinance", typeof(MyPages.TfinanceController), icon: null)]
[assembly: NavigationMenu(3300, "Finance/Finance Prepare", icon: "fa-edit")]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tbookingunit", typeof(MyPages.TbookingunitController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tcollectionstatus", typeof(MyPages.TcollectionstatusController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tcompany", typeof(MyPages.TcompanyController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tcustomer", typeof(MyPages.TcustomerController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Texpresstype", typeof(MyPages.TexpresstypeController), icon: null)]
//[assembly: NavigationLink(3400, "Finance/Tfinance", typeof(MyPages.TfinanceController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tinputticketstatus", typeof(MyPages.TinputticketstatusController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Torderunit", typeof(MyPages.TorderunitController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tpaymentstatus", typeof(MyPages.TpaymentstatusController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tproducttype", typeof(MyPages.TproducttypeController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tspecification", typeof(MyPages.TspecificationController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tsuppliercompany", typeof(MyPages.TsuppliercompanyController), icon: null)]
[assembly: NavigationLink(3400, "Finance/Finance Prepare/Tticketstatus", typeof(MyPages.TticketstatusController), icon: null)]