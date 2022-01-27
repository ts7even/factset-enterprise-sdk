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


package com.factset.sdk.BondsAPIforDigitalPortals.models;

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
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Price sensitivities of the debt instrument with respect to the prevailing market interest rate.
 */
@ApiModel(description = "Price sensitivities of the debt instrument with respect to the prevailing market interest rate.")
@JsonPropertyOrder({
  InlineResponse2003Sensitivities.JSON_PROPERTY_BASE_POINT_VALUE,
  InlineResponse2003Sensitivities.JSON_PROPERTY_MODIFIED_DURATION,
  InlineResponse2003Sensitivities.JSON_PROPERTY_ELASTICITY,
  InlineResponse2003Sensitivities.JSON_PROPERTY_CONVEXITY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003Sensitivities implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BASE_POINT_VALUE = "basePointValue";
  private BigDecimal basePointValue;

  public static final String JSON_PROPERTY_MODIFIED_DURATION = "modifiedDuration";
  private BigDecimal modifiedDuration;

  public static final String JSON_PROPERTY_ELASTICITY = "elasticity";
  private BigDecimal elasticity;

  public static final String JSON_PROPERTY_CONVEXITY = "convexity";
  private BigDecimal convexity;


  public InlineResponse2003Sensitivities basePointValue(BigDecimal basePointValue) {
    this.basePointValue = basePointValue;
    return this;
  }

   /**
   * Base point value, which is the change of the debt instrument&#39;s price for a one base point change (nominally, not relatively) of the prevailing market interest rate. One base point is equivalent to 0.01 percent (1/100 of a percent). The unit of the base point value is the value unit of the notation (see attribute &#x60;valueUnit&#x60;), thus the values are not comparable if notations with different value units are among the results.
   * @return basePointValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Base point value, which is the change of the debt instrument's price for a one base point change (nominally, not relatively) of the prevailing market interest rate. One base point is equivalent to 0.01 percent (1/100 of a percent). The unit of the base point value is the value unit of the notation (see attribute `valueUnit`), thus the values are not comparable if notations with different value units are among the results.")
  @JsonProperty(JSON_PROPERTY_BASE_POINT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getBasePointValue() {
    return basePointValue;
  }


  @JsonProperty(JSON_PROPERTY_BASE_POINT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBasePointValue(BigDecimal basePointValue) {
    this.basePointValue = basePointValue;
  }


  public InlineResponse2003Sensitivities modifiedDuration(BigDecimal modifiedDuration) {
    this.modifiedDuration = modifiedDuration;
    return this;
  }

   /**
   * Modified duration, which is the percentage change of the debt instrument&#39;s price for a one percent change (nominally, not relatively) of the prevailing market interest rate.
   * @return modifiedDuration
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Modified duration, which is the percentage change of the debt instrument's price for a one percent change (nominally, not relatively) of the prevailing market interest rate.")
  @JsonProperty(JSON_PROPERTY_MODIFIED_DURATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getModifiedDuration() {
    return modifiedDuration;
  }


  @JsonProperty(JSON_PROPERTY_MODIFIED_DURATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModifiedDuration(BigDecimal modifiedDuration) {
    this.modifiedDuration = modifiedDuration;
  }


  public InlineResponse2003Sensitivities elasticity(BigDecimal elasticity) {
    this.elasticity = elasticity;
    return this;
  }

   /**
   * Yield elasticity, which is the ratio of the percentage change of the debt instrument&#39;s price for a one percent change (relatively, not nominally) of the prevailing market interest rate.
   * @return elasticity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Yield elasticity, which is the ratio of the percentage change of the debt instrument's price for a one percent change (relatively, not nominally) of the prevailing market interest rate.")
  @JsonProperty(JSON_PROPERTY_ELASTICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getElasticity() {
    return elasticity;
  }


  @JsonProperty(JSON_PROPERTY_ELASTICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setElasticity(BigDecimal elasticity) {
    this.elasticity = elasticity;
  }


  public InlineResponse2003Sensitivities convexity(BigDecimal convexity) {
    this.convexity = convexity;
    return this;
  }

   /**
   * Convexity, which is a measure for the change of the modified duration as the prevailing market interest rate changes.
   * @return convexity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Convexity, which is a measure for the change of the modified duration as the prevailing market interest rate changes.")
  @JsonProperty(JSON_PROPERTY_CONVEXITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getConvexity() {
    return convexity;
  }


  @JsonProperty(JSON_PROPERTY_CONVEXITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvexity(BigDecimal convexity) {
    this.convexity = convexity;
  }


  /**
   * Return true if this inline_response_200_3_sensitivities object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003Sensitivities inlineResponse2003Sensitivities = (InlineResponse2003Sensitivities) o;
    return Objects.equals(this.basePointValue, inlineResponse2003Sensitivities.basePointValue) &&
        Objects.equals(this.modifiedDuration, inlineResponse2003Sensitivities.modifiedDuration) &&
        Objects.equals(this.elasticity, inlineResponse2003Sensitivities.elasticity) &&
        Objects.equals(this.convexity, inlineResponse2003Sensitivities.convexity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(basePointValue, modifiedDuration, elasticity, convexity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003Sensitivities {\n");
    sb.append("    basePointValue: ").append(toIndentedString(basePointValue)).append("\n");
    sb.append("    modifiedDuration: ").append(toIndentedString(modifiedDuration)).append("\n");
    sb.append("    elasticity: ").append(toIndentedString(elasticity)).append("\n");
    sb.append("    convexity: ").append(toIndentedString(convexity)).append("\n");
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
