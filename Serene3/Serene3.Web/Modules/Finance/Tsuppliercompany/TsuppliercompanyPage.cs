
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tsuppliercompany"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TsuppliercompanyRow))]
    public class TsuppliercompanyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tsuppliercompany/TsuppliercompanyIndex.cshtml");
        }
    }
}