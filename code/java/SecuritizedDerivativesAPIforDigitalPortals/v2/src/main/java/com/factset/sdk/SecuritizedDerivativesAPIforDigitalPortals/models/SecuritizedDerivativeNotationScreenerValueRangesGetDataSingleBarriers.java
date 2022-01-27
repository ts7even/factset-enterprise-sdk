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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation;
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
 * SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers
 */
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_TYPE,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_OBSERVATION,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_LEVEL,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_DISTANCE,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_BREACH,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.JSON_PROPERTY_CASH_FLOW
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers implements Serializable {
  private static final long serialVersionUID = 1L;

  /**
   * The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.
   */
  public enum TypeEnum {
    STRIKE("strike"),
    
    BONUSLEVEL("bonusLevel"),
    
    CAP("cap"),
    
    KNOCKOUT("knockOut"),
    
    KNOCKIN("knockIn"),
    
    LOCKOUT("lockOut"),
    
    LOCKIN("lockIn"),
    
    CAPITALGUARANTEE("capitalGuarantee"),
    
    COUPONTRIGGERLEVEL("couponTriggerLevel");

    private String value;

    TypeEnum(String value) {
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
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  public static final String JSON_PROPERTY_TYPE = "type";
  private TypeEnum type;

  public static final String JSON_PROPERTY_OBSERVATION = "observation";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation observation;

  public static final String JSON_PROPERTY_LEVEL = "level";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel level;

  public static final String JSON_PROPERTY_DISTANCE = "distance";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance distance;

  public static final String JSON_PROPERTY_BREACH = "breach";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach breach;

  public static final String JSON_PROPERTY_CASH_FLOW = "cashFlow";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow cashFlow;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers type(TypeEnum type) {
    this.type = type;
    return this;
  }

   /**
   * The type of the barrier. See endpoint &#x60;/securitizedDerivative/barrier/type/list&#x60; for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The type of the barrier. See endpoint `/securitizedDerivative/barrier/type/list` for additional information. Note that not all barrier types listed in the mentioned endpoint can be used as a parameter.")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public TypeEnum getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(TypeEnum type) {
    this.type = type;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers observation(SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation observation) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation getObservation() {
    return observation;
  }


  @JsonProperty(JSON_PROPERTY_OBSERVATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setObservation(SecuritizedDerivativeNotationScreenerValueRangesGetDataObservation observation) {
    this.observation = observation;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers level(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel level) {
    this.level = level;
    return this;
  }

   /**
   * Get level
   * @return level
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel getLevel() {
    return level;
  }


  @JsonProperty(JSON_PROPERTY_LEVEL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLevel(SecuritizedDerivativeNotationScreenerValueRangesGetDataLevel level) {
    this.level = level;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers distance(SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance distance) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance getDistance() {
    return distance;
  }


  @JsonProperty(JSON_PROPERTY_DISTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDistance(SecuritizedDerivativeNotationScreenerValueRangesGetDataDistance distance) {
    this.distance = distance;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers breach(SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach breach) {
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

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach getBreach() {
    return breach;
  }


  @JsonProperty(JSON_PROPERTY_BREACH)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreach(SecuritizedDerivativeNotationScreenerValueRangesGetDataBreach breach) {
    this.breach = breach;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers cashFlow(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * Get cashFlow
   * @return cashFlow
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow getCashFlow() {
    return cashFlow;
  }


  @JsonProperty(JSON_PROPERTY_CASH_FLOW)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCashFlow(SecuritizedDerivativeNotationScreenerValueRangesGetDataCashFlow cashFlow) {
    this.cashFlow = cashFlow;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_singleBarriers object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers = (SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers) o;
    return Objects.equals(this.type, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.type) &&
        Objects.equals(this.observation, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.observation) &&
        Objects.equals(this.level, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.level) &&
        Objects.equals(this.distance, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.distance) &&
        Objects.equals(this.breach, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.breach) &&
        Objects.equals(this.cashFlow, securitizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers.cashFlow);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, observation, level, distance, breach, cashFlow);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataSingleBarriers {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    observation: ").append(toIndentedString(observation)).append("\n");
    sb.append("    level: ").append(toIndentedString(level)).append("\n");
    sb.append("    distance: ").append(toIndentedString(distance)).append("\n");
    sb.append("    breach: ").append(toIndentedString(breach)).append("\n");
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
