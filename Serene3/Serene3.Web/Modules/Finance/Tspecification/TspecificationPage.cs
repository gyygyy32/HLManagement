
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tspecification"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TspecificationRow))]
    public class TspecificationController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tspecification/TspecificationIndex.cshtml");
        }
    }
}