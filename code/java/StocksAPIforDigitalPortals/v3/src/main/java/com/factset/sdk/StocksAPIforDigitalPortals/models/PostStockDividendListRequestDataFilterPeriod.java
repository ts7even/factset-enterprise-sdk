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
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Period for which the dividends shall be returned. Since not all attributes contained in the dates object are available for all dividends, the following priority of the available dates is used to determine whether a dividend belongs to the specified period:  1. payment  2. effective  3. record  4. announcement
 */
@ApiModel(description = "Period for which the dividends shall be returned. Since not all attributes contained in the dates object are available for all dividends, the following priority of the available dates is used to determine whether a dividend belongs to the specified period:  1. payment  2. effective  3. record  4. announcement")
@JsonPropertyOrder({
  PostStockDividendListRequestDataFilterPeriod.JSON_PROPERTY_START,
  PostStockDividendListRequestDataFilterPeriod.JSON_PROPERTY_END
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class PostStockDividendListRequestDataFilterPeriod implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_START = "start";
  private LocalDate start;

  public static final String JSON_PROPERTY_END = "end";
  private LocalDate end;

  public PostStockDividendListRequestDataFilterPeriod() { 
  }

  @JsonCreator
  public PostStockDividendListRequestDataFilterPeriod(
    @JsonProperty(value=JSON_PROPERTY_START, required=true) LocalDate start, 
    @JsonProperty(value=JSON_PROPERTY_END, required=true) LocalDate end
  ) {
    this();
    this.start = start;
    this.end = end;
  }

  public PostStockDividendListRequestDataFilterPeriod start(LocalDate start) {
    this.start = start;
    return this;
  }

   /**
   * The starting point of the date range (inclusive), or &#x60;null&#x60; to indicate that the date range extends indefinitely into the past.
   * @return start
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The starting point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the past.")
  @JsonProperty(JSON_PROPERTY_START)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public LocalDate getStart() {
    return start;
  }


  @JsonProperty(JSON_PROPERTY_START)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStart(LocalDate start) {
    this.start = start;
  }


  public PostStockDividendListRequestDataFilterPeriod end(LocalDate end) {
    this.end = end;
    return this;
  }

   /**
   * The ending point of the date range (inclusive), or &#x60;null&#x60; to indicate that the date range extends indefinitely into the future.
   * @return end
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The ending point of the date range (inclusive), or `null` to indicate that the date range extends indefinitely into the future.")
  @JsonProperty(JSON_PROPERTY_END)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public LocalDate getEnd() {
    return end;
  }


  @JsonProperty(JSON_PROPERTY_END)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setEnd(LocalDate end) {
    this.end = end;
  }


  /**
   * Return true if this PostStockDividendListRequest_data_filter_period object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PostStockDividendListRequestDataFilterPeriod postStockDividendListRequestDataFilterPeriod = (PostStockDividendListRequestDataFilterPeriod) o;
    return Objects.equals(this.start, postStockDividendListRequestDataFilterPeriod.start) &&
        Objects.equals(this.end, postStockDividendListRequestDataFilterPeriod.end);
  }

  @Override
  public int hashCode() {
    return Objects.hash(start, end);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PostStockDividendListRequestDataFilterPeriod {\n");
    sb.append("    start: ").append(toIndentedString(start)).append("\n");
    sb.append("    end: ").append(toIndentedString(end)).append("\n");
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
