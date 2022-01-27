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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse2006InstrumentCouponTriggerLevelDistance;
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
 * Coupon trigger level of the securitized derivative.
 */
@ApiModel(description = "Coupon trigger level of the securitized derivative.")
@JsonPropertyOrder({
  InlineResponse2006InstrumentCouponTriggerLevel.JSON_PROPERTY_VALUE,
  InlineResponse2006InstrumentCouponTriggerLevel.JSON_PROPERTY_DISTANCE,
  InlineResponse2006InstrumentCouponTriggerLevel.JSON_PROPERTY_CASH_FLOW
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006InstrumentCouponTriggerLevel implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private BigDecimal value;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private InlineResponse2006InstrumentCouponTriggerLevelDistance distance;

  public static final String JSON_PROPERTY_CASH_FLOW = "cashFlow";
  private BigDecimal cashFlow;


  public InlineResponse2006InstrumentCouponTriggerLevel value(BigDecimal value) {
    this.value = value;
    return this;
  }

   /**
   * Value of the coupon trigger level.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Value of the coupon trigger level.")
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


  public InlineResponse2006InstrumentCouponTriggerLevel distance(InlineResponse2006InstrumentCouponTriggerLevelDistance distance) {
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

  public InlineResponse2006InstrumentCouponTriggerLevelDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(InlineResponse2006InstrumentCouponTriggerLevelDistance distance) {
    this.distance = distance;
  }


  public InlineResponse2006InstrumentCouponTriggerLevel cashFlow(BigDecimal cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * Cash flow amount.
   * @return cashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Cash flow amount.")
  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getCashFlow() {
    return cashFlow;
  }


  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCashFlow(BigDecimal cashFlow) {
    this.cashFlow = cashFlow;
  }


  /**
   * Return true if this inline_response_200_6_instrument_couponTriggerLevel object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006InstrumentCouponTriggerLevel inlineResponse2006InstrumentCouponTriggerLevel = (InlineResponse2006InstrumentCouponTriggerLevel) o;
    return Objects.equals(this.value, inlineResponse2006InstrumentCouponTriggerLevel.value) &&
        Objects.equals(this.distance, inlineResponse2006InstrumentCouponTriggerLevel.distance) &&
        Objects.equals(this.cashFlow, inlineResponse2006InstrumentCouponTriggerLevel.cashFlow);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, distance, cashFlow);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006InstrumentCouponTriggerLevel {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    cashFlow: ").append(toIndentedString(cashFlow)).append("\n");
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
