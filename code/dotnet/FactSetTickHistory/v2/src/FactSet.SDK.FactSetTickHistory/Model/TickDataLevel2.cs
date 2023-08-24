/*
 * Tick History
 *
 * Tick History provides dynamic access to historical tick data for a specific security for specific dates or date range.
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
using OpenAPIDateConverter = FactSet.SDK.FactSetTickHistory.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetTickHistory.Model
{
    /// <summary>
    /// Returns Tick History Files
    /// </summary>
    [DataContract(Name = "TickDataLevel2")]
    public partial class TickDataLevel2 : IEquatable<TickDataLevel2>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TickDataLevel2" /> class.
        /// </summary>
        /// <param name="status">The status of the request.</param>
        /// <param name="requestTimestamp">Timestamp of when request was made.</param>
        /// <param name="updateTimestamp">:\&quot;Timestamp when the file was last updated\&quot;.</param>
        /// <param name="listOfFiles">Data Object.</param>
        public TickDataLevel2(string status = default(string), DateTime requestTimestamp = default(DateTime), DateTime updateTimestamp = default(DateTime), List<Files> listOfFiles = default(List<Files>))
        {
            this.Status = status;
            this.RequestTimestamp = requestTimestamp;
            this.UpdateTimestamp = updateTimestamp;
            this.ListOfFiles = listOfFiles;
        }

        /// <summary>
        /// The status of the request
        /// </summary>
        /// <value>The status of the request</value>
        [DataMember(Name = "status", EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// Timestamp of when request was made
        /// </summary>
        /// <value>Timestamp of when request was made</value>
        [DataMember(Name = "requestTimestamp", EmitDefaultValue = false)]
        public DateTime RequestTimestamp { get; set; }

        /// <summary>
        /// :\&quot;Timestamp when the file was last updated\&quot;
        /// </summary>
        /// <value>:\&quot;Timestamp when the file was last updated\&quot;</value>
        [DataMember(Name = "updateTimestamp", EmitDefaultValue = false)]
        public DateTime UpdateTimestamp { get; set; }

        /// <summary>
        /// Data Object
        /// </summary>
        /// <value>Data Object</value>
        [DataMember(Name = "listOfFiles", EmitDefaultValue = false)]
        public List<Files> ListOfFiles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class TickDataLevel2 {\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  RequestTimestamp: ").Append(RequestTimestamp).Append("\n");
            sb.Append("  UpdateTimestamp: ").Append(UpdateTimestamp).Append("\n");
            sb.Append("  ListOfFiles: ").Append(ListOfFiles).Append("\n");
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
            return this.Equals(input as TickDataLevel2);
        }

        /// <summary>
        /// Returns true if TickDataLevel2 instances are equal
        /// </summary>
        /// <param name="input">Instance of TickDataLevel2 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TickDataLevel2 input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.RequestTimestamp == input.RequestTimestamp ||
                    (this.RequestTimestamp != null &&
                    this.RequestTimestamp.Equals(input.RequestTimestamp))
                ) && 
                (
                    this.UpdateTimestamp == input.UpdateTimestamp ||
                    (this.UpdateTimestamp != null &&
                    this.UpdateTimestamp.Equals(input.UpdateTimestamp))
                ) && 
                (
                    this.ListOfFiles == input.ListOfFiles ||
                    this.ListOfFiles != null &&
                    input.ListOfFiles != null &&
                    this.ListOfFiles.SequenceEqual(input.ListOfFiles)
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
                if (this.Status != null)
                {
                    hashCode = (hashCode * 59) + this.Status.GetHashCode();
                }
                if (this.RequestTimestamp != null)
                {
                    hashCode = (hashCode * 59) + this.RequestTimestamp.GetHashCode();
                }
                if (this.UpdateTimestamp != null)
                {
                    hashCode = (hashCode * 59) + this.UpdateTimestamp.GetHashCode();
                }
                if (this.ListOfFiles != null)
                {
                    hashCode = (hashCode * 59) + this.ListOfFiles.GetHashCode();
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
