/*
 * fpo_mp_input
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
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
using OpenAPIDateConverter = FactSet.SDK.OptimizationEngineAPIMultiperiod.Client.OpenAPIDateConverter;

namespace FactSet.SDK.OptimizationEngineAPIMultiperiod.Model
{
    /// <summary>
    /// OptimizerInputsConstraints
    /// </summary>
    [DataContract(Name = "optimizer.inputs.Constraints")]
    public partial class OptimizerInputsConstraints : IEquatable<OptimizerInputsConstraints>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptimizerInputsConstraints" /> class.
        /// </summary>
        /// <param name="expectedReturns">expectedReturns.</param>
        /// <param name="diversification">diversification.</param>
        /// <param name="factorExposures">factorExposures.</param>
        /// <param name="generalLinear">generalLinear.</param>
        /// <param name="holdingThreshold">holdingThreshold.</param>
        /// <param name="leverage">leverage.</param>
        /// <param name="numOfAssets">numOfAssets.</param>
        /// <param name="sensitivity">sensitivity.</param>
        /// <param name="weightConstraint">weightConstraint.</param>
        /// <param name="numberOfBuys">numberOfBuys.</param>
        /// <param name="numberOfSells">numberOfSells.</param>
        /// <param name="roundLots">roundLots.</param>
        /// <param name="tradeThreshold">tradeThreshold.</param>
        /// <param name="transactionCost">transactionCost.</param>
        /// <param name="tradingTurnover">tradingTurnover.</param>
        /// <param name="riskEtl">riskEtl.</param>
        /// <param name="riskContribution">riskContribution.</param>
        /// <param name="riskVolatility">riskVolatility.</param>
        /// <param name="limitTradeConstraint">limitTradeConstraint.</param>
        public OptimizerInputsConstraints(List<OptimizerInputsExpectedReturnConstraint> expectedReturns = default(List<OptimizerInputsExpectedReturnConstraint>), List<OptimizerInputsDiversificationConstraint> diversification = default(List<OptimizerInputsDiversificationConstraint>), List<OptimizerInputsFactorExposureConstraint> factorExposures = default(List<OptimizerInputsFactorExposureConstraint>), List<OptimizerInputsGeneralLinearConstraint> generalLinear = default(List<OptimizerInputsGeneralLinearConstraint>), List<OptimizerInputsHoldingsThresholdConstraint> holdingThreshold = default(List<OptimizerInputsHoldingsThresholdConstraint>), List<OptimizerInputsLeverageConstraint> leverage = default(List<OptimizerInputsLeverageConstraint>), List<OptimizerInputsNumberofAssetsConstraint> numOfAssets = default(List<OptimizerInputsNumberofAssetsConstraint>), List<OptimizerInputsSensitivityConstraint> sensitivity = default(List<OptimizerInputsSensitivityConstraint>), List<OptimizerInputsHoldingsWeightConstraint> weightConstraint = default(List<OptimizerInputsHoldingsWeightConstraint>), List<OptimizerInputsNumberOfBuysConstraint> numberOfBuys = default(List<OptimizerInputsNumberOfBuysConstraint>), List<OptimizerInputsNumberOfSellsConstraint> numberOfSells = default(List<OptimizerInputsNumberOfSellsConstraint>), List<OptimizerInputsRoundlotsConstraint> roundLots = default(List<OptimizerInputsRoundlotsConstraint>), List<OptimizerInputsTradeThresholdConstraint> tradeThreshold = default(List<OptimizerInputsTradeThresholdConstraint>), List<OptimizerInputsTransactionCostConstraint> transactionCost = default(List<OptimizerInputsTransactionCostConstraint>), List<OptimizerInputsTurnoverConstraint> tradingTurnover = default(List<OptimizerInputsTurnoverConstraint>), List<OptimizerInputsLimitRiskETLConstraint> riskEtl = default(List<OptimizerInputsLimitRiskETLConstraint>), List<OptimizerInputsRiskContributionConstraint> riskContribution = default(List<OptimizerInputsRiskContributionConstraint>), List<OptimizerInputsRiskVolatilityConstraint> riskVolatility = default(List<OptimizerInputsRiskVolatilityConstraint>), List<OptimizerInputsTradingLimitTradeConstraint> limitTradeConstraint = default(List<OptimizerInputsTradingLimitTradeConstraint>))
        {
            this.ExpectedReturns = expectedReturns;
            this.Diversification = diversification;
            this.FactorExposures = factorExposures;
            this.GeneralLinear = generalLinear;
            this.HoldingThreshold = holdingThreshold;
            this.Leverage = leverage;
            this.NumOfAssets = numOfAssets;
            this.Sensitivity = sensitivity;
            this.WeightConstraint = weightConstraint;
            this.NumberOfBuys = numberOfBuys;
            this.NumberOfSells = numberOfSells;
            this.RoundLots = roundLots;
            this.TradeThreshold = tradeThreshold;
            this.TransactionCost = transactionCost;
            this.TradingTurnover = tradingTurnover;
            this.RiskEtl = riskEtl;
            this.RiskContribution = riskContribution;
            this.RiskVolatility = riskVolatility;
            this.LimitTradeConstraint = limitTradeConstraint;
        }

        /// <summary>
        /// Gets or Sets ExpectedReturns
        /// </summary>
        [DataMember(Name = "expected_returns", EmitDefaultValue = false)]
        public List<OptimizerInputsExpectedReturnConstraint> ExpectedReturns { get; set; }

        /// <summary>
        /// Gets or Sets Diversification
        /// </summary>
        [DataMember(Name = "diversification", EmitDefaultValue = false)]
        public List<OptimizerInputsDiversificationConstraint> Diversification { get; set; }

        /// <summary>
        /// Gets or Sets FactorExposures
        /// </summary>
        [DataMember(Name = "factor_exposures", EmitDefaultValue = false)]
        public List<OptimizerInputsFactorExposureConstraint> FactorExposures { get; set; }

        /// <summary>
        /// Gets or Sets GeneralLinear
        /// </summary>
        [DataMember(Name = "general_linear", EmitDefaultValue = false)]
        public List<OptimizerInputsGeneralLinearConstraint> GeneralLinear { get; set; }

        /// <summary>
        /// Gets or Sets HoldingThreshold
        /// </summary>
        [DataMember(Name = "holding_threshold", EmitDefaultValue = false)]
        public List<OptimizerInputsHoldingsThresholdConstraint> HoldingThreshold { get; set; }

        /// <summary>
        /// Gets or Sets Leverage
        /// </summary>
        [DataMember(Name = "leverage", EmitDefaultValue = false)]
        public List<OptimizerInputsLeverageConstraint> Leverage { get; set; }

        /// <summary>
        /// Gets or Sets NumOfAssets
        /// </summary>
        [DataMember(Name = "num_of_assets", EmitDefaultValue = false)]
        public List<OptimizerInputsNumberofAssetsConstraint> NumOfAssets { get; set; }

        /// <summary>
        /// Gets or Sets Sensitivity
        /// </summary>
        [DataMember(Name = "sensitivity", EmitDefaultValue = false)]
        public List<OptimizerInputsSensitivityConstraint> Sensitivity { get; set; }

        /// <summary>
        /// Gets or Sets WeightConstraint
        /// </summary>
        [DataMember(Name = "weight_constraint", EmitDefaultValue = false)]
        public List<OptimizerInputsHoldingsWeightConstraint> WeightConstraint { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfBuys
        /// </summary>
        [DataMember(Name = "number_of_buys", EmitDefaultValue = false)]
        public List<OptimizerInputsNumberOfBuysConstraint> NumberOfBuys { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfSells
        /// </summary>
        [DataMember(Name = "number_of_sells", EmitDefaultValue = false)]
        public List<OptimizerInputsNumberOfSellsConstraint> NumberOfSells { get; set; }

        /// <summary>
        /// Gets or Sets RoundLots
        /// </summary>
        [DataMember(Name = "round_lots", EmitDefaultValue = false)]
        public List<OptimizerInputsRoundlotsConstraint> RoundLots { get; set; }

        /// <summary>
        /// Gets or Sets TradeThreshold
        /// </summary>
        [DataMember(Name = "trade_threshold", EmitDefaultValue = false)]
        public List<OptimizerInputsTradeThresholdConstraint> TradeThreshold { get; set; }

        /// <summary>
        /// Gets or Sets TransactionCost
        /// </summary>
        [DataMember(Name = "transaction_cost", EmitDefaultValue = false)]
        public List<OptimizerInputsTransactionCostConstraint> TransactionCost { get; set; }

        /// <summary>
        /// Gets or Sets TradingTurnover
        /// </summary>
        [DataMember(Name = "trading_turnover", EmitDefaultValue = false)]
        public List<OptimizerInputsTurnoverConstraint> TradingTurnover { get; set; }

        /// <summary>
        /// Gets or Sets RiskEtl
        /// </summary>
        [DataMember(Name = "risk_etl", EmitDefaultValue = false)]
        public List<OptimizerInputsLimitRiskETLConstraint> RiskEtl { get; set; }

        /// <summary>
        /// Gets or Sets RiskContribution
        /// </summary>
        [DataMember(Name = "risk_contribution", EmitDefaultValue = false)]
        public List<OptimizerInputsRiskContributionConstraint> RiskContribution { get; set; }

        /// <summary>
        /// Gets or Sets RiskVolatility
        /// </summary>
        [DataMember(Name = "risk_volatility", EmitDefaultValue = false)]
        public List<OptimizerInputsRiskVolatilityConstraint> RiskVolatility { get; set; }

        /// <summary>
        /// Gets or Sets LimitTradeConstraint
        /// </summary>
        [DataMember(Name = "limit_trade_constraint", EmitDefaultValue = false)]
        public List<OptimizerInputsTradingLimitTradeConstraint> LimitTradeConstraint { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OptimizerInputsConstraints {\n");
            sb.Append("  ExpectedReturns: ").Append(ExpectedReturns).Append("\n");
            sb.Append("  Diversification: ").Append(Diversification).Append("\n");
            sb.Append("  FactorExposures: ").Append(FactorExposures).Append("\n");
            sb.Append("  GeneralLinear: ").Append(GeneralLinear).Append("\n");
            sb.Append("  HoldingThreshold: ").Append(HoldingThreshold).Append("\n");
            sb.Append("  Leverage: ").Append(Leverage).Append("\n");
            sb.Append("  NumOfAssets: ").Append(NumOfAssets).Append("\n");
            sb.Append("  Sensitivity: ").Append(Sensitivity).Append("\n");
            sb.Append("  WeightConstraint: ").Append(WeightConstraint).Append("\n");
            sb.Append("  NumberOfBuys: ").Append(NumberOfBuys).Append("\n");
            sb.Append("  NumberOfSells: ").Append(NumberOfSells).Append("\n");
            sb.Append("  RoundLots: ").Append(RoundLots).Append("\n");
            sb.Append("  TradeThreshold: ").Append(TradeThreshold).Append("\n");
            sb.Append("  TransactionCost: ").Append(TransactionCost).Append("\n");
            sb.Append("  TradingTurnover: ").Append(TradingTurnover).Append("\n");
            sb.Append("  RiskEtl: ").Append(RiskEtl).Append("\n");
            sb.Append("  RiskContribution: ").Append(RiskContribution).Append("\n");
            sb.Append("  RiskVolatility: ").Append(RiskVolatility).Append("\n");
            sb.Append("  LimitTradeConstraint: ").Append(LimitTradeConstraint).Append("\n");
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
            return this.Equals(input as OptimizerInputsConstraints);
        }

        /// <summary>
        /// Returns true if OptimizerInputsConstraints instances are equal
        /// </summary>
        /// <param name="input">Instance of OptimizerInputsConstraints to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptimizerInputsConstraints input)
        {
            if (input == null)
            {
                return false;
            }
            return 
                (
                    this.ExpectedReturns == input.ExpectedReturns ||
                    this.ExpectedReturns != null &&
                    input.ExpectedReturns != null &&
                    this.ExpectedReturns.SequenceEqual(input.ExpectedReturns)
                ) && 
                (
                    this.Diversification == input.Diversification ||
                    this.Diversification != null &&
                    input.Diversification != null &&
                    this.Diversification.SequenceEqual(input.Diversification)
                ) && 
                (
                    this.FactorExposures == input.FactorExposures ||
                    this.FactorExposures != null &&
                    input.FactorExposures != null &&
                    this.FactorExposures.SequenceEqual(input.FactorExposures)
                ) && 
                (
                    this.GeneralLinear == input.GeneralLinear ||
                    this.GeneralLinear != null &&
                    input.GeneralLinear != null &&
                    this.GeneralLinear.SequenceEqual(input.GeneralLinear)
                ) && 
                (
                    this.HoldingThreshold == input.HoldingThreshold ||
                    this.HoldingThreshold != null &&
                    input.HoldingThreshold != null &&
                    this.HoldingThreshold.SequenceEqual(input.HoldingThreshold)
                ) && 
                (
                    this.Leverage == input.Leverage ||
                    this.Leverage != null &&
                    input.Leverage != null &&
                    this.Leverage.SequenceEqual(input.Leverage)
                ) && 
                (
                    this.NumOfAssets == input.NumOfAssets ||
                    this.NumOfAssets != null &&
                    input.NumOfAssets != null &&
                    this.NumOfAssets.SequenceEqual(input.NumOfAssets)
                ) && 
                (
                    this.Sensitivity == input.Sensitivity ||
                    this.Sensitivity != null &&
                    input.Sensitivity != null &&
                    this.Sensitivity.SequenceEqual(input.Sensitivity)
                ) && 
                (
                    this.WeightConstraint == input.WeightConstraint ||
                    this.WeightConstraint != null &&
                    input.WeightConstraint != null &&
                    this.WeightConstraint.SequenceEqual(input.WeightConstraint)
                ) && 
                (
                    this.NumberOfBuys == input.NumberOfBuys ||
                    this.NumberOfBuys != null &&
                    input.NumberOfBuys != null &&
                    this.NumberOfBuys.SequenceEqual(input.NumberOfBuys)
                ) && 
                (
                    this.NumberOfSells == input.NumberOfSells ||
                    this.NumberOfSells != null &&
                    input.NumberOfSells != null &&
                    this.NumberOfSells.SequenceEqual(input.NumberOfSells)
                ) && 
                (
                    this.RoundLots == input.RoundLots ||
                    this.RoundLots != null &&
                    input.RoundLots != null &&
                    this.RoundLots.SequenceEqual(input.RoundLots)
                ) && 
                (
                    this.TradeThreshold == input.TradeThreshold ||
                    this.TradeThreshold != null &&
                    input.TradeThreshold != null &&
                    this.TradeThreshold.SequenceEqual(input.TradeThreshold)
                ) && 
                (
                    this.TransactionCost == input.TransactionCost ||
                    this.TransactionCost != null &&
                    input.TransactionCost != null &&
                    this.TransactionCost.SequenceEqual(input.TransactionCost)
                ) && 
                (
                    this.TradingTurnover == input.TradingTurnover ||
                    this.TradingTurnover != null &&
                    input.TradingTurnover != null &&
                    this.TradingTurnover.SequenceEqual(input.TradingTurnover)
                ) && 
                (
                    this.RiskEtl == input.RiskEtl ||
                    this.RiskEtl != null &&
                    input.RiskEtl != null &&
                    this.RiskEtl.SequenceEqual(input.RiskEtl)
                ) && 
                (
                    this.RiskContribution == input.RiskContribution ||
                    this.RiskContribution != null &&
                    input.RiskContribution != null &&
                    this.RiskContribution.SequenceEqual(input.RiskContribution)
                ) && 
                (
                    this.RiskVolatility == input.RiskVolatility ||
                    this.RiskVolatility != null &&
                    input.RiskVolatility != null &&
                    this.RiskVolatility.SequenceEqual(input.RiskVolatility)
                ) && 
                (
                    this.LimitTradeConstraint == input.LimitTradeConstraint ||
                    this.LimitTradeConstraint != null &&
                    input.LimitTradeConstraint != null &&
                    this.LimitTradeConstraint.SequenceEqual(input.LimitTradeConstraint)
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
                if (this.ExpectedReturns != null)
                {
                    hashCode = (hashCode * 59) + this.ExpectedReturns.GetHashCode();
                }
                if (this.Diversification != null)
                {
                    hashCode = (hashCode * 59) + this.Diversification.GetHashCode();
                }
                if (this.FactorExposures != null)
                {
                    hashCode = (hashCode * 59) + this.FactorExposures.GetHashCode();
                }
                if (this.GeneralLinear != null)
                {
                    hashCode = (hashCode * 59) + this.GeneralLinear.GetHashCode();
                }
                if (this.HoldingThreshold != null)
                {
                    hashCode = (hashCode * 59) + this.HoldingThreshold.GetHashCode();
                }
                if (this.Leverage != null)
                {
                    hashCode = (hashCode * 59) + this.Leverage.GetHashCode();
                }
                if (this.NumOfAssets != null)
                {
                    hashCode = (hashCode * 59) + this.NumOfAssets.GetHashCode();
                }
                if (this.Sensitivity != null)
                {
                    hashCode = (hashCode * 59) + this.Sensitivity.GetHashCode();
                }
                if (this.WeightConstraint != null)
                {
                    hashCode = (hashCode * 59) + this.WeightConstraint.GetHashCode();
                }
                if (this.NumberOfBuys != null)
                {
                    hashCode = (hashCode * 59) + this.NumberOfBuys.GetHashCode();
                }
                if (this.NumberOfSells != null)
                {
                    hashCode = (hashCode * 59) + this.NumberOfSells.GetHashCode();
                }
                if (this.RoundLots != null)
                {
                    hashCode = (hashCode * 59) + this.RoundLots.GetHashCode();
                }
                if (this.TradeThreshold != null)
                {
                    hashCode = (hashCode * 59) + this.TradeThreshold.GetHashCode();
                }
                if (this.TransactionCost != null)
                {
                    hashCode = (hashCode * 59) + this.TransactionCost.GetHashCode();
                }
                if (this.TradingTurnover != null)
                {
                    hashCode = (hashCode * 59) + this.TradingTurnover.GetHashCode();
                }
                if (this.RiskEtl != null)
                {
                    hashCode = (hashCode * 59) + this.RiskEtl.GetHashCode();
                }
                if (this.RiskContribution != null)
                {
                    hashCode = (hashCode * 59) + this.RiskContribution.GetHashCode();
                }
                if (this.RiskVolatility != null)
                {
                    hashCode = (hashCode * 59) + this.RiskVolatility.GetHashCode();
                }
                if (this.LimitTradeConstraint != null)
                {
                    hashCode = (hashCode * 59) + this.LimitTradeConstraint.GetHashCode();
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