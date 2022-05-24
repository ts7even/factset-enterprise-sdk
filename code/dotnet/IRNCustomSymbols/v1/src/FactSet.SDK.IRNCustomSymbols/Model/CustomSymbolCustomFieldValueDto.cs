/*
 * IRN API v1
 *
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
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
using OpenAPIDateConverter = FactSet.SDK.IRNCustomSymbols.Client.OpenAPIDateConverter;

namespace FactSet.SDK.IRNCustomSymbols.Model
{
    /// <summary>
    /// CustomSymbolCustomFieldValueDto
    /// </summary>
    [DataContract(Name = "CustomSymbolCustomFieldValueDto")]
    public partial class CustomSymbolCustomFieldValueDto : IEquatable<CustomSymbolCustomFieldValueDto>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomSymbolCustomFieldValueDto" /> class.
        /// </summary>
        /// <param name="code">code.</param>
        /// <param name="value">value.</param>
        /// <param name="optionValues">optionValues.</param>
        /// <param name="contacts">contacts.</param>
        public CustomSymbolCustomFieldValueDto(string code = default(string), string value = default(string), List<string> optionValues = default(List<string>), List<CustomSymbolContact> contacts = default(List<CustomSymbolContact>))
        {
            this.Code = code;
            this.Value = value;
            this.OptionValues = optionValues;
            this.Contacts = contacts;
        }

        /// <summary>
        /// Gets or Sets Code
        /// </summary>
        [DataMember(Name = "code", EmitDefaultValue = true)]
        public string Code { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", EmitDefaultValue = true)]
        public string Value { get; set; }

        /// <summary>
        /// Gets or Sets OptionValues
        /// </summary>
        [DataMember(Name = "optionValues", EmitDefaultValue = true)]
        public List<string> OptionValues { get; set; }

        /// <summary>
        /// Gets or Sets Contacts
        /// </summary>
        [DataMember(Name = "contacts", EmitDefaultValue = true)]
        public List<CustomSymbolContact> Contacts { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CustomSymbolCustomFieldValueDto {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  OptionValues: ").Append(OptionValues).Append("\n");
            sb.Append("  Contacts: ").Append(Contacts).Append("\n");
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
            return this.Equals(input as CustomSymbolCustomFieldValueDto);
        }

        /// <summary>
        /// Returns true if CustomSymbolCustomFieldValueDto instances are equal
        /// </summary>
        /// <param name="input">Instance of CustomSymbolCustomFieldValueDto to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CustomSymbolCustomFieldValueDto input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Code == input.Code ||
                    (this.Code != null &&
                    this.Code.Equals(input.Code))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.OptionValues == input.OptionValues ||
                    this.OptionValues != null &&
                    input.OptionValues != null &&
                    this.OptionValues.SequenceEqual(input.OptionValues)
                ) && 
                (
                    this.Contacts == input.Contacts ||
                    this.Contacts != null &&
                    input.Contacts != null &&
                    this.Contacts.SequenceEqual(input.Contacts)
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
                if (this.Code != null)
                {
                    hashCode = (hashCode * 59) + this.Code.GetHashCode();
                }
                if (this.Value != null)
                {
                    hashCode = (hashCode * 59) + this.Value.GetHashCode();
                }
                if (this.OptionValues != null)
                {
                    hashCode = (hashCode * 59) + this.OptionValues.GetHashCode();
                }
                if (this.Contacts != null)
                {
                    hashCode = (hashCode * 59) + this.Contacts.GetHashCode();
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
