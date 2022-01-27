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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataValidationValueUnitExclude;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataValidationValueUnitRestrict;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Value unit selection. See endpoint &#x60;/basic/valueUnit/list&#x60; for valid values.
 */
@ApiModel(description = "Value unit selection. See endpoint `/basic/valueUnit/list` for valid values.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataValidationValueUnit.JSON_PROPERTY_RESTRICT,
  DebtInstrumentNotationScreenerSearchDataValidationValueUnit.JSON_PROPERTY_EXCLUDE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataValidationValueUnit implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_RESTRICT = "restrict";
  private DebtInstrumentNotationScreenerSearchDataValidationValueUnitRestrict restrict;

  public static final String JSON_PROPERTY_EXCLUDE = "exclude";
  private DebtInstrumentNotationScreenerSearchDataValidationValueUnitExclude exclude;


  public DebtInstrumentNotationScreenerSearchDataValidationValueUnit restrict(DebtInstrumentNotationScreenerSearchDataValidationValueUnitRestrict restrict) {
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

  public DebtInstrumentNotationScreenerSearchDataValidationValueUnitRestrict getRestrict() {
    return restrict;
  }


  @JsonProperty(JSON_PROPERTY_RESTRICT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRestrict(DebtInstrumentNotationScreenerSearchDataValidationValueUnitRestrict restrict) {
    this.restrict = restrict;
  }


  public DebtInstrumentNotationScreenerSearchDataValidationValueUnit exclude(DebtInstrumentNotationScreenerSearchDataValidationValueUnitExclude exclude) {
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

  public DebtInstrumentNotationScreenerSearchDataValidationValueUnitExclude getExclude() {
    return exclude;
  }


  @JsonProperty(JSON_PROPERTY_EXCLUDE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExclude(DebtInstrumentNotationScreenerSearchDataValidationValueUnitExclude exclude) {
    this.exclude = exclude;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_validation_valueUnit object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataValidationValueUnit debtInstrumentNotationScreenerSearchDataValidationValueUnit = (DebtInstrumentNotationScreenerSearchDataValidationValueUnit) o;
    return Objects.equals(this.restrict, debtInstrumentNotationScreenerSearchDataValidationValueUnit.restrict) &&
        Objects.equals(this.exclude, debtInstrumentNotationScreenerSearchDataValidationValueUnit.exclude);
  }

  @Override
  public int hashCode() {
    return Objects.hash(restrict, exclude);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataValidationValueUnit {\n");
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
