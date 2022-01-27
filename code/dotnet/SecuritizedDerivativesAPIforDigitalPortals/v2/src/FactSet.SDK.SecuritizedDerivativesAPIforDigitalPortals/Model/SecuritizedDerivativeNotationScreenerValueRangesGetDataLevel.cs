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
    /// Barrier level.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_screener_valueRanges_get_data_level")]
    public partial class SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel : IEquatable<SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel" /> class.
        /// </summary>
        /// <param name="absolute">absolute.</param>
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsolute absolute = default(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsolute))
        {
            this.Absolute = absolute;
        }

        /// <summary>
        /// Gets or Sets Absolute
        /// </summary>
        [DataMember(Name = "absolute", EmitDefaultValue = false)]
        public SecuritizedDerivativeNotationScreenerValueRangesGetDataLevelAbsolute Absolute { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel {\n");
            sb.Append("  Absolute: ").Append(Absolute).Append("\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Absolute == input.Absolute ||
                    (this.Absolute != null &&
                    this.Absolute.Equals(input.Absolute))
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
                if (this.Absolute != null)
                    hashCode = hashCode * 59 + this.Absolute.GetHashCode();
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