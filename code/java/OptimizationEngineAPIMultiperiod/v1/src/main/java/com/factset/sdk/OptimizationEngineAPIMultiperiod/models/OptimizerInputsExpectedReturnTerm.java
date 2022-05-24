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
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsEObjectiveTermDirectionEnum;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsValue;
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
 * OptimizerInputsExpectedReturnTerm
 */
@JsonPropertyOrder({
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_NAME,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_MULTIPLIER,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_RETURN_VALUES,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_DIRECTION,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_USE_ALPHA,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_REL_TO_BENCHMARK,
  OptimizerInputsExpectedReturnTerm.JSON_PROPERTY_BENCHMARK_INDEX
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsExpectedReturnTerm implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_MULTIPLIER = "multiplier";
  private OptimizerInputsValue multiplier;

  public static final String JSON_PROPERTY_RETURN_VALUES = "return_values";
  private OptimizerInputsValue returnValues;

  public static final String JSON_PROPERTY_DIRECTION = "direction";
  private OptimizerInputsEObjectiveTermDirectionEnum direction;

  public static final String JSON_PROPERTY_USE_ALPHA = "use_alpha";
  private Boolean useAlpha;

  public static final String JSON_PROPERTY_REL_TO_BENCHMARK = "rel_to_benchmark";
  private Boolean relToBenchmark;

  public static final String JSON_PROPERTY_BENCHMARK_INDEX = "benchmark_index";
  private Integer benchmarkIndex;

  public OptimizerInputsExpectedReturnTerm() { 
  }

  public OptimizerInputsExpectedReturnTerm name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public OptimizerInputsExpectedReturnTerm multiplier(OptimizerInputsValue multiplier) {
    this.multiplier = multiplier;
    return this;
  }

   /**
   * Get multiplier
   * @return multiplier
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MULTIPLIER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getMultiplier() {
    return multiplier;
  }


  @JsonProperty(JSON_PROPERTY_MULTIPLIER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMultiplier(OptimizerInputsValue multiplier) {
    this.multiplier = multiplier;
  }


  public OptimizerInputsExpectedReturnTerm returnValues(OptimizerInputsValue returnValues) {
    this.returnValues = returnValues;
    return this;
  }

   /**
   * Get returnValues
   * @return returnValues
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RETURN_VALUES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getReturnValues() {
    return returnValues;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_VALUES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnValues(OptimizerInputsValue returnValues) {
    this.returnValues = returnValues;
  }


  public OptimizerInputsExpectedReturnTerm direction(OptimizerInputsEObjectiveTermDirectionEnum direction) {
    this.direction = direction;
    return this;
  }

   /**
   * Get direction
   * @return direction
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsEObjectiveTermDirectionEnum getDirection() {
    return direction;
  }


  @JsonProperty(JSON_PROPERTY_DIRECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDirection(OptimizerInputsEObjectiveTermDirectionEnum direction) {
    this.direction = direction;
  }


  public OptimizerInputsExpectedReturnTerm useAlpha(Boolean useAlpha) {
    this.useAlpha = useAlpha;
    return this;
  }

   /**
   * Get useAlpha
   * @return useAlpha
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_USE_ALPHA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getUseAlpha() {
    return useAlpha;
  }


  @JsonProperty(JSON_PROPERTY_USE_ALPHA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUseAlpha(Boolean useAlpha) {
    this.useAlpha = useAlpha;
  }


  public OptimizerInputsExpectedReturnTerm relToBenchmark(Boolean relToBenchmark) {
    this.relToBenchmark = relToBenchmark;
    return this;
  }

   /**
   * Get relToBenchmark
   * @return relToBenchmark
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REL_TO_BENCHMARK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getRelToBenchmark() {
    return relToBenchmark;
  }


  @JsonProperty(JSON_PROPERTY_REL_TO_BENCHMARK)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelToBenchmark(Boolean relToBenchmark) {
    this.relToBenchmark = relToBenchmark;
  }


  public OptimizerInputsExpectedReturnTerm benchmarkIndex(Integer benchmarkIndex) {
    this.benchmarkIndex = benchmarkIndex;
    return this;
  }

   /**
   * Get benchmarkIndex
   * @return benchmarkIndex
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BENCHMARK_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getBenchmarkIndex() {
    return benchmarkIndex;
  }


  @JsonProperty(JSON_PROPERTY_BENCHMARK_INDEX)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBenchmarkIndex(Integer benchmarkIndex) {
    this.benchmarkIndex = benchmarkIndex;
  }


  /**
   * Return true if this optimizer.inputs.ExpectedReturnTerm object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsExpectedReturnTerm optimizerInputsExpectedReturnTerm = (OptimizerInputsExpectedReturnTerm) o;
    return Objects.equals(this.name, optimizerInputsExpectedReturnTerm.name) &&
        Objects.equals(this.multiplier, optimizerInputsExpectedReturnTerm.multiplier) &&
        Objects.equals(this.returnValues, optimizerInputsExpectedReturnTerm.returnValues) &&
        Objects.equals(this.direction, optimizerInputsExpectedReturnTerm.direction) &&
        Objects.equals(this.useAlpha, optimizerInputsExpectedReturnTerm.useAlpha) &&
        Objects.equals(this.relToBenchmark, optimizerInputsExpectedReturnTerm.relToBenchmark) &&
        Objects.equals(this.benchmarkIndex, optimizerInputsExpectedReturnTerm.benchmarkIndex);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, multiplier, returnValues, direction, useAlpha, relToBenchmark, benchmarkIndex);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsExpectedReturnTerm {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    multiplier: ").append(toIndentedString(multiplier)).append("\n");
    sb.append("    returnValues: ").append(toIndentedString(returnValues)).append("\n");
    sb.append("    direction: ").append(toIndentedString(direction)).append("\n");
    sb.append("    useAlpha: ").append(toIndentedString(useAlpha)).append("\n");
    sb.append("    relToBenchmark: ").append(toIndentedString(relToBenchmark)).append("\n");
    sb.append("    benchmarkIndex: ").append(toIndentedString(benchmarkIndex)).append("\n");
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
