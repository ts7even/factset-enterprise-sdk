/*
 * Funds API For Digital Portals
 * Search for mutual funds and ETFs using one single consolidated API, including a criteria-based screener. The API provides also base data, key figures, and holdings.  A separate endpoint returns the possible values and value range for the parameters that the endpoint /fund/notation/screener/search accepts: Application developers can request the values and value range only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /fund/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for equity instruments and securitized derivatives: See the Stocks API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FundsAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.FundsAPIforDigitalPortals.models.InlineResponse2006DataPropertiesFund;
import com.factset.sdk.FundsAPIforDigitalPortals.models.InlineResponse2006DataPropertiesShareClass;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FundsAPIforDigitalPortals.JSON;


/**
 * Share class and fund properties.
 */
@ApiModel(description = "Share class and fund properties.")
@JsonPropertyOrder({
  InlineResponse2006DataProperties.JSON_PROPERTY_FUND,
  InlineResponse2006DataProperties.JSON_PROPERTY_SHARE_CLASS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006DataProperties implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FUND = "fund";
  private InlineResponse2006DataPropertiesFund fund;

  public static final String JSON_PROPERTY_SHARE_CLASS = "shareClass";
  private InlineResponse2006DataPropertiesShareClass shareClass;

  public InlineResponse2006DataProperties() { 
  }

  public InlineResponse2006DataProperties fund(InlineResponse2006DataPropertiesFund fund) {
    this.fund = fund;
    return this;
  }

   /**
   * Get fund
   * @return fund
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FUND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006DataPropertiesFund getFund() {
    return fund;
  }


  @JsonProperty(JSON_PROPERTY_FUND)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFund(InlineResponse2006DataPropertiesFund fund) {
    this.fund = fund;
  }


  public InlineResponse2006DataProperties shareClass(InlineResponse2006DataPropertiesShareClass shareClass) {
    this.shareClass = shareClass;
    return this;
  }

   /**
   * Get shareClass
   * @return shareClass
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SHARE_CLASS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006DataPropertiesShareClass getShareClass() {
    return shareClass;
  }


  @JsonProperty(JSON_PROPERTY_SHARE_CLASS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShareClass(InlineResponse2006DataPropertiesShareClass shareClass) {
    this.shareClass = shareClass;
  }


  /**
   * Return true if this inline_response_200_6_data_properties object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006DataProperties inlineResponse2006DataProperties = (InlineResponse2006DataProperties) o;
    return Objects.equals(this.fund, inlineResponse2006DataProperties.fund) &&
        Objects.equals(this.shareClass, inlineResponse2006DataProperties.shareClass);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fund, shareClass);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006DataProperties {\n");
    sb.append("    fund: ").append(toIndentedString(fund)).append("\n");
    sb.append("    shareClass: ").append(toIndentedString(shareClass)).append("\n");
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
