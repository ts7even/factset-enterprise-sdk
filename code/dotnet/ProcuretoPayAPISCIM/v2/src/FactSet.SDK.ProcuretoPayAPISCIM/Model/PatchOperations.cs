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
    /// PatchOperations
    /// </summary>
    [DataContract(Name = "Patch_Operations")]
    public partial class PatchOperations : IEquatable<PatchOperations>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PatchOperations" /> class.
        /// </summary>
        /// <param name="op">op.</param>
        /// <param name="path">path.</param>
        /// <param name="value">value.</param>
        public PatchOperations(string op = default(string), string path = default(string), string value = default(string))
        {
            this.Op = op;
            this.Path = path;
            this.Value = value;
        }

        /// <summary>
        /// Gets or Sets Op
        /// </summary>
        [DataMember(Name = "op", EmitDefaultValue = false)]
        public string Op { get; set; }

        /// <summary>
        /// Gets or Sets Path
        /// </summary>
        [DataMember(Name = "path", EmitDefaultValue = false)]
        public string Path { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PatchOperations {\n");
            sb.Append("  Op: ").Append(Op).Append("\n");
            sb.Append("  Path: ").Append(Path).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as PatchOperations);
        }

        /// <summary>
        /// Returns true if PatchOperations instances are equal
        /// </summary>
        /// <param name="input">Instance of PatchOperations to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PatchOperations input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Op == input.Op ||
                    (this.Op != null &&
                    this.Op.Equals(input.Op))
                ) && 
                (
                    this.Path == input.Path ||
                    (this.Path != null &&
                    this.Path.Equals(input.Path))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
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
                if (this.Op != null)
                {
                    hashCode = (hashCode * 59) + this.Op.GetHashCode();
                }
                if (this.Path != null)
                {
                    hashCode = (hashCode * 59) + this.Path.GetHashCode();
                }
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
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
