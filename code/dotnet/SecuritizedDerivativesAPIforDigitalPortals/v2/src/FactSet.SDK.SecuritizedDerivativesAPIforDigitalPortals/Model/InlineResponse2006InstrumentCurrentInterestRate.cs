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
    /// Interest rate of the current coupon period.
    /// </summary>
    [DataContract(Name = "inline_response_200_6_instrument_currentInterestRate")]
    public partial class InlineResponse2006InstrumentCurrentInterestRate : IEquatable<InlineResponse2006InstrumentCurrentInterestRate>, IValidatableObject
    {
        /// <summary>
        /// Type of the interest rate.
        /// </summary>
        /// <value>Type of the interest rate.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum Fixed for value: fixed
            /// </summary>
            [EnumMember(Value = "fixed")]
            Fixed = 1,

            /// <summary>
            /// Enum Variable for value: variable
            /// </summary>
            [EnumMember(Value = "variable")]
            Variable = 2

        }


        /// <summary>
        /// Type of the interest rate.
        /// </summary>
        /// <value>Type of the interest rate.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006InstrumentCurrentInterestRate" /> class.
        /// </summary>
        /// <param name="type">Type of the interest rate..</param>
        /// <param name="value">Interest rate of the current coupon period. For coupon periods different than one year, the value is annualized. Not available for securitized derivatives with a current interest rate type other than &#x60;fixed&#x60;..</param>
        public InlineResponse2006InstrumentCurrentInterestRate(TypeEnum? type = default(TypeEnum?), decimal value = default(decimal))
        {
            this.Type = type;
            this.Value = value;
        }

        /// <summary>
        /// Interest rate of the current coupon period. For coupon periods different than one year, the value is annualized. Not available for securitized derivatives with a current interest rate type other than &#x60;fixed&#x60;.
        /// </summary>
        /// <value>Interest rate of the current coupon period. For coupon periods different than one year, the value is annualized. Not available for securitized derivatives with a current interest rate type other than &#x60;fixed&#x60;.</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2006InstrumentCurrentInterestRate {\n");
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
            return this.Equals(input as InlineResponse2006InstrumentCurrentInterestRate);
        }

        /// <summary>
        /// Returns true if InlineResponse2006InstrumentCurrentInterestRate instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006InstrumentCurrentInterestRate to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006InstrumentCurrentInterestRate input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
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