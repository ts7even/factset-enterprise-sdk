/*
 * Open:Risk API
 *
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
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
using OpenAPIDateConverter = FactSet.SDK.OpenRisk.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OpenRisk.Model
{
    /// <summary>
    /// Security IDs and market values plus optional security grouping; the arrays must have the same number of items. Public security IDs such as SEDOL, CUSIP, ISIN, and Ticker are supported. If proprietary IDs are provided, they need to be mapped via composite assets. Market values are used to calculate weights and do not have to be normalized, but need to be denominated in the single same currency ISO.
    /// </summary>
    [DataContract(Name = "Holding")]
    public partial class Holding : IEquatable<Holding>, IValidatableObject
    {
        /// <summary>
        /// Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)
        /// </summary>
        /// <value>Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum UncoveredAssetsEnum
        {
            /// <summary>
            /// Enum Normalize for value: Normalize
            /// </summary>
            [EnumMember(Value = "Normalize")]
            Normalize = 1,

            /// <summary>
            /// Enum ExcludeToGlobalCash for value: ExcludeToGlobalCash
            /// </summary>
            [EnumMember(Value = "ExcludeToGlobalCash")]
            ExcludeToGlobalCash = 2,

            /// <summary>
            /// Enum NormalizeWithGroupCash for value: NormalizeWithGroupCash
            /// </summary>
            [EnumMember(Value = "NormalizeWithGroupCash")]
            NormalizeWithGroupCash = 3,

            /// <summary>
            /// Enum ExcludeToCashWithinGroup for value: ExcludeToCashWithinGroup
            /// </summary>
            [EnumMember(Value = "ExcludeToCashWithinGroup")]
            ExcludeToCashWithinGroup = 4,

            /// <summary>
            /// Enum NormalizeWithinGroup for value: NormalizeWithinGroup
            /// </summary>
            [EnumMember(Value = "NormalizeWithinGroup")]
            NormalizeWithinGroup = 5

        }


        /// <summary>
        /// Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)
        /// </summary>
        /// <value>Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix)</value>
        [DataMember(Name = "uncoveredAssets", EmitDefaultValue = false)]
        public UncoveredAssetsEnum? UncoveredAssets { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Holding" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Holding() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Holding" /> class.
        /// </summary>
        /// <param name="ids">ids (required).</param>
        /// <param name="marketValues">marketValues (required).</param>
        /// <param name="grouping">grouping.</param>
        /// <param name="uncoveredAssets">Uncovered asset weight handling. Default values: &#39;portfolio&#39; -&gt; ExcludeToGlobalCash, &#39;benchmark&#39; -&gt; Normalize, &#39;market&#39; -&gt; Normalize. See also [OA:21737](https://my.apps.factset.com/oa/pages/21737#group_normal_mix).</param>
        public Holding(List<string> ids, List<double> marketValues,SecurityGroup grouping = default(SecurityGroup), UncoveredAssetsEnum? uncoveredAssets = default(UncoveredAssetsEnum?))
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for Holding and cannot be null");
            }
            this.Ids = ids;
            // to ensure "marketValues" is required (not null)
            if (marketValues == null) {
                throw new ArgumentNullException("marketValues is a required property for Holding and cannot be null");
            }
            this.MarketValues = marketValues;
            this.Grouping = grouping;
            this.UncoveredAssets = uncoveredAssets;
        }

        /// <summary>
        /// Gets or Sets Ids
        /// </summary>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// Gets or Sets MarketValues
        /// </summary>
        [DataMember(Name = "marketValues", IsRequired = true, EmitDefaultValue = false)]
        public List<double> MarketValues { get; set; }

        /// <summary>
        /// Gets or Sets Grouping
        /// </summary>
        [DataMember(Name = "grouping", EmitDefaultValue = false)]
        public SecurityGroup Grouping { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Holding {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  MarketValues: ").Append(MarketValues).Append("\n");
            sb.Append("  Grouping: ").Append(Grouping).Append("\n");
            sb.Append("  UncoveredAssets: ").Append(UncoveredAssets).Append("\n");
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
            return this.Equals(input as Holding);
        }

        /// <summary>
        /// Returns true if Holding instances are equal
        /// </summary>
        /// <param name="input">Instance of Holding to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Holding input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.Ids == input.Ids ||
                    this.Ids != null &&
                    input.Ids != null &&
                    this.Ids.SequenceEqual(input.Ids)
                ) && 
                (
                    this.MarketValues == input.MarketValues ||
                    this.MarketValues != null &&
                    input.MarketValues != null &&
                    this.MarketValues.SequenceEqual(input.MarketValues)
                ) && 
                (
                    this.Grouping == input.Grouping ||
                    (this.Grouping != null &&
                    this.Grouping.Equals(input.Grouping))
                ) && 
                (
                    this.UncoveredAssets == input.UncoveredAssets ||
                    this.UncoveredAssets.Equals(input.UncoveredAssets)
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
                if (this.Ids != null)
                {
                    hashCode = (hashCode * 59) + this.Ids.GetHashCode();
                }
                if (this.MarketValues != null)
                {
                    hashCode = (hashCode * 59) + this.MarketValues.GetHashCode();
                }
                if (this.Grouping != null)
                {
                    hashCode = (hashCode * 59) + this.Grouping.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.UncoveredAssets.GetHashCode();
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