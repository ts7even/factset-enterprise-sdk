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
    /// InlineResponse2002Data
    /// </summary>
    [DataContract(Name = "inline_response_200_2_data")]
    public partial class InlineResponse2002Data : IEquatable<InlineResponse2002Data>, IValidatableObject
    {
        /// <summary>
        /// Identification of the historic snapshot for aggregated recommendations.
        /// </summary>
        /// <value>Identification of the historic snapshot for aggregated recommendations.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SnapshotEnum
        {
            /// <summary>
            /// Enum Latest for value: latest
            /// </summary>
            [EnumMember(Value = "latest")]
            Latest = 1,

            /// <summary>
            /// Enum _1w for value: 1w
            /// </summary>
            [EnumMember(Value = "1w")]
            _1w = 2,

            /// <summary>
            /// Enum _1m for value: 1m
            /// </summary>
            [EnumMember(Value = "1m")]
            _1m = 3,

            /// <summary>
            /// Enum _3m for value: 3m
            /// </summary>
            [EnumMember(Value = "3m")]
            _3m = 4,

            /// <summary>
            /// Enum _6m for value: 6m
            /// </summary>
            [EnumMember(Value = "6m")]
            _6m = 5,

            /// <summary>
            /// Enum _1y for value: 1y
            /// </summary>
            [EnumMember(Value = "1y")]
            _1y = 6

        }


        /// <summary>
        /// Identification of the historic snapshot for aggregated recommendations.
        /// </summary>
        /// <value>Identification of the historic snapshot for aggregated recommendations.</value>
        [DataMember(Name = "snapshot", EmitDefaultValue = false)]
        public SnapshotEnum? Snapshot { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2002Data" /> class.
        /// </summary>
        /// <param name="snapshot">Identification of the historic snapshot for aggregated recommendations..</param>
        /// <param name="targetPrice">targetPrice.</param>
        /// <param name="recommendation">recommendation.</param>
        public InlineResponse2002Data(SnapshotEnum? snapshot = default(SnapshotEnum?), InlineResponse2001DataTargetPrice targetPrice = default(InlineResponse2001DataTargetPrice), InlineResponse2002Recommendation recommendation = default(InlineResponse2002Recommendation))
        {
            this.Snapshot = snapshot;
            this.TargetPrice = targetPrice;
            this.Recommendation = recommendation;
        }

        /// <summary>
        /// Gets or Sets TargetPrice
        /// </summary>
        [DataMember(Name = "targetPrice", EmitDefaultValue = false)]
        public InlineResponse2001DataTargetPrice TargetPrice { get; set; }

        /// <summary>
        /// Gets or Sets Recommendation
        /// </summary>
        [DataMember(Name = "recommendation", EmitDefaultValue = false)]
        public InlineResponse2002Recommendation Recommendation { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2002Data {\n");
            sb.Append("  Snapshot: ").Append(Snapshot).Append("\n");
            sb.Append("  TargetPrice: ").Append(TargetPrice).Append("\n");
            sb.Append("  Recommendation: ").Append(Recommendation).Append("\n");
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
            return this.Equals(input as InlineResponse2002Data);
        }

        /// <summary>
        /// Returns true if InlineResponse2002Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2002Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2002Data input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Snapshot == input.Snapshot ||
                    this.Snapshot.Equals(input.Snapshot)
                ) && 
                (
                    this.TargetPrice == input.TargetPrice ||
                    (this.TargetPrice != null &&
                    this.TargetPrice.Equals(input.TargetPrice))
                ) && 
                (
                    this.Recommendation == input.Recommendation ||
                    (this.Recommendation != null &&
                    this.Recommendation.Equals(input.Recommendation))
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
                hashCode = (hashCode * 59) + this.Snapshot.GetHashCode();
                if (this.TargetPrice != null)
                {
                    hashCode = (hashCode * 59) + this.TargetPrice.GetHashCode();
                }
                if (this.Recommendation != null)
                {
                    hashCode = (hashCode * 59) + this.Recommendation.GetHashCode();
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