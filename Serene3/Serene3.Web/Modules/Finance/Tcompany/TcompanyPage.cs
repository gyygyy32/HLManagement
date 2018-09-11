
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tcompany"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TcompanyRow))]
    public class TcompanyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tcompany/TcompanyIndex.cshtml");
        }
    }
}