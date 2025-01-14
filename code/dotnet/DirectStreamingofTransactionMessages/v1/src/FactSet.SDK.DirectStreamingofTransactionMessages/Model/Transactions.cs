/*
 * DSOTM API
 *
 * Allow clients to send transactions data to FactSet.
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
using OpenAPIDateConverter = FactSet.SDK.DirectStreamingofTransactionMessages.Client.OpenAPIDateConverter;

namespace FactSet.SDK.DirectStreamingofTransactionMessages.Model
{
    /// <summary>
    /// Transactions
    /// </summary>
    [DataContract(Name = "Transactions")]
    public partial class Transactions : IEquatable<Transactions>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Transactions" /> class.
        /// </summary>
        /// <param name="executions">List of executions.</param>
        /// <param name="placements">List of placements.</param>
        /// <param name="orders">List of orders.</param>
        public Transactions(List<ExecutionParameters> executions = default(List<ExecutionParameters>), List<PlacementParameters> placements = default(List<PlacementParameters>), List<OrderParameters> orders = default(List<OrderParameters>))
        {
            this.Executions = executions;
            this.Placements = placements;
            this.Orders = orders;
        }

        /// <summary>
        /// List of executions
        /// </summary>
        /// <value>List of executions</value>
        [DataMember(Name = "executions", EmitDefaultValue = true)]
        public List<ExecutionParameters> Executions { get; set; }

        /// <summary>
        /// List of placements
        /// </summary>
        /// <value>List of placements</value>
        [DataMember(Name = "placements", EmitDefaultValue = true)]
        public List<PlacementParameters> Placements { get; set; }

        /// <summary>
        /// List of orders
        /// </summary>
        /// <value>List of orders</value>
        [DataMember(Name = "orders", EmitDefaultValue = true)]
        public List<OrderParameters> Orders { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Transactions {\n");
            sb.Append("  Executions: ").Append(Executions).Append("\n");
            sb.Append("  Placements: ").Append(Placements).Append("\n");
            sb.Append("  Orders: ").Append(Orders).Append("\n");
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
            return this.Equals(input as Transactions);
        }

        /// <summary>
        /// Returns true if Transactions instances are equal
        /// </summary>
        /// <param name="input">Instance of Transactions to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Transactions input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Executions == input.Executions ||
                    this.Executions != null &&
                    input.Executions != null &&
                    this.Executions.SequenceEqual(input.Executions)
                ) && 
                (
                    this.Placements == input.Placements ||
                    this.Placements != null &&
                    input.Placements != null &&
                    this.Placements.SequenceEqual(input.Placements)
                ) && 
                (
                    this.Orders == input.Orders ||
                    this.Orders != null &&
                    input.Orders != null &&
                    this.Orders.SequenceEqual(input.Orders)
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
                if (this.Executions != null)
                {
                    hashCode = (hashCode * 59) + this.Executions.GetHashCode();
                }
                if (this.Placements != null)
                {
                    hashCode = (hashCode * 59) + this.Placements.GetHashCode();
                }
                if (this.Orders != null)
                {
                    hashCode = (hashCode * 59) + this.Orders.GetHashCode();
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
