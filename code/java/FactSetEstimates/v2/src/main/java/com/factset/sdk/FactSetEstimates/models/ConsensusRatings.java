/*
 * FactSet Estimates
 * Gain access to 20+ years of comprehensive estimates and statistics of over 250+ estimated metrics, including financial statement items, product segments, geosegments, and industry metrics. FactSet's consensus estimates are aggregated from a wide base of over 800+ contributors and cover over 19,000 active companies across 90+ countries. Data returned can be accessed on the data frequencies based on quarterly, fiscal years, and calendar years. FactSet Estimates updates on a real time basis intraday (every 5 minutes). Updating times vary based on earning season vs. non-earning season but the goal is to have the data available to the client within a few hours that FactSet receives updated information. Often times updates times can be much faster as FactSet has always been known as one of the fastest estimate providers in the market. 
 *
 * The version of the OpenAPI document: 2.3.1
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetEstimates.models;

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
import java.time.LocalDate;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.FactSetEstimates.JSON;


/**
 * ConsensusRatings
 */
@JsonPropertyOrder({
  ConsensusRatings.JSON_PROPERTY_FSYM_ID,
  ConsensusRatings.JSON_PROPERTY_ESTIMATE_DATE,
  ConsensusRatings.JSON_PROPERTY_BUY_COUNT,
  ConsensusRatings.JSON_PROPERTY_OVERWEIGHT_COUNT,
  ConsensusRatings.JSON_PROPERTY_HOLD_COUNT,
  ConsensusRatings.JSON_PROPERTY_UNDERWEIGHT_COUNT,
  ConsensusRatings.JSON_PROPERTY_SELL_COUNT,
  ConsensusRatings.JSON_PROPERTY_RATINGS_NEST_TOTAL,
  ConsensusRatings.JSON_PROPERTY_RATINGS_NOTE,
  ConsensusRatings.JSON_PROPERTY_RATINGS_NOTE_TEXT,
  ConsensusRatings.JSON_PROPERTY_REQUEST_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ConsensusRatings implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_ESTIMATE_DATE = "estimateDate";
  private LocalDate estimateDate;

  public static final String JSON_PROPERTY_BUY_COUNT = "buyCount";
  private Integer buyCount;

  public static final String JSON_PROPERTY_OVERWEIGHT_COUNT = "overweightCount";
  private Integer overweightCount;

  public static final String JSON_PROPERTY_HOLD_COUNT = "holdCount";
  private Integer holdCount;

  public static final String JSON_PROPERTY_UNDERWEIGHT_COUNT = "underweightCount";
  private Integer underweightCount;

  public static final String JSON_PROPERTY_SELL_COUNT = "sellCount";
  private Integer sellCount;

  public static final String JSON_PROPERTY_RATINGS_NEST_TOTAL = "ratingsNestTotal";
  private Integer ratingsNestTotal;

  public static final String JSON_PROPERTY_RATINGS_NOTE = "ratingsNote";
  private Double ratingsNote;

  public static final String JSON_PROPERTY_RATINGS_NOTE_TEXT = "ratingsNoteText";
  private String ratingsNoteText;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public ConsensusRatings() { 
  }

  public ConsensusRatings fsymId(String fsymId) {
    this.fsymId = fsymId;
    return this;
  }

   /**
   * Get fsymId
   * @return fsymId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "SJY281-R", value = "")
  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getFsymId() {
    return fsymId;
  }


  @JsonProperty(JSON_PROPERTY_FSYM_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFsymId(String fsymId) {
    this.fsymId = fsymId;
  }


  public ConsensusRatings estimateDate(LocalDate estimateDate) {
    this.estimateDate = estimateDate;
    return this;
  }

   /**
   * Date of estimate expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)
   * @return estimateDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Mon Jul 24 00:00:00 UTC 2017", value = "Date of estimate expressed in YYYY-MM-DD format. For more details, visit [Online Assistant Page #16598](https://oa.apps.factset.com/pages/16598)")
  @JsonProperty(JSON_PROPERTY_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public LocalDate getEstimateDate() {
    return estimateDate;
  }


  @JsonProperty(JSON_PROPERTY_ESTIMATE_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEstimateDate(LocalDate estimateDate) {
    this.estimateDate = estimateDate;
  }


  public ConsensusRatings buyCount(Integer buyCount) {
    this.buyCount = buyCount;
    return this;
  }

   /**
   * The number of Buy ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return buyCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "5", value = "The number of Buy ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_BUY_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getBuyCount() {
    return buyCount;
  }


  @JsonProperty(JSON_PROPERTY_BUY_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBuyCount(Integer buyCount) {
    this.buyCount = buyCount;
  }


  public ConsensusRatings overweightCount(Integer overweightCount) {
    this.overweightCount = overweightCount;
    return this;
  }

   /**
   * The number of Overweight ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return overweightCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The number of Overweight ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_OVERWEIGHT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getOverweightCount() {
    return overweightCount;
  }


  @JsonProperty(JSON_PROPERTY_OVERWEIGHT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setOverweightCount(Integer overweightCount) {
    this.overweightCount = overweightCount;
  }


  public ConsensusRatings holdCount(Integer holdCount) {
    this.holdCount = holdCount;
    return this;
  }

   /**
   * The number of Hold ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return holdCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The number of Hold ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_HOLD_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getHoldCount() {
    return holdCount;
  }


  @JsonProperty(JSON_PROPERTY_HOLD_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setHoldCount(Integer holdCount) {
    this.holdCount = holdCount;
  }


  public ConsensusRatings underweightCount(Integer underweightCount) {
    this.underweightCount = underweightCount;
    return this;
  }

   /**
   * The number of Underweight ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return underweightCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The number of Underweight ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_UNDERWEIGHT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getUnderweightCount() {
    return underweightCount;
  }


  @JsonProperty(JSON_PROPERTY_UNDERWEIGHT_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUnderweightCount(Integer underweightCount) {
    this.underweightCount = underweightCount;
  }


  public ConsensusRatings sellCount(Integer sellCount) {
    this.sellCount = sellCount;
    return this;
  }

   /**
   * The number of Sell ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return sellCount
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The number of Sell ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_SELL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getSellCount() {
    return sellCount;
  }


  @JsonProperty(JSON_PROPERTY_SELL_COUNT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSellCount(Integer sellCount) {
    this.sellCount = sellCount;
  }


  public ConsensusRatings ratingsNestTotal(Integer ratingsNestTotal) {
    this.ratingsNestTotal = ratingsNestTotal;
    return this;
  }

   /**
   * The total number of ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.
   * @return ratingsNestTotal
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "The total number of ratings taken into account in the calculation of a consensus. This information is shown only for a 100-day consensus.")
  @JsonProperty(JSON_PROPERTY_RATINGS_NEST_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getRatingsNestTotal() {
    return ratingsNestTotal;
  }


  @JsonProperty(JSON_PROPERTY_RATINGS_NEST_TOTAL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRatingsNestTotal(Integer ratingsNestTotal) {
    this.ratingsNestTotal = ratingsNestTotal;
  }


  public ConsensusRatings ratingsNote(Double ratingsNote) {
    this.ratingsNote = ratingsNote;
    return this;
  }

   /**
   * The mean average of ratings for the fiscal dates indicated, where each underlying rating is given a numerical score and then aggregated to a mean consensus - __*Individual Ratings Scores*__ |Value|Rating Description| |---|---| |1|Buy| |1.5|Overweight| |2|Hold| |2.5|Underweight| |3|Sell| 
   * @return ratingsNote
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1.85555", value = "The mean average of ratings for the fiscal dates indicated, where each underlying rating is given a numerical score and then aggregated to a mean consensus - __*Individual Ratings Scores*__ |Value|Rating Description| |---|---| |1|Buy| |1.5|Overweight| |2|Hold| |2.5|Underweight| |3|Sell| ")
  @JsonProperty(JSON_PROPERTY_RATINGS_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getRatingsNote() {
    return ratingsNote;
  }


  @JsonProperty(JSON_PROPERTY_RATINGS_NOTE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRatingsNote(Double ratingsNote) {
    this.ratingsNote = ratingsNote;
  }


  public ConsensusRatings ratingsNoteText(String ratingsNoteText) {
    this.ratingsNoteText = ratingsNoteText;
    return this;
  }

   /**
   * The mean textual rating for the fiscal dates indicated. The text rating is assigned by falling within the below defined ranges -  __*Textual Ranges for Average*__ |Value|Rating Description| |---|---| |&lt; 1.25|Buy| |&lt; 1.75|Overweight| |&lt; 2.25|Hold| |&lt; 2.75|Underweight| |&lt;&#x3D; 3|Sell| 
   * @return ratingsNoteText
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Hold", value = "The mean textual rating for the fiscal dates indicated. The text rating is assigned by falling within the below defined ranges -  __*Textual Ranges for Average*__ |Value|Rating Description| |---|---| |< 1.25|Buy| |< 1.75|Overweight| |< 2.25|Hold| |< 2.75|Underweight| |<= 3|Sell| ")
  @JsonProperty(JSON_PROPERTY_RATINGS_NOTE_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRatingsNoteText() {
    return ratingsNoteText;
  }


  @JsonProperty(JSON_PROPERTY_RATINGS_NOTE_TEXT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRatingsNoteText(String ratingsNoteText) {
    this.ratingsNoteText = ratingsNoteText;
  }


  public ConsensusRatings requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * Identifier that was used for the request.
   * @return requestId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "IBM-US", value = "Identifier that was used for the request.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  /**
   * Return true if this consensusRatings object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ConsensusRatings consensusRatings = (ConsensusRatings) o;
    return Objects.equals(this.fsymId, consensusRatings.fsymId) &&
        Objects.equals(this.estimateDate, consensusRatings.estimateDate) &&
        Objects.equals(this.buyCount, consensusRatings.buyCount) &&
        Objects.equals(this.overweightCount, consensusRatings.overweightCount) &&
        Objects.equals(this.holdCount, consensusRatings.holdCount) &&
        Objects.equals(this.underweightCount, consensusRatings.underweightCount) &&
        Objects.equals(this.sellCount, consensusRatings.sellCount) &&
        Objects.equals(this.ratingsNestTotal, consensusRatings.ratingsNestTotal) &&
        Objects.equals(this.ratingsNote, consensusRatings.ratingsNote) &&
        Objects.equals(this.ratingsNoteText, consensusRatings.ratingsNoteText) &&
        Objects.equals(this.requestId, consensusRatings.requestId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, estimateDate, buyCount, overweightCount, holdCount, underweightCount, sellCount, ratingsNestTotal, ratingsNote, ratingsNoteText, requestId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ConsensusRatings {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    estimateDate: ").append(toIndentedString(estimateDate)).append("\n");
    sb.append("    buyCount: ").append(toIndentedString(buyCount)).append("\n");
    sb.append("    overweightCount: ").append(toIndentedString(overweightCount)).append("\n");
    sb.append("    holdCount: ").append(toIndentedString(holdCount)).append("\n");
    sb.append("    underweightCount: ").append(toIndentedString(underweightCount)).append("\n");
    sb.append("    sellCount: ").append(toIndentedString(sellCount)).append("\n");
    sb.append("    ratingsNestTotal: ").append(toIndentedString(ratingsNestTotal)).append("\n");
    sb.append("    ratingsNote: ").append(toIndentedString(ratingsNote)).append("\n");
    sb.append("    ratingsNoteText: ").append(toIndentedString(ratingsNoteText)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
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

