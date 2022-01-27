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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataSensitivitiesBasePointValue;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataSensitivitiesConvexity;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataSensitivitiesElasticity;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataSensitivitiesModifiedDuration;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Parameters related to the price sensitivities of debt instruments with respect to the prevailing market interest rate.
 */
@ApiModel(description = "Parameters related to the price sensitivities of debt instruments with respect to the prevailing market interest rate.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataSensitivities.JSON_PROPERTY_BASE_POINT_VALUE,
  DebtInstrumentNotationScreenerSearchDataSensitivities.JSON_PROPERTY_MODIFIED_DURATION,
  DebtInstrumentNotationScreenerSearchDataSensitivities.JSON_PROPERTY_ELASTICITY,
  DebtInstrumentNotationScreenerSearchDataSensitivities.JSON_PROPERTY_CONVEXITY
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataSensitivities implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BASE_POINT_VALUE = "basePointValue";
  private DebtInstrumentNotationScreenerSearchDataSensitivitiesBasePointValue basePointValue;

  public static final String JSON_PROPERTY_MODIFIED_DURATION = "modifiedDuration";
  private DebtInstrumentNotationScreenerSearchDataSensitivitiesModifiedDuration modifiedDuration;

  public static final String JSON_PROPERTY_ELASTICITY = "elasticity";
  private DebtInstrumentNotationScreenerSearchDataSensitivitiesElasticity elasticity;

  public static final String JSON_PROPERTY_CONVEXITY = "convexity";
  private DebtInstrumentNotationScreenerSearchDataSensitivitiesConvexity convexity;


  public DebtInstrumentNotationScreenerSearchDataSensitivities basePointValue(DebtInstrumentNotationScreenerSearchDataSensitivitiesBasePointValue basePointValue) {
    this.basePointValue = basePointValue;
    return this;
  }

   /**
   * Get basePointValue
   * @return basePointValue
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BASE_POINT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataSensitivitiesBasePointValue getBasePointValue() {
    return basePointValue;
  }


  @JsonProperty(JSON_PROPERTY_BASE_POINT_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBasePointValue(DebtInstrumentNotationScreenerSearchDataSensitivitiesBasePointValue basePointValue) {
    this.basePointValue = basePointValue;
  }


  public DebtInstrumentNotationScreenerSearchDataSensitivities modifiedDuration(DebtInstrumentNotationScreenerSearchDataSensitivitiesModifiedDuration modifiedDuration) {
    this.modifiedDuration = modifiedDuration;
    return this;
  }

   /**
   * Get modifiedDuration
   * @return modifiedDuration
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MODIFIED_DURATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataSensitivitiesModifiedDuration getModifiedDuration() {
    return modifiedDuration;
  }


  @JsonProperty(JSON_PROPERTY_MODIFIED_DURATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setModifiedDuration(DebtInstrumentNotationScreenerSearchDataSensitivitiesModifiedDuration modifiedDuration) {
    this.modifiedDuration = modifiedDuration;
  }


  public DebtInstrumentNotationScreenerSearchDataSensitivities elasticity(DebtInstrumentNotationScreenerSearchDataSensitivitiesElasticity elasticity) {
    this.elasticity = elasticity;
    return this;
  }

   /**
   * Get elasticity
   * @return elasticity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ELASTICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataSensitivitiesElasticity getElasticity() {
    return elasticity;
  }


  @JsonProperty(JSON_PROPERTY_ELASTICITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setElasticity(DebtInstrumentNotationScreenerSearchDataSensitivitiesElasticity elasticity) {
    this.elasticity = elasticity;
  }


  public DebtInstrumentNotationScreenerSearchDataSensitivities convexity(DebtInstrumentNotationScreenerSearchDataSensitivitiesConvexity convexity) {
    this.convexity = convexity;
    return this;
  }

   /**
   * Get convexity
   * @return convexity
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CONVEXITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataSensitivitiesConvexity getConvexity() {
    return convexity;
  }


  @JsonProperty(JSON_PROPERTY_CONVEXITY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConvexity(DebtInstrumentNotationScreenerSearchDataSensitivitiesConvexity convexity) {
    this.convexity = convexity;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_sensitivities object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataSensitivities debtInstrumentNotationScreenerSearchDataSensitivities = (DebtInstrumentNotationScreenerSearchDataSensitivities) o;
    return Objects.equals(this.basePointValue, debtInstrumentNotationScreenerSearchDataSensitivities.basePointValue) &&
        Objects.equals(this.modifiedDuration, debtInstrumentNotationScreenerSearchDataSensitivities.modifiedDuration) &&
        Objects.equals(this.elasticity, debtInstrumentNotationScreenerSearchDataSensitivities.elasticity) &&
        Objects.equals(this.convexity, debtInstrumentNotationScreenerSearchDataSensitivities.convexity);
  }

  @Override
  public int hashCode() {
    return Objects.hash(basePointValue, modifiedDuration, elasticity, convexity);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataSensitivities {\n");
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
