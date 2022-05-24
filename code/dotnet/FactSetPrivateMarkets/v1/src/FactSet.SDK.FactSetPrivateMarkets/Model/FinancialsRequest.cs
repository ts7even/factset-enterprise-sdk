/*
 * FactSet Private Markets API
 *
 * FactSet Private Markets API encompasses Private Company Financials data to start. Private Company firmographics can be found in the FactSet Entity API. The future plans of this service will include additional Private Markets data, such as Private Equity/Venture Capital. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetPrivateMarkets.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetPrivateMarkets.Model
{
    /// <summary>
    /// Entity Reference Request Body
    /// </summary>
    [DataContract(Name = "financialsRequest")]
    public partial class FinancialsRequest : IEquatable<FinancialsRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FinancialsRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected FinancialsRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="FinancialsRequest" /> class.
        /// </summary>
        /// <param name="ids">Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input.  (required).</param>
        /// <param name="fields">Private Markets Financials Fields. .</param>
        /// <param name="startDate">The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (required).</param>
        /// <param name="endDate">The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint.  (required).</param>
        public FinancialsRequest(List<string> ids = default(List<string>), List<string> fields = default(List<string>), string startDate = default(string), string endDate = default(string))
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for FinancialsRequest and cannot be null");
            }
            this.Ids = ids;
            // to ensure "startDate" is required (not null)
            if (startDate == null) {
                throw new ArgumentNullException("startDate is a required property for FinancialsRequest and cannot be null");
            }
            this.StartDate = startDate;
            // to ensure "endDate" is required (not null)
            if (endDate == null) {
                throw new ArgumentNullException("endDate is a required property for FinancialsRequest and cannot be null");
            }
            this.EndDate = endDate;
            this.Fields = fields;
        }

        /// <summary>
        /// Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. 
        /// </summary>
        /// <value>Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input. </value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// Private Markets Financials Fields. 
        /// </summary>
        /// <value>Private Markets Financials Fields. </value>
        [DataMember(Name = "fields", EmitDefaultValue = false)]
        public List<string> Fields { get; set; }

        /// <summary>
        /// The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>The start date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "startDate", IsRequired = true, EmitDefaultValue = false)]
        public string StartDate { get; set; }

        /// <summary>
        /// The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>The end date requested for a given date range in **YYYY-MM-DD** format. If left blank, the API will default to previous close. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "endDate", IsRequired = true, EmitDefaultValue = false)]
        public string EndDate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FinancialsRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Fields: ").Append(Fields).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
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
            return this.Equals(input as FinancialsRequest);
        }

        /// <summary>
        /// Returns true if FinancialsRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of FinancialsRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FinancialsRequest input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
                ) && 
                (
                    this.Fields == input.Fields ||
                    this.Fields != null &&
                    input.Fields != null &&
                    this.Fields.SequenceEqual(input.Fields)
                ) && 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
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
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
                }
                if (this.Fields != null)
                {
                    hashCode = (hashCode * 59) + this.Fields.GetHashCode();
                }
                if (this.StartDate != null)
                {
                    hashCode = (hashCode * 59) + this.StartDate.GetHashCode();
                }
                if (this.EndDate != null)
                {
                    hashCode = (hashCode * 59) + this.EndDate.GetHashCode();
                }
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