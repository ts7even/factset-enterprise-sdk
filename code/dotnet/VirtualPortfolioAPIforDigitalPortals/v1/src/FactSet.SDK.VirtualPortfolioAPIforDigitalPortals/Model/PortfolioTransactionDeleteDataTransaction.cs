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
using OpenAPIDateConverter = FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Model
{
    /// <summary>
    /// Transaction of the portfolio.
    /// </summary>
    [DataContract(Name = "_portfolio_transaction_delete_data_transaction")]
    public partial class PortfolioTransactionDeleteDataTransaction : IEquatable<PortfolioTransactionDeleteDataTransaction>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioTransactionDeleteDataTransaction" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PortfolioTransactionDeleteDataTransaction() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioTransactionDeleteDataTransaction" /> class.
        /// </summary>
        /// <param name="id">Identifier of the transaction. (required).</param>
        public PortfolioTransactionDeleteDataTransaction(string id = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for PortfolioTransactionDeleteDataTransaction and cannot be null");
            }
            this.Id = id;
        }

        /// <summary>
        /// Identifier of the transaction.
        /// </summary>
        /// <value>Identifier of the transaction.</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PortfolioTransactionDeleteDataTransaction {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
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
            return this.Equals(input as PortfolioTransactionDeleteDataTransaction);
        }

        /// <summary>
        /// Returns true if PortfolioTransactionDeleteDataTransaction instances are equal
        /// </summary>
        /// <param name="input">Instance of PortfolioTransactionDeleteDataTransaction to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PortfolioTransactionDeleteDataTransaction input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
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