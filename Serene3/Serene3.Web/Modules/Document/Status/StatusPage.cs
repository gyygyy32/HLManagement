
namespace Serene3.Document.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Document/Status"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.StatusRow))]
    public class StatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Document/Status/StatusIndex.cshtml");
        }
    }
}