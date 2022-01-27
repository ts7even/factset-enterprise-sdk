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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataKnockOutDistance;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataKnockOutObservation;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataKnockOutValue;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2005DataLifeCycleMaturityPerpetual;
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
 * Values and value ranges related to the knock-out.
 */
@ApiModel(description = "Values and value ranges related to the knock-out.")
@JsonPropertyOrder({
  InlineResponse2005DataKnockOut.JSON_PROPERTY_OBSERVATION,
  InlineResponse2005DataKnockOut.JSON_PROPERTY_VALUE,
  InlineResponse2005DataKnockOut.JSON_PROPERTY_DISTANCE,
  InlineResponse2005DataKnockOut.JSON_PROPERTY_BREACHED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005DataKnockOut implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_OBSERVATION = "observation";
  private java.util.List<InlineResponse2005DataKnockOutObservation> observation = null;

  public static final String JSON_PROPERTY_VALUE = "value";
  private InlineResponse2005DataKnockOutValue value;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private InlineResponse2005DataKnockOutDistance distance;

  public static final String JSON_PROPERTY_BREACHED = "breached";
  private java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached = null;


  public InlineResponse2005DataKnockOut observation(java.util.List<InlineResponse2005DataKnockOutObservation> observation) {
    this.observation = observation;
    return this;
  }

  public InlineResponse2005DataKnockOut addObservationItem(InlineResponse2005DataKnockOutObservation observationItem) {
    if (this.observation == null) {
      this.observation = new java.util.ArrayList<>();
    }
    this.observation.add(observationItem);
    return this;
  }

   /**
   * Values of the barrier observation modality.
   * @return observation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Values of the barrier observation modality.")
  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataKnockOutObservation> getObservation() {
    return observation;
  }


  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setObservation(java.util.List<InlineResponse2005DataKnockOutObservation> observation) {
    this.observation = observation;
  }


  public InlineResponse2005DataKnockOut value(InlineResponse2005DataKnockOutValue value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2005DataKnockOutValue getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(InlineResponse2005DataKnockOutValue value) {
    this.value = value;
  }


  public InlineResponse2005DataKnockOut distance(InlineResponse2005DataKnockOutDistance distance) {
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

  public InlineResponse2005DataKnockOutDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(InlineResponse2005DataKnockOutDistance distance) {
    this.distance = distance;
  }


  public InlineResponse2005DataKnockOut breached(java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached) {
    this.breached = breached;
    return this;
  }

  public InlineResponse2005DataKnockOut addBreachedItem(InlineResponse2005DataLifeCycleMaturityPerpetual breachedItem) {
    if (this.breached == null) {
      this.breached = new java.util.ArrayList<>();
    }
    this.breached.add(breachedItem);
    return this;
  }

   /**
   * Indicates whether securitized derivatives with a breached and with a non-breached knock-out barrier are among the results.
   * @return breached
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Indicates whether securitized derivatives with a breached and with a non-breached knock-out barrier are among the results.")
  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> getBreached() {
    return breached;
  }


  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreached(java.util.List<InlineResponse2005DataLifeCycleMaturityPerpetual> breached) {
    this.breached = breached;
  }


  /**
   * Return true if this inline_response_200_5_data_knockOut object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005DataKnockOut inlineResponse2005DataKnockOut = (InlineResponse2005DataKnockOut) o;
    return Objects.equals(this.observation, inlineResponse2005DataKnockOut.observation) &&
        Objects.equals(this.value, inlineResponse2005DataKnockOut.value) &&
        Objects.equals(this.distance, inlineResponse2005DataKnockOut.distance) &&
        Objects.equals(this.breached, inlineResponse2005DataKnockOut.breached);
  }

  @Override
  public int hashCode() {
    return Objects.hash(observation, value, distance, breached);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005DataKnockOut {\n");
    sb.append("    observation: ").append(toIndentedString(observation)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    breached: ").append(toIndentedString(breached)).append("\n");
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
