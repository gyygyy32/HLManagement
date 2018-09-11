
namespace Serene3.Document.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serene3.Document.Entities;
    using Serene3.Document.Scripts;

    [ColumnsScript("Document.Requirement")]
    [BasedOnRow(typeof(Entities.RequirementRow), CheckNames = true)]
    public class RequirementColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId")]
        public Int32 Id { get; set; }
        public String Product { get; set; }
        [EditLink]
        public String Subject { get; set; }
       
        public String Customer { get; set; }
        //public String Contents { get; set; }
        public String Priority { get; set; }
        public String Developer { get; set; }
        public DateTime Starttime { get; set; }
        public DateTime Finishtime { get; set; }
        public String Status { get; set; }
        public String Attachments { get; set; }
    }
}