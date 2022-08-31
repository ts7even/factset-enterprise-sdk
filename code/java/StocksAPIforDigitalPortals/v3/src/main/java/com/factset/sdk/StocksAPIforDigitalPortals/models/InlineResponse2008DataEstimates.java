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
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2008DataEstimatesFirstFiscalYear;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2008DataEstimatesSecondFiscalYear;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2008DataEstimatesThirdFiscalYear;
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
 * Value ranges of the stock-specific consolidated estimates for a fiscal year. Not available if a fiscal year has not been specified.
 */
@ApiModel(description = "Value ranges of the stock-specific consolidated estimates for a fiscal year. Not available if a fiscal year has not been specified.")
@JsonPropertyOrder({
  InlineResponse2008DataEstimates.JSON_PROPERTY_FIRST_FISCAL_YEAR,
  InlineResponse2008DataEstimates.JSON_PROPERTY_SECOND_FISCAL_YEAR,
  InlineResponse2008DataEstimates.JSON_PROPERTY_THIRD_FISCAL_YEAR
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2008DataEstimates implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FIRST_FISCAL_YEAR = "firstFiscalYear";
  private InlineResponse2008DataEstimatesFirstFiscalYear firstFiscalYear;

  public static final String JSON_PROPERTY_SECOND_FISCAL_YEAR = "secondFiscalYear";
  private InlineResponse2008DataEstimatesSecondFiscalYear secondFiscalYear;

  public static final String JSON_PROPERTY_THIRD_FISCAL_YEAR = "thirdFiscalYear";
  private InlineResponse2008DataEstimatesThirdFiscalYear thirdFiscalYear;

  public InlineResponse2008DataEstimates() { 
  }

  public InlineResponse2008DataEstimates firstFiscalYear(InlineResponse2008DataEstimatesFirstFiscalYear firstFiscalYear) {
    this.firstFiscalYear = firstFiscalYear;
    return this;
  }

   /**
   * Get firstFiscalYear
   * @return firstFiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FIRST_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2008DataEstimatesFirstFiscalYear getFirstFiscalYear() {
    return firstFiscalYear;
  }


  @JsonProperty(JSON_PROPERTY_FIRST_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFirstFiscalYear(InlineResponse2008DataEstimatesFirstFiscalYear firstFiscalYear) {
    this.firstFiscalYear = firstFiscalYear;
  }


  public InlineResponse2008DataEstimates secondFiscalYear(InlineResponse2008DataEstimatesSecondFiscalYear secondFiscalYear) {
    this.secondFiscalYear = secondFiscalYear;
    return this;
  }

   /**
   * Get secondFiscalYear
   * @return secondFiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SECOND_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2008DataEstimatesSecondFiscalYear getSecondFiscalYear() {
    return secondFiscalYear;
  }


  @JsonProperty(JSON_PROPERTY_SECOND_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSecondFiscalYear(InlineResponse2008DataEstimatesSecondFiscalYear secondFiscalYear) {
    this.secondFiscalYear = secondFiscalYear;
  }


  public InlineResponse2008DataEstimates thirdFiscalYear(InlineResponse2008DataEstimatesThirdFiscalYear thirdFiscalYear) {
    this.thirdFiscalYear = thirdFiscalYear;
    return this;
  }

   /**
   * Get thirdFiscalYear
   * @return thirdFiscalYear
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_THIRD_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2008DataEstimatesThirdFiscalYear getThirdFiscalYear() {
    return thirdFiscalYear;
  }


  @JsonProperty(JSON_PROPERTY_THIRD_FISCAL_YEAR)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setThirdFiscalYear(InlineResponse2008DataEstimatesThirdFiscalYear thirdFiscalYear) {
    this.thirdFiscalYear = thirdFiscalYear;
  }


  /**
   * Return true if this inline_response_200_8_data_estimates object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2008DataEstimates inlineResponse2008DataEstimates = (InlineResponse2008DataEstimates) o;
    return Objects.equals(this.firstFiscalYear, inlineResponse2008DataEstimates.firstFiscalYear) &&
        Objects.equals(this.secondFiscalYear, inlineResponse2008DataEstimates.secondFiscalYear) &&
        Objects.equals(this.thirdFiscalYear, inlineResponse2008DataEstimates.thirdFiscalYear);
  }

  @Override
  public int hashCode() {
    return Objects.hash(firstFiscalYear, secondFiscalYear, thirdFiscalYear);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2008DataEstimates {\n");
    sb.append("    firstFiscalYear: ").append(toIndentedString(firstFiscalYear)).append("\n");
    sb.append("    secondFiscalYear: ").append(toIndentedString(secondFiscalYear)).append("\n");
    sb.append("    thirdFiscalYear: ").append(toIndentedString(thirdFiscalYear)).append("\n");
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

