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
    /// Parameters related to the maturity.
    /// </summary>
    [DataContract(Name = "_securitizedDerivative_notation_ranking_intraday_list_data_lifeCycle_maturity")]
    public partial class SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity : IEquatable<SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity>, IValidatableObject
    {
        /// <summary>
        /// Specifies whether or not perpetual securitized derivatives, i.e. such that do not mature, are included in the result.
        /// </summary>
        /// <value>Specifies whether or not perpetual securitized derivatives, i.e. such that do not mature, are included in the result.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum PerpetualEnum
        {
            /// <summary>
            /// Enum Only for value: only
            /// </summary>
            [EnumMember(Value = "only")]
            Only = 1,

            /// <summary>
            /// Enum Include for value: include
            /// </summary>
            [EnumMember(Value = "include")]
            Include = 2,

            /// <summary>
            /// Enum Exclude for value: exclude
            /// </summary>
            [EnumMember(Value = "exclude")]
            Exclude = 3

        }


        /// <summary>
        /// Specifies whether or not perpetual securitized derivatives, i.e. such that do not mature, are included in the result.
        /// </summary>
        /// <value>Specifies whether or not perpetual securitized derivatives, i.e. such that do not mature, are included in the result.</value>
        [DataMember(Name = "perpetual", EmitDefaultValue = false)]
        public PerpetualEnum? Perpetual { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity" /> class.
        /// </summary>
        /// <param name="perpetual">Specifies whether or not perpetual securitized derivatives, i.e. such that do not mature, are included in the result. (default to PerpetualEnum.Include).</param>
        public SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity(PerpetualEnum? perpetual = PerpetualEnum.Include)
        {
            this.Perpetual = perpetual;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity {\n");
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
            return this.Equals(input as SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity);
        }

        /// <summary>
        /// Returns true if SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity instances are equal
        /// </summary>
        /// <param name="input">Instance of SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SecuritizedDerivativeNotationRankingIntradayListDataLifeCycleMaturity input)
        {
            if (input == null)
                return false;

            return 
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