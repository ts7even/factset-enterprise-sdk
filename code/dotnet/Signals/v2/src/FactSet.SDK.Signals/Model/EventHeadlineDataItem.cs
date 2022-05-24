/*
 * Signals API
 *
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.4.0
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
    /// EventHeadlineDataItem
    /// </summary>
    [DataContract(Name = "eventHeadlineDataItem")]
    public partial class EventHeadlineDataItem : IEquatable<EventHeadlineDataItem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventHeadlineDataItem" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EventHeadlineDataItem() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EventHeadlineDataItem" /> class.
        /// </summary>
        /// <param name="requestId">The id that was requested. This can be a ticker, cusip or factset entity id. (required).</param>
        /// <param name="signalId">Signal Id for this event. e.g. dilutionTrigger (required).</param>
        /// <param name="signalName">Signal Name for this event. e.g. dilutionTrigger (required).</param>
        /// <param name="theme">Theme name of the signal for this event. e.g. Debt Capital Structure (required).</param>
        /// <param name="source">Primary data provider for the signal this event belongs to. e.g. FactSet, Bitvore (required).</param>
        /// <param name="eventId">A unique id for this event. (required).</param>
        /// <param name="eventDate">The UTC date/time of the event in ISO 8601 format. (required).</param>
        /// <param name="summary">One sentence summary of the event. (required).</param>
        /// <param name="userRelevanceScore">Relevancy score of this event for the requesting user on a scale of 0 to 1. Higher value indicates more relevancy. (required).</param>
        /// <param name="created">Date/Time in UTC the event was first recorded in our data store..</param>
        public EventHeadlineDataItem(string requestId = default(string), string signalId = default(string), string signalName = default(string), string theme = default(string), string source = default(string), Guid eventId = default(Guid), DateTime eventDate = default(DateTime), string summary = default(string), float userRelevanceScore = default(float), DateTime created = default(DateTime))
        {
            // to ensure "requestId" is required (not null)
            if (requestId == null) {
                throw new ArgumentNullException("requestId is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.RequestId = requestId;
            // to ensure "signalId" is required (not null)
            if (signalId == null) {
                throw new ArgumentNullException("signalId is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.SignalId = signalId;
            // to ensure "signalName" is required (not null)
            if (signalName == null) {
                throw new ArgumentNullException("signalName is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.SignalName = signalName;
            // to ensure "theme" is required (not null)
            if (theme == null) {
                throw new ArgumentNullException("theme is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.Theme = theme;
            // to ensure "source" is required (not null)
            if (source == null) {
                throw new ArgumentNullException("source is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.Source = source;
            this.EventId = eventId;
            this.EventDate = eventDate;
            // to ensure "summary" is required (not null)
            if (summary == null) {
                throw new ArgumentNullException("summary is a required property for EventHeadlineDataItem and cannot be null");
            }
            this.Summary = summary;
            this.UserRelevanceScore = userRelevanceScore;
            this.Created = created;
        }

        /// <summary>
        /// The id that was requested. This can be a ticker, cusip or factset entity id.
        /// </summary>
        /// <value>The id that was requested. This can be a ticker, cusip or factset entity id.</value>
        [DataMember(Name = "requestId", IsRequired = true, EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Signal Id for this event. e.g. dilutionTrigger
        /// </summary>
        /// <value>Signal Id for this event. e.g. dilutionTrigger</value>
        [DataMember(Name = "signalId", IsRequired = true, EmitDefaultValue = false)]
        public string SignalId { get; set; }

        /// <summary>
        /// Signal Name for this event. e.g. dilutionTrigger
        /// </summary>
        /// <value>Signal Name for this event. e.g. dilutionTrigger</value>
        [DataMember(Name = "signalName", IsRequired = true, EmitDefaultValue = false)]
        public string SignalName { get; set; }

        /// <summary>
        /// Theme name of the signal for this event. e.g. Debt Capital Structure
        /// </summary>
        /// <value>Theme name of the signal for this event. e.g. Debt Capital Structure</value>
        [DataMember(Name = "theme", IsRequired = true, EmitDefaultValue = false)]
        public string Theme { get; set; }

        /// <summary>
        /// Primary data provider for the signal this event belongs to. e.g. FactSet, Bitvore
        /// </summary>
        /// <value>Primary data provider for the signal this event belongs to. e.g. FactSet, Bitvore</value>
        [DataMember(Name = "source", IsRequired = true, EmitDefaultValue = false)]
        public string Source { get; set; }

        /// <summary>
        /// A unique id for this event.
        /// </summary>
        /// <value>A unique id for this event.</value>
        [DataMember(Name = "eventId", IsRequired = true, EmitDefaultValue = false)]
        public Guid EventId { get; set; }

        /// <summary>
        /// The UTC date/time of the event in ISO 8601 format.
        /// </summary>
        /// <value>The UTC date/time of the event in ISO 8601 format.</value>
        [DataMember(Name = "eventDate", IsRequired = true, EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public DateTime EventDate { get; set; }

        /// <summary>
        /// One sentence summary of the event.
        /// </summary>
        /// <value>One sentence summary of the event.</value>
        [DataMember(Name = "summary", IsRequired = true, EmitDefaultValue = false)]
        public string Summary { get; set; }

        /// <summary>
        /// Relevancy score of this event for the requesting user on a scale of 0 to 1. Higher value indicates more relevancy.
        /// </summary>
        /// <value>Relevancy score of this event for the requesting user on a scale of 0 to 1. Higher value indicates more relevancy.</value>
        [DataMember(Name = "userRelevanceScore", IsRequired = true, EmitDefaultValue = false)]
        public float UserRelevanceScore { get; set; }

        /// <summary>
        /// Date/Time in UTC the event was first recorded in our data store.
        /// </summary>
        /// <value>Date/Time in UTC the event was first recorded in our data store.</value>
        [DataMember(Name = "created", EmitDefaultValue = false)]
        public DateTime Created { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventHeadlineDataItem {\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  SignalId: ").Append(SignalId).Append("\n");
            sb.Append("  SignalName: ").Append(SignalName).Append("\n");
            sb.Append("  Theme: ").Append(Theme).Append("\n");
            sb.Append("  Source: ").Append(Source).Append("\n");
            sb.Append("  EventId: ").Append(EventId).Append("\n");
            sb.Append("  EventDate: ").Append(EventDate).Append("\n");
            sb.Append("  Summary: ").Append(Summary).Append("\n");
            sb.Append("  UserRelevanceScore: ").Append(UserRelevanceScore).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
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
            return this.Equals(input as EventHeadlineDataItem);
        }

        /// <summary>
        /// Returns true if EventHeadlineDataItem instances are equal
        /// </summary>
        /// <param name="input">Instance of EventHeadlineDataItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventHeadlineDataItem input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
                ) && 
                (
                    this.SignalId == input.SignalId ||
                    (this.SignalId != null &&
                    this.SignalId.Equals(input.SignalId))
                ) && 
                (
                    this.SignalName == input.SignalName ||
                    (this.SignalName != null &&
                    this.SignalName.Equals(input.SignalName))
                ) && 
                (
                    this.Theme == input.Theme ||
                    (this.Theme != null &&
                    this.Theme.Equals(input.Theme))
                ) && 
                (
                    this.Source == input.Source ||
                    (this.Source != null &&
                    this.Source.Equals(input.Source))
                ) && 
                (
                    this.EventId == input.EventId ||
                    (this.EventId != null &&
                    this.EventId.Equals(input.EventId))
                ) && 
                (
                    this.EventDate == input.EventDate ||
                    (this.EventDate != null &&
                    this.EventDate.Equals(input.EventDate))
                ) && 
                (
                    this.Summary == input.Summary ||
                    (this.Summary != null &&
                    this.Summary.Equals(input.Summary))
                ) && 
                (
                    this.UserRelevanceScore == input.UserRelevanceScore ||
                    this.UserRelevanceScore.Equals(input.UserRelevanceScore)
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
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
                if (this.RequestId != null)
                {
                    hashCode = (hashCode * 59) + this.RequestId.GetHashCode();
                }
                if (this.SignalId != null)
                {
                    hashCode = (hashCode * 59) + this.SignalId.GetHashCode();
                }
                if (this.SignalName != null)
                {
                    hashCode = (hashCode * 59) + this.SignalName.GetHashCode();
                }
                if (this.Theme != null)
                {
                    hashCode = (hashCode * 59) + this.Theme.GetHashCode();
                }
                if (this.Source != null)
                {
                    hashCode = (hashCode * 59) + this.Source.GetHashCode();
                }
                if (this.EventId != null)
                {
                    hashCode = (hashCode * 59) + this.EventId.GetHashCode();
                }
                if (this.EventDate != null)
                {
                    hashCode = (hashCode * 59) + this.EventDate.GetHashCode();
                }
                if (this.Summary != null)
                {
                    hashCode = (hashCode * 59) + this.Summary.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.UserRelevanceScore.GetHashCode();
                if (this.Created != null)
                {
                    hashCode = (hashCode * 59) + this.Created.GetHashCode();
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