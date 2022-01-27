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
    /// Cash flow amount relative to the nominal value of the securitized derivative.
    /// </summary>
    [DataContract(Name = "inline_response_200_7_data_cashFlow_relative")]
    public partial class InlineResponse2007DataCashFlowRelative : IEquatable<InlineResponse2007DataCashFlowRelative>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2007DataCashFlowRelative" /> class.
        /// </summary>
        /// <param name="value">Well-defined ratio of the cash flow..</param>
        /// <param name="minimum">Minimum ratio of the cash flow..</param>
        /// <param name="maximum">Maximum ratio of the cash flow..</param>
        public InlineResponse2007DataCashFlowRelative(decimal value = default(decimal), decimal minimum = default(decimal), decimal maximum = default(decimal))
        {
            this.Value = value;
            this.Minimum = minimum;
            this.Maximum = maximum;
        }

        /// <summary>
        /// Well-defined ratio of the cash flow.
        /// </summary>
        /// <value>Well-defined ratio of the cash flow.</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Minimum ratio of the cash flow.
        /// </summary>
        /// <value>Minimum ratio of the cash flow.</value>
        [DataMember(Name = "minimum", EmitDefaultValue = false)]
        public decimal Minimum { get; set; }

        /// <summary>
        /// Maximum ratio of the cash flow.
        /// </summary>
        /// <value>Maximum ratio of the cash flow.</value>
        [DataMember(Name = "maximum", EmitDefaultValue = false)]
        public decimal Maximum { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2007DataCashFlowRelative {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Minimum: ").Append(Minimum).Append("\n");
            sb.Append("  Maximum: ").Append(Maximum).Append("\n");
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
            return this.Equals(input as InlineResponse2007DataCashFlowRelative);
        }

        /// <summary>
        /// Returns true if InlineResponse2007DataCashFlowRelative instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2007DataCashFlowRelative to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2007DataCashFlowRelative input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
                ) && 
                (
                    this.Minimum == input.Minimum ||
                    this.Minimum.Equals(input.Minimum)
                ) && 
                (
                    this.Maximum == input.Maximum ||
                    this.Maximum.Equals(input.Maximum)
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
                hashCode = hashCode * 59 + this.Minimum.GetHashCode();
                hashCode = hashCode * 59 + this.Maximum.GetHashCode();
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