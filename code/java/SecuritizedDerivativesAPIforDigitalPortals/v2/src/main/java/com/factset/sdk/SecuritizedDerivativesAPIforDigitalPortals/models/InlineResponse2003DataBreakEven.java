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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2003DataBreakEvenDistance;
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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Break even point based on the ask price. It represents the underlying level that has to be reached at maturity, such that no loss or profit occurs for the holder of the securitized derivative. This key figure is not calculated for securitized derivatives with multiple underlyings. For the value unit, see attribute &#x60;underlyings.valueUnit&#x60;.
 */
@ApiModel(description = "Break even point based on the ask price. It represents the underlying level that has to be reached at maturity, such that no loss or profit occurs for the holder of the securitized derivative. This key figure is not calculated for securitized derivatives with multiple underlyings. For the value unit, see attribute `underlyings.valueUnit`.")
@JsonPropertyOrder({
  InlineResponse2003DataBreakEven.JSON_PROPERTY_BREAK_EVEN_POINT,
  InlineResponse2003DataBreakEven.JSON_PROPERTY_DISTANCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003DataBreakEven implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BREAK_EVEN_POINT = "breakEvenPoint";
  private BigDecimal breakEvenPoint;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private InlineResponse2003DataBreakEvenDistance distance;


  public InlineResponse2003DataBreakEven breakEvenPoint(BigDecimal breakEvenPoint) {
    this.breakEvenPoint = breakEvenPoint;
    return this;
  }

   /**
   * Break even point.
   * @return breakEvenPoint
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Break even point.")
  @JsonProperty(JSON_PROPERTY_BREAK_EVEN_POINT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getBreakEvenPoint() {
    return breakEvenPoint;
  }


  @JsonProperty(JSON_PROPERTY_BREAK_EVEN_POINT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreakEvenPoint(BigDecimal breakEvenPoint) {
    this.breakEvenPoint = breakEvenPoint;
  }


  public InlineResponse2003DataBreakEven distance(InlineResponse2003DataBreakEvenDistance distance) {
    this.distance = distance;
    return this;
  }

   /**
   * Get distance
   * @return distance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2003DataBreakEvenDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(InlineResponse2003DataBreakEvenDistance distance) {
    this.distance = distance;
  }


  /**
   * Return true if this inline_response_200_3_data_breakEven object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003DataBreakEven inlineResponse2003DataBreakEven = (InlineResponse2003DataBreakEven) o;
    return Objects.equals(this.breakEvenPoint, inlineResponse2003DataBreakEven.breakEvenPoint) &&
        Objects.equals(this.distance, inlineResponse2003DataBreakEven.distance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(breakEvenPoint, distance);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003DataBreakEven {\n");
    sb.append("    breakEvenPoint: ").append(toIndentedString(breakEvenPoint)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
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
