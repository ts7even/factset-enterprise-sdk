/*
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
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
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1DividendYield;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1EnterpriseValueEbit;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1EnterpriseValueSales;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceBookValue;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceCashFlow;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceEarnings;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceEarningsGrowth;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceFreeCashFlow;
import com.factset.sdk.StocksAPIforDigitalPortals.models.StockNotationScreenerSearchDataRatios1PriceSales;
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
 * Ratio parameters.
 */
@ApiModel(description = "Ratio parameters.")
@JsonPropertyOrder({
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_SALES,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_EARNINGS,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_EARNINGS_GROWTH,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_BOOK_VALUE,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_CASH_FLOW,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_PRICE_FREE_CASH_FLOW,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_DIVIDEND_YIELD,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_ENTERPRISE_VALUE_EBIT,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA,
  StockNotationScreenerSearchDataRatios1.JSON_PROPERTY_ENTERPRISE_VALUE_SALES
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StockNotationScreenerSearchDataRatios1 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRICE_SALES = "priceSales";
  private StockNotationScreenerSearchDataRatios1PriceSales priceSales;

  public static final String JSON_PROPERTY_PRICE_EARNINGS = "priceEarnings";
  private StockNotationScreenerSearchDataRatios1PriceEarnings priceEarnings;

  public static final String JSON_PROPERTY_PRICE_EARNINGS_GROWTH = "priceEarningsGrowth";
  private StockNotationScreenerSearchDataRatios1PriceEarningsGrowth priceEarningsGrowth;

  public static final String JSON_PROPERTY_PRICE_BOOK_VALUE = "priceBookValue";
  private StockNotationScreenerSearchDataRatios1PriceBookValue priceBookValue;

  public static final String JSON_PROPERTY_PRICE_CASH_FLOW = "priceCashFlow";
  private StockNotationScreenerSearchDataRatios1PriceCashFlow priceCashFlow;

  public static final String JSON_PROPERTY_PRICE_FREE_CASH_FLOW = "priceFreeCashFlow";
  private StockNotationScreenerSearchDataRatios1PriceFreeCashFlow priceFreeCashFlow;

  public static final String JSON_PROPERTY_DIVIDEND_YIELD = "dividendYield";
  private StockNotationScreenerSearchDataRatios1DividendYield dividendYield;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_EBIT = "enterpriseValueEbit";
  private StockNotationScreenerSearchDataRatios1EnterpriseValueEbit enterpriseValueEbit;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA = "enterpriseValueEbitda";
  private StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda enterpriseValueEbitda;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_SALES = "enterpriseValueSales";
  private StockNotationScreenerSearchDataRatios1EnterpriseValueSales enterpriseValueSales;

  public StockNotationScreenerSearchDataRatios1() { 
  }

  public StockNotationScreenerSearchDataRatios1 priceSales(StockNotationScreenerSearchDataRatios1PriceSales priceSales) {
    this.priceSales = priceSales;
    return this;
  }

   /**
   * Get priceSales
   * @return priceSales
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceSales getPriceSales() {
    return priceSales;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceSales(StockNotationScreenerSearchDataRatios1PriceSales priceSales) {
    this.priceSales = priceSales;
  }


  public StockNotationScreenerSearchDataRatios1 priceEarnings(StockNotationScreenerSearchDataRatios1PriceEarnings priceEarnings) {
    this.priceEarnings = priceEarnings;
    return this;
  }

   /**
   * Get priceEarnings
   * @return priceEarnings
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceEarnings getPriceEarnings() {
    return priceEarnings;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceEarnings(StockNotationScreenerSearchDataRatios1PriceEarnings priceEarnings) {
    this.priceEarnings = priceEarnings;
  }


  public StockNotationScreenerSearchDataRatios1 priceEarningsGrowth(StockNotationScreenerSearchDataRatios1PriceEarningsGrowth priceEarningsGrowth) {
    this.priceEarningsGrowth = priceEarningsGrowth;
    return this;
  }

   /**
   * Get priceEarningsGrowth
   * @return priceEarningsGrowth
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS_GROWTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceEarningsGrowth getPriceEarningsGrowth() {
    return priceEarningsGrowth;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS_GROWTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceEarningsGrowth(StockNotationScreenerSearchDataRatios1PriceEarningsGrowth priceEarningsGrowth) {
    this.priceEarningsGrowth = priceEarningsGrowth;
  }


  public StockNotationScreenerSearchDataRatios1 priceBookValue(StockNotationScreenerSearchDataRatios1PriceBookValue priceBookValue) {
    this.priceBookValue = priceBookValue;
    return this;
  }

   /**
   * Get priceBookValue
   * @return priceBookValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_BOOK_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceBookValue getPriceBookValue() {
    return priceBookValue;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_BOOK_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceBookValue(StockNotationScreenerSearchDataRatios1PriceBookValue priceBookValue) {
    this.priceBookValue = priceBookValue;
  }


  public StockNotationScreenerSearchDataRatios1 priceCashFlow(StockNotationScreenerSearchDataRatios1PriceCashFlow priceCashFlow) {
    this.priceCashFlow = priceCashFlow;
    return this;
  }

   /**
   * Get priceCashFlow
   * @return priceCashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceCashFlow getPriceCashFlow() {
    return priceCashFlow;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceCashFlow(StockNotationScreenerSearchDataRatios1PriceCashFlow priceCashFlow) {
    this.priceCashFlow = priceCashFlow;
  }


  public StockNotationScreenerSearchDataRatios1 priceFreeCashFlow(StockNotationScreenerSearchDataRatios1PriceFreeCashFlow priceFreeCashFlow) {
    this.priceFreeCashFlow = priceFreeCashFlow;
    return this;
  }

   /**
   * Get priceFreeCashFlow
   * @return priceFreeCashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_FREE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1PriceFreeCashFlow getPriceFreeCashFlow() {
    return priceFreeCashFlow;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_FREE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceFreeCashFlow(StockNotationScreenerSearchDataRatios1PriceFreeCashFlow priceFreeCashFlow) {
    this.priceFreeCashFlow = priceFreeCashFlow;
  }


  public StockNotationScreenerSearchDataRatios1 dividendYield(StockNotationScreenerSearchDataRatios1DividendYield dividendYield) {
    this.dividendYield = dividendYield;
    return this;
  }

   /**
   * Get dividendYield
   * @return dividendYield
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DIVIDEND_YIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1DividendYield getDividendYield() {
    return dividendYield;
  }


  @JsonProperty(JSON_PROPERTY_DIVIDEND_YIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDividendYield(StockNotationScreenerSearchDataRatios1DividendYield dividendYield) {
    this.dividendYield = dividendYield;
  }


  public StockNotationScreenerSearchDataRatios1 enterpriseValueEbit(StockNotationScreenerSearchDataRatios1EnterpriseValueEbit enterpriseValueEbit) {
    this.enterpriseValueEbit = enterpriseValueEbit;
    return this;
  }

   /**
   * Get enterpriseValueEbit
   * @return enterpriseValueEbit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1EnterpriseValueEbit getEnterpriseValueEbit() {
    return enterpriseValueEbit;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueEbit(StockNotationScreenerSearchDataRatios1EnterpriseValueEbit enterpriseValueEbit) {
    this.enterpriseValueEbit = enterpriseValueEbit;
  }


  public StockNotationScreenerSearchDataRatios1 enterpriseValueEbitda(StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda enterpriseValueEbitda) {
    this.enterpriseValueEbitda = enterpriseValueEbitda;
    return this;
  }

   /**
   * Get enterpriseValueEbitda
   * @return enterpriseValueEbitda
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda getEnterpriseValueEbitda() {
    return enterpriseValueEbitda;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueEbitda(StockNotationScreenerSearchDataRatios1EnterpriseValueEbitda enterpriseValueEbitda) {
    this.enterpriseValueEbitda = enterpriseValueEbitda;
  }


  public StockNotationScreenerSearchDataRatios1 enterpriseValueSales(StockNotationScreenerSearchDataRatios1EnterpriseValueSales enterpriseValueSales) {
    this.enterpriseValueSales = enterpriseValueSales;
    return this;
  }

   /**
   * Get enterpriseValueSales
   * @return enterpriseValueSales
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public StockNotationScreenerSearchDataRatios1EnterpriseValueSales getEnterpriseValueSales() {
    return enterpriseValueSales;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueSales(StockNotationScreenerSearchDataRatios1EnterpriseValueSales enterpriseValueSales) {
    this.enterpriseValueSales = enterpriseValueSales;
  }


  /**
   * Return true if this _stock_notation_screener_search_data_ratios_1 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StockNotationScreenerSearchDataRatios1 stockNotationScreenerSearchDataRatios1 = (StockNotationScreenerSearchDataRatios1) o;
    return Objects.equals(this.priceSales, stockNotationScreenerSearchDataRatios1.priceSales) &&
        Objects.equals(this.priceEarnings, stockNotationScreenerSearchDataRatios1.priceEarnings) &&
        Objects.equals(this.priceEarningsGrowth, stockNotationScreenerSearchDataRatios1.priceEarningsGrowth) &&
        Objects.equals(this.priceBookValue, stockNotationScreenerSearchDataRatios1.priceBookValue) &&
        Objects.equals(this.priceCashFlow, stockNotationScreenerSearchDataRatios1.priceCashFlow) &&
        Objects.equals(this.priceFreeCashFlow, stockNotationScreenerSearchDataRatios1.priceFreeCashFlow) &&
        Objects.equals(this.dividendYield, stockNotationScreenerSearchDataRatios1.dividendYield) &&
        Objects.equals(this.enterpriseValueEbit, stockNotationScreenerSearchDataRatios1.enterpriseValueEbit) &&
        Objects.equals(this.enterpriseValueEbitda, stockNotationScreenerSearchDataRatios1.enterpriseValueEbitda) &&
        Objects.equals(this.enterpriseValueSales, stockNotationScreenerSearchDataRatios1.enterpriseValueSales);
  }

  @Override
  public int hashCode() {
    return Objects.hash(priceSales, priceEarnings, priceEarningsGrowth, priceBookValue, priceCashFlow, priceFreeCashFlow, dividendYield, enterpriseValueEbit, enterpriseValueEbitda, enterpriseValueSales);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StockNotationScreenerSearchDataRatios1 {\n");
    sb.append("    priceSales: ").append(toIndentedString(priceSales)).append("\n");
    sb.append("    priceEarnings: ").append(toIndentedString(priceEarnings)).append("\n");
    sb.append("    priceEarningsGrowth: ").append(toIndentedString(priceEarningsGrowth)).append("\n");
    sb.append("    priceBookValue: ").append(toIndentedString(priceBookValue)).append("\n");
    sb.append("    priceCashFlow: ").append(toIndentedString(priceCashFlow)).append("\n");
    sb.append("    priceFreeCashFlow: ").append(toIndentedString(priceFreeCashFlow)).append("\n");
    sb.append("    dividendYield: ").append(toIndentedString(dividendYield)).append("\n");
    sb.append("    enterpriseValueEbit: ").append(toIndentedString(enterpriseValueEbit)).append("\n");
    sb.append("    enterpriseValueEbitda: ").append(toIndentedString(enterpriseValueEbitda)).append("\n");
    sb.append("    enterpriseValueSales: ").append(toIndentedString(enterpriseValueSales)).append("\n");
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
