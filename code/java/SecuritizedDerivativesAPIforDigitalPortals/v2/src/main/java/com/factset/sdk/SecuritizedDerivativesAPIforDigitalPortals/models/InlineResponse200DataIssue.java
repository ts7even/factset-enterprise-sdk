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
import com.factset.sdk.SecuritizedDerivativesAPIforDigitalPortals.models.InlineResponse200DataIssueValueUnit;
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
 * Issue data of the instrument.
 */
@ApiModel(description = "Issue data of the instrument.")
@JsonPropertyOrder({
  InlineResponse200DataIssue.JSON_PROPERTY_PRICE,
  InlineResponse200DataIssue.JSON_PROPERTY_ADMITTED_VOLUME,
  InlineResponse200DataIssue.JSON_PROPERTY_VALUE_UNIT,
  InlineResponse200DataIssue.JSON_PROPERTY_SURCHARGE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse200DataIssue implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_PRICE = "price";
  private BigDecimal price;

  public static final String JSON_PROPERTY_ADMITTED_VOLUME = "admittedVolume";
  private BigDecimal admittedVolume;

  public static final String JSON_PROPERTY_VALUE_UNIT = "valueUnit";
  private InlineResponse200DataIssueValueUnit valueUnit;

  public static final String JSON_PROPERTY_SURCHARGE = "surcharge";
  private BigDecimal surcharge;


  public InlineResponse200DataIssue price(BigDecimal price) {
    this.price = price;
    return this;
  }

   /**
   * The price at which the instrument was issued.
   * @return price
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The price at which the instrument was issued.")
  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getPrice() {
    return price;
  }


  @JsonProperty(JSON_PROPERTY_PRICE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPrice(BigDecimal price) {
    this.price = price;
  }


  public InlineResponse200DataIssue admittedVolume(BigDecimal admittedVolume) {
    this.admittedVolume = admittedVolume;
    return this;
  }

   /**
   * Number of pieces of the instrument admitted to trading by the regulating authority.
   * @return admittedVolume
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Number of pieces of the instrument admitted to trading by the regulating authority.")
  @JsonProperty(JSON_PROPERTY_ADMITTED_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getAdmittedVolume() {
    return admittedVolume;
  }


  @JsonProperty(JSON_PROPERTY_ADMITTED_VOLUME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdmittedVolume(BigDecimal admittedVolume) {
    this.admittedVolume = admittedVolume;
  }


  public InlineResponse200DataIssue valueUnit(InlineResponse200DataIssueValueUnit valueUnit) {
    this.valueUnit = valueUnit;
    return this;
  }

   /**
   * Get valueUnit
   * @return valueUnit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_VALUE_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse200DataIssueValueUnit getValueUnit() {
    return valueUnit;
  }


  @JsonProperty(JSON_PROPERTY_VALUE_UNIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValueUnit(InlineResponse200DataIssueValueUnit valueUnit) {
    this.valueUnit = valueUnit;
  }


  public InlineResponse200DataIssue surcharge(BigDecimal surcharge) {
    this.surcharge = surcharge;
    return this;
  }

   /**
   * Issue surcharge. An additional charge paid to the issuer when purchasing the product during the subscription period (see attribute &#x60;lifeCycle.subscriptionPeriod&#x60;).
   * @return surcharge
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Issue surcharge. An additional charge paid to the issuer when purchasing the product during the subscription period (see attribute `lifeCycle.subscriptionPeriod`).")
  @JsonProperty(JSON_PROPERTY_SURCHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getSurcharge() {
    return surcharge;
  }


  @JsonProperty(JSON_PROPERTY_SURCHARGE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSurcharge(BigDecimal surcharge) {
    this.surcharge = surcharge;
  }


  /**
   * Return true if this inline_response_200_data_issue object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse200DataIssue inlineResponse200DataIssue = (InlineResponse200DataIssue) o;
    return Objects.equals(this.price, inlineResponse200DataIssue.price) &&
        Objects.equals(this.admittedVolume, inlineResponse200DataIssue.admittedVolume) &&
        Objects.equals(this.valueUnit, inlineResponse200DataIssue.valueUnit) &&
        Objects.equals(this.surcharge, inlineResponse200DataIssue.surcharge);
  }

  @Override
  public int hashCode() {
    return Objects.hash(price, admittedVolume, valueUnit, surcharge);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse200DataIssue {\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    admittedVolume: ").append(toIndentedString(admittedVolume)).append("\n");
    sb.append("    valueUnit: ").append(toIndentedString(valueUnit)).append("\n");
    sb.append("    surcharge: ").append(toIndentedString(surcharge)).append("\n");
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
