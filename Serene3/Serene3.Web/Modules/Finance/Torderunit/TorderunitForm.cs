
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Torderunit")]
    [BasedOnRow(typeof(Entities.TorderunitRow), CheckNames = true)]
    public class TorderunitForm
    {
        public String Orderunit { get; set; }
    }
}