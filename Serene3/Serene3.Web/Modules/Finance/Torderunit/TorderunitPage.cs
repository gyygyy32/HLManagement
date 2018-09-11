
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Torderunit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TorderunitRow))]
    public class TorderunitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Torderunit/TorderunitIndex.cshtml");
        }
    }
}