
namespace Serene3.Administration.Pages
{
   
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Web.Mvc;

    [RoutePrefix("Administration/Cryp"), Route("{action=index}")]
    public class CrypController : Controller
    {
        //[Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            
            return View("~/Modules/Administration/Cryp/CrypIndex.cshtml");
        }
    }
}
