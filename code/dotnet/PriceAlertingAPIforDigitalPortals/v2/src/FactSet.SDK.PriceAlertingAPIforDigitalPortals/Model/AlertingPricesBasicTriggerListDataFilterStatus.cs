/*
 * Prime Developer Trial
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
using OpenAPIDateConverter = FactSet.SDK.PriceAlertingAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.PriceAlertingAPIforDigitalPortals.Model
{
    /// <summary>
    /// Status of the trigger.
    /// </summary>
    [DataContract(Name = "_alerting_prices_basic_trigger_list_data_filter_status")]
    public partial class AlertingPricesBasicTriggerListDataFilterStatus : IEquatable<AlertingPricesBasicTriggerListDataFilterStatus>, IValidatableObject
    {
        /// <summary>
        /// Code of the status.
        /// </summary>
        /// <value>Code of the status.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum CodeEnum
        {
            /// <summary>
            /// Enum Active for value: active
            /// </summary>
            [EnumMember(Value = "active")]
            Active = 1,

            /// <summary>
            /// Enum Inactive for value: inactive
            /// </summary>
            [EnumMember(Value = "inactive")]
            Inactive = 2,

            /// <summary>
            /// Enum Error for value: error
            /// </summary>
            [EnumMember(Value = "error")]
            Error = 3

        }


        /// <summary>
        /// Code of the status.
        /// </summary>
        /// <value>Code of the status.</value>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public CodeEnum? Code { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AlertingPricesBasicTriggerListDataFilterStatus" /> class.
        /// </summary>
        /// <param name="code">Code of the status..</param>
        public AlertingPricesBasicTriggerListDataFilterStatus(CodeEnum? code = default(CodeEnum?))
        {
            this.Code = code;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AlertingPricesBasicTriggerListDataFilterStatus {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
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
            return this.Equals(input as AlertingPricesBasicTriggerListDataFilterStatus);
        }

        /// <summary>
        /// Returns true if AlertingPricesBasicTriggerListDataFilterStatus instances are equal
        /// </summary>
        /// <param name="input">Instance of AlertingPricesBasicTriggerListDataFilterStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AlertingPricesBasicTriggerListDataFilterStatus input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Code == input.Code ||
                    this.Code.Equals(input.Code)
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
                hashCode = hashCode * 59 + this.Code.GetHashCode();
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