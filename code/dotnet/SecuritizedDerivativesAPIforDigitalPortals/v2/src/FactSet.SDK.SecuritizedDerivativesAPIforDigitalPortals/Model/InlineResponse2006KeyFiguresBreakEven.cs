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
    /// Break even point. It represents the underlying level that has to be reached at maturity, such that no loss or profit occurs for the holder of the securitized derivative.
    /// </summary>
    [DataContract(Name = "inline_response_200_6_keyFigures_breakEven")]
    public partial class InlineResponse2006KeyFiguresBreakEven : IEquatable<InlineResponse2006KeyFiguresBreakEven>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006KeyFiguresBreakEven" /> class.
        /// </summary>
        /// <param name="breakEvenPoint">Break even point. For the value unit, see attribute &#x60;instrument.underlying.valueUnit&#x60;..</param>
        /// <param name="distance">distance.</param>
        public InlineResponse2006KeyFiguresBreakEven(decimal breakEvenPoint = default(decimal), InlineResponse2006KeyFiguresBreakEvenDistance distance = default(InlineResponse2006KeyFiguresBreakEvenDistance))
        {
            this.BreakEvenPoint = breakEvenPoint;
            this.Distance = distance;
        }

        /// <summary>
        /// Break even point. For the value unit, see attribute &#x60;instrument.underlying.valueUnit&#x60;.
        /// </summary>
        /// <value>Break even point. For the value unit, see attribute &#x60;instrument.underlying.valueUnit&#x60;.</value>
        [DataMember(Name = "breakEvenPoint", EmitDefaultValue = false)]
        public decimal BreakEvenPoint { get; set; }

        /// <summary>
        /// Gets or Sets Distance
        /// </summary>
        [DataMember(Name = "distance", EmitDefaultValue = false)]
        public InlineResponse2006KeyFiguresBreakEvenDistance Distance { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2006KeyFiguresBreakEven {\n");
            sb.Append("  BreakEvenPoint: ").Append(BreakEvenPoint).Append("\n");
            sb.Append("  Distance: ").Append(Distance).Append("\n");
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
            return this.Equals(input as InlineResponse2006KeyFiguresBreakEven);
        }

        /// <summary>
        /// Returns true if InlineResponse2006KeyFiguresBreakEven instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006KeyFiguresBreakEven to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006KeyFiguresBreakEven input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.BreakEvenPoint == input.BreakEvenPoint ||
                    this.BreakEvenPoint.Equals(input.BreakEvenPoint)
                ) && 
                (
                    this.Distance == input.Distance ||
                    (this.Distance != null &&
                    this.Distance.Equals(input.Distance))
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
                hashCode = hashCode * 59 + this.BreakEvenPoint.GetHashCode();
                if (this.Distance != null)
                    hashCode = hashCode * 59 + this.Distance.GetHashCode();
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