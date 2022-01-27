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
    /// Parameters regarding the interest rate.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_search_data_coupon")]
    public partial class DebtInstrumentNotationScreenerSearchDataCoupon : IEquatable<DebtInstrumentNotationScreenerSearchDataCoupon>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerSearchDataCoupon" /> class.
        /// </summary>
        /// <param name="occurrence">occurrence.</param>
        /// <param name="currentInterestRate">currentInterestRate.</param>
        public DebtInstrumentNotationScreenerSearchDataCoupon(DebtInstrumentNotationScreenerSearchDataCouponOccurrence occurrence = default(DebtInstrumentNotationScreenerSearchDataCouponOccurrence), DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate currentInterestRate = default(DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate))
        {
            this.Occurrence = occurrence;
            this.CurrentInterestRate = currentInterestRate;
        }

        /// <summary>
        /// Gets or Sets Occurrence
        /// </summary>
        [DataMember(Name = "occurrence", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataCouponOccurrence Occurrence { get; set; }

        /// <summary>
        /// Gets or Sets CurrentInterestRate
        /// </summary>
        [DataMember(Name = "currentInterestRate", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataCouponCurrentInterestRate CurrentInterestRate { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerSearchDataCoupon {\n");
            sb.Append("  Occurrence: ").Append(Occurrence).Append("\n");
            sb.Append("  CurrentInterestRate: ").Append(CurrentInterestRate).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerSearchDataCoupon);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerSearchDataCoupon instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerSearchDataCoupon to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerSearchDataCoupon input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Occurrence == input.Occurrence ||
                    (this.Occurrence != null &&
                    this.Occurrence.Equals(input.Occurrence))
                ) && 
                (
                    this.CurrentInterestRate == input.CurrentInterestRate ||
                    (this.CurrentInterestRate != null &&
                    this.CurrentInterestRate.Equals(input.CurrentInterestRate))
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
                if (this.Occurrence != null)
                    hashCode = hashCode * 59 + this.Occurrence.GetHashCode();
                if (this.CurrentInterestRate != null)
                    hashCode = hashCode * 59 + this.CurrentInterestRate.GetHashCode();
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