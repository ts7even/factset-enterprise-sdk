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
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.JSON;


/**
 * Spread of the securitized derivative. It represents the difference between the ask and bid price.
 */
@ApiModel(description = "Spread of the securitized derivative. It represents the difference between the ask and bid price.")
@JsonPropertyOrder({
  InlineResponse2006KeyFiguresSpread.JSON_PROPERTY_HARMONIZED,
  InlineResponse2006KeyFiguresSpread.JSON_PROPERTY_RELATIVE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006KeyFiguresSpread implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_HARMONIZED = "harmonized";
  private BigDecimal harmonized;

  public static final String JSON_PROPERTY_RELATIVE = "relative";
  private BigDecimal relative;


  public InlineResponse2006KeyFiguresSpread harmonized(BigDecimal harmonized) {
    this.harmonized = harmonized;
    return this;
  }

   /**
   * Spread in absolute terms, adjusted for the cover ratio.
   * @return harmonized
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Spread in absolute terms, adjusted for the cover ratio.")
  @JsonProperty(JSON_PROPERTY_HARMONIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getHarmonized() {
    return harmonized;
  }


  @JsonProperty(JSON_PROPERTY_HARMONIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHarmonized(BigDecimal harmonized) {
    this.harmonized = harmonized;
  }


  public InlineResponse2006KeyFiguresSpread relative(BigDecimal relative) {
    this.relative = relative;
    return this;
  }

   /**
   * Spread relative to the ask price.
   * @return relative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Spread relative to the ask price.")
  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getRelative() {
    return relative;
  }


  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelative(BigDecimal relative) {
    this.relative = relative;
  }


  /**
   * Return true if this inline_response_200_6_keyFigures_spread object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006KeyFiguresSpread inlineResponse2006KeyFiguresSpread = (InlineResponse2006KeyFiguresSpread) o;
    return Objects.equals(this.harmonized, inlineResponse2006KeyFiguresSpread.harmonized) &&
        Objects.equals(this.relative, inlineResponse2006KeyFiguresSpread.relative);
  }

  @Override
  public int hashCode() {
    return Objects.hash(harmonized, relative);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006KeyFiguresSpread {\n");
    sb.append("    harmonized: ").append(toIndentedString(harmonized)).append("\n");
    sb.append("    relative: ").append(toIndentedString(relative)).append("\n");
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
