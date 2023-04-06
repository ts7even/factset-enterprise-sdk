/*
 * FactSet ESG API
 *
 * FactSet ESG (powered by FactSet Truvalue Labs) applies machine learning to uncover risks and opportunities from companies' Environmental, Social and Governance (ESG) behavior, which are aggregated and categorized into continuously updated, material ESG scores. The service focuses on company ESG behavior from external sources and includes both positive and negative events that go beyond traditional sources of ESG risk data.<p> FactSet ESG extracts, analyzes, and generates scores from millions of documents each month collected from more than 100,000 data sources in over 30 languages. Sources include news, trade journals, NGOs, watchdog groups, trade blogs, industry reports and social media. Products deliver investable insights by revealing value and risk factors from unstructured data at the speed of current events.</p> 
 *
 * The version of the OpenAPI document: 1.5.0
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
using OpenAPIDateConverter = FactSet.SDK.FactSetESG.Client.OpenAPIDateConverter;

namespace FactSet.SDK.FactSetESG.Model
{
    /// <summary>
    /// SFDR PAI Indicators Request Body
    /// </summary>
    [DataContract(Name = "sfdrPaiRequest")]
    public partial class SfdrPaiRequest : IEquatable<SfdrPaiRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SfdrPaiRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SfdrPaiRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SfdrPaiRequest" /> class.
        /// </summary>
        /// <param name="ids">Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input.  *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;*  (required).</param>
        /// <param name="feelback">This parameter would return the latest PAI data based on the indicators or subtopics requested. The parameter should not be used in conjuction &#x60;fiscalPeriodStart&#x60; and &#x60;fiscalPeriodEnd&#x60;  (default to false).</param>
        /// <param name="fiscalPeriodStart">Fiscal period start is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. .</param>
        /// <param name="fiscalPeriodEnd">Fiscal period end is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. .</param>
        /// <param name="indicators">The indicators are the Principal Adverse Impact (PAI) metrics which consists of General, Mandatory and Additional indicators which supports the SFDR reporting. The data can also be requested for individual sub topic codes in addition to the indicators mentioned below -    |**SFDR PAI Indicators**|**Description**| |- --|- --| |**MandatoryIndicators**| Mandatory indicators are the indicators which must be reported under the EU Sustainable Finance Disclosure Regulation (SFDR).| |**AdditionalIndicators**| These are additional environmental and social indicators as mentioned in additional tables as provided in the Annex 1 table in the SFDR RTS report.| |**GHGEmissions**| This mandatory indicator includes metrics related to greenhouse emissions such as - Scope 1, 2, and 3 emissions, footprint and intensity and energy consumption from non-renewable and high climate sectors.| |**Biodiversity**| This mandatory indicator includes metrics pertaining to biodiversity and a company&#39;s impacts on biodiversity-sensitive areas.| |**Water**| This mandatory indicator includes data relating to emissions to water as made by the companies.| |**Waste**| This mandatory indicator includes data relating to hazardous waste as generated by the companies.| |**SocialEmployeeMatters**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**Emissions**| This additional indicator includes metrics related to air pollutants, inorganic pollutants and ozone depleting substance. | |**EnergyPerformance**| This additional indicator includes metrics related to various sources of non-renewable energy as used by the companies. | |**WaterWasteMaterialEmissions**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**AdditionalEmployeeMatters**| This additional indicator includes metrics related to workplace discrimination and safety, whistleblower mechanism and supplier code of conduct.| |**HumanRights**| This additional indicator includes metrics related to both policies and performance of a company in the areas of human rights, forced labor and human trafficking.| |**AntiCorruptionAntiBribery**| This additional indicator includes data related to company violations of anti-corruption and anti-bribery laws, and resulting fines.| .</param>
        /// <param name="calculation">This parameter would return the PAI data based on the input provided. All the data for indicators or subtopics requested are returned when the input is &#x60;true&#x60; and the SFDR required metrics are only returned when the input is&#x60;false&#x60;  (default to true).</param>
        public SfdrPaiRequest(List<string> ids,bool feelback = false, string fiscalPeriodStart = default(string), string fiscalPeriodEnd = default(string), List<string> indicators = default(List<string>), bool calculation = true)
        {
            // to ensure "ids" is required (not null)
            if (ids == null) {
                throw new ArgumentNullException("ids is a required property for SfdrPaiRequest and cannot be null");
            }
            this.Ids = ids;
            this.Feelback = feelback;
            this.FiscalPeriodStart = fiscalPeriodStart;
            this.FiscalPeriodEnd = fiscalPeriodEnd;
            this.Indicators = indicators;
            this.Calculation = calculation;
        }

        /// <summary>
        /// Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input.  *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* 
        /// </summary>
        /// <value>Security or Entity identifiers. FactSet Identifiers, tickers, CUSIP and SEDOL are accepted input.  *&lt;p&gt;Make note, GET Method URL request lines are also limited to a total length of 8192 bytes (8KB). In cases where the service allows for thousands of ids, which may lead to exceeding this request line limit of 8KB, its advised for any requests with large request lines to be requested through the respective \&quot;POST\&quot; method.&lt;/p&gt;* </value>
        [DataMember(Name = "ids", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Ids { get; set; }

        /// <summary>
        /// This parameter would return the latest PAI data based on the indicators or subtopics requested. The parameter should not be used in conjuction &#x60;fiscalPeriodStart&#x60; and &#x60;fiscalPeriodEnd&#x60; 
        /// </summary>
        /// <value>This parameter would return the latest PAI data based on the indicators or subtopics requested. The parameter should not be used in conjuction &#x60;fiscalPeriodStart&#x60; and &#x60;fiscalPeriodEnd&#x60; </value>
        [DataMember(Name = "feelback", EmitDefaultValue = true)]
        public bool Feelback { get; set; }

        /// <summary>
        /// Fiscal period start is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>Fiscal period start is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "fiscalPeriodStart", EmitDefaultValue = false)]
        public string FiscalPeriodStart { get; set; }

        /// <summary>
        /// Fiscal period end is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. 
        /// </summary>
        /// <value>Fiscal period end is expressed in YYYY formats. The input start date must be before the input end date. Future dates (T+1) are not accepted in this endpoint. </value>
        [DataMember(Name = "fiscalPeriodEnd", EmitDefaultValue = false)]
        public string FiscalPeriodEnd { get; set; }

        /// <summary>
        /// The indicators are the Principal Adverse Impact (PAI) metrics which consists of General, Mandatory and Additional indicators which supports the SFDR reporting. The data can also be requested for individual sub topic codes in addition to the indicators mentioned below -    |**SFDR PAI Indicators**|**Description**| |- --|- --| |**MandatoryIndicators**| Mandatory indicators are the indicators which must be reported under the EU Sustainable Finance Disclosure Regulation (SFDR).| |**AdditionalIndicators**| These are additional environmental and social indicators as mentioned in additional tables as provided in the Annex 1 table in the SFDR RTS report.| |**GHGEmissions**| This mandatory indicator includes metrics related to greenhouse emissions such as - Scope 1, 2, and 3 emissions, footprint and intensity and energy consumption from non-renewable and high climate sectors.| |**Biodiversity**| This mandatory indicator includes metrics pertaining to biodiversity and a company&#39;s impacts on biodiversity-sensitive areas.| |**Water**| This mandatory indicator includes data relating to emissions to water as made by the companies.| |**Waste**| This mandatory indicator includes data relating to hazardous waste as generated by the companies.| |**SocialEmployeeMatters**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**Emissions**| This additional indicator includes metrics related to air pollutants, inorganic pollutants and ozone depleting substance. | |**EnergyPerformance**| This additional indicator includes metrics related to various sources of non-renewable energy as used by the companies. | |**WaterWasteMaterialEmissions**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**AdditionalEmployeeMatters**| This additional indicator includes metrics related to workplace discrimination and safety, whistleblower mechanism and supplier code of conduct.| |**HumanRights**| This additional indicator includes metrics related to both policies and performance of a company in the areas of human rights, forced labor and human trafficking.| |**AntiCorruptionAntiBribery**| This additional indicator includes data related to company violations of anti-corruption and anti-bribery laws, and resulting fines.| 
        /// </summary>
        /// <value>The indicators are the Principal Adverse Impact (PAI) metrics which consists of General, Mandatory and Additional indicators which supports the SFDR reporting. The data can also be requested for individual sub topic codes in addition to the indicators mentioned below -    |**SFDR PAI Indicators**|**Description**| |- --|- --| |**MandatoryIndicators**| Mandatory indicators are the indicators which must be reported under the EU Sustainable Finance Disclosure Regulation (SFDR).| |**AdditionalIndicators**| These are additional environmental and social indicators as mentioned in additional tables as provided in the Annex 1 table in the SFDR RTS report.| |**GHGEmissions**| This mandatory indicator includes metrics related to greenhouse emissions such as - Scope 1, 2, and 3 emissions, footprint and intensity and energy consumption from non-renewable and high climate sectors.| |**Biodiversity**| This mandatory indicator includes metrics pertaining to biodiversity and a company&#39;s impacts on biodiversity-sensitive areas.| |**Water**| This mandatory indicator includes data relating to emissions to water as made by the companies.| |**Waste**| This mandatory indicator includes data relating to hazardous waste as generated by the companies.| |**SocialEmployeeMatters**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**Emissions**| This additional indicator includes metrics related to air pollutants, inorganic pollutants and ozone depleting substance. | |**EnergyPerformance**| This additional indicator includes metrics related to various sources of non-renewable energy as used by the companies. | |**WaterWasteMaterialEmissions**| This mandatory indicator includes employee-related metrics like gender diversity, pay gap and social-related metrics like violation of UNGC/OECD principles and exposure to controversial weapons.| |**AdditionalEmployeeMatters**| This additional indicator includes metrics related to workplace discrimination and safety, whistleblower mechanism and supplier code of conduct.| |**HumanRights**| This additional indicator includes metrics related to both policies and performance of a company in the areas of human rights, forced labor and human trafficking.| |**AntiCorruptionAntiBribery**| This additional indicator includes data related to company violations of anti-corruption and anti-bribery laws, and resulting fines.| </value>
        [DataMember(Name = "indicators", EmitDefaultValue = false)]
        public List<string> Indicators { get; set; }

        /// <summary>
        /// This parameter would return the PAI data based on the input provided. All the data for indicators or subtopics requested are returned when the input is &#x60;true&#x60; and the SFDR required metrics are only returned when the input is&#x60;false&#x60; 
        /// </summary>
        /// <value>This parameter would return the PAI data based on the input provided. All the data for indicators or subtopics requested are returned when the input is &#x60;true&#x60; and the SFDR required metrics are only returned when the input is&#x60;false&#x60; </value>
        [DataMember(Name = "calculation", EmitDefaultValue = true)]
        public bool Calculation { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class SfdrPaiRequest {\n");
            sb.Append("  Ids: ").Append(Ids).Append("\n");
            sb.Append("  Feelback: ").Append(Feelback).Append("\n");
            sb.Append("  FiscalPeriodStart: ").Append(FiscalPeriodStart).Append("\n");
            sb.Append("  FiscalPeriodEnd: ").Append(FiscalPeriodEnd).Append("\n");
            sb.Append("  Indicators: ").Append(Indicators).Append("\n");
            sb.Append("  Calculation: ").Append(Calculation).Append("\n");
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
            return this.Equals(input as SfdrPaiRequest);
        }

        /// <summary>
        /// Returns true if SfdrPaiRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of SfdrPaiRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SfdrPaiRequest input)
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
                    this.Feelback == input.Feelback ||
                    this.Feelback.Equals(input.Feelback)
                ) && 
                (
                    this.FiscalPeriodStart == input.FiscalPeriodStart ||
                    (this.FiscalPeriodStart != null &&
                    this.FiscalPeriodStart.Equals(input.FiscalPeriodStart))
                ) && 
                (
                    this.FiscalPeriodEnd == input.FiscalPeriodEnd ||
                    (this.FiscalPeriodEnd != null &&
                    this.FiscalPeriodEnd.Equals(input.FiscalPeriodEnd))
                ) && 
                (
                    this.Indicators == input.Indicators ||
                    this.Indicators != null &&
                    input.Indicators != null &&
                    this.Indicators.SequenceEqual(input.Indicators)
                ) && 
                (
                    this.Calculation == input.Calculation ||
                    this.Calculation.Equals(input.Calculation)
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
                hashCode = (hashCode * 59) + this.Feelback.GetHashCode();
                if (this.FiscalPeriodStart != null)
                {
                    hashCode = (hashCode * 59) + this.FiscalPeriodStart.GetHashCode();
                }
                if (this.FiscalPeriodEnd != null)
                {
                    hashCode = (hashCode * 59) + this.FiscalPeriodEnd.GetHashCode();
                }
                if (this.Indicators != null)
                {
                    hashCode = (hashCode * 59) + this.Indicators.GetHashCode();
                }
                hashCode = (hashCode * 59) + this.Calculation.GetHashCode();
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
