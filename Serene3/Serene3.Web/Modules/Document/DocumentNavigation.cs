using Serenity.Navigation;
using MyPages = Serene3.Document.Pages;

[assembly: NavigationMenu(7000, "Document", icon: "fa-anchor")]
[assembly: NavigationLink(int.MaxValue, "Document/Requirement", typeof(MyPages.RequirementController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Document/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Document/Product", typeof(MyPages.ProductController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Document/Status", typeof(MyPages.StatusController), icon: null)]