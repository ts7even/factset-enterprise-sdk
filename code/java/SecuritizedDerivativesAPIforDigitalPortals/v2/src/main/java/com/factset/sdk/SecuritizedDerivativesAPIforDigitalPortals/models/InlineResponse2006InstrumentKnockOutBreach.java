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
 * Information whether or not, and if yes - when a barrier breach has occurred.
 */
@ApiModel(description = "Information whether or not, and if yes - when a barrier breach has occurred.")
@JsonPropertyOrder({
  InlineResponse2006InstrumentKnockOutBreach.JSON_PROPERTY_BREACHED,
  InlineResponse2006InstrumentKnockOutBreach.JSON_PROPERTY_DATETIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006InstrumentKnockOutBreach implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_BREACHED = "breached";
  private Boolean breached;

  public static final String JSON_PROPERTY_DATETIME = "datetime";
  private String datetime;


  public InlineResponse2006InstrumentKnockOutBreach breached(Boolean breached) {
    this.breached = breached;
    return this;
  }

   /**
   * If &#x60;true&#x60;, the barrier has been breached.
   * @return breached
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If `true`, the barrier has been breached.")
  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getBreached() {
    return breached;
  }


  @JsonProperty(JSON_PROPERTY_BREACHED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBreached(Boolean breached) {
    this.breached = breached;
  }


  public InlineResponse2006InstrumentKnockOutBreach datetime(String datetime) {
    this.datetime = datetime;
    return this;
  }

   /**
   * Date and time of the breach.
   * @return datetime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date and time of the breach.")
  @JsonProperty(JSON_PROPERTY_DATETIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDatetime() {
    return datetime;
  }


  @JsonProperty(JSON_PROPERTY_DATETIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDatetime(String datetime) {
    this.datetime = datetime;
  }


  /**
   * Return true if this inline_response_200_6_instrument_knockOut_breach object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006InstrumentKnockOutBreach inlineResponse2006InstrumentKnockOutBreach = (InlineResponse2006InstrumentKnockOutBreach) o;
    return Objects.equals(this.breached, inlineResponse2006InstrumentKnockOutBreach.breached) &&
        Objects.equals(this.datetime, inlineResponse2006InstrumentKnockOutBreach.datetime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(breached, datetime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006InstrumentKnockOutBreach {\n");
    sb.append("    breached: ").append(toIndentedString(breached)).append("\n");
    sb.append("    datetime: ").append(toIndentedString(datetime)).append("\n");
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
