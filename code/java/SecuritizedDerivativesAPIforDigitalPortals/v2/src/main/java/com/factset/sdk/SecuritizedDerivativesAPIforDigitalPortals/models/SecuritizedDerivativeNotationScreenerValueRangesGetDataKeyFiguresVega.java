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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaEffective;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaUnadjusted;
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
 * Vega. It represents the first partial derivative of the function determining the derivative notation&#39;s theoretical price with respect to the implied volatility, evaluated at the current implied volatility. Vega indicates the ratio of the absolute change of the price of a derivative for an absolute change of the implied volatility, thus it represents the price sensitivity of the derivative relative to changes in the implied volatility. This key figure is calculated for plain vanilla warrants only.
 */
@ApiModel(description = "Vega. It represents the first partial derivative of the function determining the derivative notation's theoretical price with respect to the implied volatility, evaluated at the current implied volatility. Vega indicates the ratio of the absolute change of the price of a derivative for an absolute change of the implied volatility, thus it represents the price sensitivity of the derivative relative to changes in the implied volatility. This key figure is calculated for plain vanilla warrants only.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega.JSON_PROPERTY_EFFECTIVE,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega.JSON_PROPERTY_UNADJUSTED
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_EFFECTIVE = "effective";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaEffective effective;

  public static final String JSON_PROPERTY_UNADJUSTED = "unadjusted";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaUnadjusted unadjusted;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega effective(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaEffective effective) {
    this.effective = effective;
    return this;
  }

   /**
   * Get effective
   * @return effective
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_EFFECTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaEffective getEffective() {
    return effective;
  }


  @JsonProperty(JSON_PROPERTY_EFFECTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEffective(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaEffective effective) {
    this.effective = effective;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega unadjusted(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaUnadjusted unadjusted) {
    this.unadjusted = unadjusted;
    return this;
  }

   /**
   * Get unadjusted
   * @return unadjusted
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UNADJUSTED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaUnadjusted getUnadjusted() {
    return unadjusted;
  }


  @JsonProperty(JSON_PROPERTY_UNADJUSTED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnadjusted(SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVegaUnadjusted unadjusted) {
    this.unadjusted = unadjusted;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_keyFigures_vega object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega = (SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega) o;
    return Objects.equals(this.effective, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega.effective) &&
        Objects.equals(this.unadjusted, securitizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega.unadjusted);
  }

  @Override
  public int hashCode() {
    return Objects.hash(effective, unadjusted);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataKeyFiguresVega {\n");
    sb.append("    effective: ").append(toIndentedString(effective)).append("\n");
    sb.append("    unadjusted: ").append(toIndentedString(unadjusted)).append("\n");
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
