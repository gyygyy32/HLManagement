
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tproducttype")]
    [BasedOnRow(typeof(Entities.TproducttypeRow), CheckNames = true)]
    public class TproducttypeForm
    {
        public String Producttype { get; set; }
    }
}