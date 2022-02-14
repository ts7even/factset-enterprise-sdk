/*
 * FactSet Search Answers API
 *
 * The FactSet Search Answers API provides answers to search queries, reflecting the data shown within FactSet Search Answers, and allowing you to easily add financial data to your widgets, lookups, bots, and assistants. The API understands a fixed amount of search terms and returns structured data from FactSet’s many data sources. Possible answers include Price of a Company, Top 10 Year-to-Date Gainers, Revenue per Passenger Mile, and many more.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: FactSearch.Team@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.FactSetSearchAnswers.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetSearchAnswers.Model
{
    /// <summary>
    /// Table
    /// </summary>
    [DataContract(Name = "Table")]
    public partial class Table : IEquatable<Table>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Table" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Table() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Table" /> class.
        /// </summary>
        /// <param name="tableHeaders">tableHeaders.</param>
        /// <param name="tableRows">tableRows (required).</param>
        /// <param name="tableFooters">tableFooters.</param>
        public Table(List<string> tableHeaders = default(List<string>), List<List<string>> tableRows = default(List<List<string>>), List<string> tableFooters = default(List<string>))
        {
            // to ensure "tableRows" is required (not null)
            if (tableRows == null) {
                throw new ArgumentNullException("tableRows is a required property for Table and cannot be null");
            }
            this.TableRows = tableRows;
            this.TableHeaders = tableHeaders;
            this.TableFooters = tableFooters;
        }

        /// <summary>
        /// Gets or Sets TableHeaders
        /// </summary>
        [DataMember(Name = "tableHeaders", EmitDefaultValue = false)]
        public List<string> TableHeaders { get; set; }

        /// <summary>
        /// Gets or Sets TableRows
        /// </summary>
        [DataMember(Name = "tableRows", IsRequired = true, EmitDefaultValue = false)]
        public List<List<string>> TableRows { get; set; }

        /// <summary>
        /// Gets or Sets TableFooters
        /// </summary>
        [DataMember(Name = "tableFooters", EmitDefaultValue = false)]
        public List<string> TableFooters { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Table {\n");
            sb.Append("  TableHeaders: ").Append(TableHeaders).Append("\n");
            sb.Append("  TableRows: ").Append(TableRows).Append("\n");
            sb.Append("  TableFooters: ").Append(TableFooters).Append("\n");
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
            return this.Equals(input as Table);
        }

        /// <summary>
        /// Returns true if Table instances are equal
        /// </summary>
        /// <param name="input">Instance of Table to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Table input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.TableHeaders == input.TableHeaders ||
                    this.TableHeaders != null &&
                    input.TableHeaders != null &&
                    this.TableHeaders.SequenceEqual(input.TableHeaders)
                ) && 
                (
                    this.TableRows == input.TableRows ||
                    this.TableRows != null &&
                    input.TableRows != null &&
                    this.TableRows.SequenceEqual(input.TableRows)
                ) && 
                (
                    this.TableFooters == input.TableFooters ||
                    this.TableFooters != null &&
                    input.TableFooters != null &&
                    this.TableFooters.SequenceEqual(input.TableFooters)
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
                if (this.TableHeaders != null)
                    hashCode = hashCode * 59 + this.TableHeaders.GetHashCode();
                if (this.TableRows != null)
                    hashCode = hashCode * 59 + this.TableRows.GetHashCode();
                if (this.TableFooters != null)
                    hashCode = hashCode * 59 + this.TableFooters.GetHashCode();
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
