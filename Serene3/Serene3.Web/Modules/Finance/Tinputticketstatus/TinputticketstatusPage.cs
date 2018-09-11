﻿
namespace Serene3.Finance.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Finance/Tinputticketstatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TinputticketstatusRow))]
    public class TinputticketstatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Finance/Tinputticketstatus/TinputticketstatusIndex.cshtml");
        }
    }
}