/*
 * Stocks API For Digital Portals
 *
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
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
using OpenAPIDateConverter = FactSet.SDK.StocksAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.StocksAPIforDigitalPortals.Model
{
    /// <summary>
    /// Value ranges of the estimates for the most distant fiscal year that has been requested. Available only if the parameters used in the request refer to data from three fiscals year.
    /// </summary>
    [DataContract(Name = "inline_response_200_8_data_estimates_thirdFiscalYear")]
    public partial class InlineResponse2008DataEstimatesThirdFiscalYear : IEquatable<InlineResponse2008DataEstimatesThirdFiscalYear>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2008DataEstimatesThirdFiscalYear" /> class.
        /// </summary>
        /// <param name="fiscalYear">fiscalYear.</param>
        /// <param name="currencyDependentEstimates">currencyDependentEstimates.</param>
        /// <param name="returnOnAssets">returnOnAssets.</param>
        /// <param name="returnOnEquity">returnOnEquity.</param>
        /// <param name="ratios">ratios.</param>
        public InlineResponse2008DataEstimatesThirdFiscalYear(InlineResponse2008DataEstimatesFirstFiscalYearFiscalYear fiscalYear = default(InlineResponse2008DataEstimatesFirstFiscalYearFiscalYear), InlineResponse2008DataEstimatesFirstFiscalYearCurrencyDependentEstimates currencyDependentEstimates = default(InlineResponse2008DataEstimatesFirstFiscalYearCurrencyDependentEstimates), InlineResponse2008DataEstimatesFirstFiscalYearReturnOnAssets returnOnAssets = default(InlineResponse2008DataEstimatesFirstFiscalYearReturnOnAssets), InlineResponse2008DataEstimatesFirstFiscalYearReturnOnEquity returnOnEquity = default(InlineResponse2008DataEstimatesFirstFiscalYearReturnOnEquity), InlineResponse2008DataEstimatesFirstFiscalYearRatios ratios = default(InlineResponse2008DataEstimatesFirstFiscalYearRatios))
        {
            this.FiscalYear = fiscalYear;
            this.CurrencyDependentEstimates = currencyDependentEstimates;
            this.ReturnOnAssets = returnOnAssets;
            this.ReturnOnEquity = returnOnEquity;
            this.Ratios = ratios;
        }

        /// <summary>
        /// Gets or Sets FiscalYear
        /// </summary>
        [DataMember(Name = "fiscalYear", EmitDefaultValue = false)]
        public InlineResponse2008DataEstimatesFirstFiscalYearFiscalYear FiscalYear { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyDependentEstimates
        /// </summary>
        [DataMember(Name = "currencyDependentEstimates", EmitDefaultValue = false)]
        public InlineResponse2008DataEstimatesFirstFiscalYearCurrencyDependentEstimates CurrencyDependentEstimates { get; set; }

        /// <summary>
        /// Gets or Sets ReturnOnAssets
        /// </summary>
        [DataMember(Name = "returnOnAssets", EmitDefaultValue = false)]
        public InlineResponse2008DataEstimatesFirstFiscalYearReturnOnAssets ReturnOnAssets { get; set; }

        /// <summary>
        /// Gets or Sets ReturnOnEquity
        /// </summary>
        [DataMember(Name = "returnOnEquity", EmitDefaultValue = false)]
        public InlineResponse2008DataEstimatesFirstFiscalYearReturnOnEquity ReturnOnEquity { get; set; }

        /// <summary>
        /// Gets or Sets Ratios
        /// </summary>
        [DataMember(Name = "ratios", EmitDefaultValue = false)]
        public InlineResponse2008DataEstimatesFirstFiscalYearRatios Ratios { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2008DataEstimatesThirdFiscalYear {\n");
            sb.Append("  FiscalYear: ").Append(FiscalYear).Append("\n");
            sb.Append("  CurrencyDependentEstimates: ").Append(CurrencyDependentEstimates).Append("\n");
            sb.Append("  ReturnOnAssets: ").Append(ReturnOnAssets).Append("\n");
            sb.Append("  ReturnOnEquity: ").Append(ReturnOnEquity).Append("\n");
            sb.Append("  Ratios: ").Append(Ratios).Append("\n");
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
            return this.Equals(input as InlineResponse2008DataEstimatesThirdFiscalYear);
        }

        /// <summary>
        /// Returns true if InlineResponse2008DataEstimatesThirdFiscalYear instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2008DataEstimatesThirdFiscalYear to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2008DataEstimatesThirdFiscalYear input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.FiscalYear == input.FiscalYear ||
                    (this.FiscalYear != null &&
                    this.FiscalYear.Equals(input.FiscalYear))
                ) && 
                (
                    this.CurrencyDependentEstimates == input.CurrencyDependentEstimates ||
                    (this.CurrencyDependentEstimates != null &&
                    this.CurrencyDependentEstimates.Equals(input.CurrencyDependentEstimates))
                ) && 
                (
                    this.ReturnOnAssets == input.ReturnOnAssets ||
                    (this.ReturnOnAssets != null &&
                    this.ReturnOnAssets.Equals(input.ReturnOnAssets))
                ) && 
                (
                    this.ReturnOnEquity == input.ReturnOnEquity ||
                    (this.ReturnOnEquity != null &&
                    this.ReturnOnEquity.Equals(input.ReturnOnEquity))
                ) && 
                (
                    this.Ratios == input.Ratios ||
                    (this.Ratios != null &&
                    this.Ratios.Equals(input.Ratios))
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
                if (this.FiscalYear != null)
                {
                    hashCode = (hashCode * 59) + this.FiscalYear.GetHashCode();
                }
                if (this.CurrencyDependentEstimates != null)
                {
                    hashCode = (hashCode * 59) + this.CurrencyDependentEstimates.GetHashCode();
                }
                if (this.ReturnOnAssets != null)
                {
                    hashCode = (hashCode * 59) + this.ReturnOnAssets.GetHashCode();
                }
                if (this.ReturnOnEquity != null)
                {
                    hashCode = (hashCode * 59) + this.ReturnOnEquity.GetHashCode();
                }
                if (this.Ratios != null)
                {
                    hashCode = (hashCode * 59) + this.Ratios.GetHashCode();
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
