/*
 * fpo_mp_input
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OptimizationEngineAPIMultiperiod.models;

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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.JSON;


/**
 * OptimizerInputsSpecificPoints
 */
@JsonPropertyOrder({
  OptimizerInputsSpecificPoints.JSON_PROPERTY_POINTS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsSpecificPoints implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_POINTS = "points";
  private java.util.List<Double> points = null;

  public OptimizerInputsSpecificPoints() { 
  }

  public OptimizerInputsSpecificPoints points(java.util.List<Double> points) {
    this.points = points;
    return this;
  }

  public OptimizerInputsSpecificPoints addPointsItem(Double pointsItem) {
    if (this.points == null) {
      this.points = new java.util.ArrayList<>();
    }
    this.points.add(pointsItem);
    return this;
  }

   /**
   * Get points
   * @return points
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_POINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<Double> getPoints() {
    return points;
  }


  @JsonProperty(JSON_PROPERTY_POINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPoints(java.util.List<Double> points) {
    this.points = points;
  }


  /**
   * Return true if this optimizer.inputs.SpecificPoints object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsSpecificPoints optimizerInputsSpecificPoints = (OptimizerInputsSpecificPoints) o;
    return Objects.equals(this.points, optimizerInputsSpecificPoints.points);
  }

  @Override
  public int hashCode() {
    return Objects.hash(points);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsSpecificPoints {\n");
    sb.append("    points: ").append(toIndentedString(points)).append("\n");
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
