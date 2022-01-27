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
using OpenAPIDateConverter = FactSet.SDK.StocksAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.StocksAPIforDigitalPortals.Model
{
    /// <summary>
    /// Currency-dependent key figures. If no currency has been selected (see parameter &#x60;reportedKeyFigures.currencyDependentKeyFigures.currency.isoCode&#x60;), the returned values are in the reporting currency of the company.
    /// </summary>
    [DataContract(Name = "inline_response_200_4_reportedKeyFigures_firstFiscalYear_currencyDependentKeyFigures")]
    public partial class InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures : IEquatable<InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures" /> class.
        /// </summary>
        /// <param name="currency">currency.</param>
        /// <param name="marketCapitalization">Market capitalization, which is the market value of the shares outstanding over all types of shares of the company..</param>
        /// <param name="ebit">EBIT (earnings before interest and taxes)..</param>
        /// <param name="ebitda">EBITDA (earnings before interest, taxes, depreciation, and amortization)..</param>
        /// <param name="perShare">perShare.</param>
        public InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures(InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency currency = default(InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency), decimal marketCapitalization = default(decimal), decimal ebit = default(decimal), decimal ebitda = default(decimal), InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare perShare = default(InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare))
        {
            this.Currency = currency;
            this.MarketCapitalization = marketCapitalization;
            this.Ebit = ebit;
            this.Ebitda = ebitda;
            this.PerShare = perShare;
        }

        /// <summary>
        /// Gets or Sets Currency
        /// </summary>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresCurrency Currency { get; set; }

        /// <summary>
        /// Market capitalization, which is the market value of the shares outstanding over all types of shares of the company.
        /// </summary>
        /// <value>Market capitalization, which is the market value of the shares outstanding over all types of shares of the company.</value>
        [DataMember(Name = "marketCapitalization", EmitDefaultValue = false)]
        public decimal MarketCapitalization { get; set; }

        /// <summary>
        /// EBIT (earnings before interest and taxes).
        /// </summary>
        /// <value>EBIT (earnings before interest and taxes).</value>
        [DataMember(Name = "ebit", EmitDefaultValue = false)]
        public decimal Ebit { get; set; }

        /// <summary>
        /// EBITDA (earnings before interest, taxes, depreciation, and amortization).
        /// </summary>
        /// <value>EBITDA (earnings before interest, taxes, depreciation, and amortization).</value>
        [DataMember(Name = "ebitda", EmitDefaultValue = false)]
        public decimal Ebitda { get; set; }

        /// <summary>
        /// Gets or Sets PerShare
        /// </summary>
        [DataMember(Name = "perShare", EmitDefaultValue = false)]
        public InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShare PerShare { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures {\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  MarketCapitalization: ").Append(MarketCapitalization).Append("\n");
            sb.Append("  Ebit: ").Append(Ebit).Append("\n");
            sb.Append("  Ebitda: ").Append(Ebitda).Append("\n");
            sb.Append("  PerShare: ").Append(PerShare).Append("\n");
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
            return this.Equals(input as InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures);
        }

        /// <summary>
        /// Returns true if InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2004ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.MarketCapitalization == input.MarketCapitalization ||
                    this.MarketCapitalization.Equals(input.MarketCapitalization)
                ) && 
                (
                    this.Ebit == input.Ebit ||
                    this.Ebit.Equals(input.Ebit)
                ) && 
                (
                    this.Ebitda == input.Ebitda ||
                    this.Ebitda.Equals(input.Ebitda)
                ) && 
                (
                    this.PerShare == input.PerShare ||
                    (this.PerShare != null &&
                    this.PerShare.Equals(input.PerShare))
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
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
                hashCode = hashCode * 59 + this.MarketCapitalization.GetHashCode();
                hashCode = hashCode * 59 + this.Ebit.GetHashCode();
                hashCode = hashCode * 59 + this.Ebitda.GetHashCode();
                if (this.PerShare != null)
                    hashCode = hashCode * 59 + this.PerShare.GetHashCode();
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