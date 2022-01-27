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
using OpenAPIDateConverter = FactSet.SDK.BondsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.BondsAPIforDigitalPortals.Model
{
    /// <summary>
    /// InlineResponse2004DataLifeCycleMaturityPerpetual
    /// </summary>
    [DataContract(Name = "inline_response_200_4_data_lifeCycle_maturity_perpetual")]
    public partial class InlineResponse2004DataLifeCycleMaturityPerpetual : IEquatable<InlineResponse2004DataLifeCycleMaturityPerpetual>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2004DataLifeCycleMaturityPerpetual" /> class.
        /// </summary>
        /// <param name="value">Attribute value..</param>
        /// <param name="count">Number of notations..</param>
        public InlineResponse2004DataLifeCycleMaturityPerpetual(bool value = default(bool), decimal count = default(decimal))
        {
            this.Value = value;
            this.Count = count;
        }

        /// <summary>
        /// Attribute value.
        /// </summary>
        /// <value>Attribute value.</value>
        [DataMember(Name = "value", EmitDefaultValue = true)]
        public bool Value { get; set; }

        /// <summary>
        /// Number of notations.
        /// </summary>
        /// <value>Number of notations.</value>
        [DataMember(Name = "count", EmitDefaultValue = false)]
        public decimal Count { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2004DataLifeCycleMaturityPerpetual {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Count: ").Append(Count).Append("\n");
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
            return this.Equals(input as InlineResponse2004DataLifeCycleMaturityPerpetual);
        }

        /// <summary>
        /// Returns true if InlineResponse2004DataLifeCycleMaturityPerpetual instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2004DataLifeCycleMaturityPerpetual to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2004DataLifeCycleMaturityPerpetual input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
                ) && 
                (
                    this.Count == input.Count ||
                    this.Count.Equals(input.Count)
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
                hashCode = hashCode * 59 + this.Value.GetHashCode();
                hashCode = hashCode * 59 + this.Count.GetHashCode();
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