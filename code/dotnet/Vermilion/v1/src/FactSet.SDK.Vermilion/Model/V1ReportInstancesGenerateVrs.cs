/*
 * VRS API documentation
 *
 * Documentation on all available end points in the VRSAPI
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
using OpenAPIDateConverter = FactSet.SDK.Vermilion.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Vermilion.Model
{
    /// <summary>
    /// V1ReportInstancesGenerateVrs
    /// </summary>
    [DataContract(Name = "_v1_report_instances_generate_vrs")]
    public partial class V1ReportInstancesGenerateVrs : IEquatable<V1ReportInstancesGenerateVrs>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="V1ReportInstancesGenerateVrs" /> class.
        /// </summary>
        /// <param name="instanceId">instanceId.</param>
        public V1ReportInstancesGenerateVrs(V1ReportInstancesGenerateVrsInstanceId instanceId = default(V1ReportInstancesGenerateVrsInstanceId))
        {
            this.InstanceId = instanceId;
        }

        /// <summary>
        /// Gets or Sets InstanceId
        /// </summary>
        [DataMember(Name = "instanceId", EmitDefaultValue = false)]
        public V1ReportInstancesGenerateVrsInstanceId InstanceId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class V1ReportInstancesGenerateVrs {\n");
            sb.Append("  InstanceId: ").Append(InstanceId).Append("\n");
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
            return this.Equals(input as V1ReportInstancesGenerateVrs);
        }

        /// <summary>
        /// Returns true if V1ReportInstancesGenerateVrs instances are equal
        /// </summary>
        /// <param name="input">Instance of V1ReportInstancesGenerateVrs to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(V1ReportInstancesGenerateVrs input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.InstanceId == input.InstanceId ||
                    (this.InstanceId != null &&
                    this.InstanceId.Equals(input.InstanceId))
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
                if (this.InstanceId != null)
                {
                    hashCode = (hashCode * 59) + this.InstanceId.GetHashCode();
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