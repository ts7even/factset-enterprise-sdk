/*
 * FactSet Options API
 *
 * The Option Prices database provides pricing data such as mid bid-ask price, reference data (e.g., strike price), and risk measures (e.g., Greeks and implied volatility). Visit [Options Overview OA Page # 14925](https://my.apps.factset.com/oa/pages/14925) for details on database coverage. U.S. exchange-traded option bid and ask quotes are continuously updated throughout the day even when no trades have occurred on the option (zero volume). The end-of-day closing bid and ask quotes are always in line with the underlying closing price.  **Note** * Currently in Beta only **OPRA** exchanges are supported. 
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
using OpenAPIDateConverter = FactSet.SDK.FactSetOptions.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetOptions.Model
{
    /// <summary>
    /// Options Dates Response Fields
    /// </summary>
    [DataContract(Name = "optionsDates")]
    public partial class OptionsDates : IEquatable<OptionsDates>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptionsDates" /> class.
        /// </summary>
        /// <param name="expirationDate">The date on which an options contract is no longer valid and, therefore, ceases to exist in YYYY-MM-DD format..</param>
        /// <param name="firstAskDate">The date of first ask price for the option in YYYY-MM-DD format..</param>
        /// <param name="firstBidDate">The date of first bid price for the option in YYYY-MM-DD format..</param>
        /// <param name="firstSettlementDate">The date of first settlement price for the option in YYYY-MM-DD format..</param>
        /// <param name="firstTradeDate">First Trading Date of the Option in YYYY-MM-DD format..</param>
        /// <param name="lastAskDate">The date of last ask price for the option in YYYY-MM-DD format..</param>
        /// <param name="lastBidDate">The date of last bid price for the option in YYYY-MM-DD format..</param>
        /// <param name="lastSettlementDate">The date of last settlement price for the option in YYYY-MM-DD format..</param>
        /// <param name="lastTradeDate">Last Trading Date of the Option in YYYY-MM-DD format..</param>
        /// <param name="date">The date the data is as of in YYYY-MM-DD format..</param>
        /// <param name="fsymId">FactSet&#39;s Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options).</param>
        /// <param name="requestId">The requested identifier submitted in the query..</param>
        public OptionsDates(DateTime? expirationDate = default(DateTime?), DateTime? firstAskDate = default(DateTime?), DateTime? firstBidDate = default(DateTime?), DateTime? firstSettlementDate = default(DateTime?), DateTime? firstTradeDate = default(DateTime?), DateTime? lastAskDate = default(DateTime?), DateTime? lastBidDate = default(DateTime?), DateTime? lastSettlementDate = default(DateTime?), DateTime? lastTradeDate = default(DateTime?), DateTime? date = default(DateTime?), string fsymId = default(string), string requestId = default(string))
        {
            this.ExpirationDate = expirationDate;
            this.FirstAskDate = firstAskDate;
            this.FirstBidDate = firstBidDate;
            this.FirstSettlementDate = firstSettlementDate;
            this.FirstTradeDate = firstTradeDate;
            this.LastAskDate = lastAskDate;
            this.LastBidDate = lastBidDate;
            this.LastSettlementDate = lastSettlementDate;
            this.LastTradeDate = lastTradeDate;
            this.Date = date;
            this.FsymId = fsymId;
            this.RequestId = requestId;
        }

        /// <summary>
        /// The date on which an options contract is no longer valid and, therefore, ceases to exist in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date on which an options contract is no longer valid and, therefore, ceases to exist in YYYY-MM-DD format.</value>
        [DataMember(Name = "expirationDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? ExpirationDate { get; set; }

        /// <summary>
        /// The date of first ask price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of first ask price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "firstAskDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? FirstAskDate { get; set; }

        /// <summary>
        /// The date of first bid price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of first bid price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "firstBidDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? FirstBidDate { get; set; }

        /// <summary>
        /// The date of first settlement price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of first settlement price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "firstSettlementDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? FirstSettlementDate { get; set; }

        /// <summary>
        /// First Trading Date of the Option in YYYY-MM-DD format.
        /// </summary>
        /// <value>First Trading Date of the Option in YYYY-MM-DD format.</value>
        [DataMember(Name = "firstTradeDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? FirstTradeDate { get; set; }

        /// <summary>
        /// The date of last ask price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of last ask price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "lastAskDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? LastAskDate { get; set; }

        /// <summary>
        /// The date of last bid price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of last bid price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "lastBidDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? LastBidDate { get; set; }

        /// <summary>
        /// The date of last settlement price for the option in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of last settlement price for the option in YYYY-MM-DD format.</value>
        [DataMember(Name = "lastSettlementDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? LastSettlementDate { get; set; }

        /// <summary>
        /// Last Trading Date of the Option in YYYY-MM-DD format.
        /// </summary>
        /// <value>Last Trading Date of the Option in YYYY-MM-DD format.</value>
        [DataMember(Name = "lastTradeDate", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? LastTradeDate { get; set; }

        /// <summary>
        /// The date the data is as of in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date the data is as of in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? Date { get; set; }

        /// <summary>
        /// FactSet&#39;s Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)
        /// </summary>
        /// <value>FactSet&#39;s Option Symbol. For more detail, visit [OA 12636](https://my.apps.factset.com/oa/pages/12636#options)</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = true)]
        public string FsymId { get; set; }

        /// <summary>
        /// The requested identifier submitted in the query.
        /// </summary>
        /// <value>The requested identifier submitted in the query.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OptionsDates {\n");
            sb.Append("  ExpirationDate: ").Append(ExpirationDate).Append("\n");
            sb.Append("  FirstAskDate: ").Append(FirstAskDate).Append("\n");
            sb.Append("  FirstBidDate: ").Append(FirstBidDate).Append("\n");
            sb.Append("  FirstSettlementDate: ").Append(FirstSettlementDate).Append("\n");
            sb.Append("  FirstTradeDate: ").Append(FirstTradeDate).Append("\n");
            sb.Append("  LastAskDate: ").Append(LastAskDate).Append("\n");
            sb.Append("  LastBidDate: ").Append(LastBidDate).Append("\n");
            sb.Append("  LastSettlementDate: ").Append(LastSettlementDate).Append("\n");
            sb.Append("  LastTradeDate: ").Append(LastTradeDate).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
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
            return this.Equals(input as OptionsDates);
        }

        /// <summary>
        /// Returns true if OptionsDates instances are equal
        /// </summary>
        /// <param name="input">Instance of OptionsDates to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptionsDates input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ExpirationDate == input.ExpirationDate ||
                    (this.ExpirationDate != null &&
                    this.ExpirationDate.Equals(input.ExpirationDate))
                ) && 
                (
                    this.FirstAskDate == input.FirstAskDate ||
                    (this.FirstAskDate != null &&
                    this.FirstAskDate.Equals(input.FirstAskDate))
                ) && 
                (
                    this.FirstBidDate == input.FirstBidDate ||
                    (this.FirstBidDate != null &&
                    this.FirstBidDate.Equals(input.FirstBidDate))
                ) && 
                (
                    this.FirstSettlementDate == input.FirstSettlementDate ||
                    (this.FirstSettlementDate != null &&
                    this.FirstSettlementDate.Equals(input.FirstSettlementDate))
                ) && 
                (
                    this.FirstTradeDate == input.FirstTradeDate ||
                    (this.FirstTradeDate != null &&
                    this.FirstTradeDate.Equals(input.FirstTradeDate))
                ) && 
                (
                    this.LastAskDate == input.LastAskDate ||
                    (this.LastAskDate != null &&
                    this.LastAskDate.Equals(input.LastAskDate))
                ) && 
                (
                    this.LastBidDate == input.LastBidDate ||
                    (this.LastBidDate != null &&
                    this.LastBidDate.Equals(input.LastBidDate))
                ) && 
                (
                    this.LastSettlementDate == input.LastSettlementDate ||
                    (this.LastSettlementDate != null &&
                    this.LastSettlementDate.Equals(input.LastSettlementDate))
                ) && 
                (
                    this.LastTradeDate == input.LastTradeDate ||
                    (this.LastTradeDate != null &&
                    this.LastTradeDate.Equals(input.LastTradeDate))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
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
                if (this.ExpirationDate != null)
                {
                    hashCode = (hashCode * 59) + this.ExpirationDate.GetHashCode();
                }
                if (this.FirstAskDate != null)
                {
                    hashCode = (hashCode * 59) + this.FirstAskDate.GetHashCode();
                }
                if (this.FirstBidDate != null)
                {
                    hashCode = (hashCode * 59) + this.FirstBidDate.GetHashCode();
                }
                if (this.FirstSettlementDate != null)
                {
                    hashCode = (hashCode * 59) + this.FirstSettlementDate.GetHashCode();
                }
                if (this.FirstTradeDate != null)
                {
                    hashCode = (hashCode * 59) + this.FirstTradeDate.GetHashCode();
                }
                if (this.LastAskDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastAskDate.GetHashCode();
                }
                if (this.LastBidDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastBidDate.GetHashCode();
                }
                if (this.LastSettlementDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastSettlementDate.GetHashCode();
                }
                if (this.LastTradeDate != null)
                {
                    hashCode = (hashCode * 59) + this.LastTradeDate.GetHashCode();
                }
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
                }
                if (this.FsymId != null)
                {
                    hashCode = (hashCode * 59) + this.FsymId.GetHashCode();
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
