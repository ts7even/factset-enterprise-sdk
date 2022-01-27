/*
 * FactSet ESG API
 *
 * FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 13 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p> 
 *
 * The version of the OpenAPI document: 1.1.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetESG.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetESG.Model
{
    /// <summary>
    /// SasbScores
    /// </summary>
    [DataContract(Name = "sasbScores")]
    public partial class SasbScores : IEquatable<SasbScores>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SasbScores" /> class.
        /// </summary>
        /// <param name="date">Date for the period requested expressed in YYYY-MM-DD format..</param>
        /// <param name="fsymId">FactSet Entity Identifier. Six alpha-numeric characters, excluding vowels, with a -E suffix (XXXXXX-E)..</param>
        /// <param name="requestId">Identifier that was used for the request..</param>
        /// <param name="sasbCategory">The specific SASB &#39;category&#39; the score is referring to..</param>
        /// <param name="sasbScore">The SASB Score value for the given &#39;scoreType&#39; and &#39;category&#39;. When scoreType &#x3D; ESG_RANK, the data type will be string, otherwise data type will be a number with double format..</param>
        /// <param name="scoreType">The name of the specific SASB Score type being shown in the response. This will be represented by the scoreTypes input: PULSE, INSIGHT, MOMENTUM, ART_VOL_TTM, CAT_VOL_TTM, or DYNAMIC_MAT..</param>
        public SasbScores(DateTime date = default(DateTime), string fsymId = default(string), string requestId = default(string), string sasbCategory = default(string), Object sasbScore = default(Object), string scoreType = default(string))
        {
            this.Date = date;
            this.FsymId = fsymId;
            this.RequestId = requestId;
            this.SasbCategory = sasbCategory;
            this.SasbScore = sasbScore;
            this.ScoreType = scoreType;
        }

        /// <summary>
        /// Date for the period requested expressed in YYYY-MM-DD format.
        /// </summary>
        /// <value>Date for the period requested expressed in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime Date { get; set; }

        /// <summary>
        /// FactSet Entity Identifier. Six alpha-numeric characters, excluding vowels, with a -E suffix (XXXXXX-E).
        /// </summary>
        /// <value>FactSet Entity Identifier. Six alpha-numeric characters, excluding vowels, with a -E suffix (XXXXXX-E).</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = false)]
        public string FsymId { get; set; }

        /// <summary>
        /// Identifier that was used for the request.
        /// </summary>
        /// <value>Identifier that was used for the request.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// The specific SASB &#39;category&#39; the score is referring to.
        /// </summary>
        /// <value>The specific SASB &#39;category&#39; the score is referring to.</value>
        [DataMember(Name = "sasbCategory", EmitDefaultValue = false)]
        public string SasbCategory { get; set; }

        /// <summary>
        /// The SASB Score value for the given &#39;scoreType&#39; and &#39;category&#39;. When scoreType &#x3D; ESG_RANK, the data type will be string, otherwise data type will be a number with double format.
        /// </summary>
        /// <value>The SASB Score value for the given &#39;scoreType&#39; and &#39;category&#39;. When scoreType &#x3D; ESG_RANK, the data type will be string, otherwise data type will be a number with double format.</value>
        [DataMember(Name = "sasbScore", EmitDefaultValue = false)]
        public Object SasbScore { get; set; }

        /// <summary>
        /// The name of the specific SASB Score type being shown in the response. This will be represented by the scoreTypes input: PULSE, INSIGHT, MOMENTUM, ART_VOL_TTM, CAT_VOL_TTM, or DYNAMIC_MAT.
        /// </summary>
        /// <value>The name of the specific SASB Score type being shown in the response. This will be represented by the scoreTypes input: PULSE, INSIGHT, MOMENTUM, ART_VOL_TTM, CAT_VOL_TTM, or DYNAMIC_MAT.</value>
        [DataMember(Name = "scoreType", EmitDefaultValue = false)]
        public string ScoreType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SasbScores {\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  SasbCategory: ").Append(SasbCategory).Append("\n");
            sb.Append("  SasbScore: ").Append(SasbScore).Append("\n");
            sb.Append("  ScoreType: ").Append(ScoreType).Append("\n");
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
            return this.Equals(input as SasbScores);
        }

        /// <summary>
        /// Returns true if SasbScores instances are equal
        /// </summary>
        /// <param name="input">Instance of SasbScores to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SasbScores input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
                ) && 
                (
                    this.SasbCategory == input.SasbCategory ||
                    (this.SasbCategory != null &&
                    this.SasbCategory.Equals(input.SasbCategory))
                ) && 
                (
                    this.SasbScore == input.SasbScore ||
                    (this.SasbScore != null &&
                    this.SasbScore.Equals(input.SasbScore))
                ) && 
                (
                    this.ScoreType == input.ScoreType ||
                    (this.ScoreType != null &&
                    this.ScoreType.Equals(input.ScoreType))
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
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.FsymId != null)
                    hashCode = hashCode * 59 + this.FsymId.GetHashCode();
                if (this.RequestId != null)
                    hashCode = hashCode * 59 + this.RequestId.GetHashCode();
                if (this.SasbCategory != null)
                    hashCode = hashCode * 59 + this.SasbCategory.GetHashCode();
                if (this.SasbScore != null)
                    hashCode = hashCode * 59 + this.SasbScore.GetHashCode();
                if (this.ScoreType != null)
                    hashCode = hashCode * 59 + this.ScoreType.GetHashCode();
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