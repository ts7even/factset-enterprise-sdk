/*
 * Documents Distributor - CallStreet Events
 * CallStreet Events contains all the Documents Distributor APIs that offer events data such as Events Audio and Near Real-Time Transcripts.  The  Events Audio API provides access to historical as well as the latest audio recordings of various company events covered by FactSet. The events include, but are not limited to: earnings calls, conferences, and investor days.   This API also provides relevant metadata such as timestamps and identifiers around each audio file.  The Documents Distributor - Near Real-time Transcripts API enables access to Near Real-time Transcripts provided by CallStreet to time-sensitive clients. This API also provides the relevant speaker metadata along with their confidence scores. This data caters to quant clients interested in building machine learning models.  Clients can leverage this API to perform sentiment analysis through natural language processing or machine learning. It can also be used to complement analysis using FactSet's transcripts service. 
 *
 * The version of the OpenAPI document: 1.8.3
 * Contact: api@factset.com
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
 * EventsAudio400ResponseDetailsValidParameters
 */
@JsonPropertyOrder({
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_SORT,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_PAGINATION_LIMIT,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_PAGINATION_OFFSET,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_REPORT_ID,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_START_DATE,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_END_DATE,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_IDS,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_SOURCE_CODE,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_FILE_NAME,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_TRIMMED,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_UPLOAD_TIME,
  EventsAudio400ResponseDetailsValidParameters.JSON_PROPERTY_AUDIO_SOURCE_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EventsAudio400ResponseDetailsValidParameters implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SORT = "_sort";
  private java.util.List<String> sort = null;

  public static final String JSON_PROPERTY_PAGINATION_LIMIT = "_paginationLimit";
  private java.util.List<String> paginationLimit = null;

  public static final String JSON_PROPERTY_PAGINATION_OFFSET = "_paginationOffset";
  private java.util.List<String> paginationOffset = null;

  public static final String JSON_PROPERTY_REPORT_ID = "reportId";
  private java.util.List<String> reportId = null;

  public static final String JSON_PROPERTY_START_DATE = "startDate";
  private java.util.List<String> startDate = null;

  public static final String JSON_PROPERTY_END_DATE = "endDate";
  private java.util.List<String> endDate = null;

  public static final String JSON_PROPERTY_IDS = "ids";
  private java.util.List<String> ids = null;

  public static final String JSON_PROPERTY_SOURCE_CODE = "sourceCode";
  private java.util.List<String> sourceCode = null;

  public static final String JSON_PROPERTY_FILE_NAME = "fileName";
  private java.util.List<String> fileName = null;

  public static final String JSON_PROPERTY_TRIMMED = "trimmed";
  private java.util.List<String> trimmed = null;

  public static final String JSON_PROPERTY_UPLOAD_TIME = "uploadTime";
  private java.util.List<String> uploadTime = null;

  public static final String JSON_PROPERTY_AUDIO_SOURCE_ID = "audioSourceId";
  private java.util.List<String> audioSourceId = null;

  public EventsAudio400ResponseDetailsValidParameters() { 
  }

  public EventsAudio400ResponseDetailsValidParameters sort(java.util.List<String> sort) {
    this.sort = sort;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addSortItem(String sortItem) {
    if (this.sort == null) {
      this.sort = new java.util.ArrayList<>();
    }
    this.sort.add(sortItem);
    return this;
  }

   /**
   * Get sort
   * @return sort
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getSort() {
    return sort;
  }


  @JsonProperty(JSON_PROPERTY_SORT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSort(java.util.List<String> sort) {
    this.sort = sort;
  }


  public EventsAudio400ResponseDetailsValidParameters paginationLimit(java.util.List<String> paginationLimit) {
    this.paginationLimit = paginationLimit;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addPaginationLimitItem(String paginationLimitItem) {
    if (this.paginationLimit == null) {
      this.paginationLimit = new java.util.ArrayList<>();
    }
    this.paginationLimit.add(paginationLimitItem);
    return this;
  }

   /**
   * Get paginationLimit
   * @return paginationLimit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PAGINATION_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getPaginationLimit() {
    return paginationLimit;
  }


  @JsonProperty(JSON_PROPERTY_PAGINATION_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaginationLimit(java.util.List<String> paginationLimit) {
    this.paginationLimit = paginationLimit;
  }


  public EventsAudio400ResponseDetailsValidParameters paginationOffset(java.util.List<String> paginationOffset) {
    this.paginationOffset = paginationOffset;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addPaginationOffsetItem(String paginationOffsetItem) {
    if (this.paginationOffset == null) {
      this.paginationOffset = new java.util.ArrayList<>();
    }
    this.paginationOffset.add(paginationOffsetItem);
    return this;
  }

   /**
   * Get paginationOffset
   * @return paginationOffset
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_PAGINATION_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getPaginationOffset() {
    return paginationOffset;
  }


  @JsonProperty(JSON_PROPERTY_PAGINATION_OFFSET)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPaginationOffset(java.util.List<String> paginationOffset) {
    this.paginationOffset = paginationOffset;
  }


  public EventsAudio400ResponseDetailsValidParameters reportId(java.util.List<String> reportId) {
    this.reportId = reportId;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addReportIdItem(String reportIdItem) {
    if (this.reportId == null) {
      this.reportId = new java.util.ArrayList<>();
    }
    this.reportId.add(reportIdItem);
    return this;
  }

   /**
   * Get reportId
   * @return reportId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REPORT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getReportId() {
    return reportId;
  }


  @JsonProperty(JSON_PROPERTY_REPORT_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setReportId(java.util.List<String> reportId) {
    this.reportId = reportId;
  }


  public EventsAudio400ResponseDetailsValidParameters startDate(java.util.List<String> startDate) {
    this.startDate = startDate;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addStartDateItem(String startDateItem) {
    if (this.startDate == null) {
      this.startDate = new java.util.ArrayList<>();
    }
    this.startDate.add(startDateItem);
    return this;
  }

   /**
   * Get startDate
   * @return startDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getStartDate() {
    return startDate;
  }


  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setStartDate(java.util.List<String> startDate) {
    this.startDate = startDate;
  }


  public EventsAudio400ResponseDetailsValidParameters endDate(java.util.List<String> endDate) {
    this.endDate = endDate;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addEndDateItem(String endDateItem) {
    if (this.endDate == null) {
      this.endDate = new java.util.ArrayList<>();
    }
    this.endDate.add(endDateItem);
    return this;
  }

   /**
   * Get endDate
   * @return endDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getEndDate() {
    return endDate;
  }


  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEndDate(java.util.List<String> endDate) {
    this.endDate = endDate;
  }


  public EventsAudio400ResponseDetailsValidParameters ids(java.util.List<String> ids) {
    this.ids = ids;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addIdsItem(String idsItem) {
    if (this.ids == null) {
      this.ids = new java.util.ArrayList<>();
    }
    this.ids.add(idsItem);
    return this;
  }

   /**
   * Get ids
   * @return ids
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getIds() {
    return ids;
  }


  @JsonProperty(JSON_PROPERTY_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIds(java.util.List<String> ids) {
    this.ids = ids;
  }


  public EventsAudio400ResponseDetailsValidParameters sourceCode(java.util.List<String> sourceCode) {
    this.sourceCode = sourceCode;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addSourceCodeItem(String sourceCodeItem) {
    if (this.sourceCode == null) {
      this.sourceCode = new java.util.ArrayList<>();
    }
    this.sourceCode.add(sourceCodeItem);
    return this;
  }

   /**
   * Get sourceCode
   * @return sourceCode
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SOURCE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getSourceCode() {
    return sourceCode;
  }


  @JsonProperty(JSON_PROPERTY_SOURCE_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSourceCode(java.util.List<String> sourceCode) {
    this.sourceCode = sourceCode;
  }


  public EventsAudio400ResponseDetailsValidParameters fileName(java.util.List<String> fileName) {
    this.fileName = fileName;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addFileNameItem(String fileNameItem) {
    if (this.fileName == null) {
      this.fileName = new java.util.ArrayList<>();
    }
    this.fileName.add(fileNameItem);
    return this;
  }

   /**
   * Get fileName
   * @return fileName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getFileName() {
    return fileName;
  }


  @JsonProperty(JSON_PROPERTY_FILE_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setFileName(java.util.List<String> fileName) {
    this.fileName = fileName;
  }


  public EventsAudio400ResponseDetailsValidParameters trimmed(java.util.List<String> trimmed) {
    this.trimmed = trimmed;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addTrimmedItem(String trimmedItem) {
    if (this.trimmed == null) {
      this.trimmed = new java.util.ArrayList<>();
    }
    this.trimmed.add(trimmedItem);
    return this;
  }

   /**
   * Get trimmed
   * @return trimmed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TRIMMED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getTrimmed() {
    return trimmed;
  }


  @JsonProperty(JSON_PROPERTY_TRIMMED)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTrimmed(java.util.List<String> trimmed) {
    this.trimmed = trimmed;
  }


  public EventsAudio400ResponseDetailsValidParameters uploadTime(java.util.List<String> uploadTime) {
    this.uploadTime = uploadTime;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addUploadTimeItem(String uploadTimeItem) {
    if (this.uploadTime == null) {
      this.uploadTime = new java.util.ArrayList<>();
    }
    this.uploadTime.add(uploadTimeItem);
    return this;
  }

   /**
   * Get uploadTime
   * @return uploadTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_UPLOAD_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getUploadTime() {
    return uploadTime;
  }


  @JsonProperty(JSON_PROPERTY_UPLOAD_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUploadTime(java.util.List<String> uploadTime) {
    this.uploadTime = uploadTime;
  }


  public EventsAudio400ResponseDetailsValidParameters audioSourceId(java.util.List<String> audioSourceId) {
    this.audioSourceId = audioSourceId;
    return this;
  }

  public EventsAudio400ResponseDetailsValidParameters addAudioSourceIdItem(String audioSourceIdItem) {
    if (this.audioSourceId == null) {
      this.audioSourceId = new java.util.ArrayList<>();
    }
    this.audioSourceId.add(audioSourceIdItem);
    return this;
  }

   /**
   * Get audioSourceId
   * @return audioSourceId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_AUDIO_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<String> getAudioSourceId() {
    return audioSourceId;
  }


  @JsonProperty(JSON_PROPERTY_AUDIO_SOURCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAudioSourceId(java.util.List<String> audioSourceId) {
    this.audioSourceId = audioSourceId;
  }


  /**
   * Return true if this Events_Audio_400_Response_details_validParameters object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventsAudio400ResponseDetailsValidParameters eventsAudio400ResponseDetailsValidParameters = (EventsAudio400ResponseDetailsValidParameters) o;
    return Objects.equals(this.sort, eventsAudio400ResponseDetailsValidParameters.sort) &&
        Objects.equals(this.paginationLimit, eventsAudio400ResponseDetailsValidParameters.paginationLimit) &&
        Objects.equals(this.paginationOffset, eventsAudio400ResponseDetailsValidParameters.paginationOffset) &&
        Objects.equals(this.reportId, eventsAudio400ResponseDetailsValidParameters.reportId) &&
        Objects.equals(this.startDate, eventsAudio400ResponseDetailsValidParameters.startDate) &&
        Objects.equals(this.endDate, eventsAudio400ResponseDetailsValidParameters.endDate) &&
        Objects.equals(this.ids, eventsAudio400ResponseDetailsValidParameters.ids) &&
        Objects.equals(this.sourceCode, eventsAudio400ResponseDetailsValidParameters.sourceCode) &&
        Objects.equals(this.fileName, eventsAudio400ResponseDetailsValidParameters.fileName) &&
        Objects.equals(this.trimmed, eventsAudio400ResponseDetailsValidParameters.trimmed) &&
        Objects.equals(this.uploadTime, eventsAudio400ResponseDetailsValidParameters.uploadTime) &&
        Objects.equals(this.audioSourceId, eventsAudio400ResponseDetailsValidParameters.audioSourceId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(sort, paginationLimit, paginationOffset, reportId, startDate, endDate, ids, sourceCode, fileName, trimmed, uploadTime, audioSourceId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventsAudio400ResponseDetailsValidParameters {\n");
    sb.append("    sort: ").append(toIndentedString(sort)).append("\n");
    sb.append("    paginationLimit: ").append(toIndentedString(paginationLimit)).append("\n");
    sb.append("    paginationOffset: ").append(toIndentedString(paginationOffset)).append("\n");
    sb.append("    reportId: ").append(toIndentedString(reportId)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    ids: ").append(toIndentedString(ids)).append("\n");
    sb.append("    sourceCode: ").append(toIndentedString(sourceCode)).append("\n");
    sb.append("    fileName: ").append(toIndentedString(fileName)).append("\n");
    sb.append("    trimmed: ").append(toIndentedString(trimmed)).append("\n");
    sb.append("    uploadTime: ").append(toIndentedString(uploadTime)).append("\n");
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

