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
    /// Details of the current coupon period.
    /// </summary>
    [DataContract(Name = "inline_response_200_3_instrument_coupon_currentInterestRate")]
    public partial class InlineResponse2003InstrumentCouponCurrentInterestRate : IEquatable<InlineResponse2003InstrumentCouponCurrentInterestRate>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2003InstrumentCouponCurrentInterestRate" /> class.
        /// </summary>
        /// <param name="type">type.</param>
        /// <param name="value">Value of the interest rate; annualized if the payment frequency is not \&quot;annually\&quot;. See endpoint &#x60;/instrument/coupon/keyData/get&#x60; for details regarding the current period..</param>
        public InlineResponse2003InstrumentCouponCurrentInterestRate(InlineResponse2003InstrumentCouponCurrentInterestRateType type = default(InlineResponse2003InstrumentCouponCurrentInterestRateType), decimal value = default(decimal))
        {
            this.Type = type;
            this.Value = value;
        }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public InlineResponse2003InstrumentCouponCurrentInterestRateType Type { get; set; }

        /// <summary>
        /// Value of the interest rate; annualized if the payment frequency is not \&quot;annually\&quot;. See endpoint &#x60;/instrument/coupon/keyData/get&#x60; for details regarding the current period.
        /// </summary>
        /// <value>Value of the interest rate; annualized if the payment frequency is not \&quot;annually\&quot;. See endpoint &#x60;/instrument/coupon/keyData/get&#x60; for details regarding the current period.</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2003InstrumentCouponCurrentInterestRate {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as InlineResponse2003InstrumentCouponCurrentInterestRate);
        }

        /// <summary>
        /// Returns true if InlineResponse2003InstrumentCouponCurrentInterestRate instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2003InstrumentCouponCurrentInterestRate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2003InstrumentCouponCurrentInterestRate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
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
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                hashCode = hashCode * 59 + this.Value.GetHashCode();
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