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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// InlineResponse20035Data
    /// </summary>
    [DataContract(Name = "inline_response_200_35_data")]
    public partial class InlineResponse20035Data : IEquatable<InlineResponse20035Data>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20035Data" /> class.
        /// </summary>
        /// <param name="id">Identifier of the dataset..</param>
        /// <param name="name">Name of the dataset..</param>
        /// <param name="depth">Number of levels covered by this dataset for the category system..</param>
        /// <param name="system">system.</param>
        /// <param name="delivery">delivery.</param>
        public InlineResponse20035Data(decimal id = default(decimal), string name = default(string), decimal depth = default(decimal), InlineResponse20035System system = default(InlineResponse20035System), InlineResponse20035Delivery delivery = default(InlineResponse20035Delivery))
        {
            this.Id = id;
            this.Name = name;
            this.Depth = depth;
            this.System = system;
            this.Delivery = delivery;
        }

        /// <summary>
        /// Identifier of the dataset.
        /// </summary>
        /// <value>Identifier of the dataset.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public decimal Id { get; set; }

        /// <summary>
        /// Name of the dataset.
        /// </summary>
        /// <value>Name of the dataset.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Number of levels covered by this dataset for the category system.
        /// </summary>
        /// <value>Number of levels covered by this dataset for the category system.</value>
        [DataMember(Name = "depth", EmitDefaultValue = false)]
        public decimal Depth { get; set; }

        /// <summary>
        /// Gets or Sets System
        /// </summary>
        [DataMember(Name = "system", EmitDefaultValue = false)]
        public InlineResponse20035System System { get; set; }

        /// <summary>
        /// Gets or Sets Delivery
        /// </summary>
        [DataMember(Name = "delivery", EmitDefaultValue = false)]
        public InlineResponse20035Delivery Delivery { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse20035Data {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Depth: ").Append(Depth).Append("\n");
            sb.Append("  System: ").Append(System).Append("\n");
            sb.Append("  Delivery: ").Append(Delivery).Append("\n");
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
            return this.Equals(input as InlineResponse20035Data);
        }

        /// <summary>
        /// Returns true if InlineResponse20035Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20035Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20035Data input)
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
                    this.Depth == input.Depth ||
                    this.Depth.Equals(input.Depth)
                ) && 
                (
                    this.System == input.System ||
                    (this.System != null &&
                    this.System.Equals(input.System))
                ) && 
                (
                    this.Delivery == input.Delivery ||
                    (this.Delivery != null &&
                    this.Delivery.Equals(input.Delivery))
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
                hashCode = hashCode * 59 + this.Depth.GetHashCode();
                if (this.System != null)
                    hashCode = hashCode * 59 + this.System.GetHashCode();
                if (this.Delivery != null)
                    hashCode = hashCode * 59 + this.Delivery.GetHashCode();
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