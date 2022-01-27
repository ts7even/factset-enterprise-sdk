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
import com.factset.sdk.BondsAPIforDigitalPortals.models.InlineResponse2003InstrumentCouponCurrentInterestRateType;
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
import com.factset.sdk.BondsAPIforDigitalPortals.JSON;


/**
 * Details of the current coupon period.
 */
@ApiModel(description = "Details of the current coupon period.")
@JsonPropertyOrder({
  InlineResponse2003InstrumentCouponCurrentInterestRate.JSON_PROPERTY_TYPE,
  InlineResponse2003InstrumentCouponCurrentInterestRate.JSON_PROPERTY_VALUE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003InstrumentCouponCurrentInterestRate implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TYPE = "type";
  private InlineResponse2003InstrumentCouponCurrentInterestRateType type;

  public static final String JSON_PROPERTY_VALUE = "value";
  private BigDecimal value;


  public InlineResponse2003InstrumentCouponCurrentInterestRate type(InlineResponse2003InstrumentCouponCurrentInterestRateType type) {
    this.type = type;
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2003InstrumentCouponCurrentInterestRateType getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(InlineResponse2003InstrumentCouponCurrentInterestRateType type) {
    this.type = type;
  }


  public InlineResponse2003InstrumentCouponCurrentInterestRate value(BigDecimal value) {
    this.value = value;
    return this;
  }

   /**
   * Value of the interest rate; annualized if the payment frequency is not \&quot;annually\&quot;. See endpoint &#x60;/instrument/coupon/keyData/get&#x60; for details regarding the current period.
   * @return value
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Value of the interest rate; annualized if the payment frequency is not \"annually\". See endpoint `/instrument/coupon/keyData/get` for details regarding the current period.")
  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getValue() {
    return value;
  }


  @JsonProperty(JSON_PROPERTY_VALUE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setValue(BigDecimal value) {
    this.value = value;
  }


  /**
   * Return true if this inline_response_200_3_instrument_coupon_currentInterestRate object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003InstrumentCouponCurrentInterestRate inlineResponse2003InstrumentCouponCurrentInterestRate = (InlineResponse2003InstrumentCouponCurrentInterestRate) o;
    return Objects.equals(this.type, inlineResponse2003InstrumentCouponCurrentInterestRate.type) &&
        Objects.equals(this.value, inlineResponse2003InstrumentCouponCurrentInterestRate.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(type, value);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003InstrumentCouponCurrentInterestRate {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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
