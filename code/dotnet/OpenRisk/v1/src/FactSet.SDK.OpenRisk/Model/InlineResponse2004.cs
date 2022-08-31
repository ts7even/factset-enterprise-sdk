/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
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
    /// InlineResponse2004
    /// </summary>
    [DataContract(Name = "inline_response_200_4")]
    public partial class InlineResponse2004 : IEquatable<InlineResponse2004>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected InlineResponse2004() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004" /> class.
        /// </summary>
        /// <param name="meta">meta (required).</param>
        /// <param name="data">Calculation results aligned to the input list of requested risk statistics (required).</param>
        public InlineResponse2004(SuccessResponseMeta meta, List<Object> data)
        {
            // to ensure "meta" is required (not null)
            if (meta == null) {
                throw new ArgumentNullException("meta is a required property for InlineResponse2004 and cannot be null");
            }
            this.Meta = meta;
            // to ensure "data" is required (not null)
            if (data == null) {
                throw new ArgumentNullException("data is a required property for InlineResponse2004 and cannot be null");
            }
            this.Data = data;
        }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", IsRequired = true, EmitDefaultValue = false)]
        public SuccessResponseMeta Meta { get; set; }

        /// <summary>
        /// Calculation results aligned to the input list of requested risk statistics
        /// </summary>
        /// <value>Calculation results aligned to the input list of requested risk statistics</value>
        [DataMember(Name = "data", IsRequired = true, EmitDefaultValue = false)]
        public List<Object> Data { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2004 {\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
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
            return this.Equals(input as InlineResponse2004);
        }

        /// <summary>
        /// Returns true if InlineResponse2004 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2004 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2004 input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
                ) && 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
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
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
                }
                if (this.Data != null)
                {
                    hashCode = (hashCode * 59) + this.Data.GetHashCode();
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
