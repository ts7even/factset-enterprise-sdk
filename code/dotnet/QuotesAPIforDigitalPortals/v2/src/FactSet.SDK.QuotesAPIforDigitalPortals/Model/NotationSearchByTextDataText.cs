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
    /// Text-related parameters.
    /// </summary>
    [DataContract(Name = "_notation_searchByText_data_text")]
    public partial class NotationSearchByTextDataText : IEquatable<NotationSearchByTextDataText>, IValidatableObject
    {
        /// <summary>
        /// Defines Attributes
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum AttributesEnum
        {
            /// <summary>
            /// Enum AllEntitled for value: allEntitled
            /// </summary>
            [EnumMember(Value = "allEntitled")]
            AllEntitled = 1,

            /// <summary>
            /// Enum Isin for value: isin
            /// </summary>
            [EnumMember(Value = "isin")]
            Isin = 2,

            /// <summary>
            /// Enum Wkn for value: wkn
            /// </summary>
            [EnumMember(Value = "wkn")]
            Wkn = 3,

            /// <summary>
            /// Enum Valor for value: valor
            /// </summary>
            [EnumMember(Value = "valor")]
            Valor = 4,

            /// <summary>
            /// Enum Sedol for value: sedol
            /// </summary>
            [EnumMember(Value = "sedol")]
            Sedol = 5,

            /// <summary>
            /// Enum Cusip for value: cusip
            /// </summary>
            [EnumMember(Value = "cusip")]
            Cusip = 6,

            /// <summary>
            /// Enum Symbol for value: symbol
            /// </summary>
            [EnumMember(Value = "symbol")]
            Symbol = 7,

            /// <summary>
            /// Enum LongName for value: longName
            /// </summary>
            [EnumMember(Value = "longName")]
            LongName = 8,

            /// <summary>
            /// Enum ShortName for value: shortName
            /// </summary>
            [EnumMember(Value = "shortName")]
            ShortName = 9

        }



        /// <summary>
        /// List of attributes to be searched in. The value &#x60;allEntitled&#x60; cannot appear with any other value.
        /// </summary>
        /// <value>List of attributes to be searched in. The value &#x60;allEntitled&#x60; cannot appear with any other value.</value>
        [DataMember(Name = "attributes", EmitDefaultValue = false)]
        public List<AttributesEnum> Attributes { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationSearchByTextDataText" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotationSearchByTextDataText() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotationSearchByTextDataText" /> class.
        /// </summary>
        /// <param name="attributes">List of attributes to be searched in. The value &#x60;allEntitled&#x60; cannot appear with any other value..</param>
        /// <param name="value">Full-text search string. It may be enclosed in double quotes (\&quot;). No escaping is provided, therefore it is impossible to specify a search string containing double quotes. Relevance of word starts is indicated by a phrase starting with a space character, such as \&quot; daimler\&quot;. If only two characters are submitted, the search is executed as an exact search. (required).</param>
        public NotationSearchByTextDataText(List<AttributesEnum> attributes = default(List<AttributesEnum>), string value = default(string))
        {
            // to ensure "value" is required (not null)
            if (value == null) {
                throw new ArgumentNullException("value is a required property for NotationSearchByTextDataText and cannot be null");
            }
            this.Value = value;
            this.Attributes = attributes;
        }

        /// <summary>
        /// Full-text search string. It may be enclosed in double quotes (\&quot;). No escaping is provided, therefore it is impossible to specify a search string containing double quotes. Relevance of word starts is indicated by a phrase starting with a space character, such as \&quot; daimler\&quot;. If only two characters are submitted, the search is executed as an exact search.
        /// </summary>
        /// <value>Full-text search string. It may be enclosed in double quotes (\&quot;). No escaping is provided, therefore it is impossible to specify a search string containing double quotes. Relevance of word starts is indicated by a phrase starting with a space character, such as \&quot; daimler\&quot;. If only two characters are submitted, the search is executed as an exact search.</value>
        [DataMember(Name = "value", IsRequired = true, EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class NotationSearchByTextDataText {\n");
            sb.Append("  Attributes: ").Append(Attributes).Append("\n");
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
            return this.Equals(input as NotationSearchByTextDataText);
        }

        /// <summary>
        /// Returns true if NotationSearchByTextDataText instances are equal
        /// </summary>
        /// <param name="input">Instance of NotationSearchByTextDataText to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotationSearchByTextDataText input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Attributes == input.Attributes ||
                    this.Attributes.SequenceEqual(input.Attributes)
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
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
                hashCode = hashCode * 59 + this.Attributes.GetHashCode();
                if (this.Value != null)
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
            // Value (string) maxLength
            if(this.Value != null && this.Value.Length > 50)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Value, length must be less than 50.", new [] { "Value" });
            }

            // Value (string) minLength
            if(this.Value != null && this.Value.Length < 2)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Value, length must be greater than 2.", new [] { "Value" });
            }

            // Value (string) pattern
            Regex regexValue = new Regex(@"^[ -+- -\/0-:=?@\\p{L}]*$", RegexOptions.CultureInvariant);
            if (false == regexValue.Match(this.Value).Success)
            {
                yield return new System.ComponentModel.DataAnnotations.ValidationResult("Invalid value for Value, must match a pattern of " + regexValue, new [] { "Value" });
            }

            yield break;
        }
    }

}