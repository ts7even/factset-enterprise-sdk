/*
 * FactSet Procure to Pay API
 *
 * Allows for Provisioning and Entitlement of FactSet accounts.     Authentication is provided via FactSet's [API Key System](https://developer.factset.com/authentication)    Please note that the on-page \"Try it out\" features do not function. You must authorize against our API and make requests directly againt the endpoints.    
 *
 * The version of the OpenAPI document: 1S
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
using OpenAPIDateConverter = FactSet.SDK.ProcuretoPayProvisioning.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ProcuretoPayProvisioning.Model
{
    /// <summary>
    /// InlineResponse202
    /// </summary>
    [DataContract(Name = "inline_response_202")]
    public partial class InlineResponse202 : IEquatable<InlineResponse202>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse202" /> class.
        /// </summary>
        /// <param name="transactioncode">transactioncode.</param>
        public InlineResponse202(string transactioncode = default(string))
        {
            this.Transactioncode = transactioncode;
        }

        /// <summary>
        /// Gets or Sets Transactioncode
        /// </summary>
        [DataMember(Name = "transactioncode", EmitDefaultValue = false)]
        public string Transactioncode { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse202 {\n");
            sb.Append("  Transactioncode: ").Append(Transactioncode).Append("\n");
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
            return this.Equals(input as InlineResponse202);
        }

        /// <summary>
        /// Returns true if InlineResponse202 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse202 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse202 input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Transactioncode == input.Transactioncode ||
                    (this.Transactioncode != null &&
                    this.Transactioncode.Equals(input.Transactioncode))
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
                if (this.Transactioncode != null)
                    hashCode = hashCode * 59 + this.Transactioncode.GetHashCode();
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