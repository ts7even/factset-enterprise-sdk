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
using OpenAPIDateConverter = FactSet.SDK.BondsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.BondsAPIforDigitalPortals.Model
{
    /// <summary>
    /// Parameters related to important dates.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_search_data_lifeCycle")]
    public partial class DebtInstrumentNotationScreenerSearchDataLifeCycle : IEquatable<DebtInstrumentNotationScreenerSearchDataLifeCycle>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerSearchDataLifeCycle" /> class.
        /// </summary>
        /// <param name="issue">issue.</param>
        /// <param name="maturity">maturity.</param>
        /// <param name="callable">Restricts the result to debt instruments that are callable (&#x60;true&#x60;) or are not callable (&#x60;false&#x60;). A callable instrument is one that may be redeemed by the issuer prior to maturity..</param>
        public DebtInstrumentNotationScreenerSearchDataLifeCycle(DebtInstrumentNotationScreenerSearchDataLifeCycleIssue issue = default(DebtInstrumentNotationScreenerSearchDataLifeCycleIssue), DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity maturity = default(DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity), bool callable = default(bool))
        {
            this.Issue = issue;
            this.Maturity = maturity;
            this.Callable = callable;
        }

        /// <summary>
        /// Gets or Sets Issue
        /// </summary>
        [DataMember(Name = "issue", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataLifeCycleIssue Issue { get; set; }

        /// <summary>
        /// Gets or Sets Maturity
        /// </summary>
        [DataMember(Name = "maturity", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataLifeCycleMaturity Maturity { get; set; }

        /// <summary>
        /// Restricts the result to debt instruments that are callable (&#x60;true&#x60;) or are not callable (&#x60;false&#x60;). A callable instrument is one that may be redeemed by the issuer prior to maturity.
        /// </summary>
        /// <value>Restricts the result to debt instruments that are callable (&#x60;true&#x60;) or are not callable (&#x60;false&#x60;). A callable instrument is one that may be redeemed by the issuer prior to maturity.</value>
        [DataMember(Name = "callable", EmitDefaultValue = true)]
        public bool Callable { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerSearchDataLifeCycle {\n");
            sb.Append("  Issue: ").Append(Issue).Append("\n");
            sb.Append("  Maturity: ").Append(Maturity).Append("\n");
            sb.Append("  Callable: ").Append(Callable).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerSearchDataLifeCycle);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerSearchDataLifeCycle instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerSearchDataLifeCycle to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerSearchDataLifeCycle input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Issue == input.Issue ||
                    (this.Issue != null &&
                    this.Issue.Equals(input.Issue))
                ) && 
                (
                    this.Maturity == input.Maturity ||
                    (this.Maturity != null &&
                    this.Maturity.Equals(input.Maturity))
                ) && 
                (
                    this.Callable == input.Callable ||
                    this.Callable.Equals(input.Callable)
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
                if (this.Issue != null)
                    hashCode = hashCode * 59 + this.Issue.GetHashCode();
                if (this.Maturity != null)
                    hashCode = hashCode * 59 + this.Maturity.GetHashCode();
                hashCode = hashCode * 59 + this.Callable.GetHashCode();
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