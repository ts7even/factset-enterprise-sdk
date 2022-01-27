/*
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataTradingValueAverageDays30;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataTradingValueAverageDays5;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Arithmetic mean of the trading value for different time ranges.
 */
@ApiModel(description = "Arithmetic mean of the trading value for different time ranges.")
@JsonPropertyOrder({
  StockNotationScreenerSearchDataTradingValueAverage.JSON_PROPERTY_DAYS5,
  StockNotationScreenerSearchDataTradingValueAverage.JSON_PROPERTY_DAYS30
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StockNotationScreenerSearchDataTradingValueAverage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DAYS5 = "days5";
  private StockNotationScreenerSearchDataTradingValueAverageDays5 days5;

  public static final String JSON_PROPERTY_DAYS30 = "days30";
  private StockNotationScreenerSearchDataTradingValueAverageDays30 days30;


  public StockNotationScreenerSearchDataTradingValueAverage days5(StockNotationScreenerSearchDataTradingValueAverageDays5 days5) {
    this.days5 = days5;
    return this;
  }

   /**
   * Get days5
   * @return days5
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DAYS5)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataTradingValueAverageDays5 getDays5() {
    return days5;
  }


  @JsonProperty(JSON_PROPERTY_DAYS5)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDays5(StockNotationScreenerSearchDataTradingValueAverageDays5 days5) {
    this.days5 = days5;
  }


  public StockNotationScreenerSearchDataTradingValueAverage days30(StockNotationScreenerSearchDataTradingValueAverageDays30 days30) {
    this.days30 = days30;
    return this;
  }

   /**
   * Get days30
   * @return days30
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DAYS30)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataTradingValueAverageDays30 getDays30() {
    return days30;
  }


  @JsonProperty(JSON_PROPERTY_DAYS30)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDays30(StockNotationScreenerSearchDataTradingValueAverageDays30 days30) {
    this.days30 = days30;
  }


  /**
   * Return true if this _stock_notation_screener_search_data_tradingValue_average object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StockNotationScreenerSearchDataTradingValueAverage stockNotationScreenerSearchDataTradingValueAverage = (StockNotationScreenerSearchDataTradingValueAverage) o;
    return Objects.equals(this.days5, stockNotationScreenerSearchDataTradingValueAverage.days5) &&
        Objects.equals(this.days30, stockNotationScreenerSearchDataTradingValueAverage.days30);
  }

  @Override
  public int hashCode() {
    return Objects.hash(days5, days30);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StockNotationScreenerSearchDataTradingValueAverage {\n");
    sb.append("    days5: ").append(toIndentedString(days5)).append("\n");
    sb.append("    days30: ").append(toIndentedString(days30)).append("\n");
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
