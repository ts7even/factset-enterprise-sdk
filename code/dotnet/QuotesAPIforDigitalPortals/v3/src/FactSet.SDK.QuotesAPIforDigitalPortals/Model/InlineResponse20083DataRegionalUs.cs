/*
 * Quotes API For Digital Portals
 *
 * The Quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals) for direct access to price histories, and the [News API for Digital Portals](https://developer.factset.com/api-catalog/news-api-digital-portals) for searching and fetching related news. 
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
using OpenAPIDateConverter = FactSet.SDK.QuotesAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.QuotesAPIforDigitalPortals.Model
{
    /// <summary>
    /// Trading indicators specific to the United States.
    /// </summary>
    [DataContract(Name = "inline_response_200_83_data_regional_us")]
    public partial class InlineResponse20083DataRegionalUs : IEquatable<InlineResponse20083DataRegionalUs>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse20083DataRegionalUs" /> class.
        /// </summary>
        /// <param name="caveatEmptor">Indicates whether a Caveat Emptor (Buyer Beware) warning has been applied to the security..</param>
        /// <param name="proprietaryQuoteEligible">Security is eligible for proprietary quoting under SEC Rule 15c-211..</param>
        public InlineResponse20083DataRegionalUs(bool? caveatEmptor = default(bool?), bool? proprietaryQuoteEligible = default(bool?))
        {
            this.CaveatEmptor = caveatEmptor;
            this.ProprietaryQuoteEligible = proprietaryQuoteEligible;
        }

        /// <summary>
        /// Indicates whether a Caveat Emptor (Buyer Beware) warning has been applied to the security.
        /// </summary>
        /// <value>Indicates whether a Caveat Emptor (Buyer Beware) warning has been applied to the security.</value>
        [DataMember(Name = "caveatEmptor", EmitDefaultValue = true)]
        public bool? CaveatEmptor { get; set; }

        /// <summary>
        /// Security is eligible for proprietary quoting under SEC Rule 15c-211.
        /// </summary>
        /// <value>Security is eligible for proprietary quoting under SEC Rule 15c-211.</value>
        [DataMember(Name = "proprietaryQuoteEligible", EmitDefaultValue = true)]
        public bool? ProprietaryQuoteEligible { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse20083DataRegionalUs {\n");
            sb.Append("  CaveatEmptor: ").Append(CaveatEmptor).Append("\n");
            sb.Append("  ProprietaryQuoteEligible: ").Append(ProprietaryQuoteEligible).Append("\n");
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
            return this.Equals(input as InlineResponse20083DataRegionalUs);
        }

        /// <summary>
        /// Returns true if InlineResponse20083DataRegionalUs instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse20083DataRegionalUs to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse20083DataRegionalUs input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.CaveatEmptor == input.CaveatEmptor ||
                    (this.CaveatEmptor != null &&
                    this.CaveatEmptor.Equals(input.CaveatEmptor))
                ) && 
                (
                    this.ProprietaryQuoteEligible == input.ProprietaryQuoteEligible ||
                    (this.ProprietaryQuoteEligible != null &&
                    this.ProprietaryQuoteEligible.Equals(input.ProprietaryQuoteEligible))
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
                if (this.CaveatEmptor != null)
                {
                    hashCode = (hashCode * 59) + this.CaveatEmptor.GetHashCode();
                }
                if (this.ProprietaryQuoteEligible != null)
                {
                    hashCode = (hashCode * 59) + this.ProprietaryQuoteEligible.GetHashCode();
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