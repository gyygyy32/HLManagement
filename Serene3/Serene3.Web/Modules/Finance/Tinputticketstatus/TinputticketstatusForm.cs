
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tinputticketstatus")]
    [BasedOnRow(typeof(Entities.TinputticketstatusRow), CheckNames = true)]
    public class TinputticketstatusForm
    {
        public String Inputticketstatus { get; set; }
    }
}