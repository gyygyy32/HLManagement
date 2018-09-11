
namespace Serene3.Finance.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Finance.Texpresstype")]
    [BasedOnRow(typeof(Entities.TexpresstypeRow), CheckNames = true)]
    public class TexpresstypeForm
    {
        public String Expresstype { get; set; }
    }
}