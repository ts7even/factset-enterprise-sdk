/*
 * FactSet Overview Report Builder API
 *
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OverviewReportBuilder.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OverviewReportBuilder.Model
{
    /// <summary>
    /// Number of stages of financing that a startup or early-stage company goes through
    /// </summary>
    [DataContract(Name = "KeyStatsEntityObject_fundingRounds")]
    public partial class KeyStatsEntityObjectFundingRounds : IEquatable<KeyStatsEntityObjectFundingRounds>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KeyStatsEntityObjectFundingRounds" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected KeyStatsEntityObjectFundingRounds() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="KeyStatsEntityObjectFundingRounds" /> class.
        /// </summary>
        /// <param name="value">value (required).</param>
        /// <param name="label">label (required).</param>
        public KeyStatsEntityObjectFundingRounds(KeyStatsEntityObjectAverageDailyVolValue value, KeyStatsEntityObjectRange52WeekValue label)
        {
            // to ensure "value" is required (not null)
            if (value == null) {
                throw new ArgumentNullException("value is a required property for KeyStatsEntityObjectFundingRounds and cannot be null");
            }
            this.Value = value;
            // to ensure "label" is required (not null)
            if (label == null) {
                throw new ArgumentNullException("label is a required property for KeyStatsEntityObjectFundingRounds and cannot be null");
            }
            this.Label = label;
        }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = false)]
        public KeyStatsEntityObjectAverageDailyVolValue Value { get; set; }

        /// <summary>
        /// Gets or Sets Label
        /// </summary>
        [DataMember(Name = "label", IsRequired = true, EmitDefaultValue = false)]
        public KeyStatsEntityObjectRange52WeekValue Label { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class KeyStatsEntityObjectFundingRounds {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
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
            return this.Equals(input as KeyStatsEntityObjectFundingRounds);
        }

        /// <summary>
        /// Returns true if KeyStatsEntityObjectFundingRounds instances are equal
        /// </summary>
        /// <param name="input">Instance of KeyStatsEntityObjectFundingRounds to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KeyStatsEntityObjectFundingRounds input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Label == input.Label ||
                    (this.Label != null &&
                    this.Label.Equals(input.Label))
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
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
                }
                if (this.Label != null)
                {
                    hashCode = (hashCode * 59) + this.Label.GetHashCode();
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
