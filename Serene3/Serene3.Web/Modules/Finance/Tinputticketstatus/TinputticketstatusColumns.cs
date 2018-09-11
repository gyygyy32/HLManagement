
namespace Serene3.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Tinputticketstatus")]
    [BasedOnRow(typeof(Entities.TinputticketstatusRow), CheckNames = true)]
    public class TinputticketstatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Inputticketstatus { get; set; }
    }
}