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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection;
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
 * Value unit-related parameters. See endpoint &#x60;/basic/valueUnit/list&#x60; for valid values.
 */
@ApiModel(description = "Value unit-related parameters. See endpoint `/basic/valueUnit/list` for valid values.")
@JsonPropertyOrder({
  SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit.JSON_PROPERTY_SELECTION
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SELECTION = "selection";
  private SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection selection;


  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit selection(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection selection) {
    this.selection = selection;
    return this;
  }

   /**
   * Get selection
   * @return selection
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SELECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection getSelection() {
    return selection;
  }


  @JsonProperty(JSON_PROPERTY_SELECTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSelection(SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnitSelection selection) {
    this.selection = selection;
  }


  /**
   * Return true if this _securitizedDerivative_notation_screener_valueRanges_get_data_validation_valueUnit object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit securitizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit = (SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit) o;
    return Objects.equals(this.selection, securitizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit.selection);
  }

  @Override
  public int hashCode() {
    return Objects.hash(selection);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecuritizedDerivativeNotationScreenerValueRangesGetDataValidationValueUnit {\n");
    sb.append("    selection: ").append(toIndentedString(selection)).append("\n");
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
