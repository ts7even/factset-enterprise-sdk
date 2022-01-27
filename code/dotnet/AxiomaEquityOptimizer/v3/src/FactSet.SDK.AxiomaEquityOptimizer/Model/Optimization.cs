/*
 * Axioma Equity API
 *
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.AxiomaEquityOptimizer.Client.OpenAPIDateConverter;

namespace FactSet.SDK.AxiomaEquityOptimizer.Model
{
    /// <summary>
    /// Optimization
    /// </summary>
    [DataContract(Name = "Optimization")]
    public partial class Optimization : IEquatable<Optimization>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Optimization" /> class.
        /// </summary>
        /// <param name="riskModelDate">Risk model date.</param>
        /// <param name="backtestDate">Backtest date.</param>
        /// <param name="cashflow">Cash flow.</param>
        public Optimization(string riskModelDate = default(string), string backtestDate = default(string), string cashflow = default(string))
        {
            this.RiskModelDate = riskModelDate;
            this.BacktestDate = backtestDate;
            this.Cashflow = cashflow;
        }

        /// <summary>
        /// Risk model date
        /// </summary>
        /// <value>Risk model date</value>
        [DataMember(Name = "riskModelDate", EmitDefaultValue = false)]
        public string RiskModelDate { get; set; }

        /// <summary>
        /// Backtest date
        /// </summary>
        /// <value>Backtest date</value>
        [DataMember(Name = "backtestDate", EmitDefaultValue = false)]
        public string BacktestDate { get; set; }

        /// <summary>
        /// Cash flow
        /// </summary>
        /// <value>Cash flow</value>
        [DataMember(Name = "cashflow", EmitDefaultValue = false)]
        public string Cashflow { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Optimization {\n");
            sb.Append("  RiskModelDate: ").Append(RiskModelDate).Append("\n");
            sb.Append("  BacktestDate: ").Append(BacktestDate).Append("\n");
            sb.Append("  Cashflow: ").Append(Cashflow).Append("\n");
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
            return this.Equals(input as Optimization);
        }

        /// <summary>
        /// Returns true if Optimization instances are equal
        /// </summary>
        /// <param name="input">Instance of Optimization to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Optimization input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.RiskModelDate == input.RiskModelDate ||
                    (this.RiskModelDate != null &&
                    this.RiskModelDate.Equals(input.RiskModelDate))
                ) && 
                (
                    this.BacktestDate == input.BacktestDate ||
                    (this.BacktestDate != null &&
                    this.BacktestDate.Equals(input.BacktestDate))
                ) && 
                (
                    this.Cashflow == input.Cashflow ||
                    (this.Cashflow != null &&
                    this.Cashflow.Equals(input.Cashflow))
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
                if (this.RiskModelDate != null)
                    hashCode = hashCode * 59 + this.RiskModelDate.GetHashCode();
                if (this.BacktestDate != null)
                    hashCode = hashCode * 59 + this.BacktestDate.GetHashCode();
                if (this.Cashflow != null)
                    hashCode = hashCode * 59 + this.Cashflow.GetHashCode();
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