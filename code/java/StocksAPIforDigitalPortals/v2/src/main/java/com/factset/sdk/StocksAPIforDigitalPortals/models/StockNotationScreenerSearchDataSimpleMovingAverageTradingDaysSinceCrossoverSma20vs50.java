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
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50NumberDays;
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
 * Number of trading days since the crossover and direction thereof of the SMA 20 (see parameter &#x60;simpleMovingAverage.days20&#x60;) and the SMA 50 (see parameter &#x60;simpleMovingAverage.days50&#x60;). Only crossovers which occurred in the most recent 100 trading days are considered.
 */
@ApiModel(description = "Number of trading days since the crossover and direction thereof of the SMA 20 (see parameter `simpleMovingAverage.days20`) and the SMA 50 (see parameter `simpleMovingAverage.days50`). Only crossovers which occurred in the most recent 100 trading days are considered.")
@JsonPropertyOrder({
  StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.JSON_PROPERTY_NUMBER_DAYS,
  StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.JSON_PROPERTY_DIRECTION
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NUMBER_DAYS = "numberDays";
  private StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50NumberDays numberDays;

  /**
   * Direction of the crossing.
   */
  public enum DirectionEnum {
    UP("up"),
    
    DOWN("down");

    private String value;

    DirectionEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static DirectionEnum fromValue(String value) {
      for (DirectionEnum b : DirectionEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_DIRECTION = "direction";
  private DirectionEnum direction = DirectionEnum.UP;


  public StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 numberDays(StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50NumberDays numberDays) {
    this.numberDays = numberDays;
    return this;
  }

   /**
   * Get numberDays
   * @return numberDays
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50NumberDays getNumberDays() {
    return numberDays;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER_DAYS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNumberDays(StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50NumberDays numberDays) {
    this.numberDays = numberDays;
  }


  public StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 direction(DirectionEnum direction) {
    this.direction = direction;
    return this;
  }

   /**
   * Direction of the crossing.
   * @return direction
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Direction of the crossing.")
  @JsonProperty(JSON_PROPERTY_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DirectionEnum getDirection() {
    return direction;
  }


  @JsonProperty(JSON_PROPERTY_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDirection(DirectionEnum direction) {
    this.direction = direction;
  }


  /**
   * Return true if this _stock_notation_screener_search_data_simpleMovingAverage_tradingDaysSinceCrossover_sma20vs50 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 stockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 = (StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50) o;
    return Objects.equals(this.numberDays, stockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.numberDays) &&
        Objects.equals(this.direction, stockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50.direction);
  }

  @Override
  public int hashCode() {
    return Objects.hash(numberDays, direction);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StockNotationScreenerSearchDataSimpleMovingAverageTradingDaysSinceCrossoverSma20vs50 {\n");
    sb.append("    numberDays: ").append(toIndentedString(numberDays)).append("\n");
    sb.append("    direction: ").append(toIndentedString(direction)).append("\n");
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
