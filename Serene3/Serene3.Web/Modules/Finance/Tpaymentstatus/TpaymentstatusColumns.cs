
namespace Serene3.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Tpaymentstatus")]
    [BasedOnRow(typeof(Entities.TpaymentstatusRow), CheckNames = true)]
    public class TpaymentstatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Paymentstatus { get; set; }
    }
}