/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OpenRisk.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OpenRisk.Model
{
    /// <summary>
    /// Additional user-defined calculation input values. For example, some may be required for some Risk-Based Performance Attribution (RBPA) stats, such as &#39;ResidualFactorReturnsCSR&#39; and &#39;DeannualizedActiveFactorRisk&#39;.
    /// </summary>
    [DataContract(Name = "AdditionalCalculationInputs")]
    public partial class AdditionalCalculationInputs : IEquatable<AdditionalCalculationInputs>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AdditionalCalculationInputs" /> class.
        /// </summary>
        /// <param name="marketExcess">marketExcess.</param>
        /// <param name="calculationPeriodsPerYear">Deannualization factor for certain RBPA risk statistics which should match that of desired calculation frequency. Examples: If the risk model is monthly or monthly factor returns are being used, this should be 12. If the risk model is daily, select desired integer such as 365 or 252..</param>
        public AdditionalCalculationInputs(AdditionalCalculationInputsMarketExcess marketExcess = default(AdditionalCalculationInputsMarketExcess), int calculationPeriodsPerYear = default(int))
        {
            this.MarketExcess = marketExcess;
            this.CalculationPeriodsPerYear = calculationPeriodsPerYear;
        }

        /// <summary>
        /// Gets or Sets MarketExcess
        /// </summary>
        [DataMember(Name = "marketExcess", EmitDefaultValue = false)]
        public AdditionalCalculationInputsMarketExcess MarketExcess { get; set; }

        /// <summary>
        /// Deannualization factor for certain RBPA risk statistics which should match that of desired calculation frequency. Examples: If the risk model is monthly or monthly factor returns are being used, this should be 12. If the risk model is daily, select desired integer such as 365 or 252.
        /// </summary>
        /// <value>Deannualization factor for certain RBPA risk statistics which should match that of desired calculation frequency. Examples: If the risk model is monthly or monthly factor returns are being used, this should be 12. If the risk model is daily, select desired integer such as 365 or 252.</value>
        [DataMember(Name = "calculationPeriodsPerYear", EmitDefaultValue = false)]
        public int CalculationPeriodsPerYear { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AdditionalCalculationInputs {\n");
            sb.Append("  MarketExcess: ").Append(MarketExcess).Append("\n");
            sb.Append("  CalculationPeriodsPerYear: ").Append(CalculationPeriodsPerYear).Append("\n");
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
            return this.Equals(input as AdditionalCalculationInputs);
        }

        /// <summary>
        /// Returns true if AdditionalCalculationInputs instances are equal
        /// </summary>
        /// <param name="input">Instance of AdditionalCalculationInputs to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AdditionalCalculationInputs input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.MarketExcess == input.MarketExcess ||
                    (this.MarketExcess != null &&
                    this.MarketExcess.Equals(input.MarketExcess))
                ) && 
                (
                    this.CalculationPeriodsPerYear == input.CalculationPeriodsPerYear ||
                    this.CalculationPeriodsPerYear.Equals(input.CalculationPeriodsPerYear)
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
                if (this.MarketExcess != null)
                {
                    hashCode = (hashCode * 59) + this.MarketExcess.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.CalculationPeriodsPerYear.GetHashCode();
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
            // CalculationPeriodsPerYear (int) maximum
            if (this.CalculationPeriodsPerYear > (int)365)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for CalculationPeriodsPerYear, must be a value less than or equal to 365.", new [] { "CalculationPeriodsPerYear" });
            }

            // CalculationPeriodsPerYear (int) minimum
            if (this.CalculationPeriodsPerYear < (int)1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for CalculationPeriodsPerYear, must be a value greater than or equal to 1.", new [] { "CalculationPeriodsPerYear" });
            }

            yield break;
        }
    }

}
