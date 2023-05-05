/*
 * FactSet Overview Report Builder API
 * Get relevant industry-specific data for high level analysis of public and private companies
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OverviewReportBuilder.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.OverviewReportBuilder.models.KeyStatsEntityObjectAverageDailyVolValue;
import com.factset.sdk.OverviewReportBuilder.models.KeyStatsEntityObjectRange52WeekValue;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.OverviewReportBuilder.JSON;


/**
 * The dollars invested or divested from a fund over one calendar year, based on the creation/redemption process. Data returned may not be related to overall volume or price movement. All fund flow inputs use transaction-day values to ensure that all AUM and flows are fully comparable and reflective of the same, verified market conditions.
 */
@ApiModel(description = "The dollars invested or divested from a fund over one calendar year, based on the creation/redemption process. Data returned may not be related to overall volume or price movement. All fund flow inputs use transaction-day values to ensure that all AUM and flows are fully comparable and reflective of the same, verified market conditions.")
@JsonPropertyOrder({
  KeyStatsFundObjectFundFlowYTD.JSON_PROPERTY_VALUE,
  KeyStatsFundObjectFundFlowYTD.JSON_PROPERTY_LABEL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class KeyStatsFundObjectFundFlowYTD implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_VALUE = "value";
  private KeyStatsEntityObjectAverageDailyVolValue value;

  public static final String JSON_PROPERTY_LABEL = "label";
  private KeyStatsEntityObjectRange52WeekValue label;

  public KeyStatsFundObjectFundFlowYTD() { 
  }

  @JsonCreator
  public KeyStatsFundObjectFundFlowYTD(
    @JsonProperty(value=JSON_PROPERTY_VALUE, required=true) KeyStatsEntityObjectAverageDailyVolValue value, 
    @JsonProperty(value=JSON_PROPERTY_LABEL, required=true) KeyStatsEntityObjectRange52WeekValue label
  ) {
    this();
    this.value = value;
    this.label = label;
  }

  public KeyStatsFundObjectFundFlowYTD value(KeyStatsEntityObjectAverageDailyVolValue value) {
    this.value = value;
    return this;
  }

   /**
   * Get value
   * @return value
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public KeyStatsEntityObjectAverageDailyVolValue getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setValue(KeyStatsEntityObjectAverageDailyVolValue value) {
    this.value = value;
  }


  public KeyStatsFundObjectFundFlowYTD label(KeyStatsEntityObjectRange52WeekValue label) {
    this.label = label;
    return this;
  }

   /**
   * Get label
   * @return label
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public KeyStatsEntityObjectRange52WeekValue getLabel() {
    return label;
  }


  @JsonProperty(JSON_PROPERTY_LABEL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLabel(KeyStatsEntityObjectRange52WeekValue label) {
    this.label = label;
  }


  /**
   * Return true if this KeyStatsFundObject_fundFlowYTD object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    KeyStatsFundObjectFundFlowYTD keyStatsFundObjectFundFlowYTD = (KeyStatsFundObjectFundFlowYTD) o;
    return Objects.equals(this.value, keyStatsFundObjectFundFlowYTD.value) &&
        Objects.equals(this.label, keyStatsFundObjectFundFlowYTD.label);
  }

  @Override
  public int hashCode() {
    return Objects.hash(value, label);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class KeyStatsFundObjectFundFlowYTD {\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    label: ").append(toIndentedString(label)).append("\n");
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

