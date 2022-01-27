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
    /// SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_valueRanges_get_data_singleBarriers")]
    public partial class SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers : IEquatable<SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers>, IValidatableObject
    {
        /// <summary>
        /// The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.
        /// </summary>
        /// <value>The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum Strike for value: strike
            /// </summary>
            [EnumMember(Value = "strike")]
            Strike = 1,

            /// <summary>
            /// Enum BonusLevel for value: bonusLevel
            /// </summary>
            [EnumMember(Value = "bonusLevel")]
            BonusLevel = 2,

            /// <summary>
            /// Enum Cap for value: cap
            /// </summary>
            [EnumMember(Value = "cap")]
            Cap = 3,

            /// <summary>
            /// Enum KnockOut for value: knockOut
            /// </summary>
            [EnumMember(Value = "knockOut")]
            KnockOut = 4,

            /// <summary>
            /// Enum KnockIn for value: knockIn
            /// </summary>
            [EnumMember(Value = "knockIn")]
            KnockIn = 5,

            /// <summary>
            /// Enum LockOut for value: lockOut
            /// </summary>
            [EnumMember(Value = "lockOut")]
            LockOut = 6,

            /// <summary>
            /// Enum LockIn for value: lockIn
            /// </summary>
            [EnumMember(Value = "lockIn")]
            LockIn = 7,

            /// <summary>
            /// Enum CapitalGuarantee for value: capitalGuarantee
            /// </summary>
            [EnumMember(Value = "capitalGuarantee")]
            CapitalGuarantee = 8,

            /// <summary>
            /// Enum CouponTriggerLevel for value: couponTriggerLevel
            /// </summary>
            [EnumMember(Value = "couponTriggerLevel")]
            CouponTriggerLevel = 9

        }


        /// <summary>
        /// The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.
        /// </summary>
        /// <value>The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers" /> class.
        /// </summary>
        /// <param name="type">The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter..</param>
        /// <param name="observation">observation.</param>
        /// <param name="level">level.</param>
        /// <param name="distance">distance.</param>
        /// <param name="breach">breach.</param>
        /// <param name="cashFlow">cashFlow.</param>
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers(TypeEnum? type = default(TypeEnum?), SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation observation = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation), SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel level = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel), SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance distance = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance), SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach breach = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach), SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow cashFlow = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow))
        {
            this.Type = type;
            this.Observation = observation;
            this.Level = level;
            this.Distance = distance;
            this.Breach = breach;
            this.CashFlow = cashFlow;
        }

        /// <summary>
        /// Gets or Sets Observation
        /// </summary>
        [DataMember(Name = "observation", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation Observation { get; set; }

        /// <summary>
        /// Gets or Sets Level
        /// </summary>
        [DataMember(Name = "level", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel Level { get; set; }

        /// <summary>
        /// Gets or Sets Distance
        /// </summary>
        [DataMember(Name = "distance", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance Distance { get; set; }

        /// <summary>
        /// Gets or Sets Breach
        /// </summary>
        [DataMember(Name = "breach", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach Breach { get; set; }

        /// <summary>
        /// Gets or Sets CashFlow
        /// </summary>
        [DataMember(Name = "cashFlow", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow CashFlow { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Observation: ").Append(Observation).Append("\n");
            sb.Append("  Level: ").Append(Level).Append("\n");
            sb.Append("  Distance: ").Append(Distance).Append("\n");
            sb.Append("  Breach: ").Append(Breach).Append("\n");
            sb.Append("  CashFlow: ").Append(CashFlow).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Observation == input.Observation ||
                    (this.Observation != null &&
                    this.Observation.Equals(input.Observation))
                ) && 
                (
                    this.Level == input.Level ||
                    (this.Level != null &&
                    this.Level.Equals(input.Level))
                ) && 
                (
                    this.Distance == input.Distance ||
                    (this.Distance != null &&
                    this.Distance.Equals(input.Distance))
                ) && 
                (
                    this.Breach == input.Breach ||
                    (this.Breach != null &&
                    this.Breach.Equals(input.Breach))
                ) && 
                (
                    this.CashFlow == input.CashFlow ||
                    (this.CashFlow != null &&
                    this.CashFlow.Equals(input.CashFlow))
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
                if (this.Observation != null)
                    hashCode = hashCode * 59 + this.Observation.GetHashCode();
                if (this.Level != null)
                    hashCode = hashCode * 59 + this.Level.GetHashCode();
                if (this.Distance != null)
                    hashCode = hashCode * 59 + this.Distance.GetHashCode();
                if (this.Breach != null)
                    hashCode = hashCode * 59 + this.Breach.GetHashCode();
                if (this.CashFlow != null)
                    hashCode = hashCode * 59 + this.CashFlow.GetHashCode();
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