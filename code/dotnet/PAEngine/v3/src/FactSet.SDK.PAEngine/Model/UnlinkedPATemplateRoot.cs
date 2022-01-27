/*
 * PA Engine API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.PAEngine.Client.OpenAPIDateConverter;

namespace FactSet.SDK.PAEngine.Model
{
    /// <summary>
    /// UnlinkedPATemplateRoot
    /// </summary>
    [DataContract(Name = "UnlinkedPATemplateRoot")]
    public partial class UnlinkedPATemplateRoot : IEquatable<UnlinkedPATemplateRoot>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UnlinkedPATemplateRoot" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UnlinkedPATemplateRoot() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UnlinkedPATemplateRoot" /> class.
        /// </summary>
        /// <param name="data">data (required).</param>
        /// <param name="meta">meta.</param>
        public UnlinkedPATemplateRoot(UnlinkedPATemplate data = default(UnlinkedPATemplate), Object meta = default(Object))
        {
            // to ensure "data" is required (not null)
            if (data == null) {
                throw new ArgumentNullException("data is a required property for UnlinkedPATemplateRoot and cannot be null");
            }
            this.Data = data;
            this.Meta = meta;
        }

        /// <summary>
        /// Gets or Sets Data
        /// </summary>
        [DataMember(Name = "data", IsRequired = true, EmitDefaultValue = false)]
        public UnlinkedPATemplate Data { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = true)]
        public Object Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UnlinkedPATemplateRoot {\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
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
            return this.Equals(input as UnlinkedPATemplateRoot);
        }

        /// <summary>
        /// Returns true if UnlinkedPATemplateRoot instances are equal
        /// </summary>
        /// <param name="input">Instance of UnlinkedPATemplateRoot to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UnlinkedPATemplateRoot input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Data == input.Data ||
                    (this.Data != null &&
                    this.Data.Equals(input.Data))
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
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
                if (this.Data != null)
                    hashCode = hashCode * 59 + this.Data.GetHashCode();
                if (this.Meta != null)
                    hashCode = hashCode * 59 + this.Meta.GetHashCode();
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