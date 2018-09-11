
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tpaymentstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TpaymentstatusRow))]
    public class TpaymentstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tpaymentstatus/TpaymentstatusIndex.cshtml");
        }
    }
}