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
    /// List of effective underylings of factor certificates.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_underlying_effectiveUnderlying")]
    public partial class InlineResponse2005DataUnderlyingEffectiveUnderlying : IEquatable<InlineResponse2005DataUnderlyingEffectiveUnderlying>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataUnderlyingEffectiveUnderlying" /> class.
        /// </summary>
        /// <param name="instrument">Underlying instruments..</param>
        public InlineResponse2005DataUnderlyingEffectiveUnderlying(List<InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument> instrument = default(List<InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument>))
        {
            this.Instrument = instrument;
        }

        /// <summary>
        /// Underlying instruments.
        /// </summary>
        /// <value>Underlying instruments.</value>
        [DataMember(Name = "instrument", EmitDefaultValue = false)]
        public List<InlineResponse2005DataUnderlyingEffectiveUnderlyingInstrument> Instrument { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataUnderlyingEffectiveUnderlying {\n");
            sb.Append("  Instrument: ").Append(Instrument).Append("\n");
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
            return this.Equals(input as InlineResponse2005DataUnderlyingEffectiveUnderlying);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataUnderlyingEffectiveUnderlying instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataUnderlyingEffectiveUnderlying to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataUnderlyingEffectiveUnderlying input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Instrument == input.Instrument ||
                    this.Instrument != null &&
                    input.Instrument != null &&
                    this.Instrument.SequenceEqual(input.Instrument)
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
                if (this.Instrument != null)
                    hashCode = hashCode * 59 + this.Instrument.GetHashCode();
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