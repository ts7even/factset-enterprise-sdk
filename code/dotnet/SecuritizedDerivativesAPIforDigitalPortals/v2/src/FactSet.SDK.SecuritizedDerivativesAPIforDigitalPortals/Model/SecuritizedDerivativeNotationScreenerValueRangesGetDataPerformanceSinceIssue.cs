/*
 * Prime Developer Trial
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
using OpenAPIDateConverter = FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Relative performance since issue. That is the difference of a notation&#39;s most recent price against the price on the issue date, relative to the price on the issue date.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_valueRanges_get_data_performance_sinceIssue")]
    public partial class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue : IEquatable<SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue" /> class.
        /// </summary>
        /// <param name="ask">ask.</param>
        /// <param name="bid">bid.</param>
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueAsk ask = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueAsk), SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueBid bid = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueBid))
        {
            this.Ask = ask;
            this.Bid = bid;
        }

        /// <summary>
        /// Gets or Sets Ask
        /// </summary>
        [DataMember(Name = "ask", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueAsk Ask { get; set; }

        /// <summary>
        /// Gets or Sets Bid
        /// </summary>
        [DataMember(Name = "bid", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssueBid Bid { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue {\n");
            sb.Append("  Ask: ").Append(Ask).Append("\n");
            sb.Append("  Bid: ").Append(Bid).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Ask == input.Ask ||
                    (this.Ask != null &&
                    this.Ask.Equals(input.Ask))
                ) && 
                (
                    this.Bid == input.Bid ||
                    (this.Bid != null &&
                    this.Bid.Equals(input.Bid))
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
                if (this.Ask != null)
                    hashCode = hashCode * 59 + this.Ask.GetHashCode();
                if (this.Bid != null)
                    hashCode = hashCode * 59 + this.Bid.GetHashCode();
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