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
using OpenAPIDateConverter = FactSet.SDK.ETFProfileandPrices.Client.OpenAPIDateConverter;

namespace FactSet.SDK.ETFProfileandPrices.Model
{
    /// <summary>
    /// Exchange.
    /// </summary>
    [DataContract(Name = "inline_response_200_data_exchange")]
    public partial class InlineResponse200DataExchange : IEquatable<InlineResponse200DataExchange>, IValidatableObject
    {
        /// <summary>
        /// short region code where ETP exchange is located. This data is available for all the regions.
        /// </summary>
        /// <value>short region code where ETP exchange is located. This data is available for all the regions.</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum RegionEnum
        {
            /// <summary>
            /// Enum Europe for value: Europe
            /// </summary>
            [EnumMember(Value = "Europe")]
            Europe = 1,

            /// <summary>
            /// Enum NorthAmerica for value: North America
            /// </summary>
            [EnumMember(Value = "North America")]
            NorthAmerica = 2,

            /// <summary>
            /// Enum AsiaPacific for value: Asia-Pacific
            /// </summary>
            [EnumMember(Value = "Asia-Pacific")]
            AsiaPacific = 3,

            /// <summary>
            /// Enum MiddleEastAfrica for value: Middle East &amp; Africa
            /// </summary>
            [EnumMember(Value = "Middle East & Africa")]
            MiddleEastAfrica = 4

        }


        /// <summary>
        /// short region code where ETP exchange is located. This data is available for all the regions.
        /// </summary>
        /// <value>short region code where ETP exchange is located. This data is available for all the regions.</value>
        [DataMember(Name = "region", EmitDefaultValue = false)]
        public RegionEnum? Region { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse200DataExchange" /> class.
        /// </summary>
        /// <param name="code">Short Code of the exchange. This data is available for all the regions..</param>
        /// <param name="name">Name of the exchance where ETP is listed. This data is available for all the regions..</param>
        /// <param name="country">Short country code where ETP exchange is located. This data is available for all the regions and country code is in format ISO 3166-1 alpha-2..</param>
        /// <param name="region">short region code where ETP exchange is located. This data is available for all the regions..</param>
        public InlineResponse200DataExchange(string code = default(string), string name = default(string), string country = default(string), RegionEnum? region = default(RegionEnum?))
        {
            this.Code = code;
            this.Name = name;
            this.Country = country;
            this.Region = region;
        }

        /// <summary>
        /// Short Code of the exchange. This data is available for all the regions.
        /// </summary>
        /// <value>Short Code of the exchange. This data is available for all the regions.</value>
        [DataMember(Name = "code", EmitDefaultValue = false)]
        public string Code { get; set; }

        /// <summary>
        /// Name of the exchance where ETP is listed. This data is available for all the regions.
        /// </summary>
        /// <value>Name of the exchance where ETP is listed. This data is available for all the regions.</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Short country code where ETP exchange is located. This data is available for all the regions and country code is in format ISO 3166-1 alpha-2.
        /// </summary>
        /// <value>Short country code where ETP exchange is located. This data is available for all the regions and country code is in format ISO 3166-1 alpha-2.</value>
        [DataMember(Name = "country", EmitDefaultValue = false)]
        public string Country { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineResponse200DataExchange {\n");
            sb.Append("  Code: ").Append(Code).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Country: ").Append(Country).Append("\n");
            sb.Append("  Region: ").Append(Region).Append("\n");
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
            return this.Equals(input as InlineResponse200DataExchange);
        }

        /// <summary>
        /// Returns true if InlineResponse200DataExchange instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse200DataExchange to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse200DataExchange input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Code == input.Code ||
                    (this.Code != null &&
                    this.Code.Equals(input.Code))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Country == input.Country ||
                    (this.Country != null &&
                    this.Country.Equals(input.Country))
                ) && 
                (
                    this.Region == input.Region ||
                    this.Region.Equals(input.Region)
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
                if (this.Code != null)
                    hashCode = hashCode * 59 + this.Code.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Country != null)
                    hashCode = hashCode * 59 + this.Country.GetHashCode();
                hashCode = hashCode * 59 + this.Region.GetHashCode();
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