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
    /// Validation parameters.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_search_data_validation")]
    public partial class SecuritizedDerivativeNotationScreenerSearchDataValidation : IEquatable<SecuritizedDerivativeNotationScreenerSearchDataValidation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerSearchDataValidation" /> class.
        /// </summary>
        /// <param name="onlyActive">If &#x60;true&#x60;, only active notations will be returned. The term \&quot;active\&quot; reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months. (default to true).</param>
        /// <param name="prices">prices.</param>
        /// <param name="valueUnit">valueUnit.</param>
        /// <param name="market">market.</param>
        /// <param name="instrumentRestrictionList">instrumentRestrictionList.</param>
        /// <param name="notationRestrictionList">notationRestrictionList.</param>
        public SecuritizedDerivativeNotationScreenerSearchDataValidation(bool onlyActive = true, SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationPrices prices = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationPrices), SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit valueUnit = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit), SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarket market = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarket), SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList instrumentRestrictionList = default(SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList), SecuritizedDerivativeNotationScreenerSearchDataValidationNotationRestrictionList notationRestrictionList = default(SecuritizedDerivativeNotationScreenerSearchDataValidationNotationRestrictionList))
        {
            this.OnlyActive = onlyActive;
            this.Prices = prices;
            this.ValueUnit = valueUnit;
            this.Market = market;
            this.InstrumentRestrictionList = instrumentRestrictionList;
            this.NotationRestrictionList = notationRestrictionList;
        }

        /// <summary>
        /// If &#x60;true&#x60;, only active notations will be returned. The term \&quot;active\&quot; reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months.
        /// </summary>
        /// <value>If &#x60;true&#x60;, only active notations will be returned. The term \&quot;active\&quot; reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months.</value>
        [DataMember(Name = "onlyActive", EmitDefaultValue = true)]
        public bool OnlyActive { get; set; }

        /// <summary>
        /// Gets or Sets Prices
        /// </summary>
        [DataMember(Name = "prices", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationPrices Prices { get; set; }

        /// <summary>
        /// Gets or Sets ValueUnit
        /// </summary>
        [DataMember(Name = "valueUnit", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit ValueUnit { get; set; }

        /// <summary>
        /// Gets or Sets Market
        /// </summary>
        [DataMember(Name = "market", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationMarket Market { get; set; }

        /// <summary>
        /// Gets or Sets InstrumentRestrictionList
        /// </summary>
        [DataMember(Name = "instrumentRestrictionList", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerSearchDataValidationInstrumentRestrictionList InstrumentRestrictionList { get; set; }

        /// <summary>
        /// Gets or Sets NotationRestrictionList
        /// </summary>
        [DataMember(Name = "notationRestrictionList", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerSearchDataValidationNotationRestrictionList NotationRestrictionList { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerSearchDataValidation {\n");
            sb.Append("  OnlyActive: ").Append(OnlyActive).Append("\n");
            sb.Append("  Prices: ").Append(Prices).Append("\n");
            sb.Append("  ValueUnit: ").Append(ValueUnit).Append("\n");
            sb.Append("  Market: ").Append(Market).Append("\n");
            sb.Append("  InstrumentRestrictionList: ").Append(InstrumentRestrictionList).Append("\n");
            sb.Append("  NotationRestrictionList: ").Append(NotationRestrictionList).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerSearchDataValidation);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerSearchDataValidation instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerSearchDataValidation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerSearchDataValidation input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.OnlyActive == input.OnlyActive ||
                    this.OnlyActive.Equals(input.OnlyActive)
                ) && 
                (
                    this.Prices == input.Prices ||
                    (this.Prices != null &&
                    this.Prices.Equals(input.Prices))
                ) && 
                (
                    this.ValueUnit == input.ValueUnit ||
                    (this.ValueUnit != null &&
                    this.ValueUnit.Equals(input.ValueUnit))
                ) && 
                (
                    this.Market == input.Market ||
                    (this.Market != null &&
                    this.Market.Equals(input.Market))
                ) && 
                (
                    this.InstrumentRestrictionList == input.InstrumentRestrictionList ||
                    (this.InstrumentRestrictionList != null &&
                    this.InstrumentRestrictionList.Equals(input.InstrumentRestrictionList))
                ) && 
                (
                    this.NotationRestrictionList == input.NotationRestrictionList ||
                    (this.NotationRestrictionList != null &&
                    this.NotationRestrictionList.Equals(input.NotationRestrictionList))
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
                hashCode = hashCode * 59 + this.OnlyActive.GetHashCode();
                if (this.Prices != null)
                    hashCode = hashCode * 59 + this.Prices.GetHashCode();
                if (this.ValueUnit != null)
                    hashCode = hashCode * 59 + this.ValueUnit.GetHashCode();
                if (this.Market != null)
                    hashCode = hashCode * 59 + this.Market.GetHashCode();
                if (this.InstrumentRestrictionList != null)
                    hashCode = hashCode * 59 + this.InstrumentRestrictionList.GetHashCode();
                if (this.NotationRestrictionList != null)
                    hashCode = hashCode * 59 + this.NotationRestrictionList.GetHashCode();
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