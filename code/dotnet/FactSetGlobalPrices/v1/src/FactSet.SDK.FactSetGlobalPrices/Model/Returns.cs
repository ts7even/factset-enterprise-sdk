/*
 * FactSet Global Prices API
 *
 * The FactSet Global Prices API provides end of day market pricing content using cloud and microservices technology, encompassing both pricing as well as corporate actions and events data.</p> 
 *
 * The version of the OpenAPI document: 1.2.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetGlobalPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetGlobalPrices.Model
{
    /// <summary>
    /// Returns
    /// </summary>
    [DataContract(Name = "returns")]
    public partial class Returns : IEquatable<Returns>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Returns" /> class.
        /// </summary>
        /// <param name="fsymId">FactSet Permanent Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R) or a -L Suffix (XXXXXX-L)..</param>
        /// <param name="totalReturn">Returns the data for the given input parameters..</param>
        /// <param name="date">End date of the return. Date in YYYY-MM-DD format. Depending on Frequency and Calendar settings, this could represent the entire return period requested..</param>
        /// <param name="currency">Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470)..</param>
        /// <param name="requestId">Identifier that was used for the request..</param>
        public Returns(string fsymId = default(string), double totalReturn = default(double), DateTime date = default(DateTime), string currency = default(string), string requestId = default(string))
        {
            this.FsymId = fsymId;
            this.TotalReturn = totalReturn;
            this.Date = date;
            this.Currency = currency;
            this.RequestId = requestId;
        }

        /// <summary>
        /// FactSet Permanent Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R) or a -L Suffix (XXXXXX-L).
        /// </summary>
        /// <value>FactSet Permanent Identifier. Six alpha-numeric characters, excluding vowels, with an -R suffix (XXXXXX-R) or a -L Suffix (XXXXXX-L).</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = false)]
        public string FsymId { get; set; }

        /// <summary>
        /// Returns the data for the given input parameters.
        /// </summary>
        /// <value>Returns the data for the given input parameters.</value>
        [DataMember(Name = "totalReturn", EmitDefaultValue = false)]
        public double TotalReturn { get; set; }

        /// <summary>
        /// End date of the return. Date in YYYY-MM-DD format. Depending on Frequency and Calendar settings, this could represent the entire return period requested.
        /// </summary>
        /// <value>End date of the return. Date in YYYY-MM-DD format. Depending on Frequency and Calendar settings, this could represent the entire return period requested.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).
        /// </summary>
        /// <value>Currency ISO code. For more details, visit [Online Assistant Page #1470](https://oa.apps.factset.com/pages/1470).</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Identifier that was used for the request.
        /// </summary>
        /// <value>Identifier that was used for the request.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Returns {\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  TotalReturn: ").Append(TotalReturn).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
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
            return this.Equals(input as Returns);
        }

        /// <summary>
        /// Returns true if Returns instances are equal
        /// </summary>
        /// <param name="input">Instance of Returns to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Returns input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.TotalReturn == input.TotalReturn ||
                    this.TotalReturn.Equals(input.TotalReturn)
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
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
                if (this.FsymId != null)
                {
                    hashCode = (hashCode * 59) + this.FsymId.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.TotalReturn.GetHashCode();
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
                }
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.RequestId != null)
                {
                    hashCode = (hashCode * 59) + this.RequestId.GetHashCode();
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