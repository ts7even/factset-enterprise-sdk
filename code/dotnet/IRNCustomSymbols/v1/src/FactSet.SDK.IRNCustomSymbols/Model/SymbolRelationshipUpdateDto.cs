/*
 * IRN API v1
 *
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
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
using OpenAPIDateConverter = FactSet.SDK.IRNCustomSymbols.Client.OpenAPIDateConverter;

namespace FactSet.SDK.IRNCustomSymbols.Model
{
    /// <summary>
    /// SymbolRelationshipUpdateDto
    /// </summary>
    [DataContract(Name = "SymbolRelationshipUpdateDto")]
    public partial class SymbolRelationshipUpdateDto : IEquatable<SymbolRelationshipUpdateDto>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SymbolRelationshipUpdateDto" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="symbolsRelationshipId">symbolsRelationshipId.</param>
        /// <param name="parentSymbol">parentSymbol.</param>
        /// <param name="childSymbol">childSymbol.</param>
        /// <param name="startDate">startDate.</param>
        /// <param name="endDate">endDate.</param>
        /// <param name="comment">comment.</param>
        public SymbolRelationshipUpdateDto(Guid id = default(Guid), Guid symbolsRelationshipId = default(Guid), string parentSymbol = default(string), string childSymbol = default(string), DateTime? startDate = default(DateTime?), DateTime? endDate = default(DateTime?), string comment = default(string))
        {
            this.Id = id;
            this.SymbolsRelationshipId = symbolsRelationshipId;
            this.ParentSymbol = parentSymbol;
            this.ChildSymbol = childSymbol;
            this.StartDate = startDate;
            this.EndDate = endDate;
            this.Comment = comment;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets SymbolsRelationshipId
        /// </summary>
        [DataMember(Name = "symbolsRelationshipId", EmitDefaultValue = false)]
        public Guid SymbolsRelationshipId { get; set; }

        /// <summary>
        /// Gets or Sets ParentSymbol
        /// </summary>
        [DataMember(Name = "parentSymbol", EmitDefaultValue = true)]
        public string ParentSymbol { get; set; }

        /// <summary>
        /// Gets or Sets ChildSymbol
        /// </summary>
        [DataMember(Name = "childSymbol", EmitDefaultValue = true)]
        public string ChildSymbol { get; set; }

        /// <summary>
        /// Gets or Sets StartDate
        /// </summary>
        [DataMember(Name = "startDate", EmitDefaultValue = true)]
        public DateTime? StartDate { get; set; }

        /// <summary>
        /// Gets or Sets EndDate
        /// </summary>
        [DataMember(Name = "endDate", EmitDefaultValue = true)]
        public DateTime? EndDate { get; set; }

        /// <summary>
        /// Gets or Sets Comment
        /// </summary>
        [DataMember(Name = "comment", EmitDefaultValue = true)]
        public string Comment { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SymbolRelationshipUpdateDto {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SymbolsRelationshipId: ").Append(SymbolsRelationshipId).Append("\n");
            sb.Append("  ParentSymbol: ").Append(ParentSymbol).Append("\n");
            sb.Append("  ChildSymbol: ").Append(ChildSymbol).Append("\n");
            sb.Append("  StartDate: ").Append(StartDate).Append("\n");
            sb.Append("  EndDate: ").Append(EndDate).Append("\n");
            sb.Append("  Comment: ").Append(Comment).Append("\n");
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
            return this.Equals(input as SymbolRelationshipUpdateDto);
        }

        /// <summary>
        /// Returns true if SymbolRelationshipUpdateDto instances are equal
        /// </summary>
        /// <param name="input">Instance of SymbolRelationshipUpdateDto to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SymbolRelationshipUpdateDto input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.SymbolsRelationshipId == input.SymbolsRelationshipId ||
                    (this.SymbolsRelationshipId != null &&
                    this.SymbolsRelationshipId.Equals(input.SymbolsRelationshipId))
                ) && 
                (
                    this.ParentSymbol == input.ParentSymbol ||
                    (this.ParentSymbol != null &&
                    this.ParentSymbol.Equals(input.ParentSymbol))
                ) && 
                (
                    this.ChildSymbol == input.ChildSymbol ||
                    (this.ChildSymbol != null &&
                    this.ChildSymbol.Equals(input.ChildSymbol))
                ) && 
                (
                    this.StartDate == input.StartDate ||
                    (this.StartDate != null &&
                    this.StartDate.Equals(input.StartDate))
                ) && 
                (
                    this.EndDate == input.EndDate ||
                    (this.EndDate != null &&
                    this.EndDate.Equals(input.EndDate))
                ) && 
                (
                    this.Comment == input.Comment ||
                    (this.Comment != null &&
                    this.Comment.Equals(input.Comment))
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
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.SymbolsRelationshipId != null)
                {
                    hashCode = (hashCode * 59) + this.SymbolsRelationshipId.GetHashCode();
                }
                if (this.ParentSymbol != null)
                {
                    hashCode = (hashCode * 59) + this.ParentSymbol.GetHashCode();
                }
                if (this.ChildSymbol != null)
                {
                    hashCode = (hashCode * 59) + this.ChildSymbol.GetHashCode();
                }
                if (this.StartDate != null)
                {
                    hashCode = (hashCode * 59) + this.StartDate.GetHashCode();
                }
                if (this.EndDate != null)
                {
                    hashCode = (hashCode * 59) + this.EndDate.GetHashCode();
                }
                if (this.Comment != null)
                {
                    hashCode = (hashCode * 59) + this.Comment.GetHashCode();
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
