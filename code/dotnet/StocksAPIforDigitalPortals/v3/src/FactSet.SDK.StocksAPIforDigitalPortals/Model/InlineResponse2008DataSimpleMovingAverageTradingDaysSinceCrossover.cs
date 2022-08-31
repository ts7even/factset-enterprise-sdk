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
    /// Value ranges of the number of trading days since a simple moving average crossed another one. All SMAs are calculated with EOD prices, thus the value 0 for the number of days means the crossover occurred on the most recent trading day for which such prices are available.
    /// </summary>
    [DataContract(Name = "inline_response_200_8_data_simpleMovingAverage_tradingDaysSinceCrossover")]
    public partial class InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover : IEquatable<InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover" /> class.
        /// </summary>
        /// <param name="sma20vs50">sma20vs50.</param>
        /// <param name="sma50vs200">sma50vs200.</param>
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 sma20vs50 = default(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50), InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200 sma50vs200 = default(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200))
        {
            this.Sma20vs50 = sma20vs50;
            this.Sma50vs200 = sma50vs200;
        }

        /// <summary>
        /// Gets or Sets Sma20vs50
        /// </summary>
        [DataMember(Name = "sma20vs50", EmitDefaultValue = false)]
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 Sma20vs50 { get; set; }

        /// <summary>
        /// Gets or Sets Sma50vs200
        /// </summary>
        [DataMember(Name = "sma50vs200", EmitDefaultValue = false)]
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma50vs200 Sma50vs200 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover {\n");
            sb.Append("  Sma20vs50: ").Append(Sma20vs50).Append("\n");
            sb.Append("  Sma50vs200: ").Append(Sma50vs200).Append("\n");
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
            return this.Equals(input as InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover);
        }

        /// <summary>
        /// Returns true if InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossover input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Sma20vs50 == input.Sma20vs50 ||
                    (this.Sma20vs50 != null &&
                    this.Sma20vs50.Equals(input.Sma20vs50))
                ) && 
                (
                    this.Sma50vs200 == input.Sma50vs200 ||
                    (this.Sma50vs200 != null &&
                    this.Sma50vs200.Equals(input.Sma50vs200))
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
                if (this.Sma20vs50 != null)
                {
                    hashCode = (hashCode * 59) + this.Sma20vs50.GetHashCode();
                }
                if (this.Sma50vs200 != null)
                {
                    hashCode = (hashCode * 59) + this.Sma50vs200.GetHashCode();
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
