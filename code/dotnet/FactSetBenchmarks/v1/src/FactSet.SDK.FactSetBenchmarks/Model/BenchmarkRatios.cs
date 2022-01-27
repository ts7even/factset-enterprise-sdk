/*
 * FactSet Benchmarks API
 *
 * FactSet Benchmarks API gives access to Index Constituents, Prices, Returns, and Ratios. For a sample list of identifiers, use the /metrics endpoint. Equity Only - Fixed Income Benchmark support coming soon. 
 *
 * The version of the OpenAPI document: 1.4.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetBenchmarks.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetBenchmarks.Model
{
    /// <summary>
    /// BenchmarkRatios
    /// </summary>
    [DataContract(Name = "benchmarkRatios")]
    public partial class BenchmarkRatios : IEquatable<BenchmarkRatios>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BenchmarkRatios" /> class.
        /// </summary>
        /// <param name="fsymId">Requested Identifier. Must be a valid Benchmark Identifier recognized by FactSet..</param>
        /// <param name="date">The respective date for values as of the date requested in YYYY-MM-DD format..</param>
        /// <param name="name">Proper Name of Index..</param>
        /// <param name="requestId">Benchmark Identifier specified in the request..</param>
        /// <param name="metric">Metric requested.</param>
        /// <param name="periodicity">The periodicity submitted in the request..</param>
        /// <param name="currency">The currency submitted in the request..</param>
        /// <param name="value">Ratio value based on the metric requested..</param>
        public BenchmarkRatios(string fsymId = default(string), DateTime date = default(DateTime), string name = default(string), string requestId = default(string), string metric = default(string), string periodicity = default(string), string currency = default(string), double value = default(double))
        {
            this.FsymId = fsymId;
            this.Date = date;
            this.Name = name;
            this.RequestId = requestId;
            this.Metric = metric;
            this.Periodicity = periodicity;
            this.Currency = currency;
            this.Value = value;
        }

        /// <summary>
        /// Requested Identifier. Must be a valid Benchmark Identifier recognized by FactSet.
        /// </summary>
        /// <value>Requested Identifier. Must be a valid Benchmark Identifier recognized by FactSet.</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = false)]
        public string FsymId { get; set; }

        /// <summary>
        /// The respective date for values as of the date requested in YYYY-MM-DD format.
        /// </summary>
        /// <value>The respective date for values as of the date requested in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// Proper Name of Index.
        /// </summary>
        /// <value>Proper Name of Index.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Benchmark Identifier specified in the request.
        /// </summary>
        /// <value>Benchmark Identifier specified in the request.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Metric requested
        /// </summary>
        /// <value>Metric requested</value>
        [DataMember(Name = "metric", EmitDefaultValue = false)]
        public string Metric { get; set; }

        /// <summary>
        /// The periodicity submitted in the request.
        /// </summary>
        /// <value>The periodicity submitted in the request.</value>
        [DataMember(Name = "periodicity", EmitDefaultValue = false)]
        public string Periodicity { get; set; }

        /// <summary>
        /// The currency submitted in the request.
        /// </summary>
        /// <value>The currency submitted in the request.</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// Ratio value based on the metric requested.
        /// </summary>
        /// <value>Ratio value based on the metric requested.</value>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public double Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BenchmarkRatios {\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  Metric: ").Append(Metric).Append("\n");
            sb.Append("  Periodicity: ").Append(Periodicity).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as BenchmarkRatios);
        }

        /// <summary>
        /// Returns true if BenchmarkRatios instances are equal
        /// </summary>
        /// <param name="input">Instance of BenchmarkRatios to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BenchmarkRatios input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
                ) && 
                (
                    this.Metric == input.Metric ||
                    (this.Metric != null &&
                    this.Metric.Equals(input.Metric))
                ) && 
                (
                    this.Periodicity == input.Periodicity ||
                    (this.Periodicity != null &&
                    this.Periodicity.Equals(input.Periodicity))
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Value == input.Value ||
                    this.Value.Equals(input.Value)
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
                if (this.FsymId != null)
                    hashCode = hashCode * 59 + this.FsymId.GetHashCode();
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.RequestId != null)
                    hashCode = hashCode * 59 + this.RequestId.GetHashCode();
                if (this.Metric != null)
                    hashCode = hashCode * 59 + this.Metric.GetHashCode();
                if (this.Periodicity != null)
                    hashCode = hashCode * 59 + this.Periodicity.GetHashCode();
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
                hashCode = hashCode * 59 + this.Value.GetHashCode();
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