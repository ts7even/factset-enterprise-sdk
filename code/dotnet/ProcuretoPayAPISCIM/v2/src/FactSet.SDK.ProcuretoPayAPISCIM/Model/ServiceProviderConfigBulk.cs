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
    /// A complex type that specifies bulk configuration options.
    /// </summary>
    [DataContract(Name = "ServiceProviderConfig_bulk")]
    public partial class ServiceProviderConfigBulk : IEquatable<ServiceProviderConfigBulk>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ServiceProviderConfigBulk" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        public ServiceProviderConfigBulk(bool supported, int maxOperations, int maxPayloadSize)
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
        /// An integer value specifying the maximum number of operations.
        /// </summary>
        /// <value>An integer value specifying the maximum number of operations.</value>
        [DataMember(Name = "maxOperations", IsRequired = true, EmitDefaultValue = false)]
        public int MaxOperations { get; private set; }

        /// <summary>
        /// Returns false as MaxOperations should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeMaxOperations()
        {
            return false;
        }
        /// <summary>
        /// An integer value specifying the maximum payload size in bytes.
        /// </summary>
        /// <value>An integer value specifying the maximum payload size in bytes.</value>
        [DataMember(Name = "maxPayloadSize", IsRequired = true, EmitDefaultValue = false)]
        public int MaxPayloadSize { get; private set; }

        /// <summary>
        /// Returns false as MaxPayloadSize should not be serialized given that it's read-only.
        /// </summary>
        /// <returns>false (boolean)</returns>
        public bool ShouldSerializeMaxPayloadSize()
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
            sb.Append("class ServiceProviderConfigBulk {\n");
            sb.Append("  Supported: ").Append(Supported).Append("\n");
            sb.Append("  MaxOperations: ").Append(MaxOperations).Append("\n");
            sb.Append("  MaxPayloadSize: ").Append(MaxPayloadSize).Append("\n");
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
            return this.Equals(input as ServiceProviderConfigBulk);
        }

        /// <summary>
        /// Returns true if ServiceProviderConfigBulk instances are equal
        /// </summary>
        /// <param name="input">Instance of ServiceProviderConfigBulk to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ServiceProviderConfigBulk input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Supported == input.Supported ||
                    this.Supported.Equals(input.Supported)
                ) && 
                (
                    this.MaxOperations == input.MaxOperations ||
                    this.MaxOperations.Equals(input.MaxOperations)
                ) && 
                (
                    this.MaxPayloadSize == input.MaxPayloadSize ||
                    this.MaxPayloadSize.Equals(input.MaxPayloadSize)
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
                hashCode = (hashCode * 59) + this.MaxOperations.GetHashCode();
                hashCode = (hashCode * 59) + this.MaxPayloadSize.GetHashCode();
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
