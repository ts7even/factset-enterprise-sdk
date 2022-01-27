/*
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that provide events data such as Events Audio and Near Real-Time Transcripts  The  Events Audio API provides access to all audio recordings to various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service.
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.DocumentsDistributorCallStreetEvents.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.DocumentsDistributorCallStreetEvents.models.NRTSnippetsSnippetData;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.DocumentsDistributorCallStreetEvents.JSON;


/**
 * NRTSnippetsData
 */
@JsonPropertyOrder({
  NRTSnippetsData.JSON_PROPERTY_REPORT_ID,
  NRTSnippetsData.JSON_PROPERTY_SNIPPET_END_TIMESTAMP,
  NRTSnippetsData.JSON_PROPERTY_SNIPPET_DATA,
  NRTSnippetsData.JSON_PROPERTY_SNIPPET_SEQUENCE,
  NRTSnippetsData.JSON_PROPERTY_AUDIO_SOURCE_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class NRTSnippetsData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REPORT_ID = "reportId";
  private Integer reportId;

  public static final String JSON_PROPERTY_SNIPPET_END_TIMESTAMP = "snippetEndTimestamp";
  private String snippetEndTimestamp;

  public static final String JSON_PROPERTY_SNIPPET_DATA = "snippetData";
  private java.util.List<NRTSnippetsSnippetData> snippetData = null;

  public static final String JSON_PROPERTY_SNIPPET_SEQUENCE = "snippetSequence";
  private Integer snippetSequence;

  public static final String JSON_PROPERTY_AUDIO_SOURCE_ID = "audioSourceId";
  private Integer audioSourceId;


  public NRTSnippetsData reportId(Integer reportId) {
    this.reportId = reportId;
    return this;
  }

   /**
   * The unique ID for an event.
   * @return reportId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The unique ID for an event.")
  @JsonProperty(JSON_PROPERTY_REPORT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getReportId() {
    return reportId;
  }


  @JsonProperty(JSON_PROPERTY_REPORT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReportId(Integer reportId) {
    this.reportId = reportId;
  }


  public NRTSnippetsData snippetEndTimestamp(String snippetEndTimestamp) {
    this.snippetEndTimestamp = snippetEndTimestamp;
    return this;
  }

   /**
   * The snippet end time is calculated based off the endTime in the snippetData section and the recordingStartTime from the calls endpoint 
   * @return snippetEndTimestamp
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The snippet end time is calculated based off the endTime in the snippetData section and the recordingStartTime from the calls endpoint ")
  @JsonProperty(JSON_PROPERTY_SNIPPET_END_TIMESTAMP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSnippetEndTimestamp() {
    return snippetEndTimestamp;
  }


  @JsonProperty(JSON_PROPERTY_SNIPPET_END_TIMESTAMP)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSnippetEndTimestamp(String snippetEndTimestamp) {
    this.snippetEndTimestamp = snippetEndTimestamp;
  }


  public NRTSnippetsData snippetData(java.util.List<NRTSnippetsSnippetData> snippetData) {
    this.snippetData = snippetData;
    return this;
  }

  public NRTSnippetsData addSnippetDataItem(NRTSnippetsSnippetData snippetDataItem) {
    if (this.snippetData == null) {
      this.snippetData = new java.util.ArrayList<>();
    }
    this.snippetData.add(snippetDataItem);
    return this;
  }

   /**
   * Get snippetData
   * @return snippetData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SNIPPET_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<NRTSnippetsSnippetData> getSnippetData() {
    return snippetData;
  }


  @JsonProperty(JSON_PROPERTY_SNIPPET_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSnippetData(java.util.List<NRTSnippetsSnippetData> snippetData) {
    this.snippetData = snippetData;
  }


  public NRTSnippetsData snippetSequence(Integer snippetSequence) {
    this.snippetSequence = snippetSequence;
    return this;
  }

   /**
   * The sequence number of the snippet from the start of the current call 
   * @return snippetSequence
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The sequence number of the snippet from the start of the current call ")
  @JsonProperty(JSON_PROPERTY_SNIPPET_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getSnippetSequence() {
    return snippetSequence;
  }


  @JsonProperty(JSON_PROPERTY_SNIPPET_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSnippetSequence(Integer snippetSequence) {
    this.snippetSequence = snippetSequence;
  }


  public NRTSnippetsData audioSourceId(Integer audioSourceId) {
    this.audioSourceId = audioSourceId;
    return this;
  }

   /**
   * The Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from a different source (dial-in or webcast). One ReportID can have multiple AudioSource ids.
   * @return audioSourceId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The Unique ID for an Internal recording specific to reportID. For example, ReportID X would have multiple recordings from a different source (dial-in or webcast). One ReportID can have multiple AudioSource ids.")
  @JsonProperty(JSON_PROPERTY_AUDIO_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getAudioSourceId() {
    return audioSourceId;
  }


  @JsonProperty(JSON_PROPERTY_AUDIO_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAudioSourceId(Integer audioSourceId) {
    this.audioSourceId = audioSourceId;
  }


  /**
   * Return true if this NRT_Snippets_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    NRTSnippetsData nrTSnippetsData = (NRTSnippetsData) o;
    return Objects.equals(this.reportId, nrTSnippetsData.reportId) &&
        Objects.equals(this.snippetEndTimestamp, nrTSnippetsData.snippetEndTimestamp) &&
        Objects.equals(this.snippetData, nrTSnippetsData.snippetData) &&
        Objects.equals(this.snippetSequence, nrTSnippetsData.snippetSequence) &&
        Objects.equals(this.audioSourceId, nrTSnippetsData.audioSourceId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(reportId, snippetEndTimestamp, snippetData, snippetSequence, audioSourceId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class NRTSnippetsData {\n");
    sb.append("    reportId: ").append(toIndentedString(reportId)).append("\n");
    sb.append("    snippetEndTimestamp: ").append(toIndentedString(snippetEndTimestamp)).append("\n");
    sb.append("    snippetData: ").append(toIndentedString(snippetData)).append("\n");
    sb.append("    snippetSequence: ").append(toIndentedString(snippetSequence)).append("\n");
    sb.append("    audioSourceId: ").append(toIndentedString(audioSourceId)).append("\n");
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
