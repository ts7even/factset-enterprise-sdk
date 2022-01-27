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
 * Agio based on the ask price.  For plain vanilla warrants, it represents the difference between the ask price of the derivative and its parity (see attribute &#x60;parity&#x60;). Thus, for those with exercise right call, the agio indicates how much more expensive would it be to obtain the underlying through purchasing and exercising the warrant compared to directly purchasing the underlying. For those with exercise right put, the above consideration is applied inversely. For other types of securitized derivatives, the calculation and interpretation of the agio depends on their category. Negative values are possible. This key figure is not calculated for securitized derivatives with multiple underlyings.
 */
@ApiModel(description = "Agio based on the ask price.  For plain vanilla warrants, it represents the difference between the ask price of the derivative and its parity (see attribute `parity`). Thus, for those with exercise right call, the agio indicates how much more expensive would it be to obtain the underlying through purchasing and exercising the warrant compared to directly purchasing the underlying. For those with exercise right put, the above consideration is applied inversely. For other types of securitized derivatives, the calculation and interpretation of the agio depends on their category. Negative values are possible. This key figure is not calculated for securitized derivatives with multiple underlyings.")
@JsonPropertyOrder({
  InlineResponse2003DataAgio.JSON_PROPERTY_ABSOLUTE,
  InlineResponse2003DataAgio.JSON_PROPERTY_RELATIVE,
  InlineResponse2003DataAgio.JSON_PROPERTY_ANNUALIZED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003DataAgio implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  private BigDecimal absolute;

  public static final String JSON_PROPERTY_RELATIVE = "relative";
  private BigDecimal relative;

  public static final String JSON_PROPERTY_ANNUALIZED = "annualized";
  private BigDecimal annualized;


  public InlineResponse2003DataAgio absolute(BigDecimal absolute) {
    this.absolute = absolute;
    return this;
  }

   /**
   * Agio in absolute terms.
   * @return absolute
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Agio in absolute terms.")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAbsolute() {
    return absolute;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolute(BigDecimal absolute) {
    this.absolute = absolute;
  }


  public InlineResponse2003DataAgio relative(BigDecimal relative) {
    this.relative = relative;
    return this;
  }

   /**
   * Agio relative to the underlying level.
   * @return relative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Agio relative to the underlying level.")
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


  public InlineResponse2003DataAgio annualized(BigDecimal annualized) {
    this.annualized = annualized;
    return this;
  }

   /**
   * Annualized agio relative to the underlying level.
   * @return annualized
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Annualized agio relative to the underlying level.")
  @JsonProperty(JSON_PROPERTY_ANNUALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAnnualized() {
    return annualized;
  }


  @JsonProperty(JSON_PROPERTY_ANNUALIZED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnnualized(BigDecimal annualized) {
    this.annualized = annualized;
  }


  /**
   * Return true if this inline_response_200_3_data_agio object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003DataAgio inlineResponse2003DataAgio = (InlineResponse2003DataAgio) o;
    return Objects.equals(this.absolute, inlineResponse2003DataAgio.absolute) &&
        Objects.equals(this.relative, inlineResponse2003DataAgio.relative) &&
        Objects.equals(this.annualized, inlineResponse2003DataAgio.annualized);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, relative, annualized);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003DataAgio {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
    sb.append("    relative: ").append(toIndentedString(relative)).append("\n");
    sb.append("    annualized: ").append(toIndentedString(annualized)).append("\n");
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
