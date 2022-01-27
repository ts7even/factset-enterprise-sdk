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
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataTradedValueDays30Average;
import com.factset.sdk.BondsAPIforDigitalPortals.models.DebtInstrumentNotationScreenerSearchDataTradedValueDays30Sum;
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
 * Cash flow for the time range 30 trading days.
 */
@ApiModel(description = "Cash flow for the time range 30 trading days.")
@JsonPropertyOrder({
  DebtInstrumentNotationScreenerSearchDataTradedValueDays30.JSON_PROPERTY_SUM,
  DebtInstrumentNotationScreenerSearchDataTradedValueDays30.JSON_PROPERTY_AVERAGE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DebtInstrumentNotationScreenerSearchDataTradedValueDays30 implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SUM = "sum";
  private DebtInstrumentNotationScreenerSearchDataTradedValueDays30Sum sum;

  public static final String JSON_PROPERTY_AVERAGE = "average";
  private DebtInstrumentNotationScreenerSearchDataTradedValueDays30Average average;


  public DebtInstrumentNotationScreenerSearchDataTradedValueDays30 sum(DebtInstrumentNotationScreenerSearchDataTradedValueDays30Sum sum) {
    this.sum = sum;
    return this;
  }

   /**
   * Get sum
   * @return sum
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataTradedValueDays30Sum getSum() {
    return sum;
  }


  @JsonProperty(JSON_PROPERTY_SUM)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSum(DebtInstrumentNotationScreenerSearchDataTradedValueDays30Sum sum) {
    this.sum = sum;
  }


  public DebtInstrumentNotationScreenerSearchDataTradedValueDays30 average(DebtInstrumentNotationScreenerSearchDataTradedValueDays30Average average) {
    this.average = average;
    return this;
  }

   /**
   * Get average
   * @return average
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_AVERAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public DebtInstrumentNotationScreenerSearchDataTradedValueDays30Average getAverage() {
    return average;
  }


  @JsonProperty(JSON_PROPERTY_AVERAGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAverage(DebtInstrumentNotationScreenerSearchDataTradedValueDays30Average average) {
    this.average = average;
  }


  /**
   * Return true if this _debtInstrument_notation_screener_search_data_tradedValue_days30 object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DebtInstrumentNotationScreenerSearchDataTradedValueDays30 debtInstrumentNotationScreenerSearchDataTradedValueDays30 = (DebtInstrumentNotationScreenerSearchDataTradedValueDays30) o;
    return Objects.equals(this.sum, debtInstrumentNotationScreenerSearchDataTradedValueDays30.sum) &&
        Objects.equals(this.average, debtInstrumentNotationScreenerSearchDataTradedValueDays30.average);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sum, average);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DebtInstrumentNotationScreenerSearchDataTradedValueDays30 {\n");
    sb.append("    sum: ").append(toIndentedString(sum)).append("\n");
    sb.append("    average: ").append(toIndentedString(average)).append("\n");
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
