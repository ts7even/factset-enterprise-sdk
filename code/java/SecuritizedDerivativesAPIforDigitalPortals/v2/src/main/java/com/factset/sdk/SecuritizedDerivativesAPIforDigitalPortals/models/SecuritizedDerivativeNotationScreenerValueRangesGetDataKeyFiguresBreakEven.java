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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenBreakEvenPoint;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenDistance;
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
 * Break even point. It represents the underlying level that has to be reached at maturity, such that no loss or profit occurs for the holder of the securitized derivative.
 */
@ApiModel(description = "Break even point. It represents the underlying level that has to be reached at maturity, such that no loss or profit occurs for the holder of the securitized derivative.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven.JSON_PROPERTY_BREAK_EVEN_POINT,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven.JSON_PROPERTY_DISTANCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BREAK_EVEN_POINT = "breakEvenPoint";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenBreakEvenPoint breakEvenPoint;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenDistance distance;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven breakEvenPoint(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenBreakEvenPoint breakEvenPoint) {
    this.breakEvenPoint = breakEvenPoint;
    return this;
  }

   /**
   * Get breakEvenPoint
   * @return breakEvenPoint
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BREAK_EVEN_POINT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenBreakEvenPoint getBreakEvenPoint() {
    return breakEvenPoint;
  }


  @JsonProperty(JSON_PROPERTY_BREAK_EVEN_POINT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreakEvenPoint(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenBreakEvenPoint breakEvenPoint) {
    this.breakEvenPoint = breakEvenPoint;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven distance(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenDistance distance) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEvenDistance distance) {
    this.distance = distance;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_keyFigures_breakEven object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven = (SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven) o;
    return Objects.equals(this.breakEvenPoint, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven.breakEvenPoint) &&
        Objects.equals(this.distance, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven.distance);
  }

  @Override
  public int hashCode() {
    return Objects.hash(breakEvenPoint, distance);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresBreakEven {\n");
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
