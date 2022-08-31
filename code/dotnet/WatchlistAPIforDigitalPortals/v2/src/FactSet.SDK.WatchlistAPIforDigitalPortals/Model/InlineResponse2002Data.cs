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
    /// InlineResponse2002Data
    /// </summary>
    [DataContract(Name = "inline_response_200_2_data")]
    public partial class InlineResponse2002Data : IEquatable<InlineResponse2002Data>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2002Data" /> class.
        /// </summary>
        /// <param name="id">Identifier of the watchlist..</param>
        /// <param name="name">Name of the watchlist..</param>
        /// <param name="numberPositions">Number of positions..</param>
        /// <param name="creation">Date and time of the watchlist creation..</param>
        public InlineResponse2002Data(string id = default(string), string name = default(string), decimal numberPositions = default(decimal), string creation = default(string))
        {
            this.Id = id;
            this.Name = name;
            this.NumberPositions = numberPositions;
            this.Creation = creation;
        }

        /// <summary>
        /// Identifier of the watchlist.
        /// </summary>
        /// <value>Identifier of the watchlist.</value>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Name of the watchlist.
        /// </summary>
        /// <value>Name of the watchlist.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Number of positions.
        /// </summary>
        /// <value>Number of positions.</value>
        [DataMember(Name = "numberPositions", EmitDefaultValue = false)]
        public decimal NumberPositions { get; set; }

        /// <summary>
        /// Date and time of the watchlist creation.
        /// </summary>
        /// <value>Date and time of the watchlist creation.</value>
        [DataMember(Name = "creation", EmitDefaultValue = false)]
        public string Creation { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2002Data {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  NumberPositions: ").Append(NumberPositions).Append("\n");
            sb.Append("  Creation: ").Append(Creation).Append("\n");
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
            return this.Equals(input as InlineResponse2002Data);
        }

        /// <summary>
        /// Returns true if InlineResponse2002Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2002Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2002Data input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.NumberPositions == input.NumberPositions ||
                    this.NumberPositions.Equals(input.NumberPositions)
                ) && 
                (
                    this.Creation == input.Creation ||
                    (this.Creation != null &&
                    this.Creation.Equals(input.Creation))
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
                {
                    hashCode = (hashCode * 59) + this.Id.GetHashCode();
                }
                if (this.Name != null)
                {
                    hashCode = (hashCode * 59) + this.Name.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.NumberPositions.GetHashCode();
                if (this.Creation != null)
                {
                    hashCode = (hashCode * 59) + this.Creation.GetHashCode();
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
