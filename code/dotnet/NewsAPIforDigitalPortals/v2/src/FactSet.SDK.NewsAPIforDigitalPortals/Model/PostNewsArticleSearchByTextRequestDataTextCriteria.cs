/*
 * News API For Digital Portals
 *
 * Consume FactSet’s StreetAccount news and 3rd party content through an API that seamlessly integrates with [quotes](https://developer.factset.com/api-catalog/quotes-api-digital-portals), [time series](https://developer.factset.com/api-catalog/time-series-api-digital-portals), [watchlists](https://developer.factset.com/api-catalog/watchlist-api-digital-portals), and other Functional APIs.  Search for news articles from various news distributors and publishers. Incorporate a multitude of search parameters such as region, category, source, article type and provider-specific meta data, to easily filter out the noise.  All search and list endpoints can be subscribed to receive streamed updates.  News providers include:  * APA * AWP  * Businesswire * Cercle Finance * Direkt News SE * Dow Jones News * dpa * dpa-AFX  * EUWAX * GlobenewsWire * Kauppalehti * Midnight Trader * MoneyAM * newsaktuell * OMX * PR Newswire  * Ritzau Finans * StreetAccount News * TDN News        See the [Quotes API for Digital Portals](https://developer.factset.com/api-catalog/quotes-api-digital-portals) for access to detailed price and performance information, plus basic support for security identifier cross-reference. 
 *
 * The version of the OpenAPI document: 2
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
using OpenAPIDateConverter = FactSet.SDK.NewsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.NewsAPIforDigitalPortals.Model
{
    /// <summary>
    /// PostNewsArticleSearchByTextRequestDataTextCriteria
    /// </summary>
    [DataContract(Name = "PostNewsArticleSearchByTextRequest_data_text_criteria")]
    public partial class PostNewsArticleSearchByTextRequestDataTextCriteria : IEquatable<PostNewsArticleSearchByTextRequestDataTextCriteria>, IValidatableObject
    {
        /// <summary>
        /// Specify how the criteria should be applied to the search.
        /// </summary>
        /// <value>Specify how the criteria should be applied to the search.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum SelectionTypeEnum
        {
            /// <summary>
            /// Enum Include for value: include
            /// </summary>
            [EnumMember(Value = "include")]
            Include = 1,

            /// <summary>
            /// Enum Exclude for value: exclude
            /// </summary>
            [EnumMember(Value = "exclude")]
            Exclude = 2

        }


        /// <summary>
        /// Specify how the criteria should be applied to the search.
        /// </summary>
        /// <value>Specify how the criteria should be applied to the search.</value>
        [DataMember(Name = "selectionType", EmitDefaultValue = false)]
        public SelectionTypeEnum? SelectionType { get; set; }
        /// <summary>
        /// Restrict fulltext search to specific scope.
        /// </summary>
        /// <value>Restrict fulltext search to specific scope.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ScopeEnum
        {
            /// <summary>
            /// Enum Headline for value: headline
            /// </summary>
            [EnumMember(Value = "headline")]
            Headline = 1,

            /// <summary>
            /// Enum Body for value: body
            /// </summary>
            [EnumMember(Value = "body")]
            Body = 2,

            /// <summary>
            /// Enum All for value: all
            /// </summary>
            [EnumMember(Value = "all")]
            All = 3

        }


        /// <summary>
        /// Restrict fulltext search to specific scope.
        /// </summary>
        /// <value>Restrict fulltext search to specific scope.</value>
        [DataMember(Name = "scope", EmitDefaultValue = false)]
        public ScopeEnum? Scope { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PostNewsArticleSearchByTextRequestDataTextCriteria" /> class.
        /// </summary>
        /// <param name="selectionType">Specify how the criteria should be applied to the search. (default to SelectionTypeEnum.Include).</param>
        /// <param name="phrases">Phrases to be used in the criteria..</param>
        /// <param name="minimumMatchScore">Minimum match score for words in the news article. (default to 0.7M).</param>
        /// <param name="scope">Restrict fulltext search to specific scope. (default to ScopeEnum.All).</param>
        public PostNewsArticleSearchByTextRequestDataTextCriteria(SelectionTypeEnum? selectionType = SelectionTypeEnum.Include, List<string> phrases = default(List<string>), decimal minimumMatchScore = 0.7M, ScopeEnum? scope = ScopeEnum.All)
        {
            this.SelectionType = selectionType;
            this.Phrases = phrases;
            this.MinimumMatchScore = minimumMatchScore;
            this.Scope = scope;
        }

        /// <summary>
        /// Phrases to be used in the criteria.
        /// </summary>
        /// <value>Phrases to be used in the criteria.</value>
        [DataMember(Name = "phrases", EmitDefaultValue = false)]
        public List<string> Phrases { get; set; }

        /// <summary>
        /// Minimum match score for words in the news article.
        /// </summary>
        /// <value>Minimum match score for words in the news article.</value>
        [DataMember(Name = "minimumMatchScore", EmitDefaultValue = false)]
        public decimal MinimumMatchScore { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class PostNewsArticleSearchByTextRequestDataTextCriteria {\n");
            sb.Append("  SelectionType: ").Append(SelectionType).Append("\n");
            sb.Append("  Phrases: ").Append(Phrases).Append("\n");
            sb.Append("  MinimumMatchScore: ").Append(MinimumMatchScore).Append("\n");
            sb.Append("  Scope: ").Append(Scope).Append("\n");
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
            return this.Equals(input as PostNewsArticleSearchByTextRequestDataTextCriteria);
        }

        /// <summary>
        /// Returns true if PostNewsArticleSearchByTextRequestDataTextCriteria instances are equal
        /// </summary>
        /// <param name="input">Instance of PostNewsArticleSearchByTextRequestDataTextCriteria to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PostNewsArticleSearchByTextRequestDataTextCriteria input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.SelectionType == input.SelectionType ||
                    this.SelectionType.Equals(input.SelectionType)
                ) && 
                (
                    this.Phrases == input.Phrases ||
                    this.Phrases != null &&
                    input.Phrases != null &&
                    this.Phrases.SequenceEqual(input.Phrases)
                ) && 
                (
                    this.MinimumMatchScore == input.MinimumMatchScore ||
                    this.MinimumMatchScore.Equals(input.MinimumMatchScore)
                ) && 
                (
                    this.Scope == input.Scope ||
                    this.Scope.Equals(input.Scope)
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
                hashCode = (hashCode * 59) + this.SelectionType.GetHashCode();
                if (this.Phrases != null)
                {
                    hashCode = (hashCode * 59) + this.Phrases.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.MinimumMatchScore.GetHashCode();
                hashCode = (hashCode * 59) + this.Scope.GetHashCode();
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