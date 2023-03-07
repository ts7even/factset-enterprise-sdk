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
    /// UserResourceUrnScimSchemasExtensionFactSetVRS10User
    /// </summary>
    [DataContract(Name = "UserResource_urn_scim_schemas_extension_FactSet_VRS_1_0_User")]
    public partial class UserResourceUrnScimSchemasExtensionFactSetVRS10User : IEquatable<UserResourceUrnScimSchemasExtensionFactSetVRS10User>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserResourceUrnScimSchemasExtensionFactSetVRS10User" /> class.
        /// </summary>
        /// <param name="domainData">A set of attributes pertaining to individual Vermilion domains..</param>
        public UserResourceUrnScimSchemasExtensionFactSetVRS10User(List<UserResourceUrnScimSchemasExtensionFactSetVRS10UserDomainData> domainData = default(List<UserResourceUrnScimSchemasExtensionFactSetVRS10UserDomainData>))
        {
            this.DomainData = domainData;
        }

        /// <summary>
        /// A set of attributes pertaining to individual Vermilion domains.
        /// </summary>
        /// <value>A set of attributes pertaining to individual Vermilion domains.</value>
        [DataMember(Name = "domainData", EmitDefaultValue = false)]
        public List<UserResourceUrnScimSchemasExtensionFactSetVRS10UserDomainData> DomainData { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class UserResourceUrnScimSchemasExtensionFactSetVRS10User {\n");
            sb.Append("  DomainData: ").Append(DomainData).Append("\n");
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
            return this.Equals(input as UserResourceUrnScimSchemasExtensionFactSetVRS10User);
        }

        /// <summary>
        /// Returns true if UserResourceUrnScimSchemasExtensionFactSetVRS10User instances are equal
        /// </summary>
        /// <param name="input">Instance of UserResourceUrnScimSchemasExtensionFactSetVRS10User to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UserResourceUrnScimSchemasExtensionFactSetVRS10User input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.DomainData == input.DomainData ||
                    this.DomainData != null &&
                    input.DomainData != null &&
                    this.DomainData.SequenceEqual(input.DomainData)
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
                if (this.DomainData != null)
                {
                    hashCode = (hashCode * 59) + this.DomainData.GetHashCode();
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
