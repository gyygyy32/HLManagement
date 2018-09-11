
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Texpresstype"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TexpresstypeRow))]
    public class TexpresstypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Texpresstype/TexpresstypeIndex.cshtml");
        }
    }
}