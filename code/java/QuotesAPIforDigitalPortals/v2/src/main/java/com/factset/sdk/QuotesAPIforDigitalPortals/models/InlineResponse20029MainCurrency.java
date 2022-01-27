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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
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
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Main currency corresponding to the fractional currency.
 */
@ApiModel(description = "Main currency corresponding to the fractional currency.")
@JsonPropertyOrder({
  InlineResponse20029MainCurrency.JSON_PROPERTY_ID,
  InlineResponse20029MainCurrency.JSON_PROPERTY_CODE,
  InlineResponse20029MainCurrency.JSON_PROPERTY_ISO_CODE,
  InlineResponse20029MainCurrency.JSON_PROPERTY_NAME,
  InlineResponse20029MainCurrency.JSON_PROPERTY_ACTIVE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20029MainCurrency implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private BigDecimal id;

  public static final String JSON_PROPERTY_CODE = "code";
  private String code;

  public static final String JSON_PROPERTY_ISO_CODE = "isoCode";
  private String isoCode;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_ACTIVE = "active";
  private Boolean active;


  public InlineResponse20029MainCurrency id(BigDecimal id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the main currency of the fractional currency.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the main currency of the fractional currency.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(BigDecimal id) {
    this.id = id;
  }


  public InlineResponse20029MainCurrency code(String code) {
    this.code = code;
    return this;
  }

   /**
   * Code of the currency: If assigned, a code according to ISO 4217, otherwise a local code.
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Code of the currency: If assigned, a code according to ISO 4217, otherwise a local code.")
  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getCode() {
    return code;
  }


  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCode(String code) {
    this.code = code;
  }


  public InlineResponse20029MainCurrency isoCode(String isoCode) {
    this.isoCode = isoCode;
    return this;
  }

   /**
   * ISO 4217 code of the currency.
   * @return isoCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ISO 4217 code of the currency.")
  @JsonProperty(JSON_PROPERTY_ISO_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIsoCode() {
    return isoCode;
  }


  @JsonProperty(JSON_PROPERTY_ISO_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsoCode(String isoCode) {
    this.isoCode = isoCode;
  }


  public InlineResponse20029MainCurrency name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the main currency.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of the main currency.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public InlineResponse20029MainCurrency active(Boolean active) {
    this.active = active;
    return this;
  }

   /**
   * Indicates whether the currency is active.
   * @return active
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Indicates whether the currency is active.")
  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getActive() {
    return active;
  }


  @JsonProperty(JSON_PROPERTY_ACTIVE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActive(Boolean active) {
    this.active = active;
  }


  /**
   * Return true if this inline_response_200_29_mainCurrency object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20029MainCurrency inlineResponse20029MainCurrency = (InlineResponse20029MainCurrency) o;
    return Objects.equals(this.id, inlineResponse20029MainCurrency.id) &&
        Objects.equals(this.code, inlineResponse20029MainCurrency.code) &&
        Objects.equals(this.isoCode, inlineResponse20029MainCurrency.isoCode) &&
        Objects.equals(this.name, inlineResponse20029MainCurrency.name) &&
        Objects.equals(this.active, inlineResponse20029MainCurrency.active);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, code, isoCode, name, active);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20029MainCurrency {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    isoCode: ").append(toIndentedString(isoCode)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    active: ").append(toIndentedString(active)).append("\n");
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
