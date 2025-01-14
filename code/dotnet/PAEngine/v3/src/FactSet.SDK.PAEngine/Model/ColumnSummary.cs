/*
 * PA Engine API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3.14.0
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
using OpenAPIDateConverter = FactSet.SDK.PAEngine.Client.OpenAPIDateConverter;

namespace FactSet.SDK.PAEngine.Model
{
    /// <summary>
    /// Column settings (name, directory, category)
    /// </summary>
    [DataContract(Name = "ColumnSummary")]
    public partial class ColumnSummary : IEquatable<ColumnSummary>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ColumnSummary" /> class.
        /// </summary>
        /// <param name="name">Column Name.</param>
        /// <param name="directory">Column Directory.</param>
        /// <param name="category">Column Category.</param>
        public ColumnSummary(string name = default(string), string directory = default(string), string category = default(string))
        {
            this.Name = name;
            this.Directory = directory;
            this.Category = category;
        }

        /// <summary>
        /// Column Name
        /// </summary>
        /// <value>Column Name</value>
        [DataMember(Name = "name", EmitDefaultValue = true)]
        public string Name { get; set; }

        /// <summary>
        /// Column Directory
        /// </summary>
        /// <value>Column Directory</value>
        [DataMember(Name = "directory", EmitDefaultValue = true)]
        public string Directory { get; set; }

        /// <summary>
        /// Column Category
        /// </summary>
        /// <value>Column Category</value>
        [DataMember(Name = "category", EmitDefaultValue = true)]
        public string Category { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ColumnSummary {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Directory: ").Append(Directory).Append("\n");
            sb.Append("  Category: ").Append(Category).Append("\n");
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
            return this.Equals(input as ColumnSummary);
        }

        /// <summary>
        /// Returns true if ColumnSummary instances are equal
        /// </summary>
        /// <param name="input">Instance of ColumnSummary to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ColumnSummary input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Directory == input.Directory ||
                    (this.Directory != null &&
                    this.Directory.Equals(input.Directory))
                ) && 
                (
                    this.Category == input.Category ||
                    (this.Category != null &&
                    this.Category.Equals(input.Category))
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
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Directory != null)
                {
                    hashCode = (hashCode * 59) + this.Directory.GetHashCode();
                }
                if (this.Category != null)
                {
                    hashCode = (hashCode * 59) + this.Category.GetHashCode();
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
