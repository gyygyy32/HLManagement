
namespace Serene3.Document.Pages
{
    using Serene3.Document.Entities;
    using Serene3.Modules.Document.Requirement;
    using Serenity;
    using Serenity.Data;
    using Serenity.Web;
    using System.Net;
    using System.Web.Mvc;

    [RoutePrefix("Document/Requirement"), Route("{action=index}/{id?}")]
    //[PageAuthorize(typeof(Entities.RequirementRow))]
    [PageAuthorize("RequirementPage")]
    public class RequirementController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Document/Requirement/RequirementIndex.cshtml");
        }

        public ActionResult Read(int? id)
        {

            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            else
            {
                var model = new RequirementReadModal();

                try
                {
                    model.AllRequirement = SqlConnections.NewFor<RequirementRow>().Single<RequirementRow>(RequirementRow.Fields.Id == (int)id);
                }
                catch
                {
                    return HttpNotFound();
                }


                return View("~/Modules/Document/Requirement/RequirementRead.cshtml", model);
            }
        }
    }
}