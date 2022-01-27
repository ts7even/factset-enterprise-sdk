/*
 * FactSet Funds API
 *
 * FactSet Mutual Funds data offers over 50 fund- and share class-specific data points for mutual funds listed in the United States. <p>FactSet Mutual Funds Reference provides fund-specific reference information as well as FactSet's proprietary classification system. It includes but is not limited to the following coverage    * Fund descriptions    * A seven-tier classification system   * Leverage information   * Fees and expenses    * Portfolio managers       FactSet Mutual Funds Time Series provides quantitative data items on a historical basis. It includes but is not limited to the following coverage    * Net asset value   * Fund flows    * Assets under management   * Total return  
 *
 * The version of the OpenAPI document: 1.0.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetFunds.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetFunds.Model
{
    /// <summary>
    /// Aum
    /// </summary>
    [DataContract(Name = "aum")]
    public partial class Aum : IEquatable<Aum>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Aum" /> class.
        /// </summary>
        /// <param name="fsymId">FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested..</param>
        /// <param name="fundLevelAUM">Returns fund-level Assets Under Management (AUM) data. Fund-level AUM is the sum of the market values of the positions in the fund&#39;s portfolio. This represents all share classes..</param>
        /// <param name="shrClassAUMRpt">As-Reported AUM. Calculated by using shares outstanding at previous close multiplied by NAV at previous close. This is typically the value seen on fund websites. As Reported AUM &#x3D; (Shares Outstanding t0 * NAV t0)..</param>
        /// <param name="shrClassAUMAct">Actual AUM. Calculated by using shares outstanding at previous close multiplied by NAV of one day prior to close. This is the value used in calculating fund flows. Actual AUM &#x3D; (Shares Outstanding t0 * NAV t-1).</param>
        /// <param name="currency">The Currency of the AUM values. By default it will be in the FUnds Currency, unless otherwise requested via the currency parameter..</param>
        /// <param name="date">The date of the AUM in YYYY-MM-DD format..</param>
        /// <param name="requestId">The requested Id sent as input..</param>
        public Aum(string fsymId = default(string), double fundLevelAUM = default(double), double shrClassAUMRpt = default(double), double shrClassAUMAct = default(double), string currency = default(string), string date = default(string), string requestId = default(string))
        {
            this.FsymId = fsymId;
            this.FundLevelAUM = fundLevelAUM;
            this.ShrClassAUMRpt = shrClassAUMRpt;
            this.ShrClassAUMAct = shrClassAUMAct;
            this.Currency = currency;
            this.Date = date;
            this.RequestId = requestId;
        }

        /// <summary>
        /// FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.
        /// </summary>
        /// <value>FactSet Security Identifier. Six alpha-numeric characters, excluding vowels, with a -S suffix (XXXXXX-S), resolved from the requestId of the Fund requested.</value>
        [DataMember(Name = "fsymId", EmitDefaultValue = false)]
        public string FsymId { get; set; }

        /// <summary>
        /// Returns fund-level Assets Under Management (AUM) data. Fund-level AUM is the sum of the market values of the positions in the fund&#39;s portfolio. This represents all share classes.
        /// </summary>
        /// <value>Returns fund-level Assets Under Management (AUM) data. Fund-level AUM is the sum of the market values of the positions in the fund&#39;s portfolio. This represents all share classes.</value>
        [DataMember(Name = "fundLevelAUM", EmitDefaultValue = false)]
        public double FundLevelAUM { get; set; }

        /// <summary>
        /// As-Reported AUM. Calculated by using shares outstanding at previous close multiplied by NAV at previous close. This is typically the value seen on fund websites. As Reported AUM &#x3D; (Shares Outstanding t0 * NAV t0).
        /// </summary>
        /// <value>As-Reported AUM. Calculated by using shares outstanding at previous close multiplied by NAV at previous close. This is typically the value seen on fund websites. As Reported AUM &#x3D; (Shares Outstanding t0 * NAV t0).</value>
        [DataMember(Name = "shrClassAUMRpt", EmitDefaultValue = false)]
        public double ShrClassAUMRpt { get; set; }

        /// <summary>
        /// Actual AUM. Calculated by using shares outstanding at previous close multiplied by NAV of one day prior to close. This is the value used in calculating fund flows. Actual AUM &#x3D; (Shares Outstanding t0 * NAV t-1)
        /// </summary>
        /// <value>Actual AUM. Calculated by using shares outstanding at previous close multiplied by NAV of one day prior to close. This is the value used in calculating fund flows. Actual AUM &#x3D; (Shares Outstanding t0 * NAV t-1)</value>
        [DataMember(Name = "shrClassAUMAct", EmitDefaultValue = false)]
        public double ShrClassAUMAct { get; set; }

        /// <summary>
        /// The Currency of the AUM values. By default it will be in the FUnds Currency, unless otherwise requested via the currency parameter.
        /// </summary>
        /// <value>The Currency of the AUM values. By default it will be in the FUnds Currency, unless otherwise requested via the currency parameter.</value>
        [DataMember(Name = "currency", EmitDefaultValue = false)]
        public string Currency { get; set; }

        /// <summary>
        /// The date of the AUM in YYYY-MM-DD format.
        /// </summary>
        /// <value>The date of the AUM in YYYY-MM-DD format.</value>
        [DataMember(Name = "date", EmitDefaultValue = false)]
        [JsonConverter(typeof(OpenAPIDateConverter))]
        public string Date { get; set; }

        /// <summary>
        /// The requested Id sent as input.
        /// </summary>
        /// <value>The requested Id sent as input.</value>
        [DataMember(Name = "requestId", EmitDefaultValue = false)]
        public string RequestId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Aum {\n");
            sb.Append("  FsymId: ").Append(FsymId).Append("\n");
            sb.Append("  FundLevelAUM: ").Append(FundLevelAUM).Append("\n");
            sb.Append("  ShrClassAUMRpt: ").Append(ShrClassAUMRpt).Append("\n");
            sb.Append("  ShrClassAUMAct: ").Append(ShrClassAUMAct).Append("\n");
            sb.Append("  Currency: ").Append(Currency).Append("\n");
            sb.Append("  Date: ").Append(Date).Append("\n");
            sb.Append("  RequestId: ").Append(RequestId).Append("\n");
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
            return this.Equals(input as Aum);
        }

        /// <summary>
        /// Returns true if Aum instances are equal
        /// </summary>
        /// <param name="input">Instance of Aum to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Aum input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FsymId == input.FsymId ||
                    (this.FsymId != null &&
                    this.FsymId.Equals(input.FsymId))
                ) && 
                (
                    this.FundLevelAUM == input.FundLevelAUM ||
                    this.FundLevelAUM.Equals(input.FundLevelAUM)
                ) && 
                (
                    this.ShrClassAUMRpt == input.ShrClassAUMRpt ||
                    this.ShrClassAUMRpt.Equals(input.ShrClassAUMRpt)
                ) && 
                (
                    this.ShrClassAUMAct == input.ShrClassAUMAct ||
                    this.ShrClassAUMAct.Equals(input.ShrClassAUMAct)
                ) && 
                (
                    this.Currency == input.Currency ||
                    (this.Currency != null &&
                    this.Currency.Equals(input.Currency))
                ) && 
                (
                    this.Date == input.Date ||
                    (this.Date != null &&
                    this.Date.Equals(input.Date))
                ) && 
                (
                    this.RequestId == input.RequestId ||
                    (this.RequestId != null &&
                    this.RequestId.Equals(input.RequestId))
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
                if (this.FsymId != null)
                    hashCode = hashCode * 59 + this.FsymId.GetHashCode();
                hashCode = hashCode * 59 + this.FundLevelAUM.GetHashCode();
                hashCode = hashCode * 59 + this.ShrClassAUMRpt.GetHashCode();
                hashCode = hashCode * 59 + this.ShrClassAUMAct.GetHashCode();
                if (this.Currency != null)
                    hashCode = hashCode * 59 + this.Currency.GetHashCode();
                if (this.Date != null)
                    hashCode = hashCode * 59 + this.Date.GetHashCode();
                if (this.RequestId != null)
                    hashCode = hashCode * 59 + this.RequestId.GetHashCode();
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