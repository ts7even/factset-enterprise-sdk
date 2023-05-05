/*
 * FactSet Overview Report Builder API
 *
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
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
using OpenAPIDateConverter = FactSet.SDK.OverviewReportBuilder.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OverviewReportBuilder.Model
{
    /// <summary>
    /// TransactionType
    /// </summary>
    [DataContract(Name = "transactionType")]
    public partial class TransactionType : IEquatable<TransactionType>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TransactionType" /> class.
        /// </summary>
        /// <param name="transactionType">transactionType.</param>
        public TransactionType(TransactionTypeTransactionType transactionType = default(TransactionTypeTransactionType))
        {
            this._TransactionType = transactionType;
        }

        /// <summary>
        /// Gets or Sets _TransactionType
        /// </summary>
        [DataMember(Name = "transactionType", EmitDefaultValue = false)]
        public TransactionTypeTransactionType _TransactionType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TransactionType {\n");
            sb.Append("  _TransactionType: ").Append(_TransactionType).Append("\n");
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
            return this.Equals(input as TransactionType);
        }

        /// <summary>
        /// Returns true if TransactionType instances are equal
        /// </summary>
        /// <param name="input">Instance of TransactionType to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TransactionType input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this._TransactionType == input._TransactionType ||
                    (this._TransactionType != null &&
                    this._TransactionType.Equals(input._TransactionType))
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
                if (this._TransactionType != null)
                {
                    hashCode = (hashCode * 59) + this._TransactionType.GetHashCode();
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
