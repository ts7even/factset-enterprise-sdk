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
    /// Value ranges of the number of trading days since a crossover of the SMA 20 and the SMA 50.
    /// </summary>
    [DataContract(Name = "inline_response_200_8_data_simpleMovingAverage_tradingDaysSinceCrossover_sma20vs50")]
    public partial class InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 : IEquatable<InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50" /> class.
        /// </summary>
        /// <param name="up">up.</param>
        /// <param name="down">down.</param>
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up up = default(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up), InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down down = default(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down))
        {
            this.Up = up;
            this.Down = down;
        }

        /// <summary>
        /// Gets or Sets Up
        /// </summary>
        [DataMember(Name = "up", EmitDefaultValue = false)]
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Up Up { get; set; }

        /// <summary>
        /// Gets or Sets Down
        /// </summary>
        [DataMember(Name = "down", EmitDefaultValue = false)]
        public InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50Down Down { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 {\n");
            sb.Append("  Up: ").Append(Up).Append("\n");
            sb.Append("  Down: ").Append(Down).Append("\n");
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
            return this.Equals(input as InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50);
        }

        /// <summary>
        /// Returns true if InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2008DataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Up == input.Up ||
                    (this.Up != null &&
                    this.Up.Equals(input.Up))
                ) && 
                (
                    this.Down == input.Down ||
                    (this.Down != null &&
                    this.Down.Equals(input.Down))
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
                if (this.Up != null)
                {
                    hashCode = (hashCode * 59) + this.Up.GetHashCode();
                }
                if (this.Down != null)
                {
                    hashCode = (hashCode * 59) + this.Down.GetHashCode();
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
