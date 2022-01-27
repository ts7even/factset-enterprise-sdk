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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockOutBreach;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockOutDistance;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentKnockOutObservation;
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
 * Knock-out of the securitized derivative.
 */
@ApiModel(description = "Knock-out of the securitized derivative.")
@JsonPropertyOrder({
  InlineResponse2006InstrumentKnockOut.JSON_PROPERTY_OBSERVATION,
  InlineResponse2006InstrumentKnockOut.JSON_PROPERTY_VALUE,
  InlineResponse2006InstrumentKnockOut.JSON_PROPERTY_DISTANCE,
  InlineResponse2006InstrumentKnockOut.JSON_PROPERTY_BREACH
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006InstrumentKnockOut implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OBSERVATION = "observation";
  private InlineResponse2006InstrumentKnockOutObservation observation;

  public static final String JSON_PROPERTY_VALUE = "value";
  private BigDecimal value;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private InlineResponse2006InstrumentKnockOutDistance distance;

  public static final String JSON_PROPERTY_BREACH = "breach";
  private InlineResponse2006InstrumentKnockOutBreach breach;


  public InlineResponse2006InstrumentKnockOut observation(InlineResponse2006InstrumentKnockOutObservation observation) {
    this.observation = observation;
    return this;
  }

   /**
   * Get observation
   * @return observation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006InstrumentKnockOutObservation getObservation() {
    return observation;
  }


  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setObservation(InlineResponse2006InstrumentKnockOutObservation observation) {
    this.observation = observation;
  }


  public InlineResponse2006InstrumentKnockOut value(BigDecimal value) {
    this.value = value;
    return this;
  }

   /**
   * Value of the knock-out.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Value of the knock-out.")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(BigDecimal value) {
    this.value = value;
  }


  public InlineResponse2006InstrumentKnockOut distance(InlineResponse2006InstrumentKnockOutDistance distance) {
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

  public InlineResponse2006InstrumentKnockOutDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(InlineResponse2006InstrumentKnockOutDistance distance) {
    this.distance = distance;
  }


  public InlineResponse2006InstrumentKnockOut breach(InlineResponse2006InstrumentKnockOutBreach breach) {
    this.breach = breach;
    return this;
  }

   /**
   * Get breach
   * @return breach
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_BREACH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006InstrumentKnockOutBreach getBreach() {
    return breach;
  }


  @JsonProperty(JSON_PROPERTY_BREACH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreach(InlineResponse2006InstrumentKnockOutBreach breach) {
    this.breach = breach;
  }


  /**
   * Return true if this inline_response_200_6_instrument_knockOut object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006InstrumentKnockOut inlineResponse2006InstrumentKnockOut = (InlineResponse2006InstrumentKnockOut) o;
    return Objects.equals(this.observation, inlineResponse2006InstrumentKnockOut.observation) &&
        Objects.equals(this.value, inlineResponse2006InstrumentKnockOut.value) &&
        Objects.equals(this.distance, inlineResponse2006InstrumentKnockOut.distance) &&
        Objects.equals(this.breach, inlineResponse2006InstrumentKnockOut.breach);
  }

  @Override
  public int hashCode() {
    return Objects.hash(observation, value, distance, breach);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006InstrumentKnockOut {\n");
    sb.append("    observation: ").append(toIndentedString(observation)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    breach: ").append(toIndentedString(breach)).append("\n");
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
