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
 * Book value per share, which is the ratio of the book value (common equity), divided by the shares outstanding.
 */
@ApiModel(description = "Book value per share, which is the ratio of the book value (common equity), divided by the shares outstanding.")
@JsonPropertyOrder({
  InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue.JSON_PROPERTY_MINIMUM,
  InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue.JSON_PROPERTY_MAXIMUM
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MINIMUM = "minimum";
  private BigDecimal minimum;

  public static final String JSON_PROPERTY_MAXIMUM = "maximum";
  private BigDecimal maximum;

  public InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue() { 
  }

  public InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue minimum(BigDecimal minimum) {
    this.minimum = minimum;
    return this;
  }

   /**
   * Minimum value.
   * @return minimum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Minimum value.")
  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMinimum() {
    return minimum;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimum(BigDecimal minimum) {
    this.minimum = minimum;
  }


  public InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue maximum(BigDecimal maximum) {
    this.maximum = maximum;
    return this;
  }

   /**
   * Maximum value.
   * @return maximum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Maximum value.")
  @JsonProperty(JSON_PROPERTY_MAXIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMaximum() {
    return maximum;
  }


  @JsonProperty(JSON_PROPERTY_MAXIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaximum(BigDecimal maximum) {
    this.maximum = maximum;
  }


  /**
   * Return true if this inline_response_200_8_data_reportedKeyFigures_firstFiscalYear_currencyDependentKeyFigures_perShare_bookValue object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue inlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue = (InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue) o;
    return Objects.equals(this.minimum, inlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue.minimum) &&
        Objects.equals(this.maximum, inlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue.maximum);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minimum, maximum);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2008DataReportedKeyFiguresFirstFiscalYearCurrencyDependentKeyFiguresPerShareBookValue {\n");
    sb.append("    minimum: ").append(toIndentedString(minimum)).append("\n");
    sb.append("    maximum: ").append(toIndentedString(maximum)).append("\n");
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

