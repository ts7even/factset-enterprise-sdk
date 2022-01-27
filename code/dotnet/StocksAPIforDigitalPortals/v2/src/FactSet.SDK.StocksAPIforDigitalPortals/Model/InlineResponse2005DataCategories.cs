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
using OpenAPIDateConverter = FactSet.SDK.StocksAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.StocksAPIforDigitalPortals.Model
{
    /// <summary>
    /// InlineResponse2005DataCategories
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data_categories")]
    public partial class InlineResponse2005DataCategories : IEquatable<InlineResponse2005DataCategories>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005DataCategories" /> class.
        /// </summary>
        /// <param name="id">Identifier of a category..</param>
        /// <param name="name">Name of the category..</param>
        /// <param name="parent">parent.</param>
        /// <param name="count">Number of notations..</param>
        public InlineResponse2005DataCategories(decimal id = default(decimal), string name = default(string), InlineResponse2005DataParent parent = default(InlineResponse2005DataParent), decimal count = default(decimal))
        {
            this.Id = id;
            this.Name = name;
            this.Parent = parent;
            this.Count = count;
        }

        /// <summary>
        /// Identifier of a category.
        /// </summary>
        /// <value>Identifier of a category.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public decimal Id { get; set; }

        /// <summary>
        /// Name of the category.
        /// </summary>
        /// <value>Name of the category.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Parent
        /// </summary>
        [DataMember(Name = "parent", EmitDefaultValue = false)]
        public InlineResponse2005DataParent Parent { get; set; }

        /// <summary>
        /// Number of notations.
        /// </summary>
        /// <value>Number of notations.</value>
        [DataMember(Name = "count", EmitDefaultValue = false)]
        public decimal Count { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2005DataCategories {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Parent: ").Append(Parent).Append("\n");
            sb.Append("  Count: ").Append(Count).Append("\n");
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
            return this.Equals(input as InlineResponse2005DataCategories);
        }

        /// <summary>
        /// Returns true if InlineResponse2005DataCategories instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005DataCategories to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005DataCategories input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    this.Id.Equals(input.Id)
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Parent == input.Parent ||
                    (this.Parent != null &&
                    this.Parent.Equals(input.Parent))
                ) && 
                (
                    this.Count == input.Count ||
                    this.Count.Equals(input.Count)
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
                hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Parent != null)
                    hashCode = hashCode * 59 + this.Parent.GetHashCode();
                hashCode = hashCode * 59 + this.Count.GetHashCode();
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