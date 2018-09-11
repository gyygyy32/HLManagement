
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Tcollectionstatus")]
    [BasedOnRow(typeof(Entities.TcollectionstatusRow), CheckNames = true)]
    public class TcollectionstatusForm
    {
        public String Collectionstatus { get; set; }
    }
}