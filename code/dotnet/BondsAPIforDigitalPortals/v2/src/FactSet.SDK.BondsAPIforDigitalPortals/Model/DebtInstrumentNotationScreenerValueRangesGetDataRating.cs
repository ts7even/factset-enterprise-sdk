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
    /// Parameters related to a rating of a debt instrument. If a rating system is not selected by either specifying it directly (see parameter &#x60;rating.system.ids&#x60;) or by implying it via the minimum rating grade (see parameter &#x60;rating.grade.minimum.ids&#x60;) the result contains no data on ratings.
    /// </summary>
    [DataContract(Name = "_debtInstrument_notation_screener_valueRanges_get_data_rating")]
    public partial class DebtInstrumentNotationScreenerValueRangesGetDataRating : IEquatable<DebtInstrumentNotationScreenerValueRangesGetDataRating>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DebtInstrumentNotationScreenerValueRangesGetDataRating" /> class.
        /// </summary>
        /// <param name="system">system.</param>
        /// <param name="grade">grade.</param>
        public DebtInstrumentNotationScreenerValueRangesGetDataRating(DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem system = default(DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem), DebtInstrumentNotationScreenerSearchDataRatingGrade grade = default(DebtInstrumentNotationScreenerSearchDataRatingGrade))
        {
            this.System = system;
            this.Grade = grade;
        }

        /// <summary>
        /// Gets or Sets System
        /// </summary>
        [DataMember(Name = "system", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerValueRangesGetDataRatingSystem System { get; set; }

        /// <summary>
        /// Gets or Sets Grade
        /// </summary>
        [DataMember(Name = "grade", EmitDefaultValue = false)]
        public DebtInstrumentNotationScreenerSearchDataRatingGrade Grade { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DebtInstrumentNotationScreenerValueRangesGetDataRating {\n");
            sb.Append("  System: ").Append(System).Append("\n");
            sb.Append("  Grade: ").Append(Grade).Append("\n");
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
            return this.Equals(input as DebtInstrumentNotationScreenerValueRangesGetDataRating);
        }

        /// <summary>
        /// Returns true if DebtInstrumentNotationScreenerValueRangesGetDataRating instances are equal
        /// </summary>
        /// <param name="input">Instance of DebtInstrumentNotationScreenerValueRangesGetDataRating to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DebtInstrumentNotationScreenerValueRangesGetDataRating input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.System == input.System ||
                    (this.System != null &&
                    this.System.Equals(input.System))
                ) && 
                (
                    this.Grade == input.Grade ||
                    (this.Grade != null &&
                    this.Grade.Equals(input.Grade))
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
                if (this.System != null)
                    hashCode = hashCode * 59 + this.System.GetHashCode();
                if (this.Grade != null)
                    hashCode = hashCode * 59 + this.Grade.GetHashCode();
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