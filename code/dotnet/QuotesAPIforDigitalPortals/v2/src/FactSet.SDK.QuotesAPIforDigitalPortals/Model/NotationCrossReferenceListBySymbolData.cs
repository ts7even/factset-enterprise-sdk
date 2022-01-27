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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_notation_crossReference_listBySymbol_data")]
    public partial class NotationCrossReferenceListBySymbolData : IEquatable<NotationCrossReferenceListBySymbolData>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationCrossReferenceListBySymbolData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotationCrossReferenceListBySymbolData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationCrossReferenceListBySymbolData" /> class.
        /// </summary>
        /// <param name="symbol">Market-specific code to identify a notation. (required).</param>
        /// <param name="filter">filter.</param>
        public NotationCrossReferenceListBySymbolData(string symbol = default(string), NotationCrossReferenceListByInstrumentDataFilter filter = default(NotationCrossReferenceListByInstrumentDataFilter))
        {
            // to ensure "symbol" is required (not null)
            if (symbol == null) {
                throw new ArgumentNullException("symbol is a required property for NotationCrossReferenceListBySymbolData and cannot be null");
            }
            this.Symbol = symbol;
            this.Filter = filter;
        }

        /// <summary>
        /// Market-specific code to identify a notation.
        /// </summary>
        /// <value>Market-specific code to identify a notation.</value>
        [DataMember(Name = "symbol", IsRequired = true, EmitDefaultValue = false)]
        public string Symbol { get; set; }

        /// <summary>
        /// Gets or Sets Filter
        /// </summary>
        [DataMember(Name = "filter", EmitDefaultValue = false)]
        public NotationCrossReferenceListByInstrumentDataFilter Filter { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class NotationCrossReferenceListBySymbolData {\n");
            sb.Append("  Symbol: ").Append(Symbol).Append("\n");
            sb.Append("  Filter: ").Append(Filter).Append("\n");
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
            return this.Equals(input as NotationCrossReferenceListBySymbolData);
        }

        /// <summary>
        /// Returns true if NotationCrossReferenceListBySymbolData instances are equal
        /// </summary>
        /// <param name="input">Instance of NotationCrossReferenceListBySymbolData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotationCrossReferenceListBySymbolData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Symbol == input.Symbol ||
                    (this.Symbol != null &&
                    this.Symbol.Equals(input.Symbol))
                ) && 
                (
                    this.Filter == input.Filter ||
                    (this.Filter != null &&
                    this.Filter.Equals(input.Filter))
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
                if (this.Symbol != null)
                    hashCode = hashCode * 59 + this.Symbol.GetHashCode();
                if (this.Filter != null)
                    hashCode = hashCode * 59 + this.Filter.GetHashCode();
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
            // Symbol (string) maxLength
            if(this.Symbol != null && this.Symbol.Length > 32)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Symbol, length must be less than 32.", new [] { "Symbol" });
            }

            // Symbol (string) minLength
            if(this.Symbol != null && this.Symbol.Length < 1)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Symbol, length must be greater than 1.", new [] { "Symbol" });
            }

            yield break;
        }
    }

}