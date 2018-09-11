
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tsuppliercompany")]
    [BasedOnRow(typeof(Entities.TsuppliercompanyRow), CheckNames = true)]
    public class TsuppliercompanyForm
    {
        public String Suppliercompany { get; set; }
    }
}