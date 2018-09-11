
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tticketstatus")]
    [BasedOnRow(typeof(Entities.TticketstatusRow), CheckNames = true)]
    public class TticketstatusForm
    {
        public String Ticketstatus { get; set; }
    }
}