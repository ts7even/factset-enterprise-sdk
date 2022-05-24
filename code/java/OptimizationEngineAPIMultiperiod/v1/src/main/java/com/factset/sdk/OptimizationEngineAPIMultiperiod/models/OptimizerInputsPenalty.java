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
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsEConstraintPenaltyTypeEnum;
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
 * OptimizerInputsPenalty
 */
@JsonPropertyOrder({
  OptimizerInputsPenalty.JSON_PROPERTY_ENABLED,
  OptimizerInputsPenalty.JSON_PROPERTY_PENALTY_TYPE,
  OptimizerInputsPenalty.JSON_PROPERTY_PENALTY_VALUE,
  OptimizerInputsPenalty.JSON_PROPERTY_MAX_VIOLATION
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsPenalty implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ENABLED = "enabled";
  private Boolean enabled;

  public static final String JSON_PROPERTY_PENALTY_TYPE = "penalty_type";
  private OptimizerInputsEConstraintPenaltyTypeEnum penaltyType;

  public static final String JSON_PROPERTY_PENALTY_VALUE = "penalty_value";
  private OptimizerInputsValue penaltyValue;

  public static final String JSON_PROPERTY_MAX_VIOLATION = "max_violation";
  private OptimizerInputsValue maxViolation;

  public OptimizerInputsPenalty() { 
  }

  public OptimizerInputsPenalty enabled(Boolean enabled) {
    this.enabled = enabled;
    return this;
  }

   /**
   * Get enabled
   * @return enabled
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getEnabled() {
    return enabled;
  }


  @JsonProperty(JSON_PROPERTY_ENABLED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEnabled(Boolean enabled) {
    this.enabled = enabled;
  }


  public OptimizerInputsPenalty penaltyType(OptimizerInputsEConstraintPenaltyTypeEnum penaltyType) {
    this.penaltyType = penaltyType;
    return this;
  }

   /**
   * Get penaltyType
   * @return penaltyType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PENALTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsEConstraintPenaltyTypeEnum getPenaltyType() {
    return penaltyType;
  }


  @JsonProperty(JSON_PROPERTY_PENALTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPenaltyType(OptimizerInputsEConstraintPenaltyTypeEnum penaltyType) {
    this.penaltyType = penaltyType;
  }


  public OptimizerInputsPenalty penaltyValue(OptimizerInputsValue penaltyValue) {
    this.penaltyValue = penaltyValue;
    return this;
  }

   /**
   * Get penaltyValue
   * @return penaltyValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PENALTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getPenaltyValue() {
    return penaltyValue;
  }


  @JsonProperty(JSON_PROPERTY_PENALTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPenaltyValue(OptimizerInputsValue penaltyValue) {
    this.penaltyValue = penaltyValue;
  }


  public OptimizerInputsPenalty maxViolation(OptimizerInputsValue maxViolation) {
    this.maxViolation = maxViolation;
    return this;
  }

   /**
   * Get maxViolation
   * @return maxViolation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MAX_VIOLATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsValue getMaxViolation() {
    return maxViolation;
  }


  @JsonProperty(JSON_PROPERTY_MAX_VIOLATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaxViolation(OptimizerInputsValue maxViolation) {
    this.maxViolation = maxViolation;
  }


  /**
   * Return true if this optimizer.inputs.Penalty object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsPenalty optimizerInputsPenalty = (OptimizerInputsPenalty) o;
    return Objects.equals(this.enabled, optimizerInputsPenalty.enabled) &&
        Objects.equals(this.penaltyType, optimizerInputsPenalty.penaltyType) &&
        Objects.equals(this.penaltyValue, optimizerInputsPenalty.penaltyValue) &&
        Objects.equals(this.maxViolation, optimizerInputsPenalty.maxViolation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enabled, penaltyType, penaltyValue, maxViolation);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsPenalty {\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    penaltyType: ").append(toIndentedString(penaltyType)).append("\n");
    sb.append("    penaltyValue: ").append(toIndentedString(penaltyValue)).append("\n");
    sb.append("    maxViolation: ").append(toIndentedString(maxViolation)).append("\n");
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
