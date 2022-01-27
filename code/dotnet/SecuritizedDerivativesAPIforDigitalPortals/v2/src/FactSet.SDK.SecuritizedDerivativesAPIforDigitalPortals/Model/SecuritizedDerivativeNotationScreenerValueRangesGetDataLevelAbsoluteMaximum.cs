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
    /// The maximum of the range, or &#x60;null&#x60; to indicate that there is no maximum.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_valueRanges_get_data_level_absolute_maximum")]
    public partial class SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum : IEquatable<SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum" /> class.
        /// </summary>
        /// <param name="value">The maximum value. (required).</param>
        /// <param name="inclusive">Indicates whether the maximum value is included in the range or not. (default to true).</param>
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum(decimal value = default(decimal), bool inclusive = true)
        {
            this.Value = value;
            this.Inclusive = inclusive;
        }

        /// <summary>
        /// The maximum value.
        /// </summary>
        /// <value>The maximum value.</value>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Indicates whether the maximum value is included in the range or not.
        /// </summary>
        /// <value>Indicates whether the maximum value is included in the range or not.</value>
        [DataMember(Name = "inclusive", EmitDefaultValue = true)]
        public bool Inclusive { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Inclusive: ").Append(Inclusive).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsoluteMaximum input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
                ) && 
                (
                    this.Inclusive == input.Inclusive ||
                    this.Inclusive.Equals(input.Inclusive)
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
                hashCode = hashCode * 59 + this.Value.GetHashCode();
                hashCode = hashCode * 59 + this.Inclusive.GetHashCode();
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