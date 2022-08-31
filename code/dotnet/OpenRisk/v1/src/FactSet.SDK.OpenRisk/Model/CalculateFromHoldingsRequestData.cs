/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
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
    /// CalculateFromHoldingsRequestData
    /// </summary>
    [DataContract(Name = "CalculateFromHoldingsRequestData")]
    public partial class CalculateFromHoldingsRequestData : IEquatable<CalculateFromHoldingsRequestData>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets IndexMapping
        /// </summary>
        [DataMember(Name = "indexMapping", EmitDefaultValue = false)]
        public SecurityIndexMapping? IndexMapping { get; set; }

        /// <summary>
        /// Gets or Sets RequiresFactorReturns
        /// </summary>
        [DataMember(Name = "requiresFactorReturns", EmitDefaultValue = false)]
        public RequiresFactorReturns? RequiresFactorReturns { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CalculateFromHoldingsRequestData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CalculateFromHoldingsRequestData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CalculateFromHoldingsRequestData" /> class.
        /// </summary>
        /// <param name="additionalCalcInputs">additionalCalcInputs.</param>
        /// <param name="allowForcedRisklessAssets">Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash. (default to false).</param>
        /// <param name="assetTypes">**(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from &#39;underlyingIds&#39; input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the &#39;removeCurrencyRisk&#39; input is also provided. When this input is used in the request, underlying IDs (provided via &#39;underlyingIds&#39; input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details..</param>
        /// <param name="calendar">Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \&quot;FIVEDAY\&quot; or \&quot;SEVENDAY\&quot; calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. &#39;Calendar Code&#39; column)..</param>
        /// <param name="compositeAssets">IDs to be defined as composite assets with their constituents&#39; IDs and market values. The typical use case is for risk look-through of ETF or Funds&#39; constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match..</param>
        /// <param name="currency">ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field..</param>
        /// <param name="date">date (required).</param>
        /// <param name="factorGrouping">factorGrouping.</param>
        /// <param name="factorsVisible">factorsVisible.</param>
        /// <param name="holdings">holdings (required).</param>
        /// <param name="indexMapping">indexMapping.</param>
        /// <param name="laggingDates">laggingDates.</param>
        /// <param name="removeCurrencyRisk">removeCurrencyRisk.</param>
        /// <param name="requiresFactorReturns">requiresFactorReturns.</param>
        /// <param name="riskModel">Model code (required).</param>
        /// <param name="riskModelAppendData">riskModelAppendData.</param>
        /// <param name="stats">List of risk stats and settings to calculate (required).</param>
        /// <param name="underlyingIds">A map of security IDs to their underlying IDs. When &#39;assetTypes&#39; input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details..</param>
        public CalculateFromHoldingsRequestData(Date date, Holdings holdings, string riskModel, List<Stat> stats,AdditionalCalculationInputs additionalCalcInputs = default(AdditionalCalculationInputs), bool allowForcedRisklessAssets = false, Dictionary<string, string> assetTypes = default(Dictionary<string, string>), string calendar = default(string), Dictionary<string, IDsAndMarketValues> compositeAssets = default(Dictionary<string, IDsAndMarketValues>), string currency = default(string), FactorGroup factorGrouping = default(FactorGroup), FactorsVisible factorsVisible = default(FactorsVisible), SecurityIndexMapping indexMapping = default(SecurityIndexMapping), LaggingDates laggingDates = default(LaggingDates), RemoveCurrencyRisk removeCurrencyRisk = default(RemoveCurrencyRisk), RequiresFactorReturns requiresFactorReturns = default(RequiresFactorReturns), RiskModelAppendData riskModelAppendData = default(RiskModelAppendData), Dictionary<string, string> underlyingIds = default(Dictionary<string, string>))
        {
            // to ensure "date" is required (not null)
            if (date == null) {
                throw new ArgumentNullException("date is a required property for CalculateFromHoldingsRequestData and cannot be null");
            }
            this.Date = date;
            // to ensure "holdings" is required (not null)
            if (holdings == null) {
                throw new ArgumentNullException("holdings is a required property for CalculateFromHoldingsRequestData and cannot be null");
            }
            this.Holdings = holdings;
            // to ensure "riskModel" is required (not null)
            if (riskModel == null) {
                throw new ArgumentNullException("riskModel is a required property for CalculateFromHoldingsRequestData and cannot be null");
            }
            this.RiskModel = riskModel;
            // to ensure "stats" is required (not null)
            if (stats == null) {
                throw new ArgumentNullException("stats is a required property for CalculateFromHoldingsRequestData and cannot be null");
            }
            this.Stats = stats;
            this.AdditionalCalcInputs = additionalCalcInputs;
            this.AllowForcedRisklessAssets = allowForcedRisklessAssets;
            this.AssetTypes = assetTypes;
            this.Calendar = calendar;
            this.CompositeAssets = compositeAssets;
            this.Currency = currency;
            this.FactorGrouping = factorGrouping;
            this.FactorsVisible = factorsVisible;
            this.IndexMapping = indexMapping;
            this.LaggingDates = laggingDates;
            this.RemoveCurrencyRisk = removeCurrencyRisk;
            this.RequiresFactorReturns = requiresFactorReturns;
            this.RiskModelAppendData = riskModelAppendData;
            this.UnderlyingIds = underlyingIds;
        }

        /// <summary>
        /// Gets or Sets AdditionalCalcInputs
        /// </summary>
        [DataMember(Name = "additionalCalcInputs", EmitDefaultValue = false)]
        public AdditionalCalculationInputs AdditionalCalcInputs { get; set; }

        /// <summary>
        /// Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash.
        /// </summary>
        /// <value>Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash.</value>
        [DataMember(Name = "allowForcedRisklessAssets", EmitDefaultValue = true)]
        public bool AllowForcedRisklessAssets { get; set; }

        /// <summary>
        /// **(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from &#39;underlyingIds&#39; input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the &#39;removeCurrencyRisk&#39; input is also provided. When this input is used in the request, underlying IDs (provided via &#39;underlyingIds&#39; input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
        /// </summary>
        /// <value>**(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from &#39;underlyingIds&#39; input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the &#39;removeCurrencyRisk&#39; input is also provided. When this input is used in the request, underlying IDs (provided via &#39;underlyingIds&#39; input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.</value>
        [DataMember(Name = "assetTypes", EmitDefaultValue = false)]
        public Dictionary<string, string> AssetTypes { get; set; }

        /// <summary>
        /// Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \&quot;FIVEDAY\&quot; or \&quot;SEVENDAY\&quot; calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. &#39;Calendar Code&#39; column).
        /// </summary>
        /// <value>Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \&quot;FIVEDAY\&quot; or \&quot;SEVENDAY\&quot; calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. &#39;Calendar Code&#39; column).</value>
        [DataMember(Name = "calendar", EmitDefaultValue = false)]
        public string Calendar { get; set; }

        /// <summary>
        /// IDs to be defined as composite assets with their constituents&#39; IDs and market values. The typical use case is for risk look-through of ETF or Funds&#39; constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match.
        /// </summary>
        /// <value>IDs to be defined as composite assets with their constituents&#39; IDs and market values. The typical use case is for risk look-through of ETF or Funds&#39; constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match.</value>
        [DataMember(Name = "compositeAssets", EmitDefaultValue = false)]
        public Dictionary<string, IDsAndMarketValues> CompositeAssets { get; set; }

        /// <summary>
        /// ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field.
        /// </summary>
        /// <value>ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field.</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name = "date", IsRequired = true, EmitDefaultValue = false)]
        public Date Date { get; set; }

        /// <summary>
        /// Gets or Sets FactorGrouping
        /// </summary>
        [DataMember(Name = "factorGrouping", EmitDefaultValue = false)]
        public FactorGroup FactorGrouping { get; set; }

        /// <summary>
        /// Gets or Sets FactorsVisible
        /// </summary>
        [DataMember(Name = "factorsVisible", EmitDefaultValue = false)]
        public FactorsVisible FactorsVisible { get; set; }

        /// <summary>
        /// Gets or Sets Holdings
        /// </summary>
        [DataMember(Name = "holdings", IsRequired = true, EmitDefaultValue = false)]
        public Holdings Holdings { get; set; }

        /// <summary>
        /// Gets or Sets LaggingDates
        /// </summary>
        [DataMember(Name = "laggingDates", EmitDefaultValue = false)]
        public LaggingDates LaggingDates { get; set; }

        /// <summary>
        /// Gets or Sets RemoveCurrencyRisk
        /// </summary>
        [DataMember(Name = "removeCurrencyRisk", EmitDefaultValue = false)]
        public RemoveCurrencyRisk RemoveCurrencyRisk { get; set; }

        /// <summary>
        /// Model code
        /// </summary>
        /// <value>Model code</value>
        [DataMember(Name = "riskModel", IsRequired = true, EmitDefaultValue = false)]
        public string RiskModel { get; set; }

        /// <summary>
        /// Gets or Sets RiskModelAppendData
        /// </summary>
        [DataMember(Name = "riskModelAppendData", EmitDefaultValue = false)]
        public RiskModelAppendData RiskModelAppendData { get; set; }

        /// <summary>
        /// List of risk stats and settings to calculate
        /// </summary>
        /// <value>List of risk stats and settings to calculate</value>
        [DataMember(Name = "stats", IsRequired = true, EmitDefaultValue = false)]
        public List<Stat> Stats { get; set; }

        /// <summary>
        /// A map of security IDs to their underlying IDs. When &#39;assetTypes&#39; input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
        /// </summary>
        /// <value>A map of security IDs to their underlying IDs. When &#39;assetTypes&#39; input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.</value>
        [DataMember(Name = "underlyingIds", EmitDefaultValue = false)]
        public Dictionary<string, string> UnderlyingIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CalculateFromHoldingsRequestData {\n");
            sb.Append("  AdditionalCalcInputs: ").Append(AdditionalCalcInputs).Append("\n");
            sb.Append("  AllowForcedRisklessAssets: ").Append(AllowForcedRisklessAssets).Append("\n");
            sb.Append("  AssetTypes: ").Append(AssetTypes).Append("\n");
            sb.Append("  Calendar: ").Append(Calendar).Append("\n");
            sb.Append("  CompositeAssets: ").Append(CompositeAssets).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  FactorGrouping: ").Append(FactorGrouping).Append("\n");
            sb.Append("  FactorsVisible: ").Append(FactorsVisible).Append("\n");
            sb.Append("  Holdings: ").Append(Holdings).Append("\n");
            sb.Append("  IndexMapping: ").Append(IndexMapping).Append("\n");
            sb.Append("  LaggingDates: ").Append(LaggingDates).Append("\n");
            sb.Append("  RemoveCurrencyRisk: ").Append(RemoveCurrencyRisk).Append("\n");
            sb.Append("  RequiresFactorReturns: ").Append(RequiresFactorReturns).Append("\n");
            sb.Append("  RiskModel: ").Append(RiskModel).Append("\n");
            sb.Append("  RiskModelAppendData: ").Append(RiskModelAppendData).Append("\n");
            sb.Append("  Stats: ").Append(Stats).Append("\n");
            sb.Append("  UnderlyingIds: ").Append(UnderlyingIds).Append("\n");
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
            return this.Equals(input as CalculateFromHoldingsRequestData);
        }

        /// <summary>
        /// Returns true if CalculateFromHoldingsRequestData instances are equal
        /// </summary>
        /// <param name="input">Instance of CalculateFromHoldingsRequestData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CalculateFromHoldingsRequestData input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AdditionalCalcInputs == input.AdditionalCalcInputs ||
                    (this.AdditionalCalcInputs != null &&
                    this.AdditionalCalcInputs.Equals(input.AdditionalCalcInputs))
                ) && 
                (
                    this.AllowForcedRisklessAssets == input.AllowForcedRisklessAssets ||
                    this.AllowForcedRisklessAssets.Equals(input.AllowForcedRisklessAssets)
                ) && 
                (
                    this.AssetTypes == input.AssetTypes ||
                    this.AssetTypes != null &&
                    input.AssetTypes != null &&
                    this.AssetTypes.SequenceEqual(input.AssetTypes)
                ) && 
                (
                    this.Calendar == input.Calendar ||
                    (this.Calendar != null &&
                    this.Calendar.Equals(input.Calendar))
                ) && 
                (
                    this.CompositeAssets == input.CompositeAssets ||
                    this.CompositeAssets != null &&
                    input.CompositeAssets != null &&
                    this.CompositeAssets.SequenceEqual(input.CompositeAssets)
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.FactorGrouping == input.FactorGrouping ||
                    (this.FactorGrouping != null &&
                    this.FactorGrouping.Equals(input.FactorGrouping))
                ) && 
                (
                    this.FactorsVisible == input.FactorsVisible ||
                    (this.FactorsVisible != null &&
                    this.FactorsVisible.Equals(input.FactorsVisible))
                ) && 
                (
                    this.Holdings == input.Holdings ||
                    (this.Holdings != null &&
                    this.Holdings.Equals(input.Holdings))
                ) && 
                (
                    this.IndexMapping == input.IndexMapping ||
                    this.IndexMapping.Equals(input.IndexMapping)
                ) && 
                (
                    this.LaggingDates == input.LaggingDates ||
                    (this.LaggingDates != null &&
                    this.LaggingDates.Equals(input.LaggingDates))
                ) && 
                (
                    this.RemoveCurrencyRisk == input.RemoveCurrencyRisk ||
                    (this.RemoveCurrencyRisk != null &&
                    this.RemoveCurrencyRisk.Equals(input.RemoveCurrencyRisk))
                ) && 
                (
                    this.RequiresFactorReturns == input.RequiresFactorReturns ||
                    this.RequiresFactorReturns.Equals(input.RequiresFactorReturns)
                ) && 
                (
                    this.RiskModel == input.RiskModel ||
                    (this.RiskModel != null &&
                    this.RiskModel.Equals(input.RiskModel))
                ) && 
                (
                    this.RiskModelAppendData == input.RiskModelAppendData ||
                    (this.RiskModelAppendData != null &&
                    this.RiskModelAppendData.Equals(input.RiskModelAppendData))
                ) && 
                (
                    this.Stats == input.Stats ||
                    this.Stats != null &&
                    input.Stats != null &&
                    this.Stats.SequenceEqual(input.Stats)
                ) && 
                (
                    this.UnderlyingIds == input.UnderlyingIds ||
                    this.UnderlyingIds != null &&
                    input.UnderlyingIds != null &&
                    this.UnderlyingIds.SequenceEqual(input.UnderlyingIds)
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
                if (this.AdditionalCalcInputs != null)
                {
                    hashCode = (hashCode * 59) + this.AdditionalCalcInputs.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.AllowForcedRisklessAssets.GetHashCode();
                if (this.AssetTypes != null)
                {
                    hashCode = (hashCode * 59) + this.AssetTypes.GetHashCode();
                }
                if (this.Calendar != null)
                {
                    hashCode = (hashCode * 59) + this.Calendar.GetHashCode();
                }
                if (this.CompositeAssets != null)
                {
                    hashCode = (hashCode * 59) + this.CompositeAssets.GetHashCode();
                }
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
                }
                if (this.FactorGrouping != null)
                {
                    hashCode = (hashCode * 59) + this.FactorGrouping.GetHashCode();
                }
                if (this.FactorsVisible != null)
                {
                    hashCode = (hashCode * 59) + this.FactorsVisible.GetHashCode();
                }
                if (this.Holdings != null)
                {
                    hashCode = (hashCode * 59) + this.Holdings.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.IndexMapping.GetHashCode();
                if (this.LaggingDates != null)
                {
                    hashCode = (hashCode * 59) + this.LaggingDates.GetHashCode();
                }
                if (this.RemoveCurrencyRisk != null)
                {
                    hashCode = (hashCode * 59) + this.RemoveCurrencyRisk.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.RequiresFactorReturns.GetHashCode();
                if (this.RiskModel != null)
                {
                    hashCode = (hashCode * 59) + this.RiskModel.GetHashCode();
                }
                if (this.RiskModelAppendData != null)
                {
                    hashCode = (hashCode * 59) + this.RiskModelAppendData.GetHashCode();
                }
                if (this.Stats != null)
                {
                    hashCode = (hashCode * 59) + this.Stats.GetHashCode();
                }
                if (this.UnderlyingIds != null)
                {
                    hashCode = (hashCode * 59) + this.UnderlyingIds.GetHashCode();
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
            // Calendar (string) minLength
            if (this.Calendar != null && this.Calendar.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Calendar, length must be greater than 1.", new [] { "Calendar" });
            }

            // Currency (string) minLength
            if (this.Currency != null && this.Currency.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Currency, length must be greater than 1.", new [] { "Currency" });
            }

            // RiskModel (string) minLength
            if (this.RiskModel != null && this.RiskModel.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for RiskModel, length must be greater than 1.", new [] { "RiskModel" });
            }

            yield break;
        }
    }

}
