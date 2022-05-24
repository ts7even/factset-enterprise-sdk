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
using OpenAPIDateConverter = FactSet.SDK.ETFProfileandPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ETFProfileandPrices.Model
{
    /// <summary>
    /// Index change.
    /// </summary>
    [DataContract(Name = "inline_response_200_10_data_indexChange")]
    public partial class InlineResponse20010DataIndexChange : IEquatable<InlineResponse20010DataIndexChange>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20010DataIndexChange" /> class.
        /// </summary>
        /// <param name="hasChanged">States whether an index change has occurred. Available for the regions: US..</param>
        /// <param name="date">Date of the most recent index change, if applicable. Available for the regions: US..</param>
        public InlineResponse20010DataIndexChange(bool hasChanged = default(bool), DateTime date = default(DateTime))
        {
            this.HasChanged = hasChanged;
            this.Date = date;
        }

        /// <summary>
        /// States whether an index change has occurred. Available for the regions: US.
        /// </summary>
        /// <value>States whether an index change has occurred. Available for the regions: US.</value>
        [DataMember(Name = "hasChanged", EmitDefaultValue = true)]
        public bool HasChanged { get; set; }

        /// <summary>
        /// Date of the most recent index change, if applicable. Available for the regions: US.
        /// </summary>
        /// <value>Date of the most recent index change, if applicable. Available for the regions: US.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse20010DataIndexChange {\n");
            sb.Append("  HasChanged: ").Append(HasChanged).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
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
            return this.Equals(input as InlineResponse20010DataIndexChange);
        }

        /// <summary>
        /// Returns true if InlineResponse20010DataIndexChange instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20010DataIndexChange to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20010DataIndexChange input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.HasChanged == input.HasChanged ||
                    this.HasChanged.Equals(input.HasChanged)
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
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
                hashCode = (hashCode * 59) + this.HasChanged.GetHashCode();
                if (this.Date != null)
                {
                    hashCode = (hashCode * 59) + this.Date.GetHashCode();
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