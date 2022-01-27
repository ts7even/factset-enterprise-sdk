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
using OpenAPIDateConverter = FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.SecuritizedDerivativesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Maturity data.
    /// </summary>
    [DataContract(Name = "inline_response_200_6_instrument_lifeCycle_maturity")]
    public partial class InlineResponse2006InstrumentLifeCycleMaturity : IEquatable<InlineResponse2006InstrumentLifeCycleMaturity>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2006InstrumentLifeCycleMaturity" /> class.
        /// </summary>
        /// <param name="date">Date of the securitized derivative&#39;s maturity. The value is empty if the instrument is perpetual..</param>
        /// <param name="remainingTermDays">Remaining term to maturity expressed in days. The value is empty if the instrument is perpetual..</param>
        /// <param name="perpetual">If &#x60;true&#x60;, the securitized derivative is perpetual, i.e. it does not mature, therefore the attributes &#x60;date&#x60; and &#x60;remainingTermDays&#x60; are &#x60;null&#x60;..</param>
        public InlineResponse2006InstrumentLifeCycleMaturity(DateTime date = default(DateTime), decimal remainingTermDays = default(decimal), bool perpetual = default(bool))
        {
            this.Date = date;
            this.RemainingTermDays = remainingTermDays;
            this.Perpetual = perpetual;
        }

        /// <summary>
        /// Date of the securitized derivative&#39;s maturity. The value is empty if the instrument is perpetual.
        /// </summary>
        /// <value>Date of the securitized derivative&#39;s maturity. The value is empty if the instrument is perpetual.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// Remaining term to maturity expressed in days. The value is empty if the instrument is perpetual.
        /// </summary>
        /// <value>Remaining term to maturity expressed in days. The value is empty if the instrument is perpetual.</value>
        [DataMember(Name = "remainingTermDays", EmitDefaultValue = false)]
        public decimal RemainingTermDays { get; set; }

        /// <summary>
        /// If &#x60;true&#x60;, the securitized derivative is perpetual, i.e. it does not mature, therefore the attributes &#x60;date&#x60; and &#x60;remainingTermDays&#x60; are &#x60;null&#x60;.
        /// </summary>
        /// <value>If &#x60;true&#x60;, the securitized derivative is perpetual, i.e. it does not mature, therefore the attributes &#x60;date&#x60; and &#x60;remainingTermDays&#x60; are &#x60;null&#x60;.</value>
        [DataMember(Name = "perpetual", EmitDefaultValue = true)]
        public bool Perpetual { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse2006InstrumentLifeCycleMaturity {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  RemainingTermDays: ").Append(RemainingTermDays).Append("\n");
            sb.Append("  Perpetual: ").Append(Perpetual).Append("\n");
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
            return this.Equals(input as InlineResponse2006InstrumentLifeCycleMaturity);
        }

        /// <summary>
        /// Returns true if InlineResponse2006InstrumentLifeCycleMaturity instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2006InstrumentLifeCycleMaturity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2006InstrumentLifeCycleMaturity input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.RemainingTermDays == input.RemainingTermDays ||
                    this.RemainingTermDays.Equals(input.RemainingTermDays)
                ) && 
                (
                    this.Perpetual == input.Perpetual ||
                    this.Perpetual.Equals(input.Perpetual)
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
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                hashCode = hashCode * 59 + this.RemainingTermDays.GetHashCode();
                hashCode = hashCode * 59 + this.Perpetual.GetHashCode();
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