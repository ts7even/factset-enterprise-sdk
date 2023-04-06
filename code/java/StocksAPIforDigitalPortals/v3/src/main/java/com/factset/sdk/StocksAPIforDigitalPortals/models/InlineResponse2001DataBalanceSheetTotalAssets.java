/*
 * Stocks API For Digital Portals
 * The Stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years. Search criteria also include benchmark-related attributes (beta, correlation, outperformance), and ESG parameters, based on FactSet’s Truvalue ESG scores.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with daily updates).  This API is fully integrated with the corresponding [Quotes API](https://developer.factset.com/api-catalog/quotes-api-digital-portals), allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals).  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the [Bonds API](https://developer.factset.com/api-catalog/bonds-api-digital-portals) and the [Securitized Derivatives API](https://developer.factset.com/api-catalog/securitized-derivatives-api-digital-portals) for details.  See also the recipe [\"Enrich Your Digital Portal with Flexible Equity Screening\"](https://developer.factset.com/recipe-catalog/enrich-your-digital-portal-flexible-equity-screening). 
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StocksAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Total assets, which is the total value of resources the company is using for its operations.
 */
@ApiModel(description = "Total assets, which is the total value of resources the company is using for its operations.")
@JsonPropertyOrder({
  InlineResponse2001DataBalanceSheetTotalAssets.JSON_PROPERTY_VALUE,
  InlineResponse2001DataBalanceSheetTotalAssets.JSON_PROPERTY_GROWTH,
  InlineResponse2001DataBalanceSheetTotalAssets.JSON_PROPERTY_ASSET_TURNOVER,
  InlineResponse2001DataBalanceSheetTotalAssets.JSON_PROPERTY_RETURN_ON_ASSETS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2001DataBalanceSheetTotalAssets implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private JsonNullable<BigDecimal> value = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_GROWTH = "growth";
  private JsonNullable<BigDecimal> growth = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_ASSET_TURNOVER = "assetTurnover";
  private JsonNullable<BigDecimal> assetTurnover = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_RETURN_ON_ASSETS = "returnOnAssets";
  private JsonNullable<BigDecimal> returnOnAssets = JsonNullable.<BigDecimal>undefined();

  public InlineResponse2001DataBalanceSheetTotalAssets() { 
  }

  public InlineResponse2001DataBalanceSheetTotalAssets value(BigDecimal value) {
    this.value = JsonNullable.<BigDecimal>of(value);
    return this;
  }

   /**
   * Value of the total assets.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Value of the total assets.")
  @JsonIgnore

  public BigDecimal getValue() {
        return value.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getValue_JsonNullable() {
    return value;
  }
  
  @JsonProperty(JSON_PROPERTY_VALUE)
  public void setValue_JsonNullable(JsonNullable<BigDecimal> value) {
    this.value = value;
  }

  public void setValue(BigDecimal value) {
    this.value = JsonNullable.<BigDecimal>of(value);
  }


  public InlineResponse2001DataBalanceSheetTotalAssets growth(BigDecimal growth) {
    this.growth = JsonNullable.<BigDecimal>of(growth);
    return this;
  }

   /**
   * Annual growth rate of the total assets.
   * @return growth
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Annual growth rate of the total assets.")
  @JsonIgnore

  public BigDecimal getGrowth() {
        return growth.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_GROWTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getGrowth_JsonNullable() {
    return growth;
  }
  
  @JsonProperty(JSON_PROPERTY_GROWTH)
  public void setGrowth_JsonNullable(JsonNullable<BigDecimal> growth) {
    this.growth = growth;
  }

  public void setGrowth(BigDecimal growth) {
    this.growth = JsonNullable.<BigDecimal>of(growth);
  }


  public InlineResponse2001DataBalanceSheetTotalAssets assetTurnover(BigDecimal assetTurnover) {
    this.assetTurnover = JsonNullable.<BigDecimal>of(assetTurnover);
    return this;
  }

   /**
   * Asset turnover, which is the ratio of the total sales revenue, divided by the total assets.
   * @return assetTurnover
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Asset turnover, which is the ratio of the total sales revenue, divided by the total assets.")
  @JsonIgnore

  public BigDecimal getAssetTurnover() {
        return assetTurnover.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_ASSET_TURNOVER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getAssetTurnover_JsonNullable() {
    return assetTurnover;
  }
  
  @JsonProperty(JSON_PROPERTY_ASSET_TURNOVER)
  public void setAssetTurnover_JsonNullable(JsonNullable<BigDecimal> assetTurnover) {
    this.assetTurnover = assetTurnover;
  }

  public void setAssetTurnover(BigDecimal assetTurnover) {
    this.assetTurnover = JsonNullable.<BigDecimal>of(assetTurnover);
  }


  public InlineResponse2001DataBalanceSheetTotalAssets returnOnAssets(BigDecimal returnOnAssets) {
    this.returnOnAssets = JsonNullable.<BigDecimal>of(returnOnAssets);
    return this;
  }

   /**
   * Return on assets, which is the ratio of the net income, divided by the two-fiscal-year average of the total assets.
   * @return returnOnAssets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Return on assets, which is the ratio of the net income, divided by the two-fiscal-year average of the total assets.")
  @JsonIgnore

  public BigDecimal getReturnOnAssets() {
        return returnOnAssets.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_RETURN_ON_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getReturnOnAssets_JsonNullable() {
    return returnOnAssets;
  }
  
  @JsonProperty(JSON_PROPERTY_RETURN_ON_ASSETS)
  public void setReturnOnAssets_JsonNullable(JsonNullable<BigDecimal> returnOnAssets) {
    this.returnOnAssets = returnOnAssets;
  }

  public void setReturnOnAssets(BigDecimal returnOnAssets) {
    this.returnOnAssets = JsonNullable.<BigDecimal>of(returnOnAssets);
  }


  /**
   * Return true if this inline_response_200_1_data_balanceSheet_totalAssets object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2001DataBalanceSheetTotalAssets inlineResponse2001DataBalanceSheetTotalAssets = (InlineResponse2001DataBalanceSheetTotalAssets) o;
    return equalsNullable(this.value, inlineResponse2001DataBalanceSheetTotalAssets.value) &&
        equalsNullable(this.growth, inlineResponse2001DataBalanceSheetTotalAssets.growth) &&
        equalsNullable(this.assetTurnover, inlineResponse2001DataBalanceSheetTotalAssets.assetTurnover) &&
        equalsNullable(this.returnOnAssets, inlineResponse2001DataBalanceSheetTotalAssets.returnOnAssets);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(value), hashCodeNullable(growth), hashCodeNullable(assetTurnover), hashCodeNullable(returnOnAssets));
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2001DataBalanceSheetTotalAssets {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    growth: ").append(toIndentedString(growth)).append("\n");
    sb.append("    assetTurnover: ").append(toIndentedString(assetTurnover)).append("\n");
    sb.append("    returnOnAssets: ").append(toIndentedString(returnOnAssets)).append("\n");
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
