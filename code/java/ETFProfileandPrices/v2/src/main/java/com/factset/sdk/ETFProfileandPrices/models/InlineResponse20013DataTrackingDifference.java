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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.ETFProfileandPrices.JSON;


/**
 * Tracking difference.
 */
@ApiModel(description = "Tracking difference.")
@JsonPropertyOrder({
  InlineResponse20013DataTrackingDifference.JSON_PROPERTY_MEDIAN,
  InlineResponse20013DataTrackingDifference.JSON_PROPERTY_MAX_UPSIDE,
  InlineResponse20013DataTrackingDifference.JSON_PROPERTY_MAX_DOWNSIDE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20013DataTrackingDifference implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MEDIAN = "median";
  private BigDecimal median;

  public static final String JSON_PROPERTY_MAX_UPSIDE = "maxUpside";
  private BigDecimal maxUpside;

  public static final String JSON_PROPERTY_MAX_DOWNSIDE = "maxDownside";
  private BigDecimal maxDownside;

  public InlineResponse20013DataTrackingDifference() { 
  }

  public InlineResponse20013DataTrackingDifference median(BigDecimal median) {
    this.median = median;
    return this;
  }

   /**
   * The median difference between NAV and fund index returns over a one-year set of rolling 12 month holding periods. This statistic captures all inputs to tracking difference: expense ratio, optimization, securities lending income, and tax recapture. Available for the regions: US.
   * @return median
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The median difference between NAV and fund index returns over a one-year set of rolling 12 month holding periods. This statistic captures all inputs to tracking difference: expense ratio, optimization, securities lending income, and tax recapture. Available for the regions: US.")
  @JsonProperty(JSON_PROPERTY_MEDIAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMedian() {
    return median;
  }


  @JsonProperty(JSON_PROPERTY_MEDIAN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMedian(BigDecimal median) {
    this.median = median;
  }


  public InlineResponse20013DataTrackingDifference maxUpside(BigDecimal maxUpside) {
    this.maxUpside = maxUpside;
    return this;
  }

   /**
   * Greatest, or least negative 12-month difference between NAV and index returns over a rolling 12 month period. Available for the regions: US.
   * @return maxUpside
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Greatest, or least negative 12-month difference between NAV and index returns over a rolling 12 month period. Available for the regions: US.")
  @JsonProperty(JSON_PROPERTY_MAX_UPSIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMaxUpside() {
    return maxUpside;
  }


  @JsonProperty(JSON_PROPERTY_MAX_UPSIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxUpside(BigDecimal maxUpside) {
    this.maxUpside = maxUpside;
  }


  public InlineResponse20013DataTrackingDifference maxDownside(BigDecimal maxDownside) {
    this.maxDownside = maxDownside;
    return this;
  }

   /**
   * Most negative or least positive 12-month difference between NAV and index returns over a rolling 12 month period. Available for the regions: US.
   * @return maxDownside
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Most negative or least positive 12-month difference between NAV and index returns over a rolling 12 month period. Available for the regions: US.")
  @JsonProperty(JSON_PROPERTY_MAX_DOWNSIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMaxDownside() {
    return maxDownside;
  }


  @JsonProperty(JSON_PROPERTY_MAX_DOWNSIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxDownside(BigDecimal maxDownside) {
    this.maxDownside = maxDownside;
  }


  /**
   * Return true if this inline_response_200_13_data_trackingDifference object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20013DataTrackingDifference inlineResponse20013DataTrackingDifference = (InlineResponse20013DataTrackingDifference) o;
    return Objects.equals(this.median, inlineResponse20013DataTrackingDifference.median) &&
        Objects.equals(this.maxUpside, inlineResponse20013DataTrackingDifference.maxUpside) &&
        Objects.equals(this.maxDownside, inlineResponse20013DataTrackingDifference.maxDownside);
  }

  @Override
  public int hashCode() {
    return Objects.hash(median, maxUpside, maxDownside);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20013DataTrackingDifference {\n");
    sb.append("    median: ").append(toIndentedString(median)).append("\n");
    sb.append("    maxUpside: ").append(toIndentedString(maxUpside)).append("\n");
    sb.append("    maxDownside: ").append(toIndentedString(maxDownside)).append("\n");
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
