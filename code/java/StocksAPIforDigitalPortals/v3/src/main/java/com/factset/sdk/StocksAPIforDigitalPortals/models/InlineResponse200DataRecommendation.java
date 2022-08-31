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
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse200DataRecommendationCounts;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Details of the recommendations.
 */
@ApiModel(description = "Details of the recommendations.")
@JsonPropertyOrder({
  InlineResponse200DataRecommendation.JSON_PROPERTY_LATEST_UPDATE,
  InlineResponse200DataRecommendation.JSON_PROPERTY_COUNTS,
  InlineResponse200DataRecommendation.JSON_PROPERTY_CONSENSUS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse200DataRecommendation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_LATEST_UPDATE = "latestUpdate";
  private LocalDate latestUpdate;

  public static final String JSON_PROPERTY_COUNTS = "counts";
  private InlineResponse200DataRecommendationCounts counts;

  public static final String JSON_PROPERTY_CONSENSUS = "consensus";
  private BigDecimal consensus;

  public InlineResponse200DataRecommendation() { 
  }

  public InlineResponse200DataRecommendation latestUpdate(LocalDate latestUpdate) {
    this.latestUpdate = latestUpdate;
    return this;
  }

   /**
   * Date of the latest update.
   * @return latestUpdate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Date of the latest update.")
  @JsonProperty(JSON_PROPERTY_LATEST_UPDATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getLatestUpdate() {
    return latestUpdate;
  }


  @JsonProperty(JSON_PROPERTY_LATEST_UPDATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLatestUpdate(LocalDate latestUpdate) {
    this.latestUpdate = latestUpdate;
  }


  public InlineResponse200DataRecommendation counts(InlineResponse200DataRecommendationCounts counts) {
    this.counts = counts;
    return this;
  }

   /**
   * Get counts
   * @return counts
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_COUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse200DataRecommendationCounts getCounts() {
    return counts;
  }


  @JsonProperty(JSON_PROPERTY_COUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCounts(InlineResponse200DataRecommendationCounts counts) {
    this.counts = counts;
  }


  public InlineResponse200DataRecommendation consensus(BigDecimal consensus) {
    this.consensus = consensus;
    return this;
  }

   /**
   * Recommendation consensus, that is the average value of all provided recommendations. Values are in the range from 1.0 to 5.0, whereby 1 represents the strongest buy recommendation, 3 a hold (neutral) recommendation and 5 the strongest sell recommendation.
   * @return consensus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Recommendation consensus, that is the average value of all provided recommendations. Values are in the range from 1.0 to 5.0, whereby 1 represents the strongest buy recommendation, 3 a hold (neutral) recommendation and 5 the strongest sell recommendation.")
  @JsonProperty(JSON_PROPERTY_CONSENSUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getConsensus() {
    return consensus;
  }


  @JsonProperty(JSON_PROPERTY_CONSENSUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConsensus(BigDecimal consensus) {
    this.consensus = consensus;
  }


  /**
   * Return true if this inline_response_200_data_recommendation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse200DataRecommendation inlineResponse200DataRecommendation = (InlineResponse200DataRecommendation) o;
    return Objects.equals(this.latestUpdate, inlineResponse200DataRecommendation.latestUpdate) &&
        Objects.equals(this.counts, inlineResponse200DataRecommendation.counts) &&
        Objects.equals(this.consensus, inlineResponse200DataRecommendation.consensus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(latestUpdate, counts, consensus);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse200DataRecommendation {\n");
    sb.append("    latestUpdate: ").append(toIndentedString(latestUpdate)).append("\n");
    sb.append("    counts: ").append(toIndentedString(counts)).append("\n");
    sb.append("    consensus: ").append(toIndentedString(consensus)).append("\n");
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

