/*
 * Engines API
 *
 * Allow clients to fetch Engines Analytics through APIs.
 *
 * The version of the OpenAPI document: 1
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
    /// OptimizerAccountOverrides
    /// </summary>
    [DataContract(Name = "OptimizerAccountOverrides")]
    public partial class OptimizerAccountOverrides : IEquatable<OptimizerAccountOverrides>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptimizerAccountOverrides" /> class.
        /// </summary>
        /// <param name="portfolio">Portfolio.</param>
        /// <param name="benchmark">Benchmark.</param>
        /// <param name="riskmodelid">Risk model.</param>
        /// <param name="currency">Currency.</param>
        public OptimizerAccountOverrides(string portfolio = default(string), string benchmark = default(string), string riskmodelid = default(string), string currency = default(string))
        {
            this.Portfolio = portfolio;
            this.Benchmark = benchmark;
            this.Riskmodelid = riskmodelid;
            this.Currency = currency;
        }

        /// <summary>
        /// Portfolio
        /// </summary>
        /// <value>Portfolio</value>
        [DataMember(Name = "portfolio", EmitDefaultValue = false)]
        public string Portfolio { get; set; }

        /// <summary>
        /// Benchmark
        /// </summary>
        /// <value>Benchmark</value>
        [DataMember(Name = "benchmark", EmitDefaultValue = false)]
        public string Benchmark { get; set; }

        /// <summary>
        /// Risk model
        /// </summary>
        /// <value>Risk model</value>
        [DataMember(Name = "riskmodelid", EmitDefaultValue = false)]
        public string Riskmodelid { get; set; }

        /// <summary>
        /// Currency
        /// </summary>
        /// <value>Currency</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OptimizerAccountOverrides {\n");
            sb.Append("  Portfolio: ").Append(Portfolio).Append("\n");
            sb.Append("  Benchmark: ").Append(Benchmark).Append("\n");
            sb.Append("  Riskmodelid: ").Append(Riskmodelid).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
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
            return this.Equals(input as OptimizerAccountOverrides);
        }

        /// <summary>
        /// Returns true if OptimizerAccountOverrides instances are equal
        /// </summary>
        /// <param name="input">Instance of OptimizerAccountOverrides to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptimizerAccountOverrides input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Portfolio == input.Portfolio ||
                    (this.Portfolio != null &&
                    this.Portfolio.Equals(input.Portfolio))
                ) && 
                (
                    this.Benchmark == input.Benchmark ||
                    (this.Benchmark != null &&
                    this.Benchmark.Equals(input.Benchmark))
                ) && 
                (
                    this.Riskmodelid == input.Riskmodelid ||
                    (this.Riskmodelid != null &&
                    this.Riskmodelid.Equals(input.Riskmodelid))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
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
                if (this.Portfolio != null)
                    hashCode = hashCode * 59 + this.Portfolio.GetHashCode();
                if (this.Benchmark != null)
                    hashCode = hashCode * 59 + this.Benchmark.GetHashCode();
                if (this.Riskmodelid != null)
                    hashCode = hashCode * 59 + this.Riskmodelid.GetHashCode();
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
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