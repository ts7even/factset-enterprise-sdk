/*
 * FactSet RIBCS
 *
 * FactSet Revere Business Industry Classification System (RBICS) is a comprehensive structured taxonomy to classify companies by what they primarily do. It delivers a granular view for investors by classifying companies using a bottom-up approach according to the products and services they provide. By combining this approach with a top-level grouping based on companies' behavior similarities and stock co-movement, FactSet RBICS delivers unprecedented precision for 1,400+ sector groups.  RBICS Focus is a six level classification which highlights the companys main business. It is based on the company business line/s that stand for majority of a the revenue that the company generates. Updated monthly. For more details, visit [Online Assitant Page #20710](https://oa.apps.factset.com/pages/20710). 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetRBICS.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetRBICS.Model
{
    /// <summary>
    /// EntityFocus
    /// </summary>
    [DataContract(Name = "entityFocus")]
    public partial class EntityFocus : Dictionary<String, Object>, IEquatable<EntityFocus>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityFocus" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EntityFocus()
        {
            this.AdditionalProperties = new Dictionary<string, object>();
        }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityFocus" /> class.
        /// </summary>
        /// <param name="requestId">Company identifier used in request. (required).</param>
        /// <param name="fsymId">FactSet Company identifier being classified. (required).</param>
        /// <param name="firstDate">First date of the classification. (required).</param>
        /// <param name="lastDate">Date when the classification became no longer valid. (required).</param>
        public EntityFocus(string requestId = default(string), string fsymId = default(string), string firstDate = default(string), string lastDate = default(string)) : base()
        {
            // to ensure "requestId" is required (not null)
            if (requestId == null) {
                throw new ArgumentNullException("requestId is a required property for EntityFocus and cannot be null");
            }
            this.RequestId = requestId;
            // to ensure "fsymId" is required (not null)
            if (fsymId == null) {
                throw new ArgumentNullException("fsymId is a required property for EntityFocus and cannot be null");
            }
            this.FsymId = fsymId;
            // to ensure "firstDate" is required (not null)
            if (firstDate == null) {
                throw new ArgumentNullException("firstDate is a required property for EntityFocus and cannot be null");
            }
            this.FirstDate = firstDate;
            // to ensure "lastDate" is required (not null)
            if (lastDate == null) {
                throw new ArgumentNullException("lastDate is a required property for EntityFocus and cannot be null");
            }
            this.LastDate = lastDate;
            this.AdditionalProperties = new Dictionary<string, object>();
        }

        /// <summary>
        /// Company identifier used in request.
        /// </summary>
        /// <value>Company identifier used in request.</value>
        [DataMember(Name = "requestId", IsRequired = true, EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// FactSet Company identifier being classified.
        /// </summary>
        /// <value>FactSet Company identifier being classified.</value>
        [DataMember(Name = "fsymId", IsRequired = true, EmitDefaultValue = false)]
        public string FsymId { get; set; }

        /// <summary>
        /// First date of the classification.
        /// </summary>
        /// <value>First date of the classification.</value>
        [DataMember(Name = "firstDate", IsRequired = true, EmitDefaultValue = false)]
        public string FirstDate { get; set; }

        /// <summary>
        /// Date when the classification became no longer valid.
        /// </summary>
        /// <value>Date when the classification became no longer valid.</value>
        [DataMember(Name = "lastDate", IsRequired = true, EmitDefaultValue = false)]
        public string LastDate { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public IDictionary<string, object> AdditionalProperties { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EntityFocus {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  FirstDate: ").Append(FirstDate).Append("\n");
            sb.Append("  LastDate: ").Append(LastDate).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
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
            return this.Equals(input as EntityFocus);
        }

        /// <summary>
        /// Returns true if EntityFocus instances are equal
        /// </summary>
        /// <param name="input">Instance of EntityFocus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntityFocus input)
        {
            if (input == null)
                return false;

            return base.Equals(input) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
                ) && base.Equals(input) && 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && base.Equals(input) && 
                (
                    this.FirstDate == input.FirstDate ||
                    (this.FirstDate != null &&
                    this.FirstDate.Equals(input.FirstDate))
                ) && base.Equals(input) && 
                (
                    this.LastDate == input.LastDate ||
                    (this.LastDate != null &&
                    this.LastDate.Equals(input.LastDate))
                )
                && (this.AdditionalProperties.Count == input.AdditionalProperties.Count && !this.AdditionalProperties.Except(input.AdditionalProperties).Any());
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.RequestId != null)
                    hashCode = hashCode * 59 + this.RequestId.GetHashCode();
                if (this.FsymId != null)
                    hashCode = hashCode * 59 + this.FsymId.GetHashCode();
                if (this.FirstDate != null)
                    hashCode = hashCode * 59 + this.FirstDate.GetHashCode();
                if (this.LastDate != null)
                    hashCode = hashCode * 59 + this.LastDate.GetHashCode();
                if (this.AdditionalProperties != null)
                    hashCode = hashCode * 59 + this.AdditionalProperties.GetHashCode();
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