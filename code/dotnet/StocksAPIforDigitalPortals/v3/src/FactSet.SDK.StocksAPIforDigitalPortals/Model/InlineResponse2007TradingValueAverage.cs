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
    /// Arithmetic mean of the trading value for different time ranges.
    /// </summary>
    [DataContract(Name = "inline_response_200_7_tradingValue_average")]
    public partial class InlineResponse2007TradingValueAverage : IEquatable<InlineResponse2007TradingValueAverage>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2007TradingValueAverage" /> class.
        /// </summary>
        /// <param name="days5">Five trading days..</param>
        /// <param name="days30">30 trading days..</param>
        public InlineResponse2007TradingValueAverage(decimal days5 = default(decimal), decimal days30 = default(decimal))
        {
            this.Days5 = days5;
            this.Days30 = days30;
        }

        /// <summary>
        /// Five trading days.
        /// </summary>
        /// <value>Five trading days.</value>
        [DataMember(Name = "days5", EmitDefaultValue = false)]
        public decimal Days5 { get; set; }

        /// <summary>
        /// 30 trading days.
        /// </summary>
        /// <value>30 trading days.</value>
        [DataMember(Name = "days30", EmitDefaultValue = false)]
        public decimal Days30 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2007TradingValueAverage {\n");
            sb.Append("  Days5: ").Append(Days5).Append("\n");
            sb.Append("  Days30: ").Append(Days30).Append("\n");
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
            return this.Equals(input as InlineResponse2007TradingValueAverage);
        }

        /// <summary>
        /// Returns true if InlineResponse2007TradingValueAverage instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2007TradingValueAverage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2007TradingValueAverage input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Days5 == input.Days5 ||
                    this.Days5.Equals(input.Days5)
                ) && 
                (
                    this.Days30 == input.Days30 ||
                    this.Days30.Equals(input.Days30)
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
                hashCode = (hashCode * 59) + this.Days5.GetHashCode();
                hashCode = (hashCode * 59) + this.Days30.GetHashCode();
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
