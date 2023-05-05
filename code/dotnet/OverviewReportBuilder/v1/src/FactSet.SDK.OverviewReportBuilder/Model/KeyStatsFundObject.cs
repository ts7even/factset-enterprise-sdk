/*
 * FactSet Overview Report Builder API
 *
 * Get relevant industry-specific data for high level analysis of public and private companies
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
using OpenAPIDateConverter = FactSet.SDK.OverviewReportBuilder.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OverviewReportBuilder.Model
{
    /// <summary>
    /// Key Statistics for the provided fund
    /// </summary>
    [DataContract(Name = "KeyStatsFundObject")]
    public partial class KeyStatsFundObject : IEquatable<KeyStatsFundObject>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="KeyStatsFundObject" /> class.
        /// </summary>
        /// <param name="expenseRatio">expenseRatio.</param>
        /// <param name="distributionYield">distributionYield.</param>
        /// <param name="aumShareDaily">aumShareDaily.</param>
        /// <param name="aumFundMonth">aumFundMonth.</param>
        /// <param name="outstandingShare">outstandingShare.</param>
        /// <param name="fundFlowYTD">fundFlowYTD.</param>
        /// <param name="firstNavRecord">firstNavRecord.</param>
        /// <param name="dailyTradingVol">dailyTradingVol.</param>
        /// <param name="averageSpread">averageSpread.</param>
        /// <param name="inceptionDateShare">inceptionDateShare.</param>
        /// <param name="inceptionDateFund">inceptionDateFund.</param>
        /// <param name="availableForSale">availableForSale.</param>
        /// <param name="currencyIso">currencyIso.</param>
        /// <param name="esgCompliance">esgCompliance.</param>
        /// <param name="sfdrClassification">sfdrClassification.</param>
        /// <param name="meta">meta.</param>
        public KeyStatsFundObject(KeyStatsFundObjectExpenseRatio expenseRatio = default(KeyStatsFundObjectExpenseRatio), KeyStatsFundObjectDistributionYield distributionYield = default(KeyStatsFundObjectDistributionYield), KeyStatsFundObjectAumShareDaily aumShareDaily = default(KeyStatsFundObjectAumShareDaily), KeyStatsFundObjectAumFundMonth aumFundMonth = default(KeyStatsFundObjectAumFundMonth), KeyStatsFundObjectOutstandingShare outstandingShare = default(KeyStatsFundObjectOutstandingShare), KeyStatsFundObjectFundFlowYTD fundFlowYTD = default(KeyStatsFundObjectFundFlowYTD), KeyStatsFundObjectFirstNavRecord firstNavRecord = default(KeyStatsFundObjectFirstNavRecord), KeyStatsFundObjectDailyTradingVol dailyTradingVol = default(KeyStatsFundObjectDailyTradingVol), KeyStatsFundObjectAverageSpread averageSpread = default(KeyStatsFundObjectAverageSpread), KeyStatsFundObjectInceptionDateShare inceptionDateShare = default(KeyStatsFundObjectInceptionDateShare), KeyStatsFundObjectInceptionDateFund inceptionDateFund = default(KeyStatsFundObjectInceptionDateFund), KeyStatsFundObjectAvailableForSale availableForSale = default(KeyStatsFundObjectAvailableForSale), KeyStatsFundObjectCurrencyIso currencyIso = default(KeyStatsFundObjectCurrencyIso), KeyStatsFundObjectEsgCompliance esgCompliance = default(KeyStatsFundObjectEsgCompliance), KeyStatsFundObjectSfdrClassification sfdrClassification = default(KeyStatsFundObjectSfdrClassification), KeyStatsFundObjectMeta meta = default(KeyStatsFundObjectMeta))
        {
            this.ExpenseRatio = expenseRatio;
            this.DistributionYield = distributionYield;
            this.AumShareDaily = aumShareDaily;
            this.AumFundMonth = aumFundMonth;
            this.OutstandingShare = outstandingShare;
            this.FundFlowYTD = fundFlowYTD;
            this.FirstNavRecord = firstNavRecord;
            this.DailyTradingVol = dailyTradingVol;
            this.AverageSpread = averageSpread;
            this.InceptionDateShare = inceptionDateShare;
            this.InceptionDateFund = inceptionDateFund;
            this.AvailableForSale = availableForSale;
            this.CurrencyIso = currencyIso;
            this.EsgCompliance = esgCompliance;
            this.SfdrClassification = sfdrClassification;
            this.Meta = meta;
        }

        /// <summary>
        /// Gets or Sets ExpenseRatio
        /// </summary>
        [DataMember(Name = "expenseRatio", EmitDefaultValue = false)]
        public KeyStatsFundObjectExpenseRatio ExpenseRatio { get; set; }

        /// <summary>
        /// Gets or Sets DistributionYield
        /// </summary>
        [DataMember(Name = "distributionYield", EmitDefaultValue = false)]
        public KeyStatsFundObjectDistributionYield DistributionYield { get; set; }

        /// <summary>
        /// Gets or Sets AumShareDaily
        /// </summary>
        [DataMember(Name = "aumShareDaily", EmitDefaultValue = false)]
        public KeyStatsFundObjectAumShareDaily AumShareDaily { get; set; }

        /// <summary>
        /// Gets or Sets AumFundMonth
        /// </summary>
        [DataMember(Name = "aumFundMonth", EmitDefaultValue = false)]
        public KeyStatsFundObjectAumFundMonth AumFundMonth { get; set; }

        /// <summary>
        /// Gets or Sets OutstandingShare
        /// </summary>
        [DataMember(Name = "outstandingShare", EmitDefaultValue = false)]
        public KeyStatsFundObjectOutstandingShare OutstandingShare { get; set; }

        /// <summary>
        /// Gets or Sets FundFlowYTD
        /// </summary>
        [DataMember(Name = "fundFlowYTD", EmitDefaultValue = false)]
        public KeyStatsFundObjectFundFlowYTD FundFlowYTD { get; set; }

        /// <summary>
        /// Gets or Sets FirstNavRecord
        /// </summary>
        [DataMember(Name = "firstNavRecord", EmitDefaultValue = false)]
        public KeyStatsFundObjectFirstNavRecord FirstNavRecord { get; set; }

        /// <summary>
        /// Gets or Sets DailyTradingVol
        /// </summary>
        [DataMember(Name = "dailyTradingVol", EmitDefaultValue = false)]
        public KeyStatsFundObjectDailyTradingVol DailyTradingVol { get; set; }

        /// <summary>
        /// Gets or Sets AverageSpread
        /// </summary>
        [DataMember(Name = "averageSpread", EmitDefaultValue = false)]
        public KeyStatsFundObjectAverageSpread AverageSpread { get; set; }

        /// <summary>
        /// Gets or Sets InceptionDateShare
        /// </summary>
        [DataMember(Name = "inceptionDateShare", EmitDefaultValue = false)]
        public KeyStatsFundObjectInceptionDateShare InceptionDateShare { get; set; }

        /// <summary>
        /// Gets or Sets InceptionDateFund
        /// </summary>
        [DataMember(Name = "inceptionDateFund", EmitDefaultValue = false)]
        public KeyStatsFundObjectInceptionDateFund InceptionDateFund { get; set; }

        /// <summary>
        /// Gets or Sets AvailableForSale
        /// </summary>
        [DataMember(Name = "availableForSale", EmitDefaultValue = false)]
        public KeyStatsFundObjectAvailableForSale AvailableForSale { get; set; }

        /// <summary>
        /// Gets or Sets CurrencyIso
        /// </summary>
        [DataMember(Name = "currencyIso", EmitDefaultValue = false)]
        public KeyStatsFundObjectCurrencyIso CurrencyIso { get; set; }

        /// <summary>
        /// Gets or Sets EsgCompliance
        /// </summary>
        [DataMember(Name = "esgCompliance", EmitDefaultValue = false)]
        public KeyStatsFundObjectEsgCompliance EsgCompliance { get; set; }

        /// <summary>
        /// Gets or Sets SfdrClassification
        /// </summary>
        [DataMember(Name = "sfdrClassification", EmitDefaultValue = false)]
        public KeyStatsFundObjectSfdrClassification SfdrClassification { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name = "meta", EmitDefaultValue = false)]
        public KeyStatsFundObjectMeta Meta { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class KeyStatsFundObject {\n");
            sb.Append("  ExpenseRatio: ").Append(ExpenseRatio).Append("\n");
            sb.Append("  DistributionYield: ").Append(DistributionYield).Append("\n");
            sb.Append("  AumShareDaily: ").Append(AumShareDaily).Append("\n");
            sb.Append("  AumFundMonth: ").Append(AumFundMonth).Append("\n");
            sb.Append("  OutstandingShare: ").Append(OutstandingShare).Append("\n");
            sb.Append("  FundFlowYTD: ").Append(FundFlowYTD).Append("\n");
            sb.Append("  FirstNavRecord: ").Append(FirstNavRecord).Append("\n");
            sb.Append("  DailyTradingVol: ").Append(DailyTradingVol).Append("\n");
            sb.Append("  AverageSpread: ").Append(AverageSpread).Append("\n");
            sb.Append("  InceptionDateShare: ").Append(InceptionDateShare).Append("\n");
            sb.Append("  InceptionDateFund: ").Append(InceptionDateFund).Append("\n");
            sb.Append("  AvailableForSale: ").Append(AvailableForSale).Append("\n");
            sb.Append("  CurrencyIso: ").Append(CurrencyIso).Append("\n");
            sb.Append("  EsgCompliance: ").Append(EsgCompliance).Append("\n");
            sb.Append("  SfdrClassification: ").Append(SfdrClassification).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
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
            return this.Equals(input as KeyStatsFundObject);
        }

        /// <summary>
        /// Returns true if KeyStatsFundObject instances are equal
        /// </summary>
        /// <param name="input">Instance of KeyStatsFundObject to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(KeyStatsFundObject input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ExpenseRatio == input.ExpenseRatio ||
                    (this.ExpenseRatio != null &&
                    this.ExpenseRatio.Equals(input.ExpenseRatio))
                ) && 
                (
                    this.DistributionYield == input.DistributionYield ||
                    (this.DistributionYield != null &&
                    this.DistributionYield.Equals(input.DistributionYield))
                ) && 
                (
                    this.AumShareDaily == input.AumShareDaily ||
                    (this.AumShareDaily != null &&
                    this.AumShareDaily.Equals(input.AumShareDaily))
                ) && 
                (
                    this.AumFundMonth == input.AumFundMonth ||
                    (this.AumFundMonth != null &&
                    this.AumFundMonth.Equals(input.AumFundMonth))
                ) && 
                (
                    this.OutstandingShare == input.OutstandingShare ||
                    (this.OutstandingShare != null &&
                    this.OutstandingShare.Equals(input.OutstandingShare))
                ) && 
                (
                    this.FundFlowYTD == input.FundFlowYTD ||
                    (this.FundFlowYTD != null &&
                    this.FundFlowYTD.Equals(input.FundFlowYTD))
                ) && 
                (
                    this.FirstNavRecord == input.FirstNavRecord ||
                    (this.FirstNavRecord != null &&
                    this.FirstNavRecord.Equals(input.FirstNavRecord))
                ) && 
                (
                    this.DailyTradingVol == input.DailyTradingVol ||
                    (this.DailyTradingVol != null &&
                    this.DailyTradingVol.Equals(input.DailyTradingVol))
                ) && 
                (
                    this.AverageSpread == input.AverageSpread ||
                    (this.AverageSpread != null &&
                    this.AverageSpread.Equals(input.AverageSpread))
                ) && 
                (
                    this.InceptionDateShare == input.InceptionDateShare ||
                    (this.InceptionDateShare != null &&
                    this.InceptionDateShare.Equals(input.InceptionDateShare))
                ) && 
                (
                    this.InceptionDateFund == input.InceptionDateFund ||
                    (this.InceptionDateFund != null &&
                    this.InceptionDateFund.Equals(input.InceptionDateFund))
                ) && 
                (
                    this.AvailableForSale == input.AvailableForSale ||
                    (this.AvailableForSale != null &&
                    this.AvailableForSale.Equals(input.AvailableForSale))
                ) && 
                (
                    this.CurrencyIso == input.CurrencyIso ||
                    (this.CurrencyIso != null &&
                    this.CurrencyIso.Equals(input.CurrencyIso))
                ) && 
                (
                    this.EsgCompliance == input.EsgCompliance ||
                    (this.EsgCompliance != null &&
                    this.EsgCompliance.Equals(input.EsgCompliance))
                ) && 
                (
                    this.SfdrClassification == input.SfdrClassification ||
                    (this.SfdrClassification != null &&
                    this.SfdrClassification.Equals(input.SfdrClassification))
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
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
                if (this.ExpenseRatio != null)
                {
                    hashCode = (hashCode * 59) + this.ExpenseRatio.GetHashCode();
                }
                if (this.DistributionYield != null)
                {
                    hashCode = (hashCode * 59) + this.DistributionYield.GetHashCode();
                }
                if (this.AumShareDaily != null)
                {
                    hashCode = (hashCode * 59) + this.AumShareDaily.GetHashCode();
                }
                if (this.AumFundMonth != null)
                {
                    hashCode = (hashCode * 59) + this.AumFundMonth.GetHashCode();
                }
                if (this.OutstandingShare != null)
                {
                    hashCode = (hashCode * 59) + this.OutstandingShare.GetHashCode();
                }
                if (this.FundFlowYTD != null)
                {
                    hashCode = (hashCode * 59) + this.FundFlowYTD.GetHashCode();
                }
                if (this.FirstNavRecord != null)
                {
                    hashCode = (hashCode * 59) + this.FirstNavRecord.GetHashCode();
                }
                if (this.DailyTradingVol != null)
                {
                    hashCode = (hashCode * 59) + this.DailyTradingVol.GetHashCode();
                }
                if (this.AverageSpread != null)
                {
                    hashCode = (hashCode * 59) + this.AverageSpread.GetHashCode();
                }
                if (this.InceptionDateShare != null)
                {
                    hashCode = (hashCode * 59) + this.InceptionDateShare.GetHashCode();
                }
                if (this.InceptionDateFund != null)
                {
                    hashCode = (hashCode * 59) + this.InceptionDateFund.GetHashCode();
                }
                if (this.AvailableForSale != null)
                {
                    hashCode = (hashCode * 59) + this.AvailableForSale.GetHashCode();
                }
                if (this.CurrencyIso != null)
                {
                    hashCode = (hashCode * 59) + this.CurrencyIso.GetHashCode();
                }
                if (this.EsgCompliance != null)
                {
                    hashCode = (hashCode * 59) + this.EsgCompliance.GetHashCode();
                }
                if (this.SfdrClassification != null)
                {
                    hashCode = (hashCode * 59) + this.SfdrClassification.GetHashCode();
                }
                if (this.Meta != null)
                {
                    hashCode = (hashCode * 59) + this.Meta.GetHashCode();
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
