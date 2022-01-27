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
    /// Occurrence and frequency of the dividend.
    /// </summary>
    [DataContract(Name = "inline_response_200_occurrence")]
    public partial class InlineResponse200Occurrence : IEquatable<InlineResponse200Occurrence>, IValidatableObject
    {
        /// <summary>
        /// Occurrence type.
        /// </summary>
        /// <value>Occurrence type.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum Periodic for value: periodic
            /// </summary>
            [EnumMember(Value = "periodic")]
            Periodic = 1,

            /// <summary>
            /// Enum Extraordinary for value: extraordinary
            /// </summary>
            [EnumMember(Value = "extraordinary")]
            Extraordinary = 2

        }


        /// <summary>
        /// Occurrence type.
        /// </summary>
        /// <value>Occurrence type.</value>
        [DataMember(Name = "type", EmitDefaultValue = false)]
        public TypeEnum? Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200Occurrence" /> class.
        /// </summary>
        /// <param name="type">Occurrence type..</param>
        /// <param name="frequency">frequency.</param>
        public InlineResponse200Occurrence(TypeEnum? type = default(TypeEnum?), InlineResponse200OccurrenceFrequency frequency = default(InlineResponse200OccurrenceFrequency))
        {
            this.Type = type;
            this.Frequency = frequency;
        }

        /// <summary>
        /// Gets or Sets Frequency
        /// </summary>
        [DataMember(Name = "frequency", EmitDefaultValue = false)]
        public InlineResponse200OccurrenceFrequency Frequency { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse200Occurrence {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Frequency: ").Append(Frequency).Append("\n");
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
            return this.Equals(input as InlineResponse200Occurrence);
        }

        /// <summary>
        /// Returns true if InlineResponse200Occurrence instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200Occurrence to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200Occurrence input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
                ) && 
                (
                    this.Frequency == input.Frequency ||
                    (this.Frequency != null &&
                    this.Frequency.Equals(input.Frequency))
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
                hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Frequency != null)
                    hashCode = hashCode * 59 + this.Frequency.GetHashCode();
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