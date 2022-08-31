/*
 * Open:Risk API
 * Service to calculate parametric linear risk statistics and generate risk model asset identifier mappings.
 *
 * The version of the OpenAPI document: 1.21.0
 * Contact: ParametricRiskAnalyticsDevelopment@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OpenRisk.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OpenRisk.models.AdditionalCalculationInputs;
import com.factset.sdk.OpenRisk.models.Date;
import com.factset.sdk.OpenRisk.models.FactorGroup;
import com.factset.sdk.OpenRisk.models.FactorsVisible;
import com.factset.sdk.OpenRisk.models.Holdings;
import com.factset.sdk.OpenRisk.models.IDsAndMarketValues;
import com.factset.sdk.OpenRisk.models.LaggingDates;
import com.factset.sdk.OpenRisk.models.RemoveCurrencyRisk;
import com.factset.sdk.OpenRisk.models.RequiresFactorReturns;
import com.factset.sdk.OpenRisk.models.RiskModelAppendData;
import com.factset.sdk.OpenRisk.models.SecurityIndexMapping;
import com.factset.sdk.OpenRisk.models.Stat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OpenRisk.JSON;


/**
 * CalculateFromHoldingsRequestData
 */
@JsonPropertyOrder({
  CalculateFromHoldingsRequestData.JSON_PROPERTY_ADDITIONAL_CALC_INPUTS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_ALLOW_FORCED_RISKLESS_ASSETS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_ASSET_TYPES,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_CALENDAR,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_COMPOSITE_ASSETS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_CURRENCY,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_DATE,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_FACTOR_GROUPING,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_FACTORS_VISIBLE,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_HOLDINGS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_INDEX_MAPPING,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_LAGGING_DATES,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_REMOVE_CURRENCY_RISK,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_REQUIRES_FACTOR_RETURNS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_RISK_MODEL,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_RISK_MODEL_APPEND_DATA,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_STATS,
  CalculateFromHoldingsRequestData.JSON_PROPERTY_UNDERLYING_IDS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CalculateFromHoldingsRequestData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ADDITIONAL_CALC_INPUTS = "additionalCalcInputs";
  private AdditionalCalculationInputs additionalCalcInputs;

  public static final String JSON_PROPERTY_ALLOW_FORCED_RISKLESS_ASSETS = "allowForcedRisklessAssets";
  private Boolean allowForcedRisklessAssets = false;

  public static final String JSON_PROPERTY_ASSET_TYPES = "assetTypes";
  private java.util.Map<String, String> assetTypes = null;

  public static final String JSON_PROPERTY_CALENDAR = "calendar";
  private String calendar;

  public static final String JSON_PROPERTY_COMPOSITE_ASSETS = "compositeAssets";
  private java.util.Map<String, IDsAndMarketValues> compositeAssets = null;

  public static final String JSON_PROPERTY_CURRENCY = "currency";
  private String currency;

  public static final String JSON_PROPERTY_DATE = "date";
  private Date date;

  public static final String JSON_PROPERTY_FACTOR_GROUPING = "factorGrouping";
  private FactorGroup factorGrouping;

  public static final String JSON_PROPERTY_FACTORS_VISIBLE = "factorsVisible";
  private FactorsVisible factorsVisible;

  public static final String JSON_PROPERTY_HOLDINGS = "holdings";
  private Holdings holdings;

  public static final String JSON_PROPERTY_INDEX_MAPPING = "indexMapping";
  private SecurityIndexMapping indexMapping;

  public static final String JSON_PROPERTY_LAGGING_DATES = "laggingDates";
  private LaggingDates laggingDates;

  public static final String JSON_PROPERTY_REMOVE_CURRENCY_RISK = "removeCurrencyRisk";
  private RemoveCurrencyRisk removeCurrencyRisk;

  public static final String JSON_PROPERTY_REQUIRES_FACTOR_RETURNS = "requiresFactorReturns";
  private RequiresFactorReturns requiresFactorReturns;

  public static final String JSON_PROPERTY_RISK_MODEL = "riskModel";
  private String riskModel;

  public static final String JSON_PROPERTY_RISK_MODEL_APPEND_DATA = "riskModelAppendData";
  private RiskModelAppendData riskModelAppendData;

  public static final String JSON_PROPERTY_STATS = "stats";
  private java.util.List<Stat> stats = new java.util.ArrayList<>();

  public static final String JSON_PROPERTY_UNDERLYING_IDS = "underlyingIds";
  private java.util.Map<String, String> underlyingIds = null;

  public CalculateFromHoldingsRequestData() { 
  }

  @JsonCreator
  public CalculateFromHoldingsRequestData(
    @JsonProperty(value=JSON_PROPERTY_DATE, required=true) Date date, 
    @JsonProperty(value=JSON_PROPERTY_HOLDINGS, required=true) Holdings holdings, 
    @JsonProperty(value=JSON_PROPERTY_RISK_MODEL, required=true) String riskModel, 
    @JsonProperty(value=JSON_PROPERTY_STATS, required=true) java.util.List<Stat> stats
  ) {
    this();
    this.date = date;
    this.holdings = holdings;
    this.riskModel = riskModel;
    this.stats = stats;
  }

  public CalculateFromHoldingsRequestData additionalCalcInputs(AdditionalCalculationInputs additionalCalcInputs) {
    this.additionalCalcInputs = additionalCalcInputs;
    return this;
  }

   /**
   * Get additionalCalcInputs
   * @return additionalCalcInputs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ADDITIONAL_CALC_INPUTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public AdditionalCalculationInputs getAdditionalCalcInputs() {
    return additionalCalcInputs;
  }


  @JsonProperty(JSON_PROPERTY_ADDITIONAL_CALC_INPUTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdditionalCalcInputs(AdditionalCalculationInputs additionalCalcInputs) {
    this.additionalCalcInputs = additionalCalcInputs;
  }


  public CalculateFromHoldingsRequestData allowForcedRisklessAssets(Boolean allowForcedRisklessAssets) {
    this.allowForcedRisklessAssets = allowForcedRisklessAssets;
    return this;
  }

   /**
   * Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash.
   * @return allowForcedRisklessAssets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Allow certain assets to be entirely riskless; certain models always override this to be true. Examples of asset types to which this applies includes offset cash.")
  @JsonProperty(JSON_PROPERTY_ALLOW_FORCED_RISKLESS_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getAllowForcedRisklessAssets() {
    return allowForcedRisklessAssets;
  }


  @JsonProperty(JSON_PROPERTY_ALLOW_FORCED_RISKLESS_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAllowForcedRisklessAssets(Boolean allowForcedRisklessAssets) {
    this.allowForcedRisklessAssets = allowForcedRisklessAssets;
  }


  public CalculateFromHoldingsRequestData assetTypes(java.util.Map<String, String> assetTypes) {
    this.assetTypes = assetTypes;
    return this;
  }

  public CalculateFromHoldingsRequestData putAssetTypesItem(String key, String assetTypesItem) {
    if (this.assetTypes == null) {
      this.assetTypes = new java.util.HashMap<>();
    }
    this.assetTypes.put(key, assetTypesItem);
    return this;
  }

   /**
   * **(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from &#39;underlyingIds&#39; input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the &#39;removeCurrencyRisk&#39; input is also provided. When this input is used in the request, underlying IDs (provided via &#39;underlyingIds&#39; input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
   * @return assetTypes
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"FDS\":\"EQ_EQ_COMMON\",\"CFDTOIBM\":\"OTH_CFD\"}", value = "**(since 1.4.0)** A mapping of security ID to its asset type as the standard asset type keys. When this input is in a request, it is used to (1) identify assets that use Underlying IDs from 'underlyingIds' input, and (2) identify asset types compatible with automatic removal of their contribution of currency to risk unless any form of the 'removeCurrencyRisk' input is also provided. When this input is used in the request, underlying IDs (provided via 'underlyingIds' input) are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.")
  @JsonProperty(JSON_PROPERTY_ASSET_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, String> getAssetTypes() {
    return assetTypes;
  }


  @JsonProperty(JSON_PROPERTY_ASSET_TYPES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssetTypes(java.util.Map<String, String> assetTypes) {
    this.assetTypes = assetTypes;
  }


  public CalculateFromHoldingsRequestData calendar(String calendar) {
    this.calendar = calendar;
    return this;
  }

   /**
   * Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \&quot;FIVEDAY\&quot; or \&quot;SEVENDAY\&quot; calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. &#39;Calendar Code&#39; column).
   * @return calendar
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "FJH", value = "Calendar code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field. See also [OA:2012](https://my.apps.factset.com/oa/pages/2012#calendar) for global codes, \"FIVEDAY\" or \"SEVENDAY\" calendars and see [OA:16610](https://my.apps.factset.com/oa/pages/16610#country) for country codes (cf. 'Calendar Code' column).")
  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCalendar() {
    return calendar;
  }


  @JsonProperty(JSON_PROPERTY_CALENDAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCalendar(String calendar) {
    this.calendar = calendar;
  }


  public CalculateFromHoldingsRequestData compositeAssets(java.util.Map<String, IDsAndMarketValues> compositeAssets) {
    this.compositeAssets = compositeAssets;
    return this;
  }

  public CalculateFromHoldingsRequestData putCompositeAssetsItem(String key, IDsAndMarketValues compositeAssetsItem) {
    if (this.compositeAssets == null) {
      this.compositeAssets = new java.util.HashMap<>();
    }
    this.compositeAssets.put(key, compositeAssetsItem);
    return this;
  }

   /**
   * IDs to be defined as composite assets with their constituents&#39; IDs and market values. The typical use case is for risk look-through of ETF or Funds&#39; constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match.
   * @return compositeAssets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"CA1_to_IBM_and_CA2\":{\"ids\":[\"IBM\",\"CA2\"],\"marketValues\":[0.45,0.55]},\"CA2\":{\"ids\":[\"VZ\",\"cfd_FDS\"],\"marketValues\":[0.6,0.4]}}", value = "IDs to be defined as composite assets with their constituents' IDs and market values. The typical use case is for risk look-through of ETF or Funds' constituents. When defining composite assets and creating portfolios which hold them, the IDs provided must be an exact match.")
  @JsonProperty(JSON_PROPERTY_COMPOSITE_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, IDsAndMarketValues> getCompositeAssets() {
    return compositeAssets;
  }


  @JsonProperty(JSON_PROPERTY_COMPOSITE_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCompositeAssets(java.util.Map<String, IDsAndMarketValues> compositeAssets) {
    this.compositeAssets = compositeAssets;
  }


  public CalculateFromHoldingsRequestData currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via &#39;compositeAssets&#39; field.
   * @return currency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "EUR", value = "ISO-4217 currency code for risk model and holdings data to fetch and use. Ignored only for composite asset definitions provided as inputs via 'compositeAssets' field.")
  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCurrency() {
    return currency;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public CalculateFromHoldingsRequestData date(Date date) {
    this.date = date;
    return this;
  }

   /**
   * Get date
   * @return date
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Date getDate() {
    return date;
  }


  @JsonProperty(JSON_PROPERTY_DATE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setDate(Date date) {
    this.date = date;
  }


  public CalculateFromHoldingsRequestData factorGrouping(FactorGroup factorGrouping) {
    this.factorGrouping = factorGrouping;
    return this;
  }

   /**
   * Get factorGrouping
   * @return factorGrouping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FACTOR_GROUPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public FactorGroup getFactorGrouping() {
    return factorGrouping;
  }


  @JsonProperty(JSON_PROPERTY_FACTOR_GROUPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactorGrouping(FactorGroup factorGrouping) {
    this.factorGrouping = factorGrouping;
  }


  public CalculateFromHoldingsRequestData factorsVisible(FactorsVisible factorsVisible) {
    this.factorsVisible = factorsVisible;
    return this;
  }

   /**
   * Get factorsVisible
   * @return factorsVisible
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FACTORS_VISIBLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public FactorsVisible getFactorsVisible() {
    return factorsVisible;
  }


  @JsonProperty(JSON_PROPERTY_FACTORS_VISIBLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFactorsVisible(FactorsVisible factorsVisible) {
    this.factorsVisible = factorsVisible;
  }


  public CalculateFromHoldingsRequestData holdings(Holdings holdings) {
    this.holdings = holdings;
    return this;
  }

   /**
   * Get holdings
   * @return holdings
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_HOLDINGS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Holdings getHoldings() {
    return holdings;
  }


  @JsonProperty(JSON_PROPERTY_HOLDINGS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setHoldings(Holdings holdings) {
    this.holdings = holdings;
  }


  public CalculateFromHoldingsRequestData indexMapping(SecurityIndexMapping indexMapping) {
    this.indexMapping = indexMapping;
    return this;
  }

   /**
   * Get indexMapping
   * @return indexMapping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_INDEX_MAPPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecurityIndexMapping getIndexMapping() {
    return indexMapping;
  }


  @JsonProperty(JSON_PROPERTY_INDEX_MAPPING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIndexMapping(SecurityIndexMapping indexMapping) {
    this.indexMapping = indexMapping;
  }


  public CalculateFromHoldingsRequestData laggingDates(LaggingDates laggingDates) {
    this.laggingDates = laggingDates;
    return this;
  }

   /**
   * Get laggingDates
   * @return laggingDates
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LAGGING_DATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LaggingDates getLaggingDates() {
    return laggingDates;
  }


  @JsonProperty(JSON_PROPERTY_LAGGING_DATES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLaggingDates(LaggingDates laggingDates) {
    this.laggingDates = laggingDates;
  }


  public CalculateFromHoldingsRequestData removeCurrencyRisk(RemoveCurrencyRisk removeCurrencyRisk) {
    this.removeCurrencyRisk = removeCurrencyRisk;
    return this;
  }

   /**
   * Get removeCurrencyRisk
   * @return removeCurrencyRisk
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REMOVE_CURRENCY_RISK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RemoveCurrencyRisk getRemoveCurrencyRisk() {
    return removeCurrencyRisk;
  }


  @JsonProperty(JSON_PROPERTY_REMOVE_CURRENCY_RISK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRemoveCurrencyRisk(RemoveCurrencyRisk removeCurrencyRisk) {
    this.removeCurrencyRisk = removeCurrencyRisk;
  }


  public CalculateFromHoldingsRequestData requiresFactorReturns(RequiresFactorReturns requiresFactorReturns) {
    this.requiresFactorReturns = requiresFactorReturns;
    return this;
  }

   /**
   * Get requiresFactorReturns
   * @return requiresFactorReturns
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REQUIRES_FACTOR_RETURNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RequiresFactorReturns getRequiresFactorReturns() {
    return requiresFactorReturns;
  }


  @JsonProperty(JSON_PROPERTY_REQUIRES_FACTOR_RETURNS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequiresFactorReturns(RequiresFactorReturns requiresFactorReturns) {
    this.requiresFactorReturns = requiresFactorReturns;
  }


  public CalculateFromHoldingsRequestData riskModel(String riskModel) {
    this.riskModel = riskModel;
    return this;
  }

   /**
   * Model code
   * @return riskModel
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "FDS:GLOBAL_EQUITY_M_V1", required = true, value = "Model code")
  @JsonProperty(JSON_PROPERTY_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getRiskModel() {
    return riskModel;
  }


  @JsonProperty(JSON_PROPERTY_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRiskModel(String riskModel) {
    this.riskModel = riskModel;
  }


  public CalculateFromHoldingsRequestData riskModelAppendData(RiskModelAppendData riskModelAppendData) {
    this.riskModelAppendData = riskModelAppendData;
    return this;
  }

   /**
   * Get riskModelAppendData
   * @return riskModelAppendData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RISK_MODEL_APPEND_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RiskModelAppendData getRiskModelAppendData() {
    return riskModelAppendData;
  }


  @JsonProperty(JSON_PROPERTY_RISK_MODEL_APPEND_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRiskModelAppendData(RiskModelAppendData riskModelAppendData) {
    this.riskModelAppendData = riskModelAppendData;
  }


  public CalculateFromHoldingsRequestData stats(java.util.List<Stat> stats) {
    this.stats = stats;
    return this;
  }

  public CalculateFromHoldingsRequestData addStatsItem(Stat statsItem) {
    this.stats.add(statsItem);
    return this;
  }

   /**
   * List of risk stats and settings to calculate
   * @return stats
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "List of risk stats and settings to calculate")
  @JsonProperty(JSON_PROPERTY_STATS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public java.util.List<Stat> getStats() {
    return stats;
  }


  @JsonProperty(JSON_PROPERTY_STATS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStats(java.util.List<Stat> stats) {
    this.stats = stats;
  }


  public CalculateFromHoldingsRequestData underlyingIds(java.util.Map<String, String> underlyingIds) {
    this.underlyingIds = underlyingIds;
    return this;
  }

  public CalculateFromHoldingsRequestData putUnderlyingIdsItem(String key, String underlyingIdsItem) {
    if (this.underlyingIds == null) {
      this.underlyingIds = new java.util.HashMap<>();
    }
    this.underlyingIds.put(key, underlyingIdsItem);
    return this;
  }

   /**
   * A map of security IDs to their underlying IDs. When &#39;assetTypes&#39; input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.
   * @return underlyingIds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "{\"CFD_IBM\":\"IBM\",\"cfd_FDS\":\"FDS\"}", value = "A map of security IDs to their underlying IDs. When 'assetTypes' input is in a request, underlying IDs provided via this input are only respected for the following standard asset type keys (all other underlying IDs will be discarded): refer to [OA:22019](https://my.apps.factset.com/oa/pages/22019) for compatible asset type keys and more details.")
  @JsonProperty(JSON_PROPERTY_UNDERLYING_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, String> getUnderlyingIds() {
    return underlyingIds;
  }


  @JsonProperty(JSON_PROPERTY_UNDERLYING_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnderlyingIds(java.util.Map<String, String> underlyingIds) {
    this.underlyingIds = underlyingIds;
  }


  /**
   * Return true if this CalculateFromHoldingsRequestData object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CalculateFromHoldingsRequestData calculateFromHoldingsRequestData = (CalculateFromHoldingsRequestData) o;
    return Objects.equals(this.additionalCalcInputs, calculateFromHoldingsRequestData.additionalCalcInputs) &&
        Objects.equals(this.allowForcedRisklessAssets, calculateFromHoldingsRequestData.allowForcedRisklessAssets) &&
        Objects.equals(this.assetTypes, calculateFromHoldingsRequestData.assetTypes) &&
        Objects.equals(this.calendar, calculateFromHoldingsRequestData.calendar) &&
        Objects.equals(this.compositeAssets, calculateFromHoldingsRequestData.compositeAssets) &&
        Objects.equals(this.currency, calculateFromHoldingsRequestData.currency) &&
        Objects.equals(this.date, calculateFromHoldingsRequestData.date) &&
        Objects.equals(this.factorGrouping, calculateFromHoldingsRequestData.factorGrouping) &&
        Objects.equals(this.factorsVisible, calculateFromHoldingsRequestData.factorsVisible) &&
        Objects.equals(this.holdings, calculateFromHoldingsRequestData.holdings) &&
        Objects.equals(this.indexMapping, calculateFromHoldingsRequestData.indexMapping) &&
        Objects.equals(this.laggingDates, calculateFromHoldingsRequestData.laggingDates) &&
        Objects.equals(this.removeCurrencyRisk, calculateFromHoldingsRequestData.removeCurrencyRisk) &&
        Objects.equals(this.requiresFactorReturns, calculateFromHoldingsRequestData.requiresFactorReturns) &&
        Objects.equals(this.riskModel, calculateFromHoldingsRequestData.riskModel) &&
        Objects.equals(this.riskModelAppendData, calculateFromHoldingsRequestData.riskModelAppendData) &&
        Objects.equals(this.stats, calculateFromHoldingsRequestData.stats) &&
        Objects.equals(this.underlyingIds, calculateFromHoldingsRequestData.underlyingIds);
  }

  @Override
  public int hashCode() {
    return Objects.hash(additionalCalcInputs, allowForcedRisklessAssets, assetTypes, calendar, compositeAssets, currency, date, factorGrouping, factorsVisible, holdings, indexMapping, laggingDates, removeCurrencyRisk, requiresFactorReturns, riskModel, riskModelAppendData, stats, underlyingIds);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CalculateFromHoldingsRequestData {\n");
    sb.append("    additionalCalcInputs: ").append(toIndentedString(additionalCalcInputs)).append("\n");
    sb.append("    allowForcedRisklessAssets: ").append(toIndentedString(allowForcedRisklessAssets)).append("\n");
    sb.append("    assetTypes: ").append(toIndentedString(assetTypes)).append("\n");
    sb.append("    calendar: ").append(toIndentedString(calendar)).append("\n");
    sb.append("    compositeAssets: ").append(toIndentedString(compositeAssets)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    factorGrouping: ").append(toIndentedString(factorGrouping)).append("\n");
    sb.append("    factorsVisible: ").append(toIndentedString(factorsVisible)).append("\n");
    sb.append("    holdings: ").append(toIndentedString(holdings)).append("\n");
    sb.append("    indexMapping: ").append(toIndentedString(indexMapping)).append("\n");
    sb.append("    laggingDates: ").append(toIndentedString(laggingDates)).append("\n");
    sb.append("    removeCurrencyRisk: ").append(toIndentedString(removeCurrencyRisk)).append("\n");
    sb.append("    requiresFactorReturns: ").append(toIndentedString(requiresFactorReturns)).append("\n");
    sb.append("    riskModel: ").append(toIndentedString(riskModel)).append("\n");
    sb.append("    riskModelAppendData: ").append(toIndentedString(riskModelAppendData)).append("\n");
    sb.append("    stats: ").append(toIndentedString(stats)).append("\n");
    sb.append("    underlyingIds: ").append(toIndentedString(underlyingIds)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

