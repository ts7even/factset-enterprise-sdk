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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMaximum;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMinimum;
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
 * Value range for the minimum trading volume.
 */
@ApiModel(description = "Value range for the minimum trading volume.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum.JSON_PROPERTY_MINIMUM,
  DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum.JSON_PROPERTY_MAXIMUM
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_MINIMUM = "minimum";
  private DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMinimum minimum;

  public static final String JSON_PROPERTY_MAXIMUM = "maximum";
  private DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMaximum maximum;


  public DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum minimum(DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMinimum minimum) {
    this.minimum = minimum;
    return this;
  }

   /**
   * Get minimum
   * @return minimum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMinimum getMinimum() {
    return minimum;
  }


  @JsonProperty(JSON_PROPERTY_MINIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMinimum(DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMinimum minimum) {
    this.minimum = minimum;
  }


  public DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum maximum(DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMaximum maximum) {
    this.maximum = maximum;
    return this;
  }

   /**
   * Get maximum
   * @return maximum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_MAXIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMaximum getMaximum() {
    return maximum;
  }


  @JsonProperty(JSON_PROPERTY_MAXIMUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMaximum(DebtInstrumentNotationScreenerSearchDataLifeCycleMaturityRestrictionRemainingTermYearsMaximum maximum) {
    this.maximum = maximum;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_tradingVolume_otc_minimum object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum debtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum = (DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum) o;
    return Objects.equals(this.minimum, debtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum.minimum) &&
        Objects.equals(this.maximum, debtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum.maximum);
  }

  @Override
  public int hashCode() {
    return Objects.hash(minimum, maximum);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataTradingVolumeOtcMinimum {\n");
    sb.append("    minimum: ").append(toIndentedString(minimum)).append("\n");
    sb.append("    maximum: ").append(toIndentedString(maximum)).append("\n");
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
