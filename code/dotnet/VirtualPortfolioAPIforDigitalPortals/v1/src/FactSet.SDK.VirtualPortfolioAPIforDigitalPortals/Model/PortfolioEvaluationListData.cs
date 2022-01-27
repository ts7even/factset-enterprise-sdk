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
using OpenAPIDateConverter = FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.VirtualPortfolioAPIforDigitalPortals.Model
{
    /// <summary>
    /// The data member contains the request&#39;s primary data.
    /// </summary>
    [DataContract(Name = "_portfolio_evaluation_list_data")]
    public partial class PortfolioEvaluationListData : IEquatable<PortfolioEvaluationListData>, IValidatableObject
    {
        /// <summary>
        /// Defines Resolution
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ResolutionEnum
        {
            /// <summary>
            /// Enum Daily for value: daily
            /// </summary>
            [EnumMember(Value = "daily")]
            Daily = 1,

            /// <summary>
            /// Enum Weekly for value: weekly
            /// </summary>
            [EnumMember(Value = "weekly")]
            Weekly = 2,

            /// <summary>
            /// Enum Monthly for value: monthly
            /// </summary>
            [EnumMember(Value = "monthly")]
            Monthly = 3

        }


        /// <summary>
        /// Gets or Sets Resolution
        /// </summary>
        [DataMember(Name = "resolution", EmitDefaultValue = false)]
        public ResolutionEnum? Resolution { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioEvaluationListData" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PortfolioEvaluationListData() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PortfolioEvaluationListData" /> class.
        /// </summary>
        /// <param name="id">Identifier of the portfolio. (required).</param>
        /// <param name="range">range (required).</param>
        /// <param name="resolution">resolution (default to ResolutionEnum.Daily).</param>
        public PortfolioEvaluationListData(string id = default(string), PortfolioEvaluationListDataRange range = default(PortfolioEvaluationListDataRange), ResolutionEnum? resolution = ResolutionEnum.Daily)
        {
            // to ensure "id" is required (not null)
            if (id == null) {
                throw new ArgumentNullException("id is a required property for PortfolioEvaluationListData and cannot be null");
            }
            this.Id = id;
            // to ensure "range" is required (not null)
            if (range == null) {
                throw new ArgumentNullException("range is a required property for PortfolioEvaluationListData and cannot be null");
            }
            this.Range = range;
            this.Resolution = resolution;
        }

        /// <summary>
        /// Identifier of the portfolio.
        /// </summary>
        /// <value>Identifier of the portfolio.</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets Range
        /// </summary>
        [DataMember(Name = "range", IsRequired = true, EmitDefaultValue = false)]
        public PortfolioEvaluationListDataRange Range { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PortfolioEvaluationListData {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Range: ").Append(Range).Append("\n");
            sb.Append("  Resolution: ").Append(Resolution).Append("\n");
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
            return this.Equals(input as PortfolioEvaluationListData);
        }

        /// <summary>
        /// Returns true if PortfolioEvaluationListData instances are equal
        /// </summary>
        /// <param name="input">Instance of PortfolioEvaluationListData to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PortfolioEvaluationListData input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Range == input.Range ||
                    (this.Range != null &&
                    this.Range.Equals(input.Range))
                ) && 
                (
                    this.Resolution == input.Resolution ||
                    this.Resolution.Equals(input.Resolution)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.Range != null)
                    hashCode = hashCode * 59 + this.Range.GetHashCode();
                hashCode = hashCode * 59 + this.Resolution.GetHashCode();
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