/*
 * FactSet Symbology API
 *
 * The FactSet Symbology API provides symbol resolution services, allowing clients to translate market identifiers into various symbology types such as, FactSet Permanent Identifiers, CUSIP, ISIN, SEDOL, Tickers, and LEIs. <p>Factset's Symbology API sits at the center of its hub-and-spoke data model, enabling you to quickly harmonize the expanding catalog of Content APIs.</p> 
 *
 * The version of the OpenAPI document: 3.1.0
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
using OpenAPIDateConverter = FactSet.SDK.Symbology.Client.OpenAPIDateConverter;

namespace FactSet.SDK.Symbology.Model
{
    /// <summary>
    /// Request object for Identifier Resolution endpoint.
    /// </summary>
    [DataContract(Name = "identifierResolutionRequest")]
    public partial class IdentifierResolutionRequest : IEquatable<IdentifierResolutionRequest>, IValidatableObject
    {
        /// <summary>
        /// Defines OutputSymbolTypes
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum OutputSymbolTypesEnum
        {
            /// <summary>
            /// Enum BIC for value: BIC
            /// </summary>
            [EnumMember(Value = "BIC")]
            BIC = 1,

            /// <summary>
            /// Enum CIK for value: CIK
            /// </summary>
            [EnumMember(Value = "CIK")]
            CIK = 2,

            /// <summary>
            /// Enum CRD for value: CRD
            /// </summary>
            [EnumMember(Value = "CRD")]
            CRD = 3,

            /// <summary>
            /// Enum EIN for value: EIN
            /// </summary>
            [EnumMember(Value = "EIN")]
            EIN = 4,

            /// <summary>
            /// Enum FITCH for value: FITCH
            /// </summary>
            [EnumMember(Value = "FITCH")]
            FITCH = 5,

            /// <summary>
            /// Enum LEI for value: LEI
            /// </summary>
            [EnumMember(Value = "LEI")]
            LEI = 6,

            /// <summary>
            /// Enum MD for value: MD
            /// </summary>
            [EnumMember(Value = "MD")]
            MD = 7,

            /// <summary>
            /// Enum SPR for value: SPR
            /// </summary>
            [EnumMember(Value = "SPR")]
            SPR = 8,

            /// <summary>
            /// Enum WKN for value: WKN
            /// </summary>
            [EnumMember(Value = "WKN")]
            WKN = 9,

            /// <summary>
            /// Enum UKCH for value: UKCH
            /// </summary>
            [EnumMember(Value = "UKCH")]
            UKCH = 10,

            /// <summary>
            /// Enum RSSD for value: RSSD
            /// </summary>
            [EnumMember(Value = "RSSD")]
            RSSD = 11,

            /// <summary>
            /// Enum SEDOL for value: SEDOL
            /// </summary>
            [EnumMember(Value = "SEDOL")]
            SEDOL = 12,

            /// <summary>
            /// Enum CUSIP for value: CUSIP
            /// </summary>
            [EnumMember(Value = "CUSIP")]
            CUSIP = 13,

            /// <summary>
            /// Enum FsymEntityId for value: fsymEntityId
            /// </summary>
            [EnumMember(Value = "fsymEntityId")]
            FsymEntityId = 14,

            /// <summary>
            /// Enum FsymSecurityId for value: fsymSecurityId
            /// </summary>
            [EnumMember(Value = "fsymSecurityId")]
            FsymSecurityId = 15,

            /// <summary>
            /// Enum FsymRegionalId for value: fsymRegionalId
            /// </summary>
            [EnumMember(Value = "fsymRegionalId")]
            FsymRegionalId = 16,

            /// <summary>
            /// Enum FsymListingId for value: fsymListingId
            /// </summary>
            [EnumMember(Value = "fsymListingId")]
            FsymListingId = 17,

            /// <summary>
            /// Enum ISIN for value: ISIN
            /// </summary>
            [EnumMember(Value = "ISIN")]
            ISIN = 18,

            /// <summary>
            /// Enum TickerExchange for value: tickerExchange
            /// </summary>
            [EnumMember(Value = "tickerExchange")]
            TickerExchange = 19,

            /// <summary>
            /// Enum TickerRegion for value: tickerRegion
            /// </summary>
            [EnumMember(Value = "tickerRegion")]
            TickerRegion = 20,

            /// <summary>
            /// Enum JCN for value: JCN
            /// </summary>
            [EnumMember(Value = "JCN")]
            JCN = 21

        }



        /// <summary>
        /// Requested identifiers to be returned. Multiple identifier types can be requested with each request.
        /// </summary>
        /// <value>Requested identifiers to be returned. Multiple identifier types can be requested with each request.</value>
        [DataMember(Name = "outputSymbolTypes", IsRequired = true, EmitDefaultValue = false)]
        public List<OutputSymbolTypesEnum> OutputSymbolTypes { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="IdentifierResolutionRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected IdentifierResolutionRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="IdentifierResolutionRequest" /> class.
        /// </summary>
        /// <param name="ids">Requested market securities or entities. All requested identifiers must be of the same type. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#39;. (required).</param>
        /// <param name="inputSymbolType">inputSymbolType (required).</param>
        /// <param name="outputSymbolTypes">Requested identifiers to be returned. Multiple identifier types can be requested with each request. (required).</param>
        public IdentifierResolutionRequest(List<string> ids, GetInputSymbolType inputSymbolType, List<OutputSymbolTypesEnum> outputSymbolTypes)
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for IdentifierResolutionRequest and cannot be null");
            }
            this.Ids = ids;
            // to ensure "inputSymbolType" is required (not null)
            if (inputSymbolType == null) {
                throw new ArgumentNullException("inputSymbolType is a required property for IdentifierResolutionRequest and cannot be null");
            }
            this.InputSymbolType = inputSymbolType;
            // to ensure "outputSymbolTypes" is required (not null)
            if (outputSymbolTypes == null) {
                throw new ArgumentNullException("outputSymbolTypes is a required property for IdentifierResolutionRequest and cannot be null");
            }
            this.OutputSymbolTypes = outputSymbolTypes;
        }

        /// <summary>
        /// Requested market securities or entities. All requested identifiers must be of the same type. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#39;.
        /// </summary>
        /// <value>Requested market securities or entities. All requested identifiers must be of the same type. Accepted identifiers include all FactSet Permanent Identifiers types, CUSIP, SEDOL, ISIN, and Tickers. This request value is sent back in the response as, &#x60;requestId&#39;.</value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// Gets or Sets InputSymbolType
        /// </summary>
        [DataMember(Name = "inputSymbolType", IsRequired = true, EmitDefaultValue = false)]
        public GetInputSymbolType InputSymbolType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class IdentifierResolutionRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  InputSymbolType: ").Append(InputSymbolType).Append("\n");
            sb.Append("  OutputSymbolTypes: ").Append(OutputSymbolTypes).Append("\n");
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
            return this.Equals(input as IdentifierResolutionRequest);
        }

        /// <summary>
        /// Returns true if IdentifierResolutionRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of IdentifierResolutionRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(IdentifierResolutionRequest input)
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
                    this.InputSymbolType == input.InputSymbolType ||
                    (this.InputSymbolType != null &&
                    this.InputSymbolType.Equals(input.InputSymbolType))
                ) && 
                (
                    this.OutputSymbolTypes == input.OutputSymbolTypes ||
                    this.OutputSymbolTypes.SequenceEqual(input.OutputSymbolTypes)
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
                if (this.InputSymbolType != null)
                {
                    hashCode = (hashCode * 59) + this.InputSymbolType.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.OutputSymbolTypes.GetHashCode();
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
