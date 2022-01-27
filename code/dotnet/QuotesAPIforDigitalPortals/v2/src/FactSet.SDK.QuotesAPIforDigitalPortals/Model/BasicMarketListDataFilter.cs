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
    /// Criteria that filter the items in the response list; only items that match all of the criteria are returned.
    /// </summary>
    [DataContract(Name = "_basic_market_list_data_filter")]
    public partial class BasicMarketListDataFilter : IEquatable<BasicMarketListDataFilter>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BasicMarketListDataFilter" /> class.
        /// </summary>
        /// <param name="markets">markets.</param>
        /// <param name="onlyActive">Indicates whether the market exists. (default to true).</param>
        public BasicMarketListDataFilter(BasicMarketListDataFilterMarkets markets = default(BasicMarketListDataFilterMarkets), bool onlyActive = true)
        {
            this.Markets = markets;
            this.OnlyActive = onlyActive;
        }

        /// <summary>
        /// Gets or Sets Markets
        /// </summary>
        [DataMember(Name = "markets", EmitDefaultValue = false)]
        public BasicMarketListDataFilterMarkets Markets { get; set; }

        /// <summary>
        /// Indicates whether the market exists.
        /// </summary>
        /// <value>Indicates whether the market exists.</value>
        [DataMember(Name = "onlyActive", EmitDefaultValue = true)]
        public bool OnlyActive { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class BasicMarketListDataFilter {\n");
            sb.Append("  Markets: ").Append(Markets).Append("\n");
            sb.Append("  OnlyActive: ").Append(OnlyActive).Append("\n");
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
            return this.Equals(input as BasicMarketListDataFilter);
        }

        /// <summary>
        /// Returns true if BasicMarketListDataFilter instances are equal
        /// </summary>
        /// <param name="input">Instance of BasicMarketListDataFilter to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(BasicMarketListDataFilter input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Markets == input.Markets ||
                    (this.Markets != null &&
                    this.Markets.Equals(input.Markets))
                ) && 
                (
                    this.OnlyActive == input.OnlyActive ||
                    this.OnlyActive.Equals(input.OnlyActive)
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
                if (this.Markets != null)
                    hashCode = hashCode * 59 + this.Markets.GetHashCode();
                hashCode = hashCode * 59 + this.OnlyActive.GetHashCode();
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