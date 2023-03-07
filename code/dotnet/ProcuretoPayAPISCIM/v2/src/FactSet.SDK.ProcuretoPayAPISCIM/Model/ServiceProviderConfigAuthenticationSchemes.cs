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
    /// A complex type that specifies supported authentication scheme properties.
    /// </summary>
    [DataContract(Name = "ServiceProviderConfig_authenticationSchemes")]
    public partial class ServiceProviderConfigAuthenticationSchemes : IEquatable<ServiceProviderConfigAuthenticationSchemes>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ServiceProviderConfigAuthenticationSchemes" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        public ServiceProviderConfigAuthenticationSchemes(string type, string name, string description,string specUri = default(string), string documentationUri = default(string))
        {
        }

        /// <summary>
        /// The authentication scheme.
        /// </summary>
        /// <value>The authentication scheme.</value>
        [DataMember(Name = "type", IsRequired = true, EmitDefaultValue = false)]
        public string Type { get; private set; }

        /// <summary>
        /// Returns false as Type should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeType()
        {
            return false;
        }
        /// <summary>
        /// The common authentication scheme name, e.g., HTTP Basic.
        /// </summary>
        /// <value>The common authentication scheme name, e.g., HTTP Basic.</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; private set; }

        /// <summary>
        /// Returns false as Name should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeName()
        {
            return false;
        }
        /// <summary>
        /// A description of the authentication scheme.
        /// </summary>
        /// <value>A description of the authentication scheme.</value>
        [DataMember(Name = "description", IsRequired = true, EmitDefaultValue = false)]
        public string Description { get; private set; }

        /// <summary>
        /// Returns false as Description should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeDescription()
        {
            return false;
        }
        /// <summary>
        /// An HTTP-addressable URL pointing to the authentication scheme&#39;s specification.
        /// </summary>
        /// <value>An HTTP-addressable URL pointing to the authentication scheme&#39;s specification.</value>
        [DataMember(Name = "specUri", EmitDefaultValue = false)]
        public string SpecUri { get; private set; }

        /// <summary>
        /// Returns false as SpecUri should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeSpecUri()
        {
            return false;
        }
        /// <summary>
        /// An HTTP-addressable URL pointing to the authentication scheme&#39;s usage documentation.
        /// </summary>
        /// <value>An HTTP-addressable URL pointing to the authentication scheme&#39;s usage documentation.</value>
        [DataMember(Name = "documentationUri", EmitDefaultValue = false)]
        public string DocumentationUri { get; private set; }

        /// <summary>
        /// Returns false as DocumentationUri should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeDocumentationUri()
        {
            return false;
        }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ServiceProviderConfigAuthenticationSchemes {\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  SpecUri: ").Append(SpecUri).Append("\n");
            sb.Append("  DocumentationUri: ").Append(DocumentationUri).Append("\n");
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
            return this.Equals(input as ServiceProviderConfigAuthenticationSchemes);
        }

        /// <summary>
        /// Returns true if ServiceProviderConfigAuthenticationSchemes instances are equal
        /// </summary>
        /// <param name="input">Instance of ServiceProviderConfigAuthenticationSchemes to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ServiceProviderConfigAuthenticationSchemes input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.SpecUri == input.SpecUri ||
                    (this.SpecUri != null &&
                    this.SpecUri.Equals(input.SpecUri))
                ) && 
                (
                    this.DocumentationUri == input.DocumentationUri ||
                    (this.DocumentationUri != null &&
                    this.DocumentationUri.Equals(input.DocumentationUri))
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
                if (this.Type != null)
                {
                    hashCode = (hashCode * 59) + this.Type.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                if (this.Description != null)
                {
                    hashCode = (hashCode * 59) + this.Description.GetHashCode();
                }
                if (this.SpecUri != null)
                {
                    hashCode = (hashCode * 59) + this.SpecUri.GetHashCode();
                }
                if (this.DocumentationUri != null)
                {
                    hashCode = (hashCode * 59) + this.DocumentationUri.GetHashCode();
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
