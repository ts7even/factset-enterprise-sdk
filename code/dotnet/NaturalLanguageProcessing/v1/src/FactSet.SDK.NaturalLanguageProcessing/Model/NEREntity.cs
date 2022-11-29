/*
 * Natural Language Processing API
 *
 * APIs that leverage Natural Language Processing to help extract meaningful data from unstructured text
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: ai@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.NaturalLanguageProcessing.Client.OpenAPIDateConverter;

namespace FactSet.SDK.NaturalLanguageProcessing.Model
{
    /// <summary>
    /// NEREntity
    /// </summary>
    [DataContract(Name = "NEREntity")]
    public partial class NEREntity : IEquatable<NEREntity>, IValidatableObject
    {
        /// <summary>
        /// The type of entity (organization, person, etc.) that was found
        /// </summary>
        /// <value>The type of entity (organization, person, etc.) that was found</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum TypeEnum
        {
            /// <summary>
            /// Enum GPE for value: NE_GPE
            /// </summary>
            [EnumMember(Value = "NE_GPE")]
            GPE = 1,

            /// <summary>
            /// Enum ORG for value: NE_ORG
            /// </summary>
            [EnumMember(Value = "NE_ORG")]
            ORG = 2,

            /// <summary>
            /// Enum PERSON for value: NE_PERSON
            /// </summary>
            [EnumMember(Value = "NE_PERSON")]
            PERSON = 3,

            /// <summary>
            /// Enum NUMBER for value: NE_NUMBER
            /// </summary>
            [EnumMember(Value = "NE_NUMBER")]
            NUMBER = 4,

            /// <summary>
            /// Enum MONEY for value: NE_MONEY
            /// </summary>
            [EnumMember(Value = "NE_MONEY")]
            MONEY = 5,

            /// <summary>
            /// Enum DATETIME for value: NE_DATETIME
            /// </summary>
            [EnumMember(Value = "NE_DATETIME")]
            DATETIME = 6,

            /// <summary>
            /// Enum DRUG for value: NE_DRUG
            /// </summary>
            [EnumMember(Value = "NE_DRUG")]
            DRUG = 7,

            /// <summary>
            /// Enum HEALTHINDICATION for value: NE_HEALTH_INDICATION
            /// </summary>
            [EnumMember(Value = "NE_HEALTH_INDICATION")]
            HEALTHINDICATION = 8

        }


        /// <summary>
        /// The type of entity (organization, person, etc.) that was found
        /// </summary>
        /// <value>The type of entity (organization, person, etc.) that was found</value>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = false)]
        public TypeEnum Type { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="NEREntity" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NEREntity() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NEREntity" /> class.
        /// </summary>
        /// <param name="associatedOrgs">Organizations that are associated with this entity.</param>
        /// <param name="endChar">The index of the last character of the entity text (required).</param>
        /// <param name="entityId">The FactSet Entity ID that is linked to this text..</param>
        /// <param name="lookupText">Name of the FactSet entity that is linked to this text..</param>
        /// <param name="lookupUrl">A link to the information page for the given entity.</param>
        /// <param name="startChar">The index of the starting character of the entity text (required).</param>
        /// <param name="text">The substring of the source text that ws found as an entity (required).</param>
        /// <param name="type">The type of entity (organization, person, etc.) that was found (required).</param>
        public NEREntity(int endChar, int startChar, string text, TypeEnum type,List<NEROrganization> associatedOrgs = default(List<NEROrganization>), string entityId = default(string), string lookupText = default(string), string lookupUrl = default(string))
        {
            this.EndChar = endChar;
            this.StartChar = startChar;
            // to ensure "text" is required (not null)
            if (text == null) {
                throw new ArgumentNullException("text is a required property for NEREntity and cannot be null");
            }
            this.Text = text;
            this.Type = type;
            this.AssociatedOrgs = associatedOrgs;
            this.EntityId = entityId;
            this.LookupText = lookupText;
            this.LookupUrl = lookupUrl;
        }

        /// <summary>
        /// Organizations that are associated with this entity
        /// </summary>
        /// <value>Organizations that are associated with this entity</value>
        [DataMember(Name = "associatedOrgs", EmitDefaultValue = false)]
        public List<NEROrganization> AssociatedOrgs { get; set; }

        /// <summary>
        /// The index of the last character of the entity text
        /// </summary>
        /// <value>The index of the last character of the entity text</value>
        [DataMember(Name = "endChar", IsRequired = true, EmitDefaultValue = false)]
        public int EndChar { get; set; }

        /// <summary>
        /// The FactSet Entity ID that is linked to this text.
        /// </summary>
        /// <value>The FactSet Entity ID that is linked to this text.</value>
        [DataMember(Name = "entityId", EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Name of the FactSet entity that is linked to this text.
        /// </summary>
        /// <value>Name of the FactSet entity that is linked to this text.</value>
        [DataMember(Name = "lookupText", EmitDefaultValue = false)]
        public string LookupText { get; set; }

        /// <summary>
        /// A link to the information page for the given entity
        /// </summary>
        /// <value>A link to the information page for the given entity</value>
        [DataMember(Name = "lookupUrl", EmitDefaultValue = false)]
        public string LookupUrl { get; set; }

        /// <summary>
        /// The index of the starting character of the entity text
        /// </summary>
        /// <value>The index of the starting character of the entity text</value>
        [DataMember(Name = "startChar", IsRequired = true, EmitDefaultValue = false)]
        public int StartChar { get; set; }

        /// <summary>
        /// The substring of the source text that ws found as an entity
        /// </summary>
        /// <value>The substring of the source text that ws found as an entity</value>
        [DataMember(Name = "text", IsRequired = true, EmitDefaultValue = false)]
        public string Text { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class NEREntity {\n");
            sb.Append("  AssociatedOrgs: ").Append(AssociatedOrgs).Append("\n");
            sb.Append("  EndChar: ").Append(EndChar).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  LookupText: ").Append(LookupText).Append("\n");
            sb.Append("  LookupUrl: ").Append(LookupUrl).Append("\n");
            sb.Append("  StartChar: ").Append(StartChar).Append("\n");
            sb.Append("  Text: ").Append(Text).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
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
            return this.Equals(input as NEREntity);
        }

        /// <summary>
        /// Returns true if NEREntity instances are equal
        /// </summary>
        /// <param name="input">Instance of NEREntity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NEREntity input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.AssociatedOrgs == input.AssociatedOrgs ||
                    this.AssociatedOrgs != null &&
                    input.AssociatedOrgs != null &&
                    this.AssociatedOrgs.SequenceEqual(input.AssociatedOrgs)
                ) && 
                (
                    this.EndChar == input.EndChar ||
                    this.EndChar.Equals(input.EndChar)
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.LookupText == input.LookupText ||
                    (this.LookupText != null &&
                    this.LookupText.Equals(input.LookupText))
                ) && 
                (
                    this.LookupUrl == input.LookupUrl ||
                    (this.LookupUrl != null &&
                    this.LookupUrl.Equals(input.LookupUrl))
                ) && 
                (
                    this.StartChar == input.StartChar ||
                    this.StartChar.Equals(input.StartChar)
                ) && 
                (
                    this.Text == input.Text ||
                    (this.Text != null &&
                    this.Text.Equals(input.Text))
                ) && 
                (
                    this.Type == input.Type ||
                    this.Type.Equals(input.Type)
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
                if (this.AssociatedOrgs != null)
                {
                    hashCode = (hashCode * 59) + this.AssociatedOrgs.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.EndChar.GetHashCode();
                if (this.EntityId != null)
                {
                    hashCode = (hashCode * 59) + this.EntityId.GetHashCode();
                }
                if (this.LookupText != null)
                {
                    hashCode = (hashCode * 59) + this.LookupText.GetHashCode();
                }
                if (this.LookupUrl != null)
                {
                    hashCode = (hashCode * 59) + this.LookupUrl.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.StartChar.GetHashCode();
                if (this.Text != null)
                {
                    hashCode = (hashCode * 59) + this.Text.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Type.GetHashCode();
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