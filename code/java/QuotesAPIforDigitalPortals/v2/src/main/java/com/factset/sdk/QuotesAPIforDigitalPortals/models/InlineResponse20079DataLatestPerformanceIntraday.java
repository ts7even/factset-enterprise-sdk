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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

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
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Performance of the most recent price calculated against the latest price which has occurred before the start of the current trading day.
 */
@ApiModel(description = "Performance of the most recent price calculated against the latest price which has occurred before the start of the current trading day.")
@JsonPropertyOrder({
  InlineResponse20079DataLatestPerformanceIntraday.JSON_PROPERTY_ABSOLUTE,
  InlineResponse20079DataLatestPerformanceIntraday.JSON_PROPERTY_RELATIVE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20079DataLatestPerformanceIntraday implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  private BigDecimal absolute;

  public static final String JSON_PROPERTY_RELATIVE = "relative";
  private BigDecimal relative;


  public InlineResponse20079DataLatestPerformanceIntraday absolute(BigDecimal absolute) {
    this.absolute = absolute;
    return this;
  }

   /**
   * Absolute value. See attribute &#x60;valueUnit&#x60; for its unit.
   * @return absolute
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Absolute value. See attribute `valueUnit` for its unit.")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAbsolute() {
    return absolute;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolute(BigDecimal absolute) {
    this.absolute = absolute;
  }


  public InlineResponse20079DataLatestPerformanceIntraday relative(BigDecimal relative) {
    this.relative = relative;
    return this;
  }

   /**
   * Relative value.
   * @return relative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Relative value.")
  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getRelative() {
    return relative;
  }


  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelative(BigDecimal relative) {
    this.relative = relative;
  }


  /**
   * Return true if this inline_response_200_79_data_latest_performance_intraday object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20079DataLatestPerformanceIntraday inlineResponse20079DataLatestPerformanceIntraday = (InlineResponse20079DataLatestPerformanceIntraday) o;
    return Objects.equals(this.absolute, inlineResponse20079DataLatestPerformanceIntraday.absolute) &&
        Objects.equals(this.relative, inlineResponse20079DataLatestPerformanceIntraday.relative);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, relative);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20079DataLatestPerformanceIntraday {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
    sb.append("    relative: ").append(toIndentedString(relative)).append("\n");
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
