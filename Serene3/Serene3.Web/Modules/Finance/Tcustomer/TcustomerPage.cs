
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tcustomer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TcustomerRow))]
    public class TcustomerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tcustomer/TcustomerIndex.cshtml");
        }
    }
}