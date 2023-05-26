/*
 * Signals API
 *
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: signals.api@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.Signals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Signals.Model
{
    /// <summary>
    /// EventsEntitiesPost
    /// </summary>
    [DataContract(Name = "eventsEntitiesPost")]
    public partial class EventsEntitiesPost : IEquatable<EventsEntitiesPost>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventsEntitiesPost" /> class.
        /// </summary>
        /// <param name="created">A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window..</param>
        /// <param name="updated">A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window..</param>
        /// <param name="signalIds">Comma delimited string of signalIds.</param>
        /// <param name="themes">Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes..</param>
        /// <param name="categories">Comma delimited string of category ids. Full list of signal categories can be viewed at /categories..</param>
        /// <param name="userRelevanceScore">A range for filtering signal events based on their relevancy score..</param>
        public EventsEntitiesPost(DateTimeInterval created = default(DateTimeInterval), DateTimeInterval updated = default(DateTimeInterval), string signalIds = default(string), string themes = default(string), string categories = default(string), RelevanceScoreRange userRelevanceScore = default(RelevanceScoreRange))
        {
            this.Created = created;
            this.Updated = updated;
            this.SignalIds = signalIds;
            this.Themes = themes;
            this.Categories = categories;
            this.UserRelevanceScore = userRelevanceScore;
        }

        /// <summary>
        /// A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window.
        /// </summary>
        /// <value>A date/time (UTC) interval for filtering signal events based on their creation date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window.</value>
        [DataMember(Name = "created", EmitDefaultValue = true)]
        public DateTimeInterval Created { get; set; }

        /// <summary>
        /// A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window.
        /// </summary>
        /// <value>A date/time (UTC) interval for filtering signal events based on their last updated date. Defaults to NOW - 7 days if omitted. Users with limited access can only provide the default or a smaller date window.</value>
        [DataMember(Name = "updated", EmitDefaultValue = true)]
        public DateTimeInterval Updated { get; set; }

        /// <summary>
        /// Comma delimited string of signalIds
        /// </summary>
        /// <value>Comma delimited string of signalIds</value>
        [DataMember(Name = "signalIds", EmitDefaultValue = false)]
        public string SignalIds { get; set; }

        /// <summary>
        /// Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.
        /// </summary>
        /// <value>Comma delimited string of theme ids. Full list of signal themes can be viewed at /themes.</value>
        [DataMember(Name = "themes", EmitDefaultValue = false)]
        public string Themes { get; set; }

        /// <summary>
        /// Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.
        /// </summary>
        /// <value>Comma delimited string of category ids. Full list of signal categories can be viewed at /categories.</value>
        [DataMember(Name = "categories", EmitDefaultValue = false)]
        public string Categories { get; set; }

        /// <summary>
        /// A range for filtering signal events based on their relevancy score.
        /// </summary>
        /// <value>A range for filtering signal events based on their relevancy score.</value>
        [DataMember(Name = "userRelevanceScore", EmitDefaultValue = true)]
        public RelevanceScoreRange UserRelevanceScore { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventsEntitiesPost {\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Updated: ").Append(Updated).Append("\n");
            sb.Append("  SignalIds: ").Append(SignalIds).Append("\n");
            sb.Append("  Themes: ").Append(Themes).Append("\n");
            sb.Append("  Categories: ").Append(Categories).Append("\n");
            sb.Append("  UserRelevanceScore: ").Append(UserRelevanceScore).Append("\n");
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
            return this.Equals(input as EventsEntitiesPost);
        }

        /// <summary>
        /// Returns true if EventsEntitiesPost instances are equal
        /// </summary>
        /// <param name="input">Instance of EventsEntitiesPost to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventsEntitiesPost input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Updated == input.Updated ||
                    (this.Updated != null &&
                    this.Updated.Equals(input.Updated))
                ) && 
                (
                    this.SignalIds == input.SignalIds ||
                    (this.SignalIds != null &&
                    this.SignalIds.Equals(input.SignalIds))
                ) && 
                (
                    this.Themes == input.Themes ||
                    (this.Themes != null &&
                    this.Themes.Equals(input.Themes))
                ) && 
                (
                    this.Categories == input.Categories ||
                    (this.Categories != null &&
                    this.Categories.Equals(input.Categories))
                ) && 
                (
                    this.UserRelevanceScore == input.UserRelevanceScore ||
                    (this.UserRelevanceScore != null &&
                    this.UserRelevanceScore.Equals(input.UserRelevanceScore))
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
                if (this.Created != null)
                {
                    hashCode = (hashCode * 59) + this.Created.GetHashCode();
                }
                if (this.Updated != null)
                {
                    hashCode = (hashCode * 59) + this.Updated.GetHashCode();
                }
                if (this.SignalIds != null)
                {
                    hashCode = (hashCode * 59) + this.SignalIds.GetHashCode();
                }
                if (this.Themes != null)
                {
                    hashCode = (hashCode * 59) + this.Themes.GetHashCode();
                }
                if (this.Categories != null)
                {
                    hashCode = (hashCode * 59) + this.Categories.GetHashCode();
                }
                if (this.UserRelevanceScore != null)
                {
                    hashCode = (hashCode * 59) + this.UserRelevanceScore.GetHashCode();
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
