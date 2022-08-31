/*
 * Stocks API For Digital Portals
 * The stocks API features a screener to search for equity instruments based on stock-specific parameters.  Parameters for up to three fiscal years might now be used in one request; data is available for the ten most recent completed fiscal years. Estimates are available for the current and two consecutive fiscal years.  A separate endpoint returns the possible values and value ranges for the parameters that the endpoint /stock/notation/screener/search accepts: Application developers can request the values and value ranges only for a restricted set of notations that match predefined parameters. This functionality may be used to pre-fill the values and value ranges of the parameters of the /stock/notation/screener/search endpoint so that performing a search always leads to a non-empty set of notations.  The endpoint /stock/notation/ranking/intraday/list ranks stocks notations using intraday figures, for example to build a gainers/losers list.   Additional endpoints include end-of-day benchmark key figures, and selected fundamentals (as of end of fiscal year and with potentially daily updates).  This API is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments, as well as basic security identifier cross-reference. For direct access to price histories, please refer to the Time Series API for Digital Portals.  Similar criteria based screener APIs exist for fixed income instruments and securitized derivatives: See the Bonds API and the Securitized Derivatives API for details.
 *
 * The version of the OpenAPI document: 2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.StocksAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2008DataComplianceFrance;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Compliance properties. A given compliance property may appear in combination with other compliance properties. The attribute &#x60;count&#x60; represents the number of all occurences of a compliance property, that is in all existing combinations, whereby the latter are not listed separately. See endpoint &#x60;/instrument/complianceProperty/list&#x60; for the full list of compliance properties associated with instruments (across all asset classes).
 */
@ApiModel(description = "Compliance properties. A given compliance property may appear in combination with other compliance properties. The attribute `count` represents the number of all occurences of a compliance property, that is in all existing combinations, whereby the latter are not listed separately. See endpoint `/instrument/complianceProperty/list` for the full list of compliance properties associated with instruments (across all asset classes).")
@JsonPropertyOrder({
  InlineResponse2008DataCompliance.JSON_PROPERTY_FRANCE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2008DataCompliance implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FRANCE = "france";
  private java.util.List<InlineResponse2008DataComplianceFrance> france = null;

  public InlineResponse2008DataCompliance() { 
  }

  public InlineResponse2008DataCompliance france(java.util.List<InlineResponse2008DataComplianceFrance> france) {
    this.france = france;
    return this;
  }

  public InlineResponse2008DataCompliance addFranceItem(InlineResponse2008DataComplianceFrance franceItem) {
    if (this.france == null) {
      this.france = new java.util.ArrayList<>();
    }
    this.france.add(franceItem);
    return this;
  }

   /**
   * Compliance properties in accordance with the French law.
   * @return france
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Compliance properties in accordance with the French law.")
  @JsonProperty(JSON_PROPERTY_FRANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse2008DataComplianceFrance> getFrance() {
    return france;
  }


  @JsonProperty(JSON_PROPERTY_FRANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFrance(java.util.List<InlineResponse2008DataComplianceFrance> france) {
    this.france = france;
  }


  /**
   * Return true if this inline_response_200_8_data_compliance object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2008DataCompliance inlineResponse2008DataCompliance = (InlineResponse2008DataCompliance) o;
    return Objects.equals(this.france, inlineResponse2008DataCompliance.france);
  }

  @Override
  public int hashCode() {
    return Objects.hash(france);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2008DataCompliance {\n");
    sb.append("    france: ").append(toIndentedString(france)).append("\n");
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

