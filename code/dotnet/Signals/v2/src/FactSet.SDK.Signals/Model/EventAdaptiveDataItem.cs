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
    /// EventAdaptiveDataItem
    /// </summary>
    [DataContract(Name = "eventAdaptiveDataItem")]
    public partial class EventAdaptiveDataItem : IEquatable<EventAdaptiveDataItem>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventAdaptiveDataItem" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EventAdaptiveDataItem() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EventAdaptiveDataItem" /> class.
        /// </summary>
        /// <param name="requestId">The id that was requested, ticker, cusip, factset entity id etc. (required).</param>
        /// <param name="signalId">Signal Id for this event. (required).</param>
        /// <param name="adaptiveCard">A JSON object that&#39;s compliant with MS adaptive card schema. (required).</param>
        public EventAdaptiveDataItem(string requestId = default(string), string signalId = default(string), Dictionary<string, Object> adaptiveCard = default(Dictionary<string, Object>))
        {
            // to ensure "requestId" is required (not null)
            if (requestId == null) {
                throw new ArgumentNullException("requestId is a required property for EventAdaptiveDataItem and cannot be null");
            }
            this.RequestId = requestId;
            // to ensure "signalId" is required (not null)
            if (signalId == null) {
                throw new ArgumentNullException("signalId is a required property for EventAdaptiveDataItem and cannot be null");
            }
            this.SignalId = signalId;
            // to ensure "adaptiveCard" is required (not null)
            if (adaptiveCard == null) {
                throw new ArgumentNullException("adaptiveCard is a required property for EventAdaptiveDataItem and cannot be null");
            }
            this.AdaptiveCard = adaptiveCard;
        }

        /// <summary>
        /// The id that was requested, ticker, cusip, factset entity id etc.
        /// </summary>
        /// <value>The id that was requested, ticker, cusip, factset entity id etc.</value>
        [DataMember(Name = "requestId", IsRequired = true, EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Signal Id for this event.
        /// </summary>
        /// <value>Signal Id for this event.</value>
        [DataMember(Name = "signalId", IsRequired = true, EmitDefaultValue = false)]
        public string SignalId { get; set; }

        /// <summary>
        /// A JSON object that&#39;s compliant with MS adaptive card schema.
        /// </summary>
        /// <value>A JSON object that&#39;s compliant with MS adaptive card schema.</value>
        [DataMember(Name = "adaptiveCard", IsRequired = true, EmitDefaultValue = false)]
        public Dictionary<string, Object> AdaptiveCard { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EventAdaptiveDataItem {\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
            sb.Append("  SignalId: ").Append(SignalId).Append("\n");
            sb.Append("  AdaptiveCard: ").Append(AdaptiveCard).Append("\n");
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
            return this.Equals(input as EventAdaptiveDataItem);
        }

        /// <summary>
        /// Returns true if EventAdaptiveDataItem instances are equal
        /// </summary>
        /// <param name="input">Instance of EventAdaptiveDataItem to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventAdaptiveDataItem input)
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
                    this.AdaptiveCard == input.AdaptiveCard ||
                    this.AdaptiveCard != null &&
                    input.AdaptiveCard != null &&
                    this.AdaptiveCard.SequenceEqual(input.AdaptiveCard)
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
                if (this.AdaptiveCard != null)
                {
                    hashCode = (hashCode * 59) + this.AdaptiveCard.GetHashCode();
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