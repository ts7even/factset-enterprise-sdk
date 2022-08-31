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
    /// Chains
    /// </summary>
    [DataContract(Name = "chains")]
    public partial class Chains : IEquatable<Chains>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Chains" /> class.
        /// </summary>
        /// <param name="fsymId">FactSet&#39;s Security Permanent Identifier in XXXXXX-S format for the underlying security requested..</param>
        /// <param name="optionId">The option id, in the format requested via &#x60;idType&#x60; parameter..</param>
        /// <param name="idType">The type of id requested in the query. This is a straight pass-through value..</param>
        /// <param name="date">The date the data is as of in YYYY-MM-DD format..</param>
        /// <param name="requestId">The inputed value for the id parameter..</param>
        public Chains(string fsymId = default(string), string optionId = default(string), string idType = default(string), DateTime? date = default(DateTime?), string requestId = default(string))
        {
            this.FsymId = fsymId;
            this.OptionId = optionId;
            this.IdType = idType;
            this.Date = date;
            this.RequestId = requestId;
        }

        /// <summary>
        /// FactSet&#39;s Security Permanent Identifier in XXXXXX-S format for the underlying security requested.
        /// </summary>
        /// <value>FactSet&#39;s Security Permanent Identifier in XXXXXX-S format for the underlying security requested.</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = true)]
        public string FsymId { get; set; }

        /// <summary>
        /// The option id, in the format requested via &#x60;idType&#x60; parameter.
        /// </summary>
        /// <value>The option id, in the format requested via &#x60;idType&#x60; parameter.</value>
        [DataMember(Name = "optionId", EmitDefaultValue = true)]
        public string OptionId { get; set; }

        /// <summary>
        /// The type of id requested in the query. This is a straight pass-through value.
        /// </summary>
        /// <value>The type of id requested in the query. This is a straight pass-through value.</value>
        [DataMember(Name = "idType", EmitDefaultValue = true)]
        public string IdType { get; set; }

        /// <summary>
        /// The date the data is as of in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date the data is as of in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = true)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime? Date { get; set; }

        /// <summary>
        /// The inputed value for the id parameter.
        /// </summary>
        /// <value>The inputed value for the id parameter.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Chains {\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  OptionId: ").Append(OptionId).Append("\n");
            sb.Append("  IdType: ").Append(IdType).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
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
            return this.Equals(input as Chains);
        }

        /// <summary>
        /// Returns true if Chains instances are equal
        /// </summary>
        /// <param name="input">Instance of Chains to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Chains input)
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
                    this.OptionId == input.OptionId ||
                    (this.OptionId != null &&
                    this.OptionId.Equals(input.OptionId))
                ) && 
                (
                    this.IdType == input.IdType ||
                    (this.IdType != null &&
                    this.IdType.Equals(input.IdType))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
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
                if (this.OptionId != null)
                {
                    hashCode = (hashCode * 59) + this.OptionId.GetHashCode();
                }
                if (this.IdType != null)
                {
                    hashCode = (hashCode * 59) + this.IdType.GetHashCode();
                }
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
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
