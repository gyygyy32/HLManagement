
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tproducttype"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TproducttypeRow))]
    public class TproducttypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tproducttype/TproducttypeIndex.cshtml");
        }
    }
}