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
    /// OptimizerInputsMultiPeriodConstraints
    /// </summary>
    [DataContract(Name = "optimizer.inputs.MultiPeriodConstraints")]
    public partial class OptimizerInputsMultiPeriodConstraints : IEquatable<OptimizerInputsMultiPeriodConstraints>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptimizerInputsMultiPeriodConstraints" /> class.
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
        /// <param name="tradingTurnover">tradingTurnover.</param>
        /// <param name="riskContribution">riskContribution.</param>
        /// <param name="riskVolatility">riskVolatility.</param>
        /// <param name="tailRisk">MultiPeriod-Specific.</param>
        /// <param name="targetProbability">targetProbability.</param>
        public OptimizerInputsMultiPeriodConstraints(List<OptimizerInputsMPExpectedReturnConstraint> expectedReturns = default(List<OptimizerInputsMPExpectedReturnConstraint>), List<OptimizerInputsMPDiversificationConstraint> diversification = default(List<OptimizerInputsMPDiversificationConstraint>), List<OptimizerInputsMPFactorExposureConstraint> factorExposures = default(List<OptimizerInputsMPFactorExposureConstraint>), List<OptimizerInputsMPGeneralLinearConstraint> generalLinear = default(List<OptimizerInputsMPGeneralLinearConstraint>), List<OptimizerInputsMPHoldingsThresholdConstraint> holdingThreshold = default(List<OptimizerInputsMPHoldingsThresholdConstraint>), List<OptimizerInputsMPLeverageConstraint> leverage = default(List<OptimizerInputsMPLeverageConstraint>), List<OptimizerInputsMPNumberofAssetsConstraint> numOfAssets = default(List<OptimizerInputsMPNumberofAssetsConstraint>), List<OptimizerInputsMPSensitivityConstraint> sensitivity = default(List<OptimizerInputsMPSensitivityConstraint>), List<OptimizerInputsMPHoldingsWeightConstraint> weightConstraint = default(List<OptimizerInputsMPHoldingsWeightConstraint>), List<OptimizerInputsMPNumberOfBuysConstraint> numberOfBuys = default(List<OptimizerInputsMPNumberOfBuysConstraint>), List<OptimizerInputsMPNumberOfSellsConstraint> numberOfSells = default(List<OptimizerInputsMPNumberOfSellsConstraint>), List<OptimizerInputsMPRoundlotsConstraint> roundLots = default(List<OptimizerInputsMPRoundlotsConstraint>), List<OptimizerInputsMPTradeThresholdConstraint> tradeThreshold = default(List<OptimizerInputsMPTradeThresholdConstraint>), List<OptimizerInputsMPTurnoverConstraint> tradingTurnover = default(List<OptimizerInputsMPTurnoverConstraint>), List<OptimizerInputsMPRiskContributionConstraint> riskContribution = default(List<OptimizerInputsMPRiskContributionConstraint>), List<OptimizerInputsMPRiskVolatilityConstraint> riskVolatility = default(List<OptimizerInputsMPRiskVolatilityConstraint>), List<OptimizerInputsMPLimitTailRiskConstraint> tailRisk = default(List<OptimizerInputsMPLimitTailRiskConstraint>), List<OptimizerInputsMPTargetProbabilityConstraint> targetProbability = default(List<OptimizerInputsMPTargetProbabilityConstraint>))
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
            this.TradingTurnover = tradingTurnover;
            this.RiskContribution = riskContribution;
            this.RiskVolatility = riskVolatility;
            this.TailRisk = tailRisk;
            this.TargetProbability = targetProbability;
        }

        /// <summary>
        /// Gets or Sets ExpectedReturns
        /// </summary>
        [DataMember(Name = "expected_returns", EmitDefaultValue = false)]
        public List<OptimizerInputsMPExpectedReturnConstraint> ExpectedReturns { get; set; }

        /// <summary>
        /// Gets or Sets Diversification
        /// </summary>
        [DataMember(Name = "diversification", EmitDefaultValue = false)]
        public List<OptimizerInputsMPDiversificationConstraint> Diversification { get; set; }

        /// <summary>
        /// Gets or Sets FactorExposures
        /// </summary>
        [DataMember(Name = "factor_exposures", EmitDefaultValue = false)]
        public List<OptimizerInputsMPFactorExposureConstraint> FactorExposures { get; set; }

        /// <summary>
        /// Gets or Sets GeneralLinear
        /// </summary>
        [DataMember(Name = "general_linear", EmitDefaultValue = false)]
        public List<OptimizerInputsMPGeneralLinearConstraint> GeneralLinear { get; set; }

        /// <summary>
        /// Gets or Sets HoldingThreshold
        /// </summary>
        [DataMember(Name = "holding_threshold", EmitDefaultValue = false)]
        public List<OptimizerInputsMPHoldingsThresholdConstraint> HoldingThreshold { get; set; }

        /// <summary>
        /// Gets or Sets Leverage
        /// </summary>
        [DataMember(Name = "leverage", EmitDefaultValue = false)]
        public List<OptimizerInputsMPLeverageConstraint> Leverage { get; set; }

        /// <summary>
        /// Gets or Sets NumOfAssets
        /// </summary>
        [DataMember(Name = "num_of_assets", EmitDefaultValue = false)]
        public List<OptimizerInputsMPNumberofAssetsConstraint> NumOfAssets { get; set; }

        /// <summary>
        /// Gets or Sets Sensitivity
        /// </summary>
        [DataMember(Name = "sensitivity", EmitDefaultValue = false)]
        public List<OptimizerInputsMPSensitivityConstraint> Sensitivity { get; set; }

        /// <summary>
        /// Gets or Sets WeightConstraint
        /// </summary>
        [DataMember(Name = "weight_constraint", EmitDefaultValue = false)]
        public List<OptimizerInputsMPHoldingsWeightConstraint> WeightConstraint { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfBuys
        /// </summary>
        [DataMember(Name = "number_of_buys", EmitDefaultValue = false)]
        public List<OptimizerInputsMPNumberOfBuysConstraint> NumberOfBuys { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfSells
        /// </summary>
        [DataMember(Name = "number_of_sells", EmitDefaultValue = false)]
        public List<OptimizerInputsMPNumberOfSellsConstraint> NumberOfSells { get; set; }

        /// <summary>
        /// Gets or Sets RoundLots
        /// </summary>
        [DataMember(Name = "round_lots", EmitDefaultValue = false)]
        public List<OptimizerInputsMPRoundlotsConstraint> RoundLots { get; set; }

        /// <summary>
        /// Gets or Sets TradeThreshold
        /// </summary>
        [DataMember(Name = "trade_threshold", EmitDefaultValue = false)]
        public List<OptimizerInputsMPTradeThresholdConstraint> TradeThreshold { get; set; }

        /// <summary>
        /// Gets or Sets TradingTurnover
        /// </summary>
        [DataMember(Name = "trading_turnover", EmitDefaultValue = false)]
        public List<OptimizerInputsMPTurnoverConstraint> TradingTurnover { get; set; }

        /// <summary>
        /// Gets or Sets RiskContribution
        /// </summary>
        [DataMember(Name = "risk_contribution", EmitDefaultValue = false)]
        public List<OptimizerInputsMPRiskContributionConstraint> RiskContribution { get; set; }

        /// <summary>
        /// Gets or Sets RiskVolatility
        /// </summary>
        [DataMember(Name = "risk_volatility", EmitDefaultValue = false)]
        public List<OptimizerInputsMPRiskVolatilityConstraint> RiskVolatility { get; set; }

        /// <summary>
        /// MultiPeriod-Specific
        /// </summary>
        /// <value>MultiPeriod-Specific</value>
        [DataMember(Name = "tail_risk", EmitDefaultValue = false)]
        public List<OptimizerInputsMPLimitTailRiskConstraint> TailRisk { get; set; }

        /// <summary>
        /// Gets or Sets TargetProbability
        /// </summary>
        [DataMember(Name = "target_probability", EmitDefaultValue = false)]
        public List<OptimizerInputsMPTargetProbabilityConstraint> TargetProbability { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class OptimizerInputsMultiPeriodConstraints {\n");
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
            sb.Append("  TradingTurnover: ").Append(TradingTurnover).Append("\n");
            sb.Append("  RiskContribution: ").Append(RiskContribution).Append("\n");
            sb.Append("  RiskVolatility: ").Append(RiskVolatility).Append("\n");
            sb.Append("  TailRisk: ").Append(TailRisk).Append("\n");
            sb.Append("  TargetProbability: ").Append(TargetProbability).Append("\n");
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
            return this.Equals(input as OptimizerInputsMultiPeriodConstraints);
        }

        /// <summary>
        /// Returns true if OptimizerInputsMultiPeriodConstraints instances are equal
        /// </summary>
        /// <param name="input">Instance of OptimizerInputsMultiPeriodConstraints to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptimizerInputsMultiPeriodConstraints input)
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
                    this.TradingTurnover == input.TradingTurnover ||
                    this.TradingTurnover != null &&
                    input.TradingTurnover != null &&
                    this.TradingTurnover.SequenceEqual(input.TradingTurnover)
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
                    this.TailRisk == input.TailRisk ||
                    this.TailRisk != null &&
                    input.TailRisk != null &&
                    this.TailRisk.SequenceEqual(input.TailRisk)
                ) && 
                (
                    this.TargetProbability == input.TargetProbability ||
                    this.TargetProbability != null &&
                    input.TargetProbability != null &&
                    this.TargetProbability.SequenceEqual(input.TargetProbability)
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
                if (this.TradingTurnover != null)
                {
                    hashCode = (hashCode * 59) + this.TradingTurnover.GetHashCode();
                }
                if (this.RiskContribution != null)
                {
                    hashCode = (hashCode * 59) + this.RiskContribution.GetHashCode();
                }
                if (this.RiskVolatility != null)
                {
                    hashCode = (hashCode * 59) + this.RiskVolatility.GetHashCode();
                }
                if (this.TailRisk != null)
                {
                    hashCode = (hashCode * 59) + this.TailRisk.GetHashCode();
                }
                if (this.TargetProbability != null)
                {
                    hashCode = (hashCode * 59) + this.TargetProbability.GetHashCode();
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