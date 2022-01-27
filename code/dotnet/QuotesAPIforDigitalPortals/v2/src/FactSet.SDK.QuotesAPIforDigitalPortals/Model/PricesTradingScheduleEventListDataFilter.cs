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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Criteria that filter the items in the response list; only items that match all of the criteria are returned.
    /// </summary>
    [DataContract(Name = "_prices_tradingSchedule_event_list_data_filter")]
    public partial class PricesTradingScheduleEventListDataFilter : IEquatable<PricesTradingScheduleEventListDataFilter>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PricesTradingScheduleEventListDataFilter" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PricesTradingScheduleEventListDataFilter() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PricesTradingScheduleEventListDataFilter" /> class.
        /// </summary>
        /// <param name="types">List of trading schedule event types to return. See endpoint &#x60;/prices/tradingSchedule/event/type/list&#x60; for valid values. (required).</param>
        /// <param name="range">range (required).</param>
        public PricesTradingScheduleEventListDataFilter(List<decimal> types = default(List<decimal>), PricesTradingScheduleEventListDataFilterRange range = default(PricesTradingScheduleEventListDataFilterRange))
        {
            // to ensure "types" is required (not null)
            if (types == null) {
                throw new ArgumentNullException("types is a required property for PricesTradingScheduleEventListDataFilter and cannot be null");
            }
            this.Types = types;
            // to ensure "range" is required (not null)
            if (range == null) {
                throw new ArgumentNullException("range is a required property for PricesTradingScheduleEventListDataFilter and cannot be null");
            }
            this.Range = range;
        }

        /// <summary>
        /// List of trading schedule event types to return. See endpoint &#x60;/prices/tradingSchedule/event/type/list&#x60; for valid values.
        /// </summary>
        /// <value>List of trading schedule event types to return. See endpoint &#x60;/prices/tradingSchedule/event/type/list&#x60; for valid values.</value>
        [DataMember(Name = "types", IsRequired = true, EmitDefaultValue = false)]
        public List<decimal> Types { get; set; }

        /// <summary>
        /// Gets or Sets Range
        /// </summary>
        [DataMember(Name = "range", IsRequired = true, EmitDefaultValue = false)]
        public PricesTradingScheduleEventListDataFilterRange Range { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PricesTradingScheduleEventListDataFilter {\n");
            sb.Append("  Types: ").Append(Types).Append("\n");
            sb.Append("  Range: ").Append(Range).Append("\n");
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
            return this.Equals(input as PricesTradingScheduleEventListDataFilter);
        }

        /// <summary>
        /// Returns true if PricesTradingScheduleEventListDataFilter instances are equal
        /// </summary>
        /// <param name="input">Instance of PricesTradingScheduleEventListDataFilter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PricesTradingScheduleEventListDataFilter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Types == input.Types ||
                    this.Types != null &&
                    input.Types != null &&
                    this.Types.SequenceEqual(input.Types)
                ) && 
                (
                    this.Range == input.Range ||
                    (this.Range != null &&
                    this.Range.Equals(input.Range))
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
                if (this.Types != null)
                    hashCode = hashCode * 59 + this.Types.GetHashCode();
                if (this.Range != null)
                    hashCode = hashCode * 59 + this.Range.GetHashCode();
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