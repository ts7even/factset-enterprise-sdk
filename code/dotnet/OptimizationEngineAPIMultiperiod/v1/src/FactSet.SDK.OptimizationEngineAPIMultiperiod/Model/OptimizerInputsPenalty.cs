/*
 * fpo_mp_input
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
using OpenAPIDateConverter = FactSet.SDK.OptimizationEngineAPIMultiperiod.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OptimizationEngineAPIMultiperiod.Model
{
    /// <summary>
    /// OptimizerInputsPenalty
    /// </summary>
    [DataContract(Name = "optimizer.inputs.Penalty")]
    public partial class OptimizerInputsPenalty : IEquatable<OptimizerInputsPenalty>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptimizerInputsPenalty" /> class.
        /// </summary>
        /// <param name="enabled">enabled.</param>
        /// <param name="penaltyType">penaltyType.</param>
        /// <param name="penaltyValue">penaltyValue.</param>
        /// <param name="maxViolation">maxViolation.</param>
        public OptimizerInputsPenalty(bool enabled = default(bool), OptimizerInputsEConstraintPenaltyTypeEnum penaltyType = default(OptimizerInputsEConstraintPenaltyTypeEnum), OptimizerInputsValue penaltyValue = default(OptimizerInputsValue), OptimizerInputsValue maxViolation = default(OptimizerInputsValue))
        {
            this.Enabled = enabled;
            this.PenaltyType = penaltyType;
            this.PenaltyValue = penaltyValue;
            this.MaxViolation = maxViolation;
        }

        /// <summary>
        /// Gets or Sets Enabled
        /// </summary>
        [DataMember(Name = "enabled", EmitDefaultValue = true)]
        public bool Enabled { get; set; }

        /// <summary>
        /// Gets or Sets PenaltyType
        /// </summary>
        [DataMember(Name = "penalty_type", EmitDefaultValue = false)]
        public OptimizerInputsEConstraintPenaltyTypeEnum PenaltyType { get; set; }

        /// <summary>
        /// Gets or Sets PenaltyValue
        /// </summary>
        [DataMember(Name = "penalty_value", EmitDefaultValue = false)]
        public OptimizerInputsValue PenaltyValue { get; set; }

        /// <summary>
        /// Gets or Sets MaxViolation
        /// </summary>
        [DataMember(Name = "max_violation", EmitDefaultValue = false)]
        public OptimizerInputsValue MaxViolation { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OptimizerInputsPenalty {\n");
            sb.Append("  Enabled: ").Append(Enabled).Append("\n");
            sb.Append("  PenaltyType: ").Append(PenaltyType).Append("\n");
            sb.Append("  PenaltyValue: ").Append(PenaltyValue).Append("\n");
            sb.Append("  MaxViolation: ").Append(MaxViolation).Append("\n");
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
            return this.Equals(input as OptimizerInputsPenalty);
        }

        /// <summary>
        /// Returns true if OptimizerInputsPenalty instances are equal
        /// </summary>
        /// <param name="input">Instance of OptimizerInputsPenalty to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptimizerInputsPenalty input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Enabled == input.Enabled ||
                    this.Enabled.Equals(input.Enabled)
                ) && 
                (
                    this.PenaltyType == input.PenaltyType ||
                    (this.PenaltyType != null &&
                    this.PenaltyType.Equals(input.PenaltyType))
                ) && 
                (
                    this.PenaltyValue == input.PenaltyValue ||
                    (this.PenaltyValue != null &&
                    this.PenaltyValue.Equals(input.PenaltyValue))
                ) && 
                (
                    this.MaxViolation == input.MaxViolation ||
                    (this.MaxViolation != null &&
                    this.MaxViolation.Equals(input.MaxViolation))
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
                hashCode = (hashCode * 59) + this.Enabled.GetHashCode();
                if (this.PenaltyType != null)
                {
                    hashCode = (hashCode * 59) + this.PenaltyType.GetHashCode();
                }
                if (this.PenaltyValue != null)
                {
                    hashCode = (hashCode * 59) + this.PenaltyValue.GetHashCode();
                }
                if (this.MaxViolation != null)
                {
                    hashCode = (hashCode * 59) + this.MaxViolation.GetHashCode();
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