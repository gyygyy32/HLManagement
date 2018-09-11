﻿
namespace Serene3.Finance.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Finance.Tcompany")]
    [BasedOnRow(typeof(Entities.TcompanyRow), CheckNames = true)]
    public class TcompanyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Company { get; set; }
    }
}