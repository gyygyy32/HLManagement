
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tcustomer")]
    [BasedOnRow(typeof(Entities.TcustomerRow), CheckNames = true)]
    public class TcustomerForm
    {
        public String Customer { get; set; }
    }
}