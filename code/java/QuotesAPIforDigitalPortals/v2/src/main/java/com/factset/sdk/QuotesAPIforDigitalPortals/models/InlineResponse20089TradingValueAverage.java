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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

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
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Arithmetic mean of the trading value for a given time range.
 */
@ApiModel(description = "Arithmetic mean of the trading value for a given time range.")
@JsonPropertyOrder({
  InlineResponse20089TradingValueAverage.JSON_PROPERTY_DAYS30
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20089TradingValueAverage implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DAYS30 = "days30";
  private BigDecimal days30;


  public InlineResponse20089TradingValueAverage days30(BigDecimal days30) {
    this.days30 = days30;
    return this;
  }

   /**
   * 30 trading days.
   * @return days30
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "30 trading days.")
  @JsonProperty(JSON_PROPERTY_DAYS30)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getDays30() {
    return days30;
  }


  @JsonProperty(JSON_PROPERTY_DAYS30)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDays30(BigDecimal days30) {
    this.days30 = days30;
  }


  /**
   * Return true if this inline_response_200_89_tradingValue_average object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20089TradingValueAverage inlineResponse20089TradingValueAverage = (InlineResponse20089TradingValueAverage) o;
    return Objects.equals(this.days30, inlineResponse20089TradingValueAverage.days30);
  }

  @Override
  public int hashCode() {
    return Objects.hash(days30);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20089TradingValueAverage {\n");
    sb.append("    days30: ").append(toIndentedString(days30)).append("\n");
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
