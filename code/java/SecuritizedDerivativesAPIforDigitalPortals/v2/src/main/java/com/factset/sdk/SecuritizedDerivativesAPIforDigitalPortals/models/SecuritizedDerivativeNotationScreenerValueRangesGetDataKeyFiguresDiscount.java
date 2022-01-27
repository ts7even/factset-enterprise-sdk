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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountAbsolute;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountRelative;
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
 * Discount. It represents the difference between the ask price of the securitized derivative and the underlying level, adjusted for the cover ratio and the currency cross rate. This key figure is calculated only for discount certificates.
 */
@ApiModel(description = "Discount. It represents the difference between the ask price of the securitized derivative and the underlying level, adjusted for the cover ratio and the currency cross rate. This key figure is calculated only for discount certificates.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount.JSON_PROPERTY_ABSOLUTE,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount.JSON_PROPERTY_RELATIVE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ABSOLUTE = "absolute";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountAbsolute absolute;

  public static final String JSON_PROPERTY_RELATIVE = "relative";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountRelative relative;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount absolute(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountAbsolute absolute) {
    this.absolute = absolute;
    return this;
  }

   /**
   * Get absolute
   * @return absolute
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountAbsolute getAbsolute() {
    return absolute;
  }


  @JsonProperty(JSON_PROPERTY_ABSOLUTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAbsolute(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountAbsolute absolute) {
    this.absolute = absolute;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount relative(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountRelative relative) {
    this.relative = relative;
    return this;
  }

   /**
   * Get relative
   * @return relative
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountRelative getRelative() {
    return relative;
  }


  @JsonProperty(JSON_PROPERTY_RELATIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRelative(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscountRelative relative) {
    this.relative = relative;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_keyFigures_discount object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount = (SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount) o;
    return Objects.equals(this.absolute, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount.absolute) &&
        Objects.equals(this.relative, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount.relative);
  }

  @Override
  public int hashCode() {
    return Objects.hash(absolute, relative);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresDiscount {\n");
    sb.append("    absolute: ").append(toIndentedString(absolute)).append("\n");
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
