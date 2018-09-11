
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tbookingunit")]
    [BasedOnRow(typeof(Entities.TbookingunitRow), CheckNames = true)]
    public class TbookingunitForm
    {
        public String Bookingunit { get; set; }
    }
}