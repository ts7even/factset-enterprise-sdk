/*
 * Funds API For Digital Portals
 *
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
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
using OpenAPIDateConverter = FactSet.SDK.FundsAPIforDigitalPortals.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FundsAPIforDigitalPortals.Model
{
    /// <summary>
    /// Possible values and value ranges of the parameters.
    /// </summary>
    [DataContract(Name = "inline_response_200_5_data")]
    public partial class InlineResponse2005Data : IEquatable<InlineResponse2005Data>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineResponse2005Data" /> class.
        /// </summary>
        /// <param name="totalCount">Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges..</param>
        /// <param name="currency">List of currency identifiers. See endpoint &#x60;/basic/valueUnit/currency/list&#x60; for possible values..</param>
        /// <param name="market">List of market identifiers..</param>
        /// <param name="fund">fund.</param>
        /// <param name="shareClass">shareClass.</param>
        /// <param name="performance">performance.</param>
        public InlineResponse2005Data(decimal totalCount = default(decimal), List<InlineResponse2005DataCurrency> currency = default(List<InlineResponse2005DataCurrency>), List<InlineResponse2005DataMarket> market = default(List<InlineResponse2005DataMarket>), InlineResponse2005DataFund fund = default(InlineResponse2005DataFund), InlineResponse2005DataShareClass shareClass = default(InlineResponse2005DataShareClass), InlineResponse2005DataPerformance performance = default(InlineResponse2005DataPerformance))
        {
            this.TotalCount = totalCount;
            this.Currency = currency;
            this.Market = market;
            this.Fund = fund;
            this.ShareClass = shareClass;
            this.Performance = performance;
        }

        /// <summary>
        /// Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges.
        /// </summary>
        /// <value>Number of notations that satisfy the request parameters, hence have been used to retrieve the possible values and value ranges.</value>
        [DataMember(Name = "totalCount", EmitDefaultValue = false)]
        public decimal TotalCount { get; set; }

        /// <summary>
        /// List of currency identifiers. See endpoint &#x60;/basic/valueUnit/currency/list&#x60; for possible values.
        /// </summary>
        /// <value>List of currency identifiers. See endpoint &#x60;/basic/valueUnit/currency/list&#x60; for possible values.</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public List<InlineResponse2005DataCurrency> Currency { get; set; }

        /// <summary>
        /// List of market identifiers.
        /// </summary>
        /// <value>List of market identifiers.</value>
        [DataMember(Name = "market", EmitDefaultValue = false)]
        public List<InlineResponse2005DataMarket> Market { get; set; }

        /// <summary>
        /// Gets or Sets Fund
        /// </summary>
        [DataMember(Name = "fund", EmitDefaultValue = false)]
        public InlineResponse2005DataFund Fund { get; set; }

        /// <summary>
        /// Gets or Sets ShareClass
        /// </summary>
        [DataMember(Name = "shareClass", EmitDefaultValue = false)]
        public InlineResponse2005DataShareClass ShareClass { get; set; }

        /// <summary>
        /// Gets or Sets Performance
        /// </summary>
        [DataMember(Name = "performance", EmitDefaultValue = false)]
        public InlineResponse2005DataPerformance Performance { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class InlineResponse2005Data {\n");
            sb.Append("  TotalCount: ").Append(TotalCount).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Market: ").Append(Market).Append("\n");
            sb.Append("  Fund: ").Append(Fund).Append("\n");
            sb.Append("  ShareClass: ").Append(ShareClass).Append("\n");
            sb.Append("  Performance: ").Append(Performance).Append("\n");
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
            return this.Equals(input as InlineResponse2005Data);
        }

        /// <summary>
        /// Returns true if InlineResponse2005Data instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineResponse2005Data to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineResponse2005Data input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.TotalCount == input.TotalCount ||
                    this.TotalCount.Equals(input.TotalCount)
                ) && 
                (
                    this.Currency == input.Currency ||
                    this.Currency != null &&
                    input.Currency != null &&
                    this.Currency.SequenceEqual(input.Currency)
                ) && 
                (
                    this.Market == input.Market ||
                    this.Market != null &&
                    input.Market != null &&
                    this.Market.SequenceEqual(input.Market)
                ) && 
                (
                    this.Fund == input.Fund ||
                    (this.Fund != null &&
                    this.Fund.Equals(input.Fund))
                ) && 
                (
                    this.ShareClass == input.ShareClass ||
                    (this.ShareClass != null &&
                    this.ShareClass.Equals(input.ShareClass))
                ) && 
                (
                    this.Performance == input.Performance ||
                    (this.Performance != null &&
                    this.Performance.Equals(input.Performance))
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
                hashCode = (hashCode * 59) + this.TotalCount.GetHashCode();
                if (this.Currency != null)
                {
                    hashCode = (hashCode * 59) + this.Currency.GetHashCode();
                }
                if (this.Market != null)
                {
                    hashCode = (hashCode * 59) + this.Market.GetHashCode();
                }
                if (this.Fund != null)
                {
                    hashCode = (hashCode * 59) + this.Fund.GetHashCode();
                }
                if (this.ShareClass != null)
                {
                    hashCode = (hashCode * 59) + this.ShareClass.GetHashCode();
                }
                if (this.Performance != null)
                {
                    hashCode = (hashCode * 59) + this.Performance.GetHashCode();
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