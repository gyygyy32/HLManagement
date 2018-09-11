
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tticketstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TticketstatusRow))]
    public class TticketstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tticketstatus/TticketstatusIndex.cshtml");
        }
    }
}