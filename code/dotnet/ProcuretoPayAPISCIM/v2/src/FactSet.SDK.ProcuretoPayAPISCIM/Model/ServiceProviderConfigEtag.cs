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
    /// A complex type that specifies ETag configuration options.
    /// </summary>
    [DataContract(Name = "ServiceProviderConfig_etag")]
    public partial class ServiceProviderConfigEtag : IEquatable<ServiceProviderConfigEtag>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ServiceProviderConfigEtag" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        public ServiceProviderConfigEtag(bool supported)
        {
        }

        /// <summary>
        /// A Boolean value specifying whether or not the operation is supported.
        /// </summary>
        /// <value>A Boolean value specifying whether or not the operation is supported.</value>
        [DataMember(Name = "supported", IsRequired = true, EmitDefaultValue = true)]
        public bool Supported { get; private set; }

        /// <summary>
        /// Returns false as Supported should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeSupported()
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
            sb.Append("class ServiceProviderConfigEtag {\n");
            sb.Append("  Supported: ").Append(Supported).Append("\n");
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
            return this.Equals(input as ServiceProviderConfigEtag);
        }

        /// <summary>
        /// Returns true if ServiceProviderConfigEtag instances are equal
        /// </summary>
        /// <param name="input">Instance of ServiceProviderConfigEtag to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ServiceProviderConfigEtag input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Supported == input.Supported ||
                    this.Supported.Equals(input.Supported)
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
                hashCode = (hashCode * 59) + this.Supported.GetHashCode();
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
