/*
 * FactSet SCIM API
 *
 * FactSet's SCIM API implementation.
 *
 * The version of the OpenAPI document: 2.0.0
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
using OpenAPIDateConverter = FactSet.SDK.ProcuretoPayAPISCIM.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ProcuretoPayAPISCIM.Model
{
    /// <summary>
    /// LocationResourceReference
    /// </summary>
    [DataContract(Name = "LocationResourceReference")]
    public partial class LocationResourceReference : IEquatable<LocationResourceReference>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LocationResourceReference" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LocationResourceReference() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LocationResourceReference" /> class.
        /// </summary>
        /// <param name="value">Identifier of the Location. (required).</param>
        /// <param name="_ref">The URI corresponding to a SCIM resource that is this Location..</param>
        /// <param name="display">A human-readable name, primarily used for display purposes..</param>
        public LocationResourceReference(string value,string _ref = default(string), string display = default(string))
        {
            // to ensure "value" is required (not null)
            if (value == null) {
                throw new ArgumentNullException("value is a required property for LocationResourceReference and cannot be null");
            }
            this.Value = value;
            this.Ref = _ref;
            this.Display = display;
        }

        /// <summary>
        /// Identifier of the Location.
        /// </summary>
        /// <value>Identifier of the Location.</value>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// The URI corresponding to a SCIM resource that is this Location.
        /// </summary>
        /// <value>The URI corresponding to a SCIM resource that is this Location.</value>
        [DataMember(Name = "$ref", EmitDefaultValue = false)]
        public string Ref { get; set; }

        /// <summary>
        /// A human-readable name, primarily used for display purposes.
        /// </summary>
        /// <value>A human-readable name, primarily used for display purposes.</value>
        [DataMember(Name = "display", EmitDefaultValue = false)]
        public string Display { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class LocationResourceReference {\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Ref: ").Append(Ref).Append("\n");
            sb.Append("  Display: ").Append(Display).Append("\n");
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
            return this.Equals(input as LocationResourceReference);
        }

        /// <summary>
        /// Returns true if LocationResourceReference instances are equal
        /// </summary>
        /// <param name="input">Instance of LocationResourceReference to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LocationResourceReference input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Ref == input.Ref ||
                    (this.Ref != null &&
                    this.Ref.Equals(input.Ref))
                ) && 
                (
                    this.Display == input.Display ||
                    (this.Display != null &&
                    this.Display.Equals(input.Display))
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
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
                }
                if (this.Ref != null)
                {
                    hashCode = (hashCode * 59) + this.Ref.GetHashCode();
                }
                if (this.Display != null)
                {
                    hashCode = (hashCode * 59) + this.Display.GetHashCode();
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
