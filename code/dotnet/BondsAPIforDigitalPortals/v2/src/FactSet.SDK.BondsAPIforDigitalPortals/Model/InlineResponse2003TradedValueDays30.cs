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
using OpenAPIDateConverter = FactSet.SDK.BondsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.BondsAPIforDigitalPortals.Model
{
    /// <summary>
    /// Cash flow for the time range 30 trading days.
    /// </summary>
    [DataContract(Name = "inline_response_200_3_tradedValue_days30")]
    public partial class InlineResponse2003TradedValueDays30 : IEquatable<InlineResponse2003TradedValueDays30>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2003TradedValueDays30" /> class.
        /// </summary>
        /// <param name="sum">Sum of the cash flow..</param>
        /// <param name="average">Average daily cash flow..</param>
        public InlineResponse2003TradedValueDays30(decimal sum = default(decimal), decimal average = default(decimal))
        {
            this.Sum = sum;
            this.Average = average;
        }

        /// <summary>
        /// Sum of the cash flow.
        /// </summary>
        /// <value>Sum of the cash flow.</value>
        [DataMember(Name = "sum", EmitDefaultValue = false)]
        public decimal Sum { get; set; }

        /// <summary>
        /// Average daily cash flow.
        /// </summary>
        /// <value>Average daily cash flow.</value>
        [DataMember(Name = "average", EmitDefaultValue = false)]
        public decimal Average { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2003TradedValueDays30 {\n");
            sb.Append("  Sum: ").Append(Sum).Append("\n");
            sb.Append("  Average: ").Append(Average).Append("\n");
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
            return this.Equals(input as InlineResponse2003TradedValueDays30);
        }

        /// <summary>
        /// Returns true if InlineResponse2003TradedValueDays30 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2003TradedValueDays30 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2003TradedValueDays30 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Sum == input.Sum ||
                    this.Sum.Equals(input.Sum)
                ) && 
                (
                    this.Average == input.Average ||
                    this.Average.Equals(input.Average)
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
                hashCode = hashCode * 59 + this.Sum.GetHashCode();
                hashCode = hashCode * 59 + this.Average.GetHashCode();
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