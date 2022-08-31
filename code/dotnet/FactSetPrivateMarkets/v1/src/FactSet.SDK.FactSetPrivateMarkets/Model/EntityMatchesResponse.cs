/*
 * FactSet Private Markets API
 *
 * FactSet Private Markets API encompasses Private Company Financials data to start. Private Company firmographics can be found in the FactSet Entity API. The future plans of this service will include additional Private Markets data, such as Private Equity/Venture Capital. 
 *
 * The version of the OpenAPI document: 1.2.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetPrivateMarkets.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetPrivateMarkets.Model
{
    /// <summary>
    /// Response object for Entity Matches.
    /// </summary>
    [DataContract(Name = "EntityMatchesResponse")]
    public partial class EntityMatchesResponse : IEquatable<EntityMatchesResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityMatchesResponse" /> class.
        /// </summary>
        /// <param name="data">Candidate list of &#x60;Entity Match&#x60; objects..</param>
        public EntityMatchesResponse(List<EntityMatch> data = default(List<EntityMatch>))
        {
            this.Data = data;
        }

        /// <summary>
        /// Candidate list of &#x60;Entity Match&#x60; objects.
        /// </summary>
        /// <value>Candidate list of &#x60;Entity Match&#x60; objects.</value>
        [DataMember(Name = "data", EmitDefaultValue = false)]
        public List<EntityMatch> Data { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EntityMatchesResponse {\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
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
            return this.Equals(input as EntityMatchesResponse);
        }

        /// <summary>
        /// Returns true if EntityMatchesResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of EntityMatchesResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntityMatchesResponse input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
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
                if (this.Data != null)
                {
                    hashCode = (hashCode * 59) + this.Data.GetHashCode();
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
