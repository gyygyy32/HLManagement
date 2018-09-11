
namespace Serene3.Document.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Document.Requirement")]
    [BasedOnRow(typeof(Entities.RequirementRow), CheckNames = true)]
    public class RequirementForm
    {
        public String ProductID { get; set; }
        public String Subject { get; set; }
        public Int32 CustomerID { get; set; }
        [HtmlContentEditor(Rows = 10)]
        public String Contents { get; set; }
        public String Priority { get; set; }
        public String Developer { get; set; }
        public DateTime Starttime { get; set; }
        public DateTime Finishtime { get; set; }
        public Int32 StatusID { get; set; }
        public String Attachments { get; set; }
    }
}