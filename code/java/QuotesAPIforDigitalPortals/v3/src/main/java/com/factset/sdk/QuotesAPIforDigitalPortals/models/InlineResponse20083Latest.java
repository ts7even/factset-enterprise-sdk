/*
 * Quotes API For Digital Portals
 * The Quotes API combines endpoints for retrieving security end-of-day, delayed, and realtime prices with performance key figures and basic reference data on the security and market level.  The API supports over 20 different price types for each quote and comes with basic search endpoints based on security identifiers and instrument names. Market coverage is included in the *Sample Use Cases* section below.  The Digital Portal use case is focused on high-performance applications that are  * serving millions of end-users, * accessible by client browsers via the internet, * supporting subscriptions for streamed updates out-of-the-box, * typically combining a wide variety of *for Digital Portals*-APIs into a highly use-case specific solution for customers, * integrated into complex infrastructures such as existing frontend frameworks, authentication services.  All APIs labelled *for Digital Portals* have been designed for direct use by client web applications and feature extreme low latency: The average response time across all endpoints is 30 ms whereas 99% of all requests are answered in close to under 300ms.  See the [Time Series API for Digital Portals](https://developer.factset.com/api-catalog/time-series-api-digital-portals) for direct access to price histories, and the [News API for Digital Portals](https://developer.factset.com/api-catalog/news-api-digital-portals) for searching and fetching related news. 
 *
 * The version of the OpenAPI document: 2
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
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20083LatestPerformance;
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
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Most recent trade or price of the trading day.
 */
@ApiModel(description = "Most recent trade or price of the trading day.")
@JsonPropertyOrder({
  InlineResponse20083Latest.JSON_PROPERTY_TIME,
  InlineResponse20083Latest.JSON_PROPERTY_PRICE,
  InlineResponse20083Latest.JSON_PROPERTY_QUOTE_CONDITION,
  InlineResponse20083Latest.JSON_PROPERTY_TRADING_VOLUME,
  InlineResponse20083Latest.JSON_PROPERTY_TRADING_VALUE,
  InlineResponse20083Latest.JSON_PROPERTY_PERFORMANCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20083Latest implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TIME = "time";
  private JsonNullable<String> time = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_PRICE = "price";
  private JsonNullable<BigDecimal> price = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_QUOTE_CONDITION = "quoteCondition";
  private JsonNullable<String> quoteCondition = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_TRADING_VOLUME = "tradingVolume";
  private JsonNullable<BigDecimal> tradingVolume = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_TRADING_VALUE = "tradingValue";
  private JsonNullable<BigDecimal> tradingValue = JsonNullable.<BigDecimal>undefined();

  public static final String JSON_PROPERTY_PERFORMANCE = "performance";
  private InlineResponse20083LatestPerformance performance;

  public InlineResponse20083Latest() { 
  }

  public InlineResponse20083Latest time(String time) {
    this.time = JsonNullable.<String>of(time);
    return this;
  }

   /**
   * Date and time.
   * @return time
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date and time.")
  @JsonIgnore

  public String getTime() {
        return time.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getTime_JsonNullable() {
    return time;
  }
  
  @JsonProperty(JSON_PROPERTY_TIME)
  public void setTime_JsonNullable(JsonNullable<String> time) {
    this.time = time;
  }

  public void setTime(String time) {
    this.time = JsonNullable.<String>of(time);
  }


  public InlineResponse20083Latest price(BigDecimal price) {
    this.price = JsonNullable.<BigDecimal>of(price);
    return this;
  }

   /**
   * Price value. See attribute &#x60;valueUnit&#x60; for its unit.
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Price value. See attribute `valueUnit` for its unit.")
  @JsonIgnore

  public BigDecimal getPrice() {
        return price.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getPrice_JsonNullable() {
    return price;
  }
  
  @JsonProperty(JSON_PROPERTY_PRICE)
  public void setPrice_JsonNullable(JsonNullable<BigDecimal> price) {
    this.price = price;
  }

  public void setPrice(BigDecimal price) {
    this.price = JsonNullable.<BigDecimal>of(price);
  }


  public InlineResponse20083Latest quoteCondition(String quoteCondition) {
    this.quoteCondition = JsonNullable.<String>of(quoteCondition);
    return this;
  }

   /**
   * Quote condition. Possible values depend on the values delivered by the supplier of the price information.
   * @return quoteCondition
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Quote condition. Possible values depend on the values delivered by the supplier of the price information.")
  @JsonIgnore

  public String getQuoteCondition() {
        return quoteCondition.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_QUOTE_CONDITION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getQuoteCondition_JsonNullable() {
    return quoteCondition;
  }
  
  @JsonProperty(JSON_PROPERTY_QUOTE_CONDITION)
  public void setQuoteCondition_JsonNullable(JsonNullable<String> quoteCondition) {
    this.quoteCondition = quoteCondition;
  }

  public void setQuoteCondition(String quoteCondition) {
    this.quoteCondition = JsonNullable.<String>of(quoteCondition);
  }


  public InlineResponse20083Latest tradingVolume(BigDecimal tradingVolume) {
    this.tradingVolume = JsonNullable.<BigDecimal>of(tradingVolume);
    return this;
  }

   /**
   * Number of units (e.g. shares) traded.
   * @return tradingVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of units (e.g. shares) traded.")
  @JsonIgnore

  public BigDecimal getTradingVolume() {
        return tradingVolume.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TRADING_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getTradingVolume_JsonNullable() {
    return tradingVolume;
  }
  
  @JsonProperty(JSON_PROPERTY_TRADING_VOLUME)
  public void setTradingVolume_JsonNullable(JsonNullable<BigDecimal> tradingVolume) {
    this.tradingVolume = tradingVolume;
  }

  public void setTradingVolume(BigDecimal tradingVolume) {
    this.tradingVolume = JsonNullable.<BigDecimal>of(tradingVolume);
  }


  public InlineResponse20083Latest tradingValue(BigDecimal tradingValue) {
    this.tradingValue = JsonNullable.<BigDecimal>of(tradingValue);
    return this;
  }

   /**
   * Monetary equivalent (cash value) of the trade. See attribute &#x60;currency&#x60; for its unit.
   * @return tradingValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Monetary equivalent (cash value) of the trade. See attribute `currency` for its unit.")
  @JsonIgnore

  public BigDecimal getTradingValue() {
        return tradingValue.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TRADING_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<BigDecimal> getTradingValue_JsonNullable() {
    return tradingValue;
  }
  
  @JsonProperty(JSON_PROPERTY_TRADING_VALUE)
  public void setTradingValue_JsonNullable(JsonNullable<BigDecimal> tradingValue) {
    this.tradingValue = tradingValue;
  }

  public void setTradingValue(BigDecimal tradingValue) {
    this.tradingValue = JsonNullable.<BigDecimal>of(tradingValue);
  }


  public InlineResponse20083Latest performance(InlineResponse20083LatestPerformance performance) {
    this.performance = performance;
    return this;
  }

   /**
   * Get performance
   * @return performance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20083LatestPerformance getPerformance() {
    return performance;
  }


  @JsonProperty(JSON_PROPERTY_PERFORMANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPerformance(InlineResponse20083LatestPerformance performance) {
    this.performance = performance;
  }


  /**
   * Return true if this inline_response_200_83_latest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20083Latest inlineResponse20083Latest = (InlineResponse20083Latest) o;
    return equalsNullable(this.time, inlineResponse20083Latest.time) &&
        equalsNullable(this.price, inlineResponse20083Latest.price) &&
        equalsNullable(this.quoteCondition, inlineResponse20083Latest.quoteCondition) &&
        equalsNullable(this.tradingVolume, inlineResponse20083Latest.tradingVolume) &&
        equalsNullable(this.tradingValue, inlineResponse20083Latest.tradingValue) &&
        Objects.equals(this.performance, inlineResponse20083Latest.performance);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(time), hashCodeNullable(price), hashCodeNullable(quoteCondition), hashCodeNullable(tradingVolume), hashCodeNullable(tradingValue), performance);
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
    sb.append("class InlineResponse20083Latest {\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quoteCondition: ").append(toIndentedString(quoteCondition)).append("\n");
    sb.append("    tradingVolume: ").append(toIndentedString(tradingVolume)).append("\n");
    sb.append("    tradingValue: ").append(toIndentedString(tradingValue)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
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
