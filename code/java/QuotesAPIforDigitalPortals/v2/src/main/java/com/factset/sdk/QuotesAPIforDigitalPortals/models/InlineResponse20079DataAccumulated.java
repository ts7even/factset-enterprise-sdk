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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Summary data accumulated over all trades of the current trading day.
 */
@ApiModel(description = "Summary data accumulated over all trades of the current trading day.")
@JsonPropertyOrder({
  InlineResponse20079DataAccumulated.JSON_PROPERTY_NUMBER_TRADES,
  InlineResponse20079DataAccumulated.JSON_PROPERTY_TRADING_VOLUME,
  InlineResponse20079DataAccumulated.JSON_PROPERTY_TRADING_VALUE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20079DataAccumulated implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NUMBER_TRADES = "numberTrades";
  private BigDecimal numberTrades;

  public static final String JSON_PROPERTY_TRADING_VOLUME = "tradingVolume";
  private BigDecimal tradingVolume;

  public static final String JSON_PROPERTY_TRADING_VALUE = "tradingValue";
  private BigDecimal tradingValue;


  public InlineResponse20079DataAccumulated numberTrades(BigDecimal numberTrades) {
    this.numberTrades = numberTrades;
    return this;
  }

   /**
   * Number of trades.
   * @return numberTrades
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of trades.")
  @JsonProperty(JSON_PROPERTY_NUMBER_TRADES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getNumberTrades() {
    return numberTrades;
  }


  @JsonProperty(JSON_PROPERTY_NUMBER_TRADES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNumberTrades(BigDecimal numberTrades) {
    this.numberTrades = numberTrades;
  }


  public InlineResponse20079DataAccumulated tradingVolume(BigDecimal tradingVolume) {
    this.tradingVolume = tradingVolume;
    return this;
  }

   /**
   * Number of units (e.g. shares) traded.
   * @return tradingVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of units (e.g. shares) traded.")
  @JsonProperty(JSON_PROPERTY_TRADING_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getTradingVolume() {
    return tradingVolume;
  }


  @JsonProperty(JSON_PROPERTY_TRADING_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTradingVolume(BigDecimal tradingVolume) {
    this.tradingVolume = tradingVolume;
  }


  public InlineResponse20079DataAccumulated tradingValue(BigDecimal tradingValue) {
    this.tradingValue = tradingValue;
    return this;
  }

   /**
   * Monetary equivalent (cash value) of the trades. See attribute &#x60;currency&#x60; for its unit.
   * @return tradingValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Monetary equivalent (cash value) of the trades. See attribute `currency` for its unit.")
  @JsonProperty(JSON_PROPERTY_TRADING_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getTradingValue() {
    return tradingValue;
  }


  @JsonProperty(JSON_PROPERTY_TRADING_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTradingValue(BigDecimal tradingValue) {
    this.tradingValue = tradingValue;
  }


  /**
   * Return true if this inline_response_200_79_data_accumulated object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20079DataAccumulated inlineResponse20079DataAccumulated = (InlineResponse20079DataAccumulated) o;
    return Objects.equals(this.numberTrades, inlineResponse20079DataAccumulated.numberTrades) &&
        Objects.equals(this.tradingVolume, inlineResponse20079DataAccumulated.tradingVolume) &&
        Objects.equals(this.tradingValue, inlineResponse20079DataAccumulated.tradingValue);
  }

  @Override
  public int hashCode() {
    return Objects.hash(numberTrades, tradingVolume, tradingValue);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20079DataAccumulated {\n");
    sb.append("    numberTrades: ").append(toIndentedString(numberTrades)).append("\n");
    sb.append("    tradingVolume: ").append(toIndentedString(tradingVolume)).append("\n");
    sb.append("    tradingValue: ").append(toIndentedString(tradingValue)).append("\n");
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
