
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tcollectionstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TcollectionstatusRow))]
    public class TcollectionstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tcollectionstatus/TcollectionstatusIndex.cshtml");
        }
    }
}