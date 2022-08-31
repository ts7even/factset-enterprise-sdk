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
    /// Number of recommendations.
    /// </summary>
    [DataContract(Name = "inline_response_200_data_recommendation_counts")]
    public partial class InlineResponse200DataRecommendationCounts : IEquatable<InlineResponse200DataRecommendationCounts>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200DataRecommendationCounts" /> class.
        /// </summary>
        /// <param name="total">Total number..</param>
        /// <param name="buy">Number of buy recommendations. A buy recommendation contributes with the numeric value 1 when calculating the consensus..</param>
        /// <param name="overweight">Number of overweight recommendations. A overweight recommendation contributes with the numeric value 2 when calculating the consensus..</param>
        /// <param name="hold">Number of hold recommendations. A hold recommendation contributes with the numeric value 3 when calculating the consensus..</param>
        /// <param name="underweight">Number of underweight recommendations. A underweight recommendation contributes with the numeric value 4 when calculating the consensus..</param>
        /// <param name="sell">Number of sell recommendations. A sell recommendation contributes with the numeric value 5 when calculating the consensus..</param>
        public InlineResponse200DataRecommendationCounts(decimal total = default(decimal), decimal buy = default(decimal), decimal overweight = default(decimal), decimal hold = default(decimal), decimal underweight = default(decimal), decimal sell = default(decimal))
        {
            this.Total = total;
            this.Buy = buy;
            this.Overweight = overweight;
            this.Hold = hold;
            this.Underweight = underweight;
            this.Sell = sell;
        }

        /// <summary>
        /// Total number.
        /// </summary>
        /// <value>Total number.</value>
        [DataMember(Name = "total", EmitDefaultValue = false)]
        public decimal Total { get; set; }

        /// <summary>
        /// Number of buy recommendations. A buy recommendation contributes with the numeric value 1 when calculating the consensus.
        /// </summary>
        /// <value>Number of buy recommendations. A buy recommendation contributes with the numeric value 1 when calculating the consensus.</value>
        [DataMember(Name = "buy", EmitDefaultValue = false)]
        public decimal Buy { get; set; }

        /// <summary>
        /// Number of overweight recommendations. A overweight recommendation contributes with the numeric value 2 when calculating the consensus.
        /// </summary>
        /// <value>Number of overweight recommendations. A overweight recommendation contributes with the numeric value 2 when calculating the consensus.</value>
        [DataMember(Name = "overweight", EmitDefaultValue = false)]
        public decimal Overweight { get; set; }

        /// <summary>
        /// Number of hold recommendations. A hold recommendation contributes with the numeric value 3 when calculating the consensus.
        /// </summary>
        /// <value>Number of hold recommendations. A hold recommendation contributes with the numeric value 3 when calculating the consensus.</value>
        [DataMember(Name = "hold", EmitDefaultValue = false)]
        public decimal Hold { get; set; }

        /// <summary>
        /// Number of underweight recommendations. A underweight recommendation contributes with the numeric value 4 when calculating the consensus.
        /// </summary>
        /// <value>Number of underweight recommendations. A underweight recommendation contributes with the numeric value 4 when calculating the consensus.</value>
        [DataMember(Name = "underweight", EmitDefaultValue = false)]
        public decimal Underweight { get; set; }

        /// <summary>
        /// Number of sell recommendations. A sell recommendation contributes with the numeric value 5 when calculating the consensus.
        /// </summary>
        /// <value>Number of sell recommendations. A sell recommendation contributes with the numeric value 5 when calculating the consensus.</value>
        [DataMember(Name = "sell", EmitDefaultValue = false)]
        public decimal Sell { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse200DataRecommendationCounts {\n");
            sb.Append("  Total: ").Append(Total).Append("\n");
            sb.Append("  Buy: ").Append(Buy).Append("\n");
            sb.Append("  Overweight: ").Append(Overweight).Append("\n");
            sb.Append("  Hold: ").Append(Hold).Append("\n");
            sb.Append("  Underweight: ").Append(Underweight).Append("\n");
            sb.Append("  Sell: ").Append(Sell).Append("\n");
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
            return this.Equals(input as InlineResponse200DataRecommendationCounts);
        }

        /// <summary>
        /// Returns true if InlineResponse200DataRecommendationCounts instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200DataRecommendationCounts to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200DataRecommendationCounts input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Total == input.Total ||
                    this.Total.Equals(input.Total)
                ) && 
                (
                    this.Buy == input.Buy ||
                    this.Buy.Equals(input.Buy)
                ) && 
                (
                    this.Overweight == input.Overweight ||
                    this.Overweight.Equals(input.Overweight)
                ) && 
                (
                    this.Hold == input.Hold ||
                    this.Hold.Equals(input.Hold)
                ) && 
                (
                    this.Underweight == input.Underweight ||
                    this.Underweight.Equals(input.Underweight)
                ) && 
                (
                    this.Sell == input.Sell ||
                    this.Sell.Equals(input.Sell)
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
                hashCode = (hashCode * 59) + this.Total.GetHashCode();
                hashCode = (hashCode * 59) + this.Buy.GetHashCode();
                hashCode = (hashCode * 59) + this.Overweight.GetHashCode();
                hashCode = (hashCode * 59) + this.Hold.GetHashCode();
                hashCode = (hashCode * 59) + this.Underweight.GetHashCode();
                hashCode = (hashCode * 59) + this.Sell.GetHashCode();
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
