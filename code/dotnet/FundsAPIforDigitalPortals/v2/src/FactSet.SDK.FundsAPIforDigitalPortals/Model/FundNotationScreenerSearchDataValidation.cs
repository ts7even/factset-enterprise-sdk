/*
 * Funds API For Digital Portals
 *
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
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
using OpenAPIDateConverter = FactSet.SDK.FundsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FundsAPIforDigitalPortals.Model
{
    /// <summary>
    /// Validation parameters.
    /// </summary>
    [DataContract(Name = "_fund_notation_screener_search_data_validation")]
    public partial class FundNotationScreenerSearchDataValidation : IEquatable<FundNotationScreenerSearchDataValidation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FundNotationScreenerSearchDataValidation" /> class.
        /// </summary>
        /// <param name="onlyActive">If &#x60;true&#x60;, only active notations will be returned. The term \&quot;active\&quot; reflects the fact that notations and related data is not being deleted immediately after becoming irrelevant (e.g. because the source does not provide a price anymore), but remains in general retrievable for up to 6 months. (default to true).</param>
        /// <param name="prices">prices.</param>
        /// <param name="currency">currency.</param>
        /// <param name="market">market.</param>
        /// <param name="instrumentSelectionList">instrumentSelectionList.</param>
        /// <param name="notationSelectionList">notationSelectionList.</param>
        public FundNotationScreenerSearchDataValidation(bool onlyActive = true, FundNotationScreenerSearchDataValidationPrices prices = default(FundNotationScreenerSearchDataValidationPrices), FundNotationScreenerSearchDataValidationCurrency currency = default(FundNotationScreenerSearchDataValidationCurrency), FundNotationScreenerSearchDataValidationMarket market = default(FundNotationScreenerSearchDataValidationMarket), FundNotationScreenerSearchDataValidationInstrumentSelectionList instrumentSelectionList = default(FundNotationScreenerSearchDataValidationInstrumentSelectionList), FundNotationScreenerSearchDataValidationNotationSelectionList notationSelectionList = default(FundNotationScreenerSearchDataValidationNotationSelectionList))
        {
            this.OnlyActive = onlyActive;
            this.Prices = prices;
            this.Currency = currency;
            this.Market = market;
            this.InstrumentSelectionList = instrumentSelectionList;
            this.NotationSelectionList = notationSelectionList;
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
        public FundNotationScreenerSearchDataValidationPrices Prices { get; set; }

        /// <summary>
        /// Gets or Sets Currency
        /// </summary>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public FundNotationScreenerSearchDataValidationCurrency Currency { get; set; }

        /// <summary>
        /// Gets or Sets Market
        /// </summary>
        [DataMember(Name = "market", EmitDefaultValue = false)]
        public FundNotationScreenerSearchDataValidationMarket Market { get; set; }

        /// <summary>
        /// Gets or Sets InstrumentSelectionList
        /// </summary>
        [DataMember(Name = "instrumentSelectionList", EmitDefaultValue = false)]
        public FundNotationScreenerSearchDataValidationInstrumentSelectionList InstrumentSelectionList { get; set; }

        /// <summary>
        /// Gets or Sets NotationSelectionList
        /// </summary>
        [DataMember(Name = "notationSelectionList", EmitDefaultValue = false)]
        public FundNotationScreenerSearchDataValidationNotationSelectionList NotationSelectionList { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class FundNotationScreenerSearchDataValidation {\n");
            sb.Append("  OnlyActive: ").Append(OnlyActive).Append("\n");
            sb.Append("  Prices: ").Append(Prices).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Market: ").Append(Market).Append("\n");
            sb.Append("  InstrumentSelectionList: ").Append(InstrumentSelectionList).Append("\n");
            sb.Append("  NotationSelectionList: ").Append(NotationSelectionList).Append("\n");
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
            return this.Equals(input as FundNotationScreenerSearchDataValidation);
        }

        /// <summary>
        /// Returns true if FundNotationScreenerSearchDataValidation instances are equal
        /// </summary>
        /// <param name="input">Instance of FundNotationScreenerSearchDataValidation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FundNotationScreenerSearchDataValidation input)
        {
            if (input == null)
            {
                return false;
            }
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
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Market == input.Market ||
                    (this.Market != null &&
                    this.Market.Equals(input.Market))
                ) && 
                (
                    this.InstrumentSelectionList == input.InstrumentSelectionList ||
                    (this.InstrumentSelectionList != null &&
                    this.InstrumentSelectionList.Equals(input.InstrumentSelectionList))
                ) && 
                (
                    this.NotationSelectionList == input.NotationSelectionList ||
                    (this.NotationSelectionList != null &&
                    this.NotationSelectionList.Equals(input.NotationSelectionList))
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
                hashCode = (hashCode * 59) + this.OnlyActive.GetHashCode();
                if (this.Prices != null)
                {
                    hashCode = (hashCode * 59) + this.Prices.GetHashCode();
                }
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.Market != null)
                {
                    hashCode = (hashCode * 59) + this.Market.GetHashCode();
                }
                if (this.InstrumentSelectionList != null)
                {
                    hashCode = (hashCode * 59) + this.InstrumentSelectionList.GetHashCode();
                }
                if (this.NotationSelectionList != null)
                {
                    hashCode = (hashCode * 59) + this.NotationSelectionList.GetHashCode();
                }
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