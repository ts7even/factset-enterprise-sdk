/*
 * Watchlist API For Digital Portals
 *
 * Watchlists keeps track of users' individual investment objectives. They are meant to support the self-directed business of wealth management firms.  The Watchlist API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API with direct access to price histories, please refer to the Time Series API for Digital Portals.
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
using OpenAPIDateConverter = FactSet.SDK.WatchlistAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.WatchlistAPIforDigitalPortals.Model
{
    /// <summary>
    /// Pagination attributes for the cursor-based pagination strategy.
    /// </summary>
    [DataContract(Name = "CursorBasedPaginationOutputObject")]
    public partial class CursorBasedPaginationOutputObject : IEquatable<CursorBasedPaginationOutputObject>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CursorBasedPaginationOutputObject" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CursorBasedPaginationOutputObject() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CursorBasedPaginationOutputObject" /> class.
        /// </summary>
        /// <param name="total">Total number of entries in the result set. (required).</param>
        /// <param name="isEstimatedTotal">Flag indicating that the value of &#x60;total&#x60; is estimated. (required).</param>
        /// <param name="next">The next cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination, otherwise &#x60;null&#x60;. (required).</param>
        /// <param name="previous">The previous cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination. If a previous cursor position is not supported or available, &#x60;previous&#x60; is &#x60;null&#x60;. (required).</param>
        public CursorBasedPaginationOutputObject(decimal total, bool isEstimatedTotal, string next, string previous)
        {
            this.Total = total;
            this.IsEstimatedTotal = isEstimatedTotal;
            // to ensure "next" is required (not null)
            if (next == null) {
                throw new ArgumentNullException("next is a required property for CursorBasedPaginationOutputObject and cannot be null");
            }
            this.Next = next;
            // to ensure "previous" is required (not null)
            if (previous == null) {
                throw new ArgumentNullException("previous is a required property for CursorBasedPaginationOutputObject and cannot be null");
            }
            this.Previous = previous;
        }

        /// <summary>
        /// Total number of entries in the result set.
        /// </summary>
        /// <value>Total number of entries in the result set.</value>
        [DataMember(Name = "total", IsRequired = true, EmitDefaultValue = false)]
        public decimal Total { get; set; }

        /// <summary>
        /// Flag indicating that the value of &#x60;total&#x60; is estimated.
        /// </summary>
        /// <value>Flag indicating that the value of &#x60;total&#x60; is estimated.</value>
        [DataMember(Name = "isEstimatedTotal", IsRequired = true, EmitDefaultValue = true)]
        public bool IsEstimatedTotal { get; set; }

        /// <summary>
        /// The next cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination, otherwise &#x60;null&#x60;.
        /// </summary>
        /// <value>The next cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination, otherwise &#x60;null&#x60;.</value>
        [DataMember(Name = "next", IsRequired = true, EmitDefaultValue = false)]
        public string Next { get; set; }

        /// <summary>
        /// The previous cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination. If a previous cursor position is not supported or available, &#x60;previous&#x60; is &#x60;null&#x60;.
        /// </summary>
        /// <value>The previous cursor position to use in the parameter &#x60;pagination.cursor&#x60; for an endpoint that supports cursor-based pagination. If a previous cursor position is not supported or available, &#x60;previous&#x60; is &#x60;null&#x60;.</value>
        [DataMember(Name = "previous", IsRequired = true, EmitDefaultValue = false)]
        public string Previous { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CursorBasedPaginationOutputObject {\n");
            sb.Append("  Total: ").Append(Total).Append("\n");
            sb.Append("  IsEstimatedTotal: ").Append(IsEstimatedTotal).Append("\n");
            sb.Append("  Next: ").Append(Next).Append("\n");
            sb.Append("  Previous: ").Append(Previous).Append("\n");
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
            return this.Equals(input as CursorBasedPaginationOutputObject);
        }

        /// <summary>
        /// Returns true if CursorBasedPaginationOutputObject instances are equal
        /// </summary>
        /// <param name="input">Instance of CursorBasedPaginationOutputObject to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CursorBasedPaginationOutputObject input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Total == input.Total ||
                    this.Total.Equals(input.Total)
                ) && 
                (
                    this.IsEstimatedTotal == input.IsEstimatedTotal ||
                    this.IsEstimatedTotal.Equals(input.IsEstimatedTotal)
                ) && 
                (
                    this.Next == input.Next ||
                    (this.Next != null &&
                    this.Next.Equals(input.Next))
                ) && 
                (
                    this.Previous == input.Previous ||
                    (this.Previous != null &&
                    this.Previous.Equals(input.Previous))
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
                hashCode = (hashCode * 59) + this.Total.GetHashCode();
                hashCode = (hashCode * 59) + this.IsEstimatedTotal.GetHashCode();
                if (this.Next != null)
                {
                    hashCode = (hashCode * 59) + this.Next.GetHashCode();
                }
                if (this.Previous != null)
                {
                    hashCode = (hashCode * 59) + this.Previous.GetHashCode();
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
