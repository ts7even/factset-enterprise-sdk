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
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosDividendYield;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceBookValue;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceCashFlow;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarnings;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceSales;
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
 * Ratios.
 */
@ApiModel(description = "Ratios.")
@JsonPropertyOrder({
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_SALES,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_EARNINGS,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_EARNINGS_GROWTH,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_BOOK_VALUE,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_CASH_FLOW,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_PRICE_FREE_CASH_FLOW,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_DIVIDEND_YIELD,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_ENTERPRISE_VALUE_EBIT,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA,
  InlineResponse20015DataEstimatesFirstFiscalYearRatios.JSON_PROPERTY_ENTERPRISE_VALUE_SALES
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20015DataEstimatesFirstFiscalYearRatios implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRICE_SALES = "priceSales";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceSales priceSales;

  public static final String JSON_PROPERTY_PRICE_EARNINGS = "priceEarnings";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarnings priceEarnings;

  public static final String JSON_PROPERTY_PRICE_EARNINGS_GROWTH = "priceEarningsGrowth";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth priceEarningsGrowth;

  public static final String JSON_PROPERTY_PRICE_BOOK_VALUE = "priceBookValue";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceBookValue priceBookValue;

  public static final String JSON_PROPERTY_PRICE_CASH_FLOW = "priceCashFlow";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceCashFlow priceCashFlow;

  public static final String JSON_PROPERTY_PRICE_FREE_CASH_FLOW = "priceFreeCashFlow";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow priceFreeCashFlow;

  public static final String JSON_PROPERTY_DIVIDEND_YIELD = "dividendYield";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosDividendYield dividendYield;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_EBIT = "enterpriseValueEbit";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit enterpriseValueEbit;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA = "enterpriseValueEbitda";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda enterpriseValueEbitda;

  public static final String JSON_PROPERTY_ENTERPRISE_VALUE_SALES = "enterpriseValueSales";
  private InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales enterpriseValueSales;

  public InlineResponse20015DataEstimatesFirstFiscalYearRatios() { 
  }

  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceSales(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceSales priceSales) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceSales getPriceSales() {
    return priceSales;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceSales(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceSales priceSales) {
    this.priceSales = priceSales;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceEarnings(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarnings priceEarnings) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarnings getPriceEarnings() {
    return priceEarnings;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceEarnings(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarnings priceEarnings) {
    this.priceEarnings = priceEarnings;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceEarningsGrowth(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth priceEarningsGrowth) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth getPriceEarningsGrowth() {
    return priceEarningsGrowth;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_EARNINGS_GROWTH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceEarningsGrowth(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceEarningsGrowth priceEarningsGrowth) {
    this.priceEarningsGrowth = priceEarningsGrowth;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceBookValue(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceBookValue priceBookValue) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceBookValue getPriceBookValue() {
    return priceBookValue;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_BOOK_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceBookValue(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceBookValue priceBookValue) {
    this.priceBookValue = priceBookValue;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceCashFlow(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceCashFlow priceCashFlow) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceCashFlow getPriceCashFlow() {
    return priceCashFlow;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceCashFlow(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceCashFlow priceCashFlow) {
    this.priceCashFlow = priceCashFlow;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios priceFreeCashFlow(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow priceFreeCashFlow) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow getPriceFreeCashFlow() {
    return priceFreeCashFlow;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_FREE_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceFreeCashFlow(InlineResponse20015DataEstimatesFirstFiscalYearRatiosPriceFreeCashFlow priceFreeCashFlow) {
    this.priceFreeCashFlow = priceFreeCashFlow;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios dividendYield(InlineResponse20015DataEstimatesFirstFiscalYearRatiosDividendYield dividendYield) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosDividendYield getDividendYield() {
    return dividendYield;
  }


  @JsonProperty(JSON_PROPERTY_DIVIDEND_YIELD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDividendYield(InlineResponse20015DataEstimatesFirstFiscalYearRatiosDividendYield dividendYield) {
    this.dividendYield = dividendYield;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios enterpriseValueEbit(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit enterpriseValueEbit) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit getEnterpriseValueEbit() {
    return enterpriseValueEbit;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueEbit(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbit enterpriseValueEbit) {
    this.enterpriseValueEbit = enterpriseValueEbit;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios enterpriseValueEbitda(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda enterpriseValueEbitda) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda getEnterpriseValueEbitda() {
    return enterpriseValueEbitda;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_EBITDA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueEbitda(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueEbitda enterpriseValueEbitda) {
    this.enterpriseValueEbitda = enterpriseValueEbitda;
  }


  public InlineResponse20015DataEstimatesFirstFiscalYearRatios enterpriseValueSales(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales enterpriseValueSales) {
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

  public InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales getEnterpriseValueSales() {
    return enterpriseValueSales;
  }


  @JsonProperty(JSON_PROPERTY_ENTERPRISE_VALUE_SALES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnterpriseValueSales(InlineResponse20015DataEstimatesFirstFiscalYearRatiosEnterpriseValueSales enterpriseValueSales) {
    this.enterpriseValueSales = enterpriseValueSales;
  }


  /**
   * Return true if this inline_response_200_15_data_estimates_firstFiscalYear_ratios object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20015DataEstimatesFirstFiscalYearRatios inlineResponse20015DataEstimatesFirstFiscalYearRatios = (InlineResponse20015DataEstimatesFirstFiscalYearRatios) o;
    return Objects.equals(this.priceSales, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceSales) &&
        Objects.equals(this.priceEarnings, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceEarnings) &&
        Objects.equals(this.priceEarningsGrowth, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceEarningsGrowth) &&
        Objects.equals(this.priceBookValue, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceBookValue) &&
        Objects.equals(this.priceCashFlow, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceCashFlow) &&
        Objects.equals(this.priceFreeCashFlow, inlineResponse20015DataEstimatesFirstFiscalYearRatios.priceFreeCashFlow) &&
        Objects.equals(this.dividendYield, inlineResponse20015DataEstimatesFirstFiscalYearRatios.dividendYield) &&
        Objects.equals(this.enterpriseValueEbit, inlineResponse20015DataEstimatesFirstFiscalYearRatios.enterpriseValueEbit) &&
        Objects.equals(this.enterpriseValueEbitda, inlineResponse20015DataEstimatesFirstFiscalYearRatios.enterpriseValueEbitda) &&
        Objects.equals(this.enterpriseValueSales, inlineResponse20015DataEstimatesFirstFiscalYearRatios.enterpriseValueSales);
  }

  @Override
  public int hashCode() {
    return Objects.hash(priceSales, priceEarnings, priceEarningsGrowth, priceBookValue, priceCashFlow, priceFreeCashFlow, dividendYield, enterpriseValueEbit, enterpriseValueEbitda, enterpriseValueSales);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20015DataEstimatesFirstFiscalYearRatios {\n");
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
