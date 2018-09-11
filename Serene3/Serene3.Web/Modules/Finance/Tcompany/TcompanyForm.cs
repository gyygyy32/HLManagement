
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tcompany")]
    [BasedOnRow(typeof(Entities.TcompanyRow), CheckNames = true)]
    public class TcompanyForm
    {
        public String Company { get; set; }
    }
}