
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tspecification")]
    [BasedOnRow(typeof(Entities.TspecificationRow), CheckNames = true)]
    public class TspecificationForm
    {
        public String Specification { get; set; }
    }
}