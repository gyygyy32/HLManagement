
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tbookingunit"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TbookingunitRow))]
    public class TbookingunitController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tbookingunit/TbookingunitIndex.cshtml");
        }
    }
}