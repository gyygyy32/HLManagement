using Serenity.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Serene3.Modules.Administration.Cryp
{
    
        public class CrypResquest : ServiceRequest
        {
            public string requestinfo { get; set; }
        }

        public class CrypResponse : ServiceResponse
        {
            public string responseinfo { get; set; }
        }
    
}