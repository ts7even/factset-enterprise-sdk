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
 * Requirements regarding the trading volume in the over-the-counter (non-exchange-based) trading. For the currency of the trading volume, see attribute &#x60;issue.volume.currency&#x60;.
 */
@ApiModel(description = "Requirements regarding the trading volume in the over-the-counter (non-exchange-based) trading. For the currency of the trading volume, see attribute `issue.volume.currency`.")
@JsonPropertyOrder({
  InlineResponse200DataTradingVolume.JSON_PROPERTY_MINIMUM,
  InlineResponse200DataTradingVolume.JSON_PROPERTY_INCREMENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse200DataTradingVolume implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MINIMUM = "minimum";
  private BigDecimal minimum;

  public static final String JSON_PROPERTY_INCREMENT = "increment";
  private BigDecimal increment;


  public InlineResponse200DataTradingVolume minimum(BigDecimal minimum) {
    this.minimum = minimum;
    return this;
  }

   /**
   * Minimum trading volume.
   * @return minimum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Minimum trading volume.")
  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getMinimum() {
    return minimum;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimum(BigDecimal minimum) {
    this.minimum = minimum;
  }


  public InlineResponse200DataTradingVolume increment(BigDecimal increment) {
    this.increment = increment;
    return this;
  }

   /**
   * Incremental trading volume over the minimum. The trading volume over the minimum must be an integral multiple of the increment.
   * @return increment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Incremental trading volume over the minimum. The trading volume over the minimum must be an integral multiple of the increment.")
  @JsonProperty(JSON_PROPERTY_INCREMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getIncrement() {
    return increment;
  }


  @JsonProperty(JSON_PROPERTY_INCREMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIncrement(BigDecimal increment) {
    this.increment = increment;
  }


  /**
   * Return true if this inline_response_200_data_tradingVolume object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse200DataTradingVolume inlineResponse200DataTradingVolume = (InlineResponse200DataTradingVolume) o;
    return Objects.equals(this.minimum, inlineResponse200DataTradingVolume.minimum) &&
        Objects.equals(this.increment, inlineResponse200DataTradingVolume.increment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minimum, increment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse200DataTradingVolume {\n");
    sb.append("    minimum: ").append(toIndentedString(minimum)).append("\n");
    sb.append("    increment: ").append(toIndentedString(increment)).append("\n");
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
