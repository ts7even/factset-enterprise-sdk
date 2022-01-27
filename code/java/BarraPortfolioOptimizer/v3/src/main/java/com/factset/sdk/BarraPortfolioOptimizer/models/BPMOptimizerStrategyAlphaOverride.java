/*
 * Barra Portfolio Optimizer API
 * Allow clients to fetch Analytics through APIs.
 *
 * The version of the OpenAPI document: 3
 * Contact: analytics.api.support@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.BarraPortfolioOptimizer.models;

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
import com.factset.sdk.BarraPortfolioOptimizer.JSON;


/**
 * BPMOptimizerStrategyAlphaOverride
 */
@JsonPropertyOrder({
  BPMOptimizerStrategyAlphaOverride.JSON_PROPERTY_FORMULA,
  BPMOptimizerStrategyAlphaOverride.JSON_PROPERTY_RETURN_TYPE,
  BPMOptimizerStrategyAlphaOverride.JSON_PROPERTY_RETURN_MULTIPLIER
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class BPMOptimizerStrategyAlphaOverride implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FORMULA = "formula";
  private String formula;

  /**
   * Gets or Sets returnType
   */
  public enum ReturnTypeEnum {
    EXCESS("Excess"),
    
    TOTAL("Total"),
    
    ACTIVE("Active"),
    
    RESIDUAL("Residual"),
    
    EXCEPTIONAL("Exceptional");

    private String value;

    ReturnTypeEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static ReturnTypeEnum fromValue(String value) {
      for (ReturnTypeEnum b : ReturnTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_RETURN_TYPE = "returnType";
  private ReturnTypeEnum returnType;

  public static final String JSON_PROPERTY_RETURN_MULTIPLIER = "returnMultiplier";
  private String returnMultiplier;


  public BPMOptimizerStrategyAlphaOverride formula(String formula) {
    this.formula = formula;
    return this;
  }

   /**
   * Get formula
   * @return formula
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FORMULA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFormula() {
    return formula;
  }


  @JsonProperty(JSON_PROPERTY_FORMULA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFormula(String formula) {
    this.formula = formula;
  }


  public BPMOptimizerStrategyAlphaOverride returnType(ReturnTypeEnum returnType) {
    this.returnType = returnType;
    return this;
  }

   /**
   * Get returnType
   * @return returnType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RETURN_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ReturnTypeEnum getReturnType() {
    return returnType;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnType(ReturnTypeEnum returnType) {
    this.returnType = returnType;
  }


  public BPMOptimizerStrategyAlphaOverride returnMultiplier(String returnMultiplier) {
    this.returnMultiplier = returnMultiplier;
    return this;
  }

   /**
   * Get returnMultiplier
   * @return returnMultiplier
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RETURN_MULTIPLIER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getReturnMultiplier() {
    return returnMultiplier;
  }


  @JsonProperty(JSON_PROPERTY_RETURN_MULTIPLIER)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReturnMultiplier(String returnMultiplier) {
    this.returnMultiplier = returnMultiplier;
  }


  /**
   * Return true if this BPMOptimizerStrategyAlphaOverride object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BPMOptimizerStrategyAlphaOverride bpMOptimizerStrategyAlphaOverride = (BPMOptimizerStrategyAlphaOverride) o;
    return Objects.equals(this.formula, bpMOptimizerStrategyAlphaOverride.formula) &&
        Objects.equals(this.returnType, bpMOptimizerStrategyAlphaOverride.returnType) &&
        Objects.equals(this.returnMultiplier, bpMOptimizerStrategyAlphaOverride.returnMultiplier);
  }

  @Override
  public int hashCode() {
    return Objects.hash(formula, returnType, returnMultiplier);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BPMOptimizerStrategyAlphaOverride {\n");
    sb.append("    formula: ").append(toIndentedString(formula)).append("\n");
    sb.append("    returnType: ").append(toIndentedString(returnType)).append("\n");
    sb.append("    returnMultiplier: ").append(toIndentedString(returnMultiplier)).append("\n");
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
