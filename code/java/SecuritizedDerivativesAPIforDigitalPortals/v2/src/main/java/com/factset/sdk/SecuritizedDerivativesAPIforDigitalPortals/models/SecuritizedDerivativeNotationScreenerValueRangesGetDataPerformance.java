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


package com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceIntraday;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Relative performance for different time ranges.
 */
@ApiModel(description = "Relative performance for different time ranges.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance.JSON_PROPERTY_INTRADAY,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance.JSON_PROPERTY_SINCE_ISSUE,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance.JSON_PROPERTY_END_OF_DAY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_INTRADAY = "intraday";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceIntraday intraday;

  public static final String JSON_PROPERTY_SINCE_ISSUE = "sinceIssue";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue sinceIssue;

  public static final String JSON_PROPERTY_END_OF_DAY = "endOfDay";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay endOfDay;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance intraday(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceIntraday intraday) {
    this.intraday = intraday;
    return this;
  }

   /**
   * Get intraday
   * @return intraday
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_INTRADAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceIntraday getIntraday() {
    return intraday;
  }


  @JsonProperty(JSON_PROPERTY_INTRADAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIntraday(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceIntraday intraday) {
    this.intraday = intraday;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance sinceIssue(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue sinceIssue) {
    this.sinceIssue = sinceIssue;
    return this;
  }

   /**
   * Get sinceIssue
   * @return sinceIssue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SINCE_ISSUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue getSinceIssue() {
    return sinceIssue;
  }


  @JsonProperty(JSON_PROPERTY_SINCE_ISSUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSinceIssue(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceSinceIssue sinceIssue) {
    this.sinceIssue = sinceIssue;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance endOfDay(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay endOfDay) {
    this.endOfDay = endOfDay;
    return this;
  }

   /**
   * Get endOfDay
   * @return endOfDay
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_END_OF_DAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay getEndOfDay() {
    return endOfDay;
  }


  @JsonProperty(JSON_PROPERTY_END_OF_DAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndOfDay(SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformanceEndOfDay endOfDay) {
    this.endOfDay = endOfDay;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_performance object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance securitizedDerivativeNotationScreenerValueRangesGetDataPerformance = (SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance) o;
    return Objects.equals(this.intraday, securitizedDerivativeNotationScreenerValueRangesGetDataPerformance.intraday) &&
        Objects.equals(this.sinceIssue, securitizedDerivativeNotationScreenerValueRangesGetDataPerformance.sinceIssue) &&
        Objects.equals(this.endOfDay, securitizedDerivativeNotationScreenerValueRangesGetDataPerformance.endOfDay);
  }

  @Override
  public int hashCode() {
    return Objects.hash(intraday, sinceIssue, endOfDay);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataPerformance {\n");
    sb.append("    intraday: ").append(toIndentedString(intraday)).append("\n");
    sb.append("    sinceIssue: ").append(toIndentedString(sinceIssue)).append("\n");
    sb.append("    endOfDay: ").append(toIndentedString(endOfDay)).append("\n");
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
