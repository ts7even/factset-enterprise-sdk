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
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios;
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
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Data of the second most recent fiscal year that has been requested. If the parameters used in the request refer to data from two fiscals year, the respective data of the more distant one is found here.
 */
@ApiModel(description = "Data of the second most recent fiscal year that has been requested. If the parameters used in the request refer to data from two fiscals year, the respective data of the more distant one is found here.")
@JsonPropertyOrder({
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_FISCAL_YEAR,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_CURRENCY_DEPENDENT_KEY_FIGURES,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_EBIT_MARGIN,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_EBITDA_MARGIN,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_NET_INCOME_MARGIN,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_GROSS_INCOME_MARGIN,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_OPERATING_MARGIN,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_RETURN_ON_ASSETS,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_RETURN_ON_EQUITY,
  InlineResponse2007ReportedKeyFiguresSecondFiscalYear.JSON_PROPERTY_RATIOS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2007ReportedKeyFiguresSecondFiscalYear implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FISCAL_YEAR = "fiscalYear";
  private InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear fiscalYear;

  public static final String JSON_PROPERTY_CURRENCY_DEPENDENT_KEY_FIGURES = "currencyDependentKeyFigures";
  private InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures currencyDependentKeyFigures;

  public static final String JSON_PROPERTY_EBIT_MARGIN = "ebitMargin";
  private BigDecimal ebitMargin;

  public static final String JSON_PROPERTY_EBITDA_MARGIN = "ebitdaMargin";
  private BigDecimal ebitdaMargin;

  public static final String JSON_PROPERTY_NET_INCOME_MARGIN = "netIncomeMargin";
  private BigDecimal netIncomeMargin;

  public static final String JSON_PROPERTY_GROSS_INCOME_MARGIN = "grossIncomeMargin";
  private BigDecimal grossIncomeMargin;

  public static final String JSON_PROPERTY_OPERATING_MARGIN = "operatingMargin";
  private BigDecimal operatingMargin;

  public static final String JSON_PROPERTY_RETURN_ON_ASSETS = "returnOnAssets";
  private BigDecimal returnOnAssets;

  public static final String JSON_PROPERTY_RETURN_ON_EQUITY = "returnOnEquity";
  private BigDecimal returnOnEquity;

  public static final String JSON_PROPERTY_RATIOS = "ratios";
  private InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios ratios;

  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear() { 
  }

  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear fiscalYear(InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear fiscalYear) {
    this.fiscalYear = fiscalYear;
    return this;
  }

   /**
   * Get fiscalYear
   * @return fiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear getFiscalYear() {
    return fiscalYear;
  }


  @JsonProperty(JSON_PROPERTY_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFiscalYear(InlineResponse2007ReportedKeyFiguresFirstFiscalYearFiscalYear fiscalYear) {
    this.fiscalYear = fiscalYear;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear currencyDependentKeyFigures(InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures currencyDependentKeyFigures) {
    this.currencyDependentKeyFigures = currencyDependentKeyFigures;
    return this;
  }

   /**
   * Get currencyDependentKeyFigures
   * @return currencyDependentKeyFigures
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CURRENCY_DEPENDENT_KEY_FIGURES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures getCurrencyDependentKeyFigures() {
    return currencyDependentKeyFigures;
  }


  @JsonProperty(JSON_PROPERTY_CURRENCY_DEPENDENT_KEY_FIGURES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCurrencyDependentKeyFigures(InlineResponse2007ReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFigures currencyDependentKeyFigures) {
    this.currencyDependentKeyFigures = currencyDependentKeyFigures;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear ebitMargin(BigDecimal ebitMargin) {
    this.ebitMargin = ebitMargin;
    return this;
  }

   /**
   * EBIT margin, which is the ratio of the EBIT, divided by the total sales revenue.
   * @return ebitMargin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "EBIT margin, which is the ratio of the EBIT, divided by the total sales revenue.")
  @JsonProperty(JSON_PROPERTY_EBIT_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getEbitMargin() {
    return ebitMargin;
  }


  @JsonProperty(JSON_PROPERTY_EBIT_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEbitMargin(BigDecimal ebitMargin) {
    this.ebitMargin = ebitMargin;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear ebitdaMargin(BigDecimal ebitdaMargin) {
    this.ebitdaMargin = ebitdaMargin;
    return this;
  }

   /**
   * EBITDA margin, which is the ratio of the EBITDA, divided by the total sales revenue.
   * @return ebitdaMargin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "EBITDA margin, which is the ratio of the EBITDA, divided by the total sales revenue.")
  @JsonProperty(JSON_PROPERTY_EBITDA_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getEbitdaMargin() {
    return ebitdaMargin;
  }


  @JsonProperty(JSON_PROPERTY_EBITDA_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEbitdaMargin(BigDecimal ebitdaMargin) {
    this.ebitdaMargin = ebitdaMargin;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear netIncomeMargin(BigDecimal netIncomeMargin) {
    this.netIncomeMargin = netIncomeMargin;
    return this;
  }

   /**
   * Net income margin, which is the ratio of the net income, divided by the total sales revenue.
   * @return netIncomeMargin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Net income margin, which is the ratio of the net income, divided by the total sales revenue.")
  @JsonProperty(JSON_PROPERTY_NET_INCOME_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getNetIncomeMargin() {
    return netIncomeMargin;
  }


  @JsonProperty(JSON_PROPERTY_NET_INCOME_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNetIncomeMargin(BigDecimal netIncomeMargin) {
    this.netIncomeMargin = netIncomeMargin;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear grossIncomeMargin(BigDecimal grossIncomeMargin) {
    this.grossIncomeMargin = grossIncomeMargin;
    return this;
  }

   /**
   * Gross income margin, which is the ratio of the gross income, divided by the total sales revenue.
   * @return grossIncomeMargin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Gross income margin, which is the ratio of the gross income, divided by the total sales revenue.")
  @JsonProperty(JSON_PROPERTY_GROSS_INCOME_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getGrossIncomeMargin() {
    return grossIncomeMargin;
  }


  @JsonProperty(JSON_PROPERTY_GROSS_INCOME_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGrossIncomeMargin(BigDecimal grossIncomeMargin) {
    this.grossIncomeMargin = grossIncomeMargin;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear operatingMargin(BigDecimal operatingMargin) {
    this.operatingMargin = operatingMargin;
    return this;
  }

   /**
   * Operating margin, which is the ratio of the operating income, divided by the sales revenue.
   * @return operatingMargin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Operating margin, which is the ratio of the operating income, divided by the sales revenue.")
  @JsonProperty(JSON_PROPERTY_OPERATING_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getOperatingMargin() {
    return operatingMargin;
  }


  @JsonProperty(JSON_PROPERTY_OPERATING_MARGIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOperatingMargin(BigDecimal operatingMargin) {
    this.operatingMargin = operatingMargin;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear returnOnAssets(BigDecimal returnOnAssets) {
    this.returnOnAssets = returnOnAssets;
    return this;
  }

   /**
   * Return on assets (ROA), which is the ratio of the net income, divided by the two-fiscal-year average of the total assets.
   * @return returnOnAssets
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Return on assets (ROA), which is the ratio of the net income, divided by the two-fiscal-year average of the total assets.")
  @JsonProperty(JSON_PROPERTY_RETURN_ON_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getReturnOnAssets() {
    return returnOnAssets;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_ON_ASSETS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnOnAssets(BigDecimal returnOnAssets) {
    this.returnOnAssets = returnOnAssets;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear returnOnEquity(BigDecimal returnOnEquity) {
    this.returnOnEquity = returnOnEquity;
    return this;
  }

   /**
   * Return on equity (ROE), which is the ratio of the net income, divided by the two-fiscal-year average of the total shareholders&#39; equity.
   * @return returnOnEquity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Return on equity (ROE), which is the ratio of the net income, divided by the two-fiscal-year average of the total shareholders' equity.")
  @JsonProperty(JSON_PROPERTY_RETURN_ON_EQUITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getReturnOnEquity() {
    return returnOnEquity;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_ON_EQUITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnOnEquity(BigDecimal returnOnEquity) {
    this.returnOnEquity = returnOnEquity;
  }


  public InlineResponse2007ReportedKeyFiguresSecondFiscalYear ratios(InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios ratios) {
    this.ratios = ratios;
    return this;
  }

   /**
   * Get ratios
   * @return ratios
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RATIOS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios getRatios() {
    return ratios;
  }


  @JsonProperty(JSON_PROPERTY_RATIOS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRatios(InlineResponse2007ReportedKeyFiguresFirstFiscalYearRatios ratios) {
    this.ratios = ratios;
  }


  /**
   * Return true if this inline_response_200_7_reportedKeyFigures_secondFiscalYear object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2007ReportedKeyFiguresSecondFiscalYear inlineResponse2007ReportedKeyFiguresSecondFiscalYear = (InlineResponse2007ReportedKeyFiguresSecondFiscalYear) o;
    return Objects.equals(this.fiscalYear, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.fiscalYear) &&
        Objects.equals(this.currencyDependentKeyFigures, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.currencyDependentKeyFigures) &&
        Objects.equals(this.ebitMargin, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.ebitMargin) &&
        Objects.equals(this.ebitdaMargin, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.ebitdaMargin) &&
        Objects.equals(this.netIncomeMargin, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.netIncomeMargin) &&
        Objects.equals(this.grossIncomeMargin, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.grossIncomeMargin) &&
        Objects.equals(this.operatingMargin, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.operatingMargin) &&
        Objects.equals(this.returnOnAssets, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.returnOnAssets) &&
        Objects.equals(this.returnOnEquity, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.returnOnEquity) &&
        Objects.equals(this.ratios, inlineResponse2007ReportedKeyFiguresSecondFiscalYear.ratios);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fiscalYear, currencyDependentKeyFigures, ebitMargin, ebitdaMargin, netIncomeMargin, grossIncomeMargin, operatingMargin, returnOnAssets, returnOnEquity, ratios);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2007ReportedKeyFiguresSecondFiscalYear {\n");
    sb.append("    fiscalYear: ").append(toIndentedString(fiscalYear)).append("\n");
    sb.append("    currencyDependentKeyFigures: ").append(toIndentedString(currencyDependentKeyFigures)).append("\n");
    sb.append("    ebitMargin: ").append(toIndentedString(ebitMargin)).append("\n");
    sb.append("    ebitdaMargin: ").append(toIndentedString(ebitdaMargin)).append("\n");
    sb.append("    netIncomeMargin: ").append(toIndentedString(netIncomeMargin)).append("\n");
    sb.append("    grossIncomeMargin: ").append(toIndentedString(grossIncomeMargin)).append("\n");
    sb.append("    operatingMargin: ").append(toIndentedString(operatingMargin)).append("\n");
    sb.append("    returnOnAssets: ").append(toIndentedString(returnOnAssets)).append("\n");
    sb.append("    returnOnEquity: ").append(toIndentedString(returnOnEquity)).append("\n");
    sb.append("    ratios: ").append(toIndentedString(ratios)).append("\n");
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

