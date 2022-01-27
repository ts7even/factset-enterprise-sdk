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
    /// Value range of the arithmetic mean of the trading value for different time ranges.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_tradingValue_average")]
    public partial class InlineResponse2005DataTradingValueAverage : IEquatable<InlineResponse2005DataTradingValueAverage>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataTradingValueAverage" /> class.
        /// </summary>
        /// <param name="days5">days5.</param>
        /// <param name="days30">days30.</param>
        public InlineResponse2005DataTradingValueAverage(InlineResponse2005DataTradingValueAverageDays5 days5 = default(InlineResponse2005DataTradingValueAverageDays5), InlineResponse2005DataTradingValueAverageDays30 days30 = default(InlineResponse2005DataTradingValueAverageDays30))
        {
            this.Days5 = days5;
            this.Days30 = days30;
        }

        /// <summary>
        /// Gets or Sets Days5
        /// </summary>
        [DataMember(Name = "days5", EmitDefaultValue = false)]
        public InlineResponse2005DataTradingValueAverageDays5 Days5 { get; set; }

        /// <summary>
        /// Gets or Sets Days30
        /// </summary>
        [DataMember(Name = "days30", EmitDefaultValue = false)]
        public InlineResponse2005DataTradingValueAverageDays30 Days30 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataTradingValueAverage {\n");
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
            return this.Equals(input as InlineResponse2005DataTradingValueAverage);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataTradingValueAverage instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataTradingValueAverage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataTradingValueAverage input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Days5 == input.Days5 ||
                    (this.Days5 != null &&
                    this.Days5.Equals(input.Days5))
                ) && 
                (
                    this.Days30 == input.Days30 ||
                    (this.Days30 != null &&
                    this.Days30.Equals(input.Days30))
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
                if (this.Days5 != null)
                    hashCode = hashCode * 59 + this.Days5.GetHashCode();
                if (this.Days30 != null)
                    hashCode = hashCode * 59 + this.Days30.GetHashCode();
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