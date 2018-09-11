
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tfinance"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TfinanceRow))]
    public class TfinanceController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tfinance/TfinanceIndex.cshtml");
        }
    }
}