/*
 * OFDB API
 *
 * OFDB API
 *
 * The version of the OpenAPI document: 2.0.0
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
using OpenAPIDateConverter = FactSet.SDK.OFDB.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OFDB.Model
{
    /// <summary>
    /// AddSymbolsContent
    /// </summary>
    [DataContract(Name = "AddSymbols_content")]
    public partial class AddSymbolsContent : IEquatable<AddSymbolsContent>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AddSymbolsContent" /> class.
        /// </summary>
        /// <param name="date">date.</param>
        /// <param name="field1">field1.</param>
        public AddSymbolsContent(int date = default(int), string field1 = default(string))
        {
            this.Date = date;
            this.Field1 = field1;
        }

        /// <summary>
        /// Gets or Sets Date
        /// </summary>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        public int Date { get; set; }

        /// <summary>
        /// Gets or Sets Field1
        /// </summary>
        [DataMember(Name = "field_1", EmitDefaultValue = false)]
        public string Field1 { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class AddSymbolsContent {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  Field1: ").Append(Field1).Append("\n");
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
            return this.Equals(input as AddSymbolsContent);
        }

        /// <summary>
        /// Returns true if AddSymbolsContent instances are equal
        /// </summary>
        /// <param name="input">Instance of AddSymbolsContent to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AddSymbolsContent input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Date == input.Date ||
                    this.Date.Equals(input.Date)
                ) && 
                (
                    this.Field1 == input.Field1 ||
                    (this.Field1 != null &&
                    this.Field1.Equals(input.Field1))
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
                hashCode = (hashCode * 59) + this.Date.GetHashCode();
                if (this.Field1 != null)
                {
                    hashCode = (hashCode * 59) + this.Field1.GetHashCode();
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