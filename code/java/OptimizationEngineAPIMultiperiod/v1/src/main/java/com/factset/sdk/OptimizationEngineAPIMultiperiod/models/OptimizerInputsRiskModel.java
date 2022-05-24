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
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsQuantRiskModel;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsRawRiskModel;
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsSimulatedRiskModel;
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
 * OptimizerInputsRiskModel
 */
@JsonPropertyOrder({
  OptimizerInputsRiskModel.JSON_PROPERTY_SIMULATED_RISK_MODEL,
  OptimizerInputsRiskModel.JSON_PROPERTY_QUANT_RISK_MODEL,
  OptimizerInputsRiskModel.JSON_PROPERTY_RAW_MODEL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsRiskModel implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SIMULATED_RISK_MODEL = "simulated_risk_model";
  private OptimizerInputsSimulatedRiskModel simulatedRiskModel;

  public static final String JSON_PROPERTY_QUANT_RISK_MODEL = "quant_risk_model";
  private OptimizerInputsQuantRiskModel quantRiskModel;

  public static final String JSON_PROPERTY_RAW_MODEL = "raw_model";
  private OptimizerInputsRawRiskModel rawModel;

  public OptimizerInputsRiskModel() { 
  }

  public OptimizerInputsRiskModel simulatedRiskModel(OptimizerInputsSimulatedRiskModel simulatedRiskModel) {
    this.simulatedRiskModel = simulatedRiskModel;
    return this;
  }

   /**
   * Get simulatedRiskModel
   * @return simulatedRiskModel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SIMULATED_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsSimulatedRiskModel getSimulatedRiskModel() {
    return simulatedRiskModel;
  }


  @JsonProperty(JSON_PROPERTY_SIMULATED_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSimulatedRiskModel(OptimizerInputsSimulatedRiskModel simulatedRiskModel) {
    this.simulatedRiskModel = simulatedRiskModel;
  }


  public OptimizerInputsRiskModel quantRiskModel(OptimizerInputsQuantRiskModel quantRiskModel) {
    this.quantRiskModel = quantRiskModel;
    return this;
  }

   /**
   * Get quantRiskModel
   * @return quantRiskModel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_QUANT_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsQuantRiskModel getQuantRiskModel() {
    return quantRiskModel;
  }


  @JsonProperty(JSON_PROPERTY_QUANT_RISK_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setQuantRiskModel(OptimizerInputsQuantRiskModel quantRiskModel) {
    this.quantRiskModel = quantRiskModel;
  }


  public OptimizerInputsRiskModel rawModel(OptimizerInputsRawRiskModel rawModel) {
    this.rawModel = rawModel;
    return this;
  }

   /**
   * Get rawModel
   * @return rawModel
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RAW_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsRawRiskModel getRawModel() {
    return rawModel;
  }


  @JsonProperty(JSON_PROPERTY_RAW_MODEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRawModel(OptimizerInputsRawRiskModel rawModel) {
    this.rawModel = rawModel;
  }


  /**
   * Return true if this optimizer.inputs.RiskModel object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsRiskModel optimizerInputsRiskModel = (OptimizerInputsRiskModel) o;
    return Objects.equals(this.simulatedRiskModel, optimizerInputsRiskModel.simulatedRiskModel) &&
        Objects.equals(this.quantRiskModel, optimizerInputsRiskModel.quantRiskModel) &&
        Objects.equals(this.rawModel, optimizerInputsRiskModel.rawModel);
  }

  @Override
  public int hashCode() {
    return Objects.hash(simulatedRiskModel, quantRiskModel, rawModel);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsRiskModel {\n");
    sb.append("    simulatedRiskModel: ").append(toIndentedString(simulatedRiskModel)).append("\n");
    sb.append("    quantRiskModel: ").append(toIndentedString(quantRiskModel)).append("\n");
    sb.append("    rawModel: ").append(toIndentedString(rawModel)).append("\n");
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
