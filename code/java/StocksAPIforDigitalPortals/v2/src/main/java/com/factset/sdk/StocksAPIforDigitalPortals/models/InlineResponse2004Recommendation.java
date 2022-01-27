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


package com.factset.sdk.StocksAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.StocksAPIforDigitalPortals.models.InlineResponse2004RecommendationCounts;
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
import com.factset.sdk.StocksAPIforDigitalPortals.JSON;


/**
 * Aggregated recommendation.
 */
@ApiModel(description = "Aggregated recommendation.")
@JsonPropertyOrder({
  InlineResponse2004Recommendation.JSON_PROPERTY_COUNTS,
  InlineResponse2004Recommendation.JSON_PROPERTY_CONSENSUS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2004Recommendation implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_COUNTS = "counts";
  private InlineResponse2004RecommendationCounts counts;

  public static final String JSON_PROPERTY_CONSENSUS = "consensus";
  private BigDecimal consensus;


  public InlineResponse2004Recommendation counts(InlineResponse2004RecommendationCounts counts) {
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

  public InlineResponse2004RecommendationCounts getCounts() {
    return counts;
  }


  @JsonProperty(JSON_PROPERTY_COUNTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCounts(InlineResponse2004RecommendationCounts counts) {
    this.counts = counts;
  }


  public InlineResponse2004Recommendation consensus(BigDecimal consensus) {
    this.consensus = consensus;
    return this;
  }

   /**
   * Recommendation consensus, which is the average value of all provided recommendations. Values are in the range from 1.0 to 5.0, whereby 1 represents the strongest buy recommendation, 3 a hold (neutral) recommendation and 5 the strongest sell recommendation.
   * @return consensus
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Recommendation consensus, which is the average value of all provided recommendations. Values are in the range from 1.0 to 5.0, whereby 1 represents the strongest buy recommendation, 3 a hold (neutral) recommendation and 5 the strongest sell recommendation.")
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
   * Return true if this inline_response_200_4_recommendation object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2004Recommendation inlineResponse2004Recommendation = (InlineResponse2004Recommendation) o;
    return Objects.equals(this.counts, inlineResponse2004Recommendation.counts) &&
        Objects.equals(this.consensus, inlineResponse2004Recommendation.consensus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(counts, consensus);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2004Recommendation {\n");
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
