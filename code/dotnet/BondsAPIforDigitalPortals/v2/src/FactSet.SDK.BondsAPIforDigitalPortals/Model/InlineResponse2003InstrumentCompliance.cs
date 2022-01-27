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
    /// Compliance properties.
    /// </summary>
    [DataContract(Name = "inline_response_200_3_instrument_compliance")]
    public partial class InlineResponse2003InstrumentCompliance : IEquatable<InlineResponse2003InstrumentCompliance>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2003InstrumentCompliance" /> class.
        /// </summary>
        /// <param name="germany">germany.</param>
        public InlineResponse2003InstrumentCompliance(InlineResponse2003InstrumentComplianceGermany germany = default(InlineResponse2003InstrumentComplianceGermany))
        {
            this.Germany = germany;
        }

        /// <summary>
        /// Gets or Sets Germany
        /// </summary>
        [DataMember(Name = "germany", EmitDefaultValue = false)]
        public InlineResponse2003InstrumentComplianceGermany Germany { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2003InstrumentCompliance {\n");
            sb.Append("  Germany: ").Append(Germany).Append("\n");
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
            return this.Equals(input as InlineResponse2003InstrumentCompliance);
        }

        /// <summary>
        /// Returns true if InlineResponse2003InstrumentCompliance instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2003InstrumentCompliance to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2003InstrumentCompliance input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Germany == input.Germany ||
                    (this.Germany != null &&
                    this.Germany.Equals(input.Germany))
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
                if (this.Germany != null)
                    hashCode = hashCode * 59 + this.Germany.GetHashCode();
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