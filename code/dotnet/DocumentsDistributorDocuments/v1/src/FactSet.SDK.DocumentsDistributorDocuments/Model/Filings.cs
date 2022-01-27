/*
 * Documents Distributor - Documents API
 *
 * Documents APIs that provide filings such as Global Filings and XML files such as StreetAccount    Global Filings API provides the capability to search and download filings documents from various exchanges around the world. The API also provides relevant metadata such as document source, company identifiers and form type around each filings document. Filings providers currently include EDGAR and SYMEX WebDisclosure.      StreetAccount XML API provides access to historical StreetAccount (SA) news. SA provides a summary for various corporate and market news written by journalist with background in financial markets.    The API delivers SA stories in XML format based on user-specified date input parameters. When the API request is completed, output files will be made available back to the users through a secure URL. This API has three endpoints (1) Request Files (2) Check Status (3) Get Files.   Files delivered contain both metadata and content body in each file. This eliminates the need to make multiple requests through multiple services to get all the information.  
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = FactSet.SDK.DocumentsDistributorDocuments.Client.OpenAPIDateConverter;

namespace FactSet.SDK.DocumentsDistributorDocuments.Model
{
    /// <summary>
    /// Filings
    /// </summary>
    [DataContract(Name = "filings")]
    public partial class Filings : IEquatable<Filings>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Filings" /> class.
        /// </summary>
        /// <param name="fileName">Unique ID of the filings document..</param>
        /// <param name="headline">Headline of the filings document..</param>
        /// <param name="source">Source of the filings document..</param>
        /// <param name="publishDate">Date the filings document was made published..</param>
        /// <param name="companyName">Company name..</param>
        /// <param name="identifier">Company ticker..</param>
        /// <param name="fileSize">File size in KB..</param>
        /// <param name="fileFormat">File format of the filings document..</param>
        /// <param name="formType">Form type of the filings document, specific to the document source..</param>
        /// <param name="period">End date of the company&#39;s filing period..</param>
        /// <param name="url">Download link for the filings document..</param>
        public Filings(string fileName = default(string), string headline = default(string), string source = default(string), string publishDate = default(string), string companyName = default(string), string identifier = default(string), string fileSize = default(string), string fileFormat = default(string), string formType = default(string), string period = default(string), string url = default(string))
        {
            this.FileName = fileName;
            this.Headline = headline;
            this.Source = source;
            this.PublishDate = publishDate;
            this.CompanyName = companyName;
            this.Identifier = identifier;
            this.FileSize = fileSize;
            this.FileFormat = fileFormat;
            this.FormType = formType;
            this.Period = period;
            this.Url = url;
        }

        /// <summary>
        /// Unique ID of the filings document.
        /// </summary>
        /// <value>Unique ID of the filings document.</value>
        [DataMember(Name = "file_name", EmitDefaultValue = false)]
        public string FileName { get; set; }

        /// <summary>
        /// Headline of the filings document.
        /// </summary>
        /// <value>Headline of the filings document.</value>
        [DataMember(Name = "headline", EmitDefaultValue = false)]
        public string Headline { get; set; }

        /// <summary>
        /// Source of the filings document.
        /// </summary>
        /// <value>Source of the filings document.</value>
        [DataMember(Name = "source", EmitDefaultValue = false)]
        public string Source { get; set; }

        /// <summary>
        /// Date the filings document was made published.
        /// </summary>
        /// <value>Date the filings document was made published.</value>
        [DataMember(Name = "publishDate", EmitDefaultValue = false)]
        public string PublishDate { get; set; }

        /// <summary>
        /// Company name.
        /// </summary>
        /// <value>Company name.</value>
        [DataMember(Name = "companyName", EmitDefaultValue = false)]
        public string CompanyName { get; set; }

        /// <summary>
        /// Company ticker.
        /// </summary>
        /// <value>Company ticker.</value>
        [DataMember(Name = "identifier", EmitDefaultValue = false)]
        public string Identifier { get; set; }

        /// <summary>
        /// File size in KB.
        /// </summary>
        /// <value>File size in KB.</value>
        [DataMember(Name = "fileSize", EmitDefaultValue = false)]
        public string FileSize { get; set; }

        /// <summary>
        /// File format of the filings document.
        /// </summary>
        /// <value>File format of the filings document.</value>
        [DataMember(Name = "fileFormat", EmitDefaultValue = false)]
        public string FileFormat { get; set; }

        /// <summary>
        /// Form type of the filings document, specific to the document source.
        /// </summary>
        /// <value>Form type of the filings document, specific to the document source.</value>
        [DataMember(Name = "formType", EmitDefaultValue = false)]
        public string FormType { get; set; }

        /// <summary>
        /// End date of the company&#39;s filing period.
        /// </summary>
        /// <value>End date of the company&#39;s filing period.</value>
        [DataMember(Name = "period", EmitDefaultValue = false)]
        public string Period { get; set; }

        /// <summary>
        /// Download link for the filings document.
        /// </summary>
        /// <value>Download link for the filings document.</value>
        [DataMember(Name = "url", EmitDefaultValue = false)]
        public string Url { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Filings {\n");
            sb.Append("  FileName: ").Append(FileName).Append("\n");
            sb.Append("  Headline: ").Append(Headline).Append("\n");
            sb.Append("  Source: ").Append(Source).Append("\n");
            sb.Append("  PublishDate: ").Append(PublishDate).Append("\n");
            sb.Append("  CompanyName: ").Append(CompanyName).Append("\n");
            sb.Append("  Identifier: ").Append(Identifier).Append("\n");
            sb.Append("  FileSize: ").Append(FileSize).Append("\n");
            sb.Append("  FileFormat: ").Append(FileFormat).Append("\n");
            sb.Append("  FormType: ").Append(FormType).Append("\n");
            sb.Append("  Period: ").Append(Period).Append("\n");
            sb.Append("  Url: ").Append(Url).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as Filings);
        }

        /// <summary>
        /// Returns true if Filings instances are equal
        /// </summary>
        /// <param name="input">Instance of Filings to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Filings input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FileName == input.FileName ||
                    (this.FileName != null &&
                    this.FileName.Equals(input.FileName))
                ) && 
                (
                    this.Headline == input.Headline ||
                    (this.Headline != null &&
                    this.Headline.Equals(input.Headline))
                ) && 
                (
                    this.Source == input.Source ||
                    (this.Source != null &&
                    this.Source.Equals(input.Source))
                ) && 
                (
                    this.PublishDate == input.PublishDate ||
                    (this.PublishDate != null &&
                    this.PublishDate.Equals(input.PublishDate))
                ) && 
                (
                    this.CompanyName == input.CompanyName ||
                    (this.CompanyName != null &&
                    this.CompanyName.Equals(input.CompanyName))
                ) && 
                (
                    this.Identifier == input.Identifier ||
                    (this.Identifier != null &&
                    this.Identifier.Equals(input.Identifier))
                ) && 
                (
                    this.FileSize == input.FileSize ||
                    (this.FileSize != null &&
                    this.FileSize.Equals(input.FileSize))
                ) && 
                (
                    this.FileFormat == input.FileFormat ||
                    (this.FileFormat != null &&
                    this.FileFormat.Equals(input.FileFormat))
                ) && 
                (
                    this.FormType == input.FormType ||
                    (this.FormType != null &&
                    this.FormType.Equals(input.FormType))
                ) && 
                (
                    this.Period == input.Period ||
                    (this.Period != null &&
                    this.Period.Equals(input.Period))
                ) && 
                (
                    this.Url == input.Url ||
                    (this.Url != null &&
                    this.Url.Equals(input.Url))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.FileName != null)
                    hashCode = hashCode * 59 + this.FileName.GetHashCode();
                if (this.Headline != null)
                    hashCode = hashCode * 59 + this.Headline.GetHashCode();
                if (this.Source != null)
                    hashCode = hashCode * 59 + this.Source.GetHashCode();
                if (this.PublishDate != null)
                    hashCode = hashCode * 59 + this.PublishDate.GetHashCode();
                if (this.CompanyName != null)
                    hashCode = hashCode * 59 + this.CompanyName.GetHashCode();
                if (this.Identifier != null)
                    hashCode = hashCode * 59 + this.Identifier.GetHashCode();
                if (this.FileSize != null)
                    hashCode = hashCode * 59 + this.FileSize.GetHashCode();
                if (this.FileFormat != null)
                    hashCode = hashCode * 59 + this.FileFormat.GetHashCode();
                if (this.FormType != null)
                    hashCode = hashCode * 59 + this.FormType.GetHashCode();
                if (this.Period != null)
                    hashCode = hashCode * 59 + this.Period.GetHashCode();
                if (this.Url != null)
                    hashCode = hashCode * 59 + this.Url.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        public IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}