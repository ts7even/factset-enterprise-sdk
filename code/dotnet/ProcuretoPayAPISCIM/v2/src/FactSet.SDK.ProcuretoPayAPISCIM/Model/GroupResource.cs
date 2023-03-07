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
    /// GroupResource
    /// </summary>
    [DataContract(Name = "GroupResource")]
    public partial class GroupResource : IEquatable<GroupResource>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="GroupResource" /> class.
        /// </summary>
        /// <param name="schemas">schemas.</param>
        /// <param name="externalId">externalId.</param>
        /// <param name="displayName">A human-readable name for the Group..</param>
        /// <param name="description">A description for the Group..</param>
        /// <param name="members">A list of members of the Group..</param>
        /// <param name="urnscimschemasextensionFactSetEnterpriseHosting10Group">urnscimschemasextensionFactSetEnterpriseHosting10Group.</param>
        /// <param name="urnscimschemasextensionFactSetVRS10Group">urnscimschemasextensionFactSetVRS10Group.</param>
        /// <param name="meta">meta.</param>
        public GroupResource(List<string> schemas = default(List<string>), string id = default(string), string externalId = default(string), string displayName = default(string), string description = default(string), List<GroupResourceMembers> members = default(List<GroupResourceMembers>), GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group urnscimschemasextensionFactSetEnterpriseHosting10Group = default(GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group), GroupResourceUrnScimSchemasExtensionFactSetVRS10Group urnscimschemasextensionFactSetVRS10Group = default(GroupResourceUrnScimSchemasExtensionFactSetVRS10Group), GroupResourceMeta meta = default(GroupResourceMeta))
        {
            this.Schemas = schemas;
            this.ExternalId = externalId;
            this.DisplayName = displayName;
            this.Description = description;
            this.Members = members;
            this.UrnscimschemasextensionFactSetEnterpriseHosting10Group = urnscimschemasextensionFactSetEnterpriseHosting10Group;
            this.UrnscimschemasextensionFactSetVRS10Group = urnscimschemasextensionFactSetVRS10Group;
            this.Meta = meta;
        }

        /// <summary>
        /// Gets or Sets Schemas
        /// </summary>
        [DataMember(Name = "schemas", EmitDefaultValue = false)]
        public List<string> Schemas { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; private set; }

        /// <summary>
        /// Returns false as Id should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeId()
        {
            return false;
        }
        /// <summary>
        /// Gets or Sets ExternalId
        /// </summary>
        [DataMember(Name = "externalId", EmitDefaultValue = false)]
        public string ExternalId { get; set; }

        /// <summary>
        /// A human-readable name for the Group.
        /// </summary>
        /// <value>A human-readable name for the Group.</value>
        [DataMember(Name = "displayName", EmitDefaultValue = false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// A description for the Group.
        /// </summary>
        /// <value>A description for the Group.</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// A list of members of the Group.
        /// </summary>
        /// <value>A list of members of the Group.</value>
        [DataMember(Name = "members", EmitDefaultValue = false)]
        public List<GroupResourceMembers> Members { get; set; }

        /// <summary>
        /// Gets or Sets UrnscimschemasextensionFactSetEnterpriseHosting10Group
        /// </summary>
        [DataMember(Name = "urn:scim:schemas:extension:FactSet:EnterpriseHosting:1.0:Group", EmitDefaultValue = false)]
        public GroupResourceUrnScimSchemasExtensionFactSetEnterpriseHosting10Group UrnscimschemasextensionFactSetEnterpriseHosting10Group { get; set; }

        /// <summary>
        /// Gets or Sets UrnscimschemasextensionFactSetVRS10Group
        /// </summary>
        [DataMember(Name = "urn:scim:schemas:extension:FactSet:VRS:1.0:Group", EmitDefaultValue = false)]
        public GroupResourceUrnScimSchemasExtensionFactSetVRS10Group UrnscimschemasextensionFactSetVRS10Group { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public GroupResourceMeta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class GroupResource {\n");
            sb.Append("  Schemas: ").Append(Schemas).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  ExternalId: ").Append(ExternalId).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Members: ").Append(Members).Append("\n");
            sb.Append("  UrnscimschemasextensionFactSetEnterpriseHosting10Group: ").Append(UrnscimschemasextensionFactSetEnterpriseHosting10Group).Append("\n");
            sb.Append("  UrnscimschemasextensionFactSetVRS10Group: ").Append(UrnscimschemasextensionFactSetVRS10Group).Append("\n");
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
            return this.Equals(input as GroupResource);
        }

        /// <summary>
        /// Returns true if GroupResource instances are equal
        /// </summary>
        /// <param name="input">Instance of GroupResource to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GroupResource input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Schemas == input.Schemas ||
                    this.Schemas != null &&
                    input.Schemas != null &&
                    this.Schemas.SequenceEqual(input.Schemas)
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.ExternalId == input.ExternalId ||
                    (this.ExternalId != null &&
                    this.ExternalId.Equals(input.ExternalId))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Members == input.Members ||
                    this.Members != null &&
                    input.Members != null &&
                    this.Members.SequenceEqual(input.Members)
                ) && 
                (
                    this.UrnscimschemasextensionFactSetEnterpriseHosting10Group == input.UrnscimschemasextensionFactSetEnterpriseHosting10Group ||
                    (this.UrnscimschemasextensionFactSetEnterpriseHosting10Group != null &&
                    this.UrnscimschemasextensionFactSetEnterpriseHosting10Group.Equals(input.UrnscimschemasextensionFactSetEnterpriseHosting10Group))
                ) && 
                (
                    this.UrnscimschemasextensionFactSetVRS10Group == input.UrnscimschemasextensionFactSetVRS10Group ||
                    (this.UrnscimschemasextensionFactSetVRS10Group != null &&
                    this.UrnscimschemasextensionFactSetVRS10Group.Equals(input.UrnscimschemasextensionFactSetVRS10Group))
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
                if (this.Schemas != null)
                {
                    hashCode = (hashCode * 59) + this.Schemas.GetHashCode();
                }
                if (this.Id != null)
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.ExternalId != null)
                {
                    hashCode = (hashCode * 59) + this.ExternalId.GetHashCode();
                }
                if (this.DisplayName != null)
                {
                    hashCode = (hashCode * 59) + this.DisplayName.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.Members != null)
                {
                    hashCode = (hashCode * 59) + this.Members.GetHashCode();
                }
                if (this.UrnscimschemasextensionFactSetEnterpriseHosting10Group != null)
                {
                    hashCode = (hashCode * 59) + this.UrnscimschemasextensionFactSetEnterpriseHosting10Group.GetHashCode();
                }
                if (this.UrnscimschemasextensionFactSetVRS10Group != null)
                {
                    hashCode = (hashCode * 59) + this.UrnscimschemasextensionFactSetVRS10Group.GetHashCode();
                }
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
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
