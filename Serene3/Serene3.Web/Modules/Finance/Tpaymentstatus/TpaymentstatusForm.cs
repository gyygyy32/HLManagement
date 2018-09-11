
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tpaymentstatus")]
    [BasedOnRow(typeof(Entities.TpaymentstatusRow), CheckNames = true)]
    public class TpaymentstatusForm
    {
        public String Paymentstatus { get; set; }
    }
}