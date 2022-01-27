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
    /// Parameters regarding the occurrence and frequency of the coupon payments.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_search_data_coupon_occurrence")]
    public partial class DebtInstrumentNotationScreenerSearchDataCouponOccurrence : IEquatable<DebtInstrumentNotationScreenerSearchDataCouponOccurrence>, IValidatableObject
    {
        /// <summary>
        /// Defines Type
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum Never for value: never
            /// </summary>
            [EnumMember(Value = "never")]
            Never = 1,

            /// <summary>
            /// Enum Once for value: once
            /// </summary>
            [EnumMember(Value = "once")]
            Once = 2,

            /// <summary>
            /// Enum Repeated for value: repeated
            /// </summary>
            [EnumMember(Value = "repeated")]
            Repeated = 3

        }



        /// <summary>
        /// Occurrence type of the coupon payments.
        /// </summary>
        /// <value>Occurrence type of the coupon payments.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public List<TypeEnum> Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerSearchDataCouponOccurrence" /> class.
        /// </summary>
        /// <param name="type">Occurrence type of the coupon payments..</param>
        /// <param name="frequency">frequency.</param>
        public DebtInstrumentNotationScreenerSearchDataCouponOccurrence(List<TypeEnum> type = default(List<TypeEnum>), DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency frequency = default(DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency))
        {
            this.Type = type;
            this.Frequency = frequency;
        }

        /// <summary>
        /// Gets or Sets Frequency
        /// </summary>
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataCouponOccurrenceFrequency Frequency { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerSearchDataCouponOccurrence {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerSearchDataCouponOccurrence);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerSearchDataCouponOccurrence instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerSearchDataCouponOccurrence to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerSearchDataCouponOccurrence input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    this.Type.SequenceEqual(input.Type)
                ) && 
                (
                    this.Frequency == input.Frequency ||
                    (this.Frequency != null &&
                    this.Frequency.Equals(input.Frequency))
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
                if (this.Frequency != null)
                    hashCode = hashCode * 59 + this.Frequency.GetHashCode();
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