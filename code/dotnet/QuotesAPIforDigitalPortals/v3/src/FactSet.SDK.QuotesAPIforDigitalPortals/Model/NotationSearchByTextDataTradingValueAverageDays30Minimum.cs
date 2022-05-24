/*
 * Quotes API For Digital Portals
 *
 * The quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the Time Series API for Digital Portals for direct access to price histories, and the News API for Digital Portals for searching and fetching related news.
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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// The minimum of the range, or &#x60;null&#x60; to indicate that there is no minimum.
    /// </summary>
    [DataContract(Name = "_notation_searchByText_data_tradingValue_average_days30_minimum")]
    public partial class NotationSearchByTextDataTradingValueAverageDays30Minimum : IEquatable<NotationSearchByTextDataTradingValueAverageDays30Minimum>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationSearchByTextDataTradingValueAverageDays30Minimum" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotationSearchByTextDataTradingValueAverageDays30Minimum() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationSearchByTextDataTradingValueAverageDays30Minimum" /> class.
        /// </summary>
        /// <param name="value">The minimum value. (required).</param>
        /// <param name="inclusive">Indicates whether the minimum value is included in the range or not. (default to true).</param>
        public NotationSearchByTextDataTradingValueAverageDays30Minimum(decimal value = default(decimal), bool inclusive = true)
        {
            this.Value = value;
            this.Inclusive = inclusive;
        }

        /// <summary>
        /// The minimum value.
        /// </summary>
        /// <value>The minimum value.</value>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = false)]
        public decimal Value { get; set; }

        /// <summary>
        /// Indicates whether the minimum value is included in the range or not.
        /// </summary>
        /// <value>Indicates whether the minimum value is included in the range or not.</value>
        [DataMember(Name = "inclusive", EmitDefaultValue = true)]
        public bool Inclusive { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NotationSearchByTextDataTradingValueAverageDays30Minimum {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Inclusive: ").Append(Inclusive).Append("\n");
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
            return this.Equals(input as NotationSearchByTextDataTradingValueAverageDays30Minimum);
        }

        /// <summary>
        /// Returns true if NotationSearchByTextDataTradingValueAverageDays30Minimum instances are equal
        /// </summary>
        /// <param name="input">Instance of NotationSearchByTextDataTradingValueAverageDays30Minimum to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotationSearchByTextDataTradingValueAverageDays30Minimum input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
                ) && 
                (
                    this.Inclusive == input.Inclusive ||
                    this.Inclusive.Equals(input.Inclusive)
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
                hashCode = (hashCode * 59) + this.Value.GetHashCode();
                hashCode = (hashCode * 59) + this.Inclusive.GetHashCode();
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