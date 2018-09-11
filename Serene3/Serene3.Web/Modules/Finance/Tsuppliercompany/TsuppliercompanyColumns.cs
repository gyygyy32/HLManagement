
namespace Serene3.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Tsuppliercompany")]
    [BasedOnRow(typeof(Entities.TsuppliercompanyRow), CheckNames = true)]
    public class TsuppliercompanyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Suppliercompany { get; set; }
    }
}