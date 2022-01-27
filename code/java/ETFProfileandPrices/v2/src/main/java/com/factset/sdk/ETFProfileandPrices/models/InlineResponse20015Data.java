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


package com.factset.sdk.ETFProfileandPrices.models;

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
import org.threeten.bp.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.ETFProfileandPrices.JSON;


/**
 * InlineResponse20015Data
 */
@JsonPropertyOrder({
  InlineResponse20015Data.JSON_PROPERTY_SYMBOL,
  InlineResponse20015Data.JSON_PROPERTY_NAME,
  InlineResponse20015Data.JSON_PROPERTY_REPORT_DATE,
  InlineResponse20015Data.JSON_PROPERTY_SHARES,
  InlineResponse20015Data.JSON_PROPERTY_MARKET_VALUE,
  InlineResponse20015Data.JSON_PROPERTY_CURRENCY_CODE,
  InlineResponse20015Data.JSON_PROPERTY_WEIGHT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20015Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_REPORT_DATE = "reportDate";
  private LocalDate reportDate;

  public static final String JSON_PROPERTY_SHARES = "shares";
  private BigDecimal shares;

  public static final String JSON_PROPERTY_MARKET_VALUE = "marketValue";
  private BigDecimal marketValue;

  public static final String JSON_PROPERTY_CURRENCY_CODE = "currencyCode";
  private String currencyCode;

  public static final String JSON_PROPERTY_WEIGHT = "weight";
  private BigDecimal weight;


  public InlineResponse20015Data symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Identifier of the holding. (when available).
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the holding. (when available).")
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSymbol() {
    return symbol;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public InlineResponse20015Data name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the holding.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of the holding.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public InlineResponse20015Data reportDate(LocalDate reportDate) {
    this.reportDate = reportDate;
    return this;
  }

   /**
   * Reporting date of the holding.
   * @return reportDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Reporting date of the holding.")
  @JsonProperty(JSON_PROPERTY_REPORT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getReportDate() {
    return reportDate;
  }


  @JsonProperty(JSON_PROPERTY_REPORT_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReportDate(LocalDate reportDate) {
    this.reportDate = reportDate;
  }


  public InlineResponse20015Data shares(BigDecimal shares) {
    this.shares = shares;
    return this;
  }

   /**
   * Number of shares held, unadjusted for corporate actions.
   * @return shares
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of shares held, unadjusted for corporate actions.")
  @JsonProperty(JSON_PROPERTY_SHARES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getShares() {
    return shares;
  }


  @JsonProperty(JSON_PROPERTY_SHARES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShares(BigDecimal shares) {
    this.shares = shares;
  }


  public InlineResponse20015Data marketValue(BigDecimal marketValue) {
    this.marketValue = marketValue;
    return this;
  }

   /**
   * Market value of the holding, unadjusted for corporate actions.
   * @return marketValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Market value of the holding, unadjusted for corporate actions.")
  @JsonProperty(JSON_PROPERTY_MARKET_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMarketValue() {
    return marketValue;
  }


  @JsonProperty(JSON_PROPERTY_MARKET_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMarketValue(BigDecimal marketValue) {
    this.marketValue = marketValue;
  }


  public InlineResponse20015Data currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * Code representing the currency of the ETP and  it&#39;s in format ISO 4217
   * @return currencyCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Code representing the currency of the ETP and  it's in format ISO 4217")
  @JsonProperty(JSON_PROPERTY_CURRENCY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCurrencyCode() {
    return currencyCode;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }


  public InlineResponse20015Data weight(BigDecimal weight) {
    this.weight = weight;
    return this;
  }

   /**
   * Weight of the holding within the ETP.
   * @return weight
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Weight of the holding within the ETP.")
  @JsonProperty(JSON_PROPERTY_WEIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getWeight() {
    return weight;
  }


  @JsonProperty(JSON_PROPERTY_WEIGHT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWeight(BigDecimal weight) {
    this.weight = weight;
  }


  /**
   * Return true if this inline_response_200_15_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20015Data inlineResponse20015Data = (InlineResponse20015Data) o;
    return Objects.equals(this.symbol, inlineResponse20015Data.symbol) &&
        Objects.equals(this.name, inlineResponse20015Data.name) &&
        Objects.equals(this.reportDate, inlineResponse20015Data.reportDate) &&
        Objects.equals(this.shares, inlineResponse20015Data.shares) &&
        Objects.equals(this.marketValue, inlineResponse20015Data.marketValue) &&
        Objects.equals(this.currencyCode, inlineResponse20015Data.currencyCode) &&
        Objects.equals(this.weight, inlineResponse20015Data.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, name, reportDate, shares, marketValue, currencyCode, weight);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20015Data {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    reportDate: ").append(toIndentedString(reportDate)).append("\n");
    sb.append("    shares: ").append(toIndentedString(shares)).append("\n");
    sb.append("    marketValue: ").append(toIndentedString(marketValue)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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
