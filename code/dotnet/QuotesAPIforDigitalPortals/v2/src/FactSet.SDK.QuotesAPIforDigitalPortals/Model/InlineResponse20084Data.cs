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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Orderbook.
    /// </summary>
    [DataContract(Name = "inline_response_200_84_data")]
    public partial class InlineResponse20084Data : IEquatable<InlineResponse20084Data>, IValidatableObject
    {
        /// <summary>
        /// Quality of the price.
        /// </summary>
        /// <value>Quality of the price.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum QualityEnum
        {
            /// <summary>
            /// Enum RLT for value: RLT
            /// </summary>
            [EnumMember(Value = "RLT")]
            RLT = 1,

            /// <summary>
            /// Enum DLY for value: DLY
            /// </summary>
            [EnumMember(Value = "DLY")]
            DLY = 2

        }


        /// <summary>
        /// Quality of the price.
        /// </summary>
        /// <value>Quality of the price.</value>
        [DataMember(Name = "quality", EmitDefaultValue = false)]
        public QualityEnum? Quality { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20084Data" /> class.
        /// </summary>
        /// <param name="quality">Quality of the price..</param>
        /// <param name="asks">Ask entries of the full orderbook..</param>
        /// <param name="bids">Bid entries of the full orderbook..</param>
        public InlineResponse20084Data(QualityEnum? quality = default(QualityEnum?), List<InlineResponse20084DataAsks> asks = default(List<InlineResponse20084DataAsks>), List<InlineResponse20084DataAsks> bids = default(List<InlineResponse20084DataAsks>))
        {
            this.Quality = quality;
            this.Asks = asks;
            this.Bids = bids;
        }

        /// <summary>
        /// Ask entries of the full orderbook.
        /// </summary>
        /// <value>Ask entries of the full orderbook.</value>
        [DataMember(Name = "asks", EmitDefaultValue = false)]
        public List<InlineResponse20084DataAsks> Asks { get; set; }

        /// <summary>
        /// Bid entries of the full orderbook.
        /// </summary>
        /// <value>Bid entries of the full orderbook.</value>
        [DataMember(Name = "bids", EmitDefaultValue = false)]
        public List<InlineResponse20084DataAsks> Bids { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse20084Data {\n");
            sb.Append("  Quality: ").Append(Quality).Append("\n");
            sb.Append("  Asks: ").Append(Asks).Append("\n");
            sb.Append("  Bids: ").Append(Bids).Append("\n");
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
            return this.Equals(input as InlineResponse20084Data);
        }

        /// <summary>
        /// Returns true if InlineResponse20084Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20084Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20084Data input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Quality == input.Quality ||
                    this.Quality.Equals(input.Quality)
                ) && 
                (
                    this.Asks == input.Asks ||
                    this.Asks != null &&
                    input.Asks != null &&
                    this.Asks.SequenceEqual(input.Asks)
                ) && 
                (
                    this.Bids == input.Bids ||
                    this.Bids != null &&
                    input.Bids != null &&
                    this.Bids.SequenceEqual(input.Bids)
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
                hashCode = hashCode * 59 + this.Quality.GetHashCode();
                if (this.Asks != null)
                    hashCode = hashCode * 59 + this.Asks.GetHashCode();
                if (this.Bids != null)
                    hashCode = hashCode * 59 + this.Bids.GetHashCode();
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