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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionExclude;
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionRestrict;
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
 * Value unit selection.
 */
@ApiModel(description = "Value unit selection.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection.JSON_PROPERTY_RESTRICT,
  SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection.JSON_PROPERTY_EXCLUDE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RESTRICT = "restrict";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionRestrict restrict;

  public static final String JSON_PROPERTY_EXCLUDE = "exclude";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionExclude exclude;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection restrict(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionRestrict restrict) {
    this.restrict = restrict;
    return this;
  }

   /**
   * Get restrict
   * @return restrict
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RESTRICT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionRestrict getRestrict() {
    return restrict;
  }


  @JsonProperty(JSON_PROPERTY_RESTRICT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRestrict(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionRestrict restrict) {
    this.restrict = restrict;
  }


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection exclude(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionExclude exclude) {
    this.exclude = exclude;
    return this;
  }

   /**
   * Get exclude
   * @return exclude
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_EXCLUDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionExclude getExclude() {
    return exclude;
  }


  @JsonProperty(JSON_PROPERTY_EXCLUDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExclude(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelectionExclude exclude) {
    this.exclude = exclude;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_validation_valueUnit_selection object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection securitizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection = (SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection) o;
    return Objects.equals(this.restrict, securitizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection.restrict) &&
        Objects.equals(this.exclude, securitizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection.exclude);
  }

  @Override
  public int hashCode() {
    return Objects.hash(restrict, exclude);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection {\n");
    sb.append("    restrict: ").append(toIndentedString(restrict)).append("\n");
    sb.append("    exclude: ").append(toIndentedString(exclude)).append("\n");
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
