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


package com.factset.sdk.ETFProfileandPrices.models;

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
import com.factset.sdk.ETFProfileandPrices.JSON;


/**
 * Capital Gains.
 */
@ApiModel(description = "Capital Gains.")
@JsonPropertyOrder({
  InlineResponse20012DataCapitalGains.JSON_PROPERTY_SHORT_TERM,
  InlineResponse20012DataCapitalGains.JSON_PROPERTY_LONG_TERM
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20012DataCapitalGains implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SHORT_TERM = "shortTerm";
  private BigDecimal shortTerm;

  public static final String JSON_PROPERTY_LONG_TERM = "longTerm";
  private BigDecimal longTerm;


  public InlineResponse20012DataCapitalGains shortTerm(BigDecimal shortTerm) {
    this.shortTerm = shortTerm;
    return this;
  }

   /**
   * Total short term capital gains on ex-date. This data is available for all the regions.
   * @return shortTerm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Total short term capital gains on ex-date. This data is available for all the regions.")
  @JsonProperty(JSON_PROPERTY_SHORT_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getShortTerm() {
    return shortTerm;
  }


  @JsonProperty(JSON_PROPERTY_SHORT_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShortTerm(BigDecimal shortTerm) {
    this.shortTerm = shortTerm;
  }


  public InlineResponse20012DataCapitalGains longTerm(BigDecimal longTerm) {
    this.longTerm = longTerm;
    return this;
  }

   /**
   * Total long term capital gains on ex-date. This data is available for all the regions.
   * @return longTerm
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Total long term capital gains on ex-date. This data is available for all the regions.")
  @JsonProperty(JSON_PROPERTY_LONG_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getLongTerm() {
    return longTerm;
  }


  @JsonProperty(JSON_PROPERTY_LONG_TERM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLongTerm(BigDecimal longTerm) {
    this.longTerm = longTerm;
  }


  /**
   * Return true if this inline_response_200_12_data_capitalGains object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20012DataCapitalGains inlineResponse20012DataCapitalGains = (InlineResponse20012DataCapitalGains) o;
    return Objects.equals(this.shortTerm, inlineResponse20012DataCapitalGains.shortTerm) &&
        Objects.equals(this.longTerm, inlineResponse20012DataCapitalGains.longTerm);
  }

  @Override
  public int hashCode() {
    return Objects.hash(shortTerm, longTerm);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20012DataCapitalGains {\n");
    sb.append("    shortTerm: ").append(toIndentedString(shortTerm)).append("\n");
    sb.append("    longTerm: ").append(toIndentedString(longTerm)).append("\n");
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
