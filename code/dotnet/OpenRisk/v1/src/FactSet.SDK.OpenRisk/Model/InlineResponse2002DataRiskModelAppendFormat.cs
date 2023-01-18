/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.23.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OpenRisk.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OpenRisk.Model
{
    /// <summary>
    /// InlineResponse2002DataRiskModelAppendFormat
    /// </summary>
    [DataContract(Name = "inline_response_200_2_data_riskModelAppendFormat")]
    public partial class InlineResponse2002DataRiskModelAppendFormat : IEquatable<InlineResponse2002DataRiskModelAppendFormat>, IValidatableObject
    {
        /// <summary>
        /// The type of data which must be provided
        /// </summary>
        /// <value>The type of data which must be provided</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum String for value: String
            /// </summary>
            [EnumMember(Value = "String")]
            String = 1,

            /// <summary>
            /// Enum Double for value: Double
            /// </summary>
            [EnumMember(Value = "Double")]
            Double = 2

        }


        /// <summary>
        /// The type of data which must be provided
        /// </summary>
        /// <value>The type of data which must be provided</value>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = false)]
        public TypeEnum Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2002DataRiskModelAppendFormat" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse2002DataRiskModelAppendFormat() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2002DataRiskModelAppendFormat" /> class.
        /// </summary>
        /// <param name="id">Field id (required).</param>
        /// <param name="type">The type of data which must be provided (required).</param>
        public InlineResponse2002DataRiskModelAppendFormat(string id, TypeEnum type)
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for InlineResponse2002DataRiskModelAppendFormat and cannot be null");
            }
            this.Id = id;
            this.Type = type;
        }

        /// <summary>
        /// Field id
        /// </summary>
        /// <value>Field id</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2002DataRiskModelAppendFormat {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as InlineResponse2002DataRiskModelAppendFormat);
        }

        /// <summary>
        /// Returns true if InlineResponse2002DataRiskModelAppendFormat instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2002DataRiskModelAppendFormat to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2002DataRiskModelAppendFormat input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Type.GetHashCode();
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
            // Id (string) minLength
            if (this.Id != null && this.Id.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Id, length must be greater than 1.", new [] { "Id" });
            }

            yield break;
        }
    }

}
