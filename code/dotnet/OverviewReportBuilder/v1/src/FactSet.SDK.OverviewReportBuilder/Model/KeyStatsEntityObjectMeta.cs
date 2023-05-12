/*
 * FactSet Overview Report Builder API
 *
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OverviewReportBuilder.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OverviewReportBuilder.Model
{
    /// <summary>
    /// KeyStatsEntityObjectMeta
    /// </summary>
    [DataContract(Name = "KeyStatsEntityObject_meta")]
    public partial class KeyStatsEntityObjectMeta : IEquatable<KeyStatsEntityObjectMeta>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KeyStatsEntityObjectMeta" /> class.
        /// </summary>
        /// <param name="sources">sources.</param>
        public KeyStatsEntityObjectMeta(KeyStatsEntityObjectMetaSources sources = default(KeyStatsEntityObjectMetaSources))
        {
            this.Sources = sources;
        }

        /// <summary>
        /// Gets or Sets Sources
        /// </summary>
        [DataMember(Name = "sources", EmitDefaultValue = false)]
        public KeyStatsEntityObjectMetaSources Sources { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class KeyStatsEntityObjectMeta {\n");
            sb.Append("  Sources: ").Append(Sources).Append("\n");
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
            return this.Equals(input as KeyStatsEntityObjectMeta);
        }

        /// <summary>
        /// Returns true if KeyStatsEntityObjectMeta instances are equal
        /// </summary>
        /// <param name="input">Instance of KeyStatsEntityObjectMeta to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KeyStatsEntityObjectMeta input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Sources == input.Sources ||
                    (this.Sources != null &&
                    this.Sources.Equals(input.Sources))
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
                if (this.Sources != null)
                {
                    hashCode = (hashCode * 59) + this.Sources.GetHashCode();
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