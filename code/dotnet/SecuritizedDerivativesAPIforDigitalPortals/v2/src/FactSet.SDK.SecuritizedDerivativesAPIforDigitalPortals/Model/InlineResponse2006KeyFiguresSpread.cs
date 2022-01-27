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
using OpenAPIDateConverter = FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Spread of the securitized derivative. It represents the difference between the ask and bid price.
    /// </summary>
    [DataContract(Name = "inline_response_200_6_keyFigures_spread")]
    public partial class InlineResponse2006KeyFiguresSpread : IEquatable<InlineResponse2006KeyFiguresSpread>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006KeyFiguresSpread" /> class.
        /// </summary>
        /// <param name="harmonized">Spread in absolute terms, adjusted for the cover ratio..</param>
        /// <param name="relative">Spread relative to the ask price..</param>
        public InlineResponse2006KeyFiguresSpread(decimal harmonized = default(decimal), decimal relative = default(decimal))
        {
            this.Harmonized = harmonized;
            this.Relative = relative;
        }

        /// <summary>
        /// Spread in absolute terms, adjusted for the cover ratio.
        /// </summary>
        /// <value>Spread in absolute terms, adjusted for the cover ratio.</value>
        [DataMember(Name = "harmonized", EmitDefaultValue = false)]
        public decimal Harmonized { get; set; }

        /// <summary>
        /// Spread relative to the ask price.
        /// </summary>
        /// <value>Spread relative to the ask price.</value>
        [DataMember(Name = "relative", EmitDefaultValue = false)]
        public decimal Relative { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2006KeyFiguresSpread {\n");
            sb.Append("  Harmonized: ").Append(Harmonized).Append("\n");
            sb.Append("  Relative: ").Append(Relative).Append("\n");
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
            return this.Equals(input as InlineResponse2006KeyFiguresSpread);
        }

        /// <summary>
        /// Returns true if InlineResponse2006KeyFiguresSpread instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006KeyFiguresSpread to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006KeyFiguresSpread input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Harmonized == input.Harmonized ||
                    this.Harmonized.Equals(input.Harmonized)
                ) && 
                (
                    this.Relative == input.Relative ||
                    this.Relative.Equals(input.Relative)
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
                hashCode = hashCode * 59 + this.Harmonized.GetHashCode();
                hashCode = hashCode * 59 + this.Relative.GetHashCode();
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