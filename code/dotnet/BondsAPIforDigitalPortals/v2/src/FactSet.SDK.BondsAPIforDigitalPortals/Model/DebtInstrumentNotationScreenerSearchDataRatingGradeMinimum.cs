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
    /// Minimum rating grade.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_search_data_rating_grade_minimum")]
    public partial class DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum : IEquatable<DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum" /> class.
        /// </summary>
        /// <param name="ids">List of rating grade identifiers. Allowed are at most two identifiers which must refer to rating grades originating from different rating systems. Only debt instruments that satisfy all conditions, i.e. are rated higher than or equal to all provided rating grades, are returned. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grade of a debt instrument in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade)..</param>
        public DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum(List<decimal> ids = default(List<decimal>))
        {
            this.Ids = ids;
        }

        /// <summary>
        /// List of rating grade identifiers. Allowed are at most two identifiers which must refer to rating grades originating from different rating systems. Only debt instruments that satisfy all conditions, i.e. are rated higher than or equal to all provided rating grades, are returned. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grade of a debt instrument in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade).
        /// </summary>
        /// <value>List of rating grade identifiers. Allowed are at most two identifiers which must refer to rating grades originating from different rating systems. Only debt instruments that satisfy all conditions, i.e. are rated higher than or equal to all provided rating grades, are returned. The sequence of the provided identifiers corresponds to the response attributes &#x60;ratingSystem1&#x60; and &#x60;ratingSystem2&#x60; respectively, i.e. the rating grade of a debt instrument in the rating system of which the first identifier in the provided list is a member, is represented by the attribute &#x60;ratingSystem1.rating.grade&#x60; (and &#x60;ratingSystem1.rating.id&#x60; for the identifier of the rating grade).</value>
        [DataMember(Name = "ids", EmitDefaultValue = false)]
        public List<decimal> Ids { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerSearchDataRatingGradeMinimum input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
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
                if (this.Ids != null)
                    hashCode = hashCode * 59 + this.Ids.GetHashCode();
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