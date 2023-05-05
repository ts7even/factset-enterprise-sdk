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
 * DetailRatings
 */
@JsonPropertyOrder({
  DetailRatings.JSON_PROPERTY_FSYM_ID,
  DetailRatings.JSON_PROPERTY_ESTIMATE_DATE,
  DetailRatings.JSON_PROPERTY_ANALYST_ID,
  DetailRatings.JSON_PROPERTY_ANALYST_NAME,
  DetailRatings.JSON_PROPERTY_BROKER_ID,
  DetailRatings.JSON_PROPERTY_BROKER_NAME,
  DetailRatings.JSON_PROPERTY_RATINGS_NOTE_TEXT,
  DetailRatings.JSON_PROPERTY_REQUEST_ID,
  DetailRatings.JSON_PROPERTY_INPUT_DATE_TIME
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class DetailRatings implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_FSYM_ID = "fsymId";
  private String fsymId;

  public static final String JSON_PROPERTY_ESTIMATE_DATE = "estimateDate";
  private LocalDate estimateDate;

  public static final String JSON_PROPERTY_ANALYST_ID = "analystId";
  private String analystId;

  public static final String JSON_PROPERTY_ANALYST_NAME = "analystName";
  private String analystName;

  public static final String JSON_PROPERTY_BROKER_ID = "brokerId";
  private String brokerId;

  public static final String JSON_PROPERTY_BROKER_NAME = "brokerName";
  private String brokerName;

  public static final String JSON_PROPERTY_RATINGS_NOTE_TEXT = "ratingsNoteText";
  private String ratingsNoteText;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_INPUT_DATE_TIME = "inputDateTime";
  private String inputDateTime;

  public DetailRatings() { 
  }

  public DetailRatings fsymId(String fsymId) {
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


  public DetailRatings estimateDate(LocalDate estimateDate) {
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


  public DetailRatings analystId(String analystId) {
    this.analystId = analystId;
    return this;
  }

   /**
   * The FactSet Entity Identifier for the analyst making the estimate.
   * @return analystId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "0DXTST-E", value = "The FactSet Entity Identifier for the analyst making the estimate.")
  @JsonProperty(JSON_PROPERTY_ANALYST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAnalystId() {
    return analystId;
  }


  @JsonProperty(JSON_PROPERTY_ANALYST_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnalystId(String analystId) {
    this.analystId = analystId;
  }


  public DetailRatings analystName(String analystName) {
    this.analystName = analystName;
    return this;
  }

   /**
   * The name of the analyst making the estimate.
   * @return analystName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Josh Baer", value = "The name of the analyst making the estimate.")
  @JsonProperty(JSON_PROPERTY_ANALYST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAnalystName() {
    return analystName;
  }


  @JsonProperty(JSON_PROPERTY_ANALYST_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAnalystName(String analystName) {
    this.analystName = analystName;
  }


  public DetailRatings brokerId(String brokerId) {
    this.brokerId = brokerId;
    return this;
  }

   /**
   * The FactSet Entity Identifier for the broker making the estimate.
   * @return brokerId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "05FBK7-E", value = "The FactSet Entity Identifier for the broker making the estimate.")
  @JsonProperty(JSON_PROPERTY_BROKER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBrokerId() {
    return brokerId;
  }


  @JsonProperty(JSON_PROPERTY_BROKER_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBrokerId(String brokerId) {
    this.brokerId = brokerId;
  }


  public DetailRatings brokerName(String brokerName) {
    this.brokerName = brokerName;
    return this;
  }

   /**
   * The name of the broker making the estimate.
   * @return brokerName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Morgan Stanley", value = "The name of the broker making the estimate.")
  @JsonProperty(JSON_PROPERTY_BROKER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getBrokerName() {
    return brokerName;
  }


  @JsonProperty(JSON_PROPERTY_BROKER_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBrokerName(String brokerName) {
    this.brokerName = brokerName;
  }


  public DetailRatings ratingsNoteText(String ratingsNoteText) {
    this.ratingsNoteText = ratingsNoteText;
    return this;
  }

   /**
   * A textual representation of the analysts rating. Broker recommendations are divided into five main broad categories- **Buy, Overweight, Hold, Underweight, and Sell**.&lt;p&gt;Additional recommendations may be displayed for the below reasons -  * Without- A rating \&quot;Without\&quot; is displayed when a broker provides estimates but does not provide a rating. * Dropping- When a broker stops covering an equity, the recommendation will show \&quot;Dropping.\&quot; * Not Available- A broker may be \&quot;Not Available\&quot; due to outstanding circumstances with that particular security. Ratings are not displayed until a new rating is provided. * Most/Least- \&quot;Most\&quot; or \&quot;Least\&quot; favorable rating is displayed for top or bottom rating available for a particular security. 
   * @return ratingsNoteText
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "overweight", value = "A textual representation of the analysts rating. Broker recommendations are divided into five main broad categories- **Buy, Overweight, Hold, Underweight, and Sell**.<p>Additional recommendations may be displayed for the below reasons -  * Without- A rating \"Without\" is displayed when a broker provides estimates but does not provide a rating. * Dropping- When a broker stops covering an equity, the recommendation will show \"Dropping.\" * Not Available- A broker may be \"Not Available\" due to outstanding circumstances with that particular security. Ratings are not displayed until a new rating is provided. * Most/Least- \"Most\" or \"Least\" favorable rating is displayed for top or bottom rating available for a particular security. ")
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


  public DetailRatings requestId(String requestId) {
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


  public DetailRatings inputDateTime(String inputDateTime) {
    this.inputDateTime = inputDateTime;
    return this;
  }

   /**
   * Date and time when the data is available at the source.
   * @return inputDateTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2022-10-25T22:40:09", value = "Date and time when the data is available at the source.")
  @JsonProperty(JSON_PROPERTY_INPUT_DATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getInputDateTime() {
    return inputDateTime;
  }


  @JsonProperty(JSON_PROPERTY_INPUT_DATE_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setInputDateTime(String inputDateTime) {
    this.inputDateTime = inputDateTime;
  }


  /**
   * Return true if this detailRatings object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DetailRatings detailRatings = (DetailRatings) o;
    return Objects.equals(this.fsymId, detailRatings.fsymId) &&
        Objects.equals(this.estimateDate, detailRatings.estimateDate) &&
        Objects.equals(this.analystId, detailRatings.analystId) &&
        Objects.equals(this.analystName, detailRatings.analystName) &&
        Objects.equals(this.brokerId, detailRatings.brokerId) &&
        Objects.equals(this.brokerName, detailRatings.brokerName) &&
        Objects.equals(this.ratingsNoteText, detailRatings.ratingsNoteText) &&
        Objects.equals(this.requestId, detailRatings.requestId) &&
        Objects.equals(this.inputDateTime, detailRatings.inputDateTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fsymId, estimateDate, analystId, analystName, brokerId, brokerName, ratingsNoteText, requestId, inputDateTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DetailRatings {\n");
    sb.append("    fsymId: ").append(toIndentedString(fsymId)).append("\n");
    sb.append("    estimateDate: ").append(toIndentedString(estimateDate)).append("\n");
    sb.append("    analystId: ").append(toIndentedString(analystId)).append("\n");
    sb.append("    analystName: ").append(toIndentedString(analystName)).append("\n");
    sb.append("    brokerId: ").append(toIndentedString(brokerId)).append("\n");
    sb.append("    brokerName: ").append(toIndentedString(brokerName)).append("\n");
    sb.append("    ratingsNoteText: ").append(toIndentedString(ratingsNoteText)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    inputDateTime: ").append(toIndentedString(inputDateTime)).append("\n");
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

