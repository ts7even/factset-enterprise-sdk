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
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2006FsymListing;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2006FsymRegional;
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
 * Notation-level FactSet identifiers of the financial instrument used primarily in FactSet products other than the MDG.
 */
@ApiModel(description = "Notation-level FactSet identifiers of the financial instrument used primarily in FactSet products other than the MDG.")
@JsonPropertyOrder({
  InlineResponse2006Fsym.JSON_PROPERTY_LISTING,
  InlineResponse2006Fsym.JSON_PROPERTY_REGIONAL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2006Fsym implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LISTING = "listing";
  private InlineResponse2006FsymListing listing;

  public static final String JSON_PROPERTY_REGIONAL = "regional";
  private InlineResponse2006FsymRegional regional;

  public InlineResponse2006Fsym() { 
  }

  public InlineResponse2006Fsym listing(InlineResponse2006FsymListing listing) {
    this.listing = listing;
    return this;
  }

   /**
   * Get listing
   * @return listing
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LISTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006FsymListing getListing() {
    return listing;
  }


  @JsonProperty(JSON_PROPERTY_LISTING)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setListing(InlineResponse2006FsymListing listing) {
    this.listing = listing;
  }


  public InlineResponse2006Fsym regional(InlineResponse2006FsymRegional regional) {
    this.regional = regional;
    return this;
  }

   /**
   * Get regional
   * @return regional
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REGIONAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2006FsymRegional getRegional() {
    return regional;
  }


  @JsonProperty(JSON_PROPERTY_REGIONAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegional(InlineResponse2006FsymRegional regional) {
    this.regional = regional;
  }


  /**
   * Return true if this inline_response_200_6_fsym object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2006Fsym inlineResponse2006Fsym = (InlineResponse2006Fsym) o;
    return Objects.equals(this.listing, inlineResponse2006Fsym.listing) &&
        Objects.equals(this.regional, inlineResponse2006Fsym.regional);
  }

  @Override
  public int hashCode() {
    return Objects.hash(listing, regional);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2006Fsym {\n");
    sb.append("    listing: ").append(toIndentedString(listing)).append("\n");
    sb.append("    regional: ").append(toIndentedString(regional)).append("\n");
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

