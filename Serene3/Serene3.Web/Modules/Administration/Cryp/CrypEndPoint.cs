using Serenity.Data;
using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Serene3.Modules.Administration.Cryp
{
    [RoutePrefix("Services/Chart/ProductionMonthlyMonitoring"), Route("{action}")]
    [ConnectionKey("MSS1")]
    public class CrypController: ServiceEndpoint
    {
        public CrypResponse Encrypt(IDbConnection conn, CrypResquest resquest)
        {
            string encryptinfo = resquest.requestinfo;
            string key = "7KNBVD8";//计算机名
            


            return new CrypResponse();
        }

    }
}