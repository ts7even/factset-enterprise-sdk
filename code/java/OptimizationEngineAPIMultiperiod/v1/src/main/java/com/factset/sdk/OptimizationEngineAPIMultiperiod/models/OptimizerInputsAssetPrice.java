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
import com.factset.sdk.OptimizationEngineAPIMultiperiod.models.OptimizerInputsAssetPriceEPriceSource;
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
 * OptimizerInputsAssetPrice
 */
@JsonPropertyOrder({
  OptimizerInputsAssetPrice.JSON_PROPERTY_SOURCE,
  OptimizerInputsAssetPrice.JSON_PROPERTY_PRICE_OVERRIDE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class OptimizerInputsAssetPrice implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SOURCE = "source";
  private OptimizerInputsAssetPriceEPriceSource source;

  public static final String JSON_PROPERTY_PRICE_OVERRIDE = "price_override";
  private Double priceOverride;

  public OptimizerInputsAssetPrice() { 
  }

  public OptimizerInputsAssetPrice source(OptimizerInputsAssetPriceEPriceSource source) {
    this.source = source;
    return this;
  }

   /**
   * Get source
   * @return source
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OptimizerInputsAssetPriceEPriceSource getSource() {
    return source;
  }


  @JsonProperty(JSON_PROPERTY_SOURCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSource(OptimizerInputsAssetPriceEPriceSource source) {
    this.source = source;
  }


  public OptimizerInputsAssetPrice priceOverride(Double priceOverride) {
    this.priceOverride = priceOverride;
    return this;
  }

   /**
   * Get priceOverride
   * @return priceOverride
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PRICE_OVERRIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getPriceOverride() {
    return priceOverride;
  }


  @JsonProperty(JSON_PROPERTY_PRICE_OVERRIDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPriceOverride(Double priceOverride) {
    this.priceOverride = priceOverride;
  }


  /**
   * Return true if this optimizer.inputs.AssetPrice object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OptimizerInputsAssetPrice optimizerInputsAssetPrice = (OptimizerInputsAssetPrice) o;
    return Objects.equals(this.source, optimizerInputsAssetPrice.source) &&
        Objects.equals(this.priceOverride, optimizerInputsAssetPrice.priceOverride);
  }

  @Override
  public int hashCode() {
    return Objects.hash(source, priceOverride);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OptimizerInputsAssetPrice {\n");
    sb.append("    source: ").append(toIndentedString(source)).append("\n");
    sb.append("    priceOverride: ").append(toIndentedString(priceOverride)).append("\n");
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
