/*
 * IRN API v1
 * Allows users to create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.IRNConfiguration.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.IRNConfiguration.models.ApprovalProcessConfigDto;
import com.factset.sdk.IRNConfiguration.models.CommentaryConfigDto;
import com.factset.sdk.IRNConfiguration.models.HeadlineFormatConfigDto;
import com.factset.sdk.IRNConfiguration.models.RatingConfigDto;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.IRNConfiguration.JSON;


/**
 * SubjectConfigDto
 */
@JsonPropertyOrder({
  SubjectConfigDto.JSON_PROPERTY_ID,
  SubjectConfigDto.JSON_PROPERTY_NAME,
  SubjectConfigDto.JSON_PROPERTY_CODE,
  SubjectConfigDto.JSON_PROPERTY_IS_HIDDEN,
  SubjectConfigDto.JSON_PROPERTY_IDENTIFIER_TYPE,
  SubjectConfigDto.JSON_PROPERTY_CUSTOM_FIELD_IDS,
  SubjectConfigDto.JSON_PROPERTY_APPROVAL_PROCESS_CONFIG,
  SubjectConfigDto.JSON_PROPERTY_COMMENTARY_CONFIG,
  SubjectConfigDto.JSON_PROPERTY_NEWS_HEADLINE_FORMAT,
  SubjectConfigDto.JSON_PROPERTY_EMAIL_HEADLINE_FORMAT,
  SubjectConfigDto.JSON_PROPERTY_RATING_CONFIG
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SubjectConfigDto implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private java.util.UUID id;

  public static final String JSON_PROPERTY_NAME = "name";
  private JsonNullable<String> name = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CODE = "code";
  private JsonNullable<String> code = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_IS_HIDDEN = "isHidden";
  private Boolean isHidden;

  public static final String JSON_PROPERTY_IDENTIFIER_TYPE = "identifierType";
  private JsonNullable<String> identifierType = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CUSTOM_FIELD_IDS = "customFieldIds";
  private JsonNullable<java.util.List<java.util.UUID>> customFieldIds = JsonNullable.<java.util.List<java.util.UUID>>undefined();

  public static final String JSON_PROPERTY_APPROVAL_PROCESS_CONFIG = "approvalProcessConfig";
  private ApprovalProcessConfigDto approvalProcessConfig;

  public static final String JSON_PROPERTY_COMMENTARY_CONFIG = "commentaryConfig";
  private CommentaryConfigDto commentaryConfig;

  public static final String JSON_PROPERTY_NEWS_HEADLINE_FORMAT = "newsHeadlineFormat";
  private JsonNullable<java.util.List<HeadlineFormatConfigDto>> newsHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>undefined();

  public static final String JSON_PROPERTY_EMAIL_HEADLINE_FORMAT = "emailHeadlineFormat";
  private JsonNullable<java.util.List<HeadlineFormatConfigDto>> emailHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>undefined();

  public static final String JSON_PROPERTY_RATING_CONFIG = "ratingConfig";
  private RatingConfigDto ratingConfig;


  public SubjectConfigDto id(java.util.UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.UUID getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(java.util.UUID id) {
    this.id = id;
  }


  public SubjectConfigDto name(String name) {
    this.name = JsonNullable.<String>of(name);
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getName() {
        return name.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getName_JsonNullable() {
    return name;
  }
  
  @JsonProperty(JSON_PROPERTY_NAME)
  public void setName_JsonNullable(JsonNullable<String> name) {
    this.name = name;
  }

  public void setName(String name) {
    this.name = JsonNullable.<String>of(name);
  }


  public SubjectConfigDto code(String code) {
    this.code = JsonNullable.<String>of(code);
    return this;
  }

   /**
   * Get code
   * @return code
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getCode() {
        return code.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CODE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getCode_JsonNullable() {
    return code;
  }
  
  @JsonProperty(JSON_PROPERTY_CODE)
  public void setCode_JsonNullable(JsonNullable<String> code) {
    this.code = code;
  }

  public void setCode(String code) {
    this.code = JsonNullable.<String>of(code);
  }


  public SubjectConfigDto isHidden(Boolean isHidden) {
    this.isHidden = isHidden;
    return this;
  }

   /**
   * Get isHidden
   * @return isHidden
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_IS_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsHidden() {
    return isHidden;
  }


  @JsonProperty(JSON_PROPERTY_IS_HIDDEN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsHidden(Boolean isHidden) {
    this.isHidden = isHidden;
  }


  public SubjectConfigDto identifierType(String identifierType) {
    this.identifierType = JsonNullable.<String>of(identifierType);
    return this;
  }

   /**
   * Get identifierType
   * @return identifierType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getIdentifierType() {
        return identifierType.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_IDENTIFIER_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getIdentifierType_JsonNullable() {
    return identifierType;
  }
  
  @JsonProperty(JSON_PROPERTY_IDENTIFIER_TYPE)
  public void setIdentifierType_JsonNullable(JsonNullable<String> identifierType) {
    this.identifierType = identifierType;
  }

  public void setIdentifierType(String identifierType) {
    this.identifierType = JsonNullable.<String>of(identifierType);
  }


  public SubjectConfigDto customFieldIds(java.util.List<java.util.UUID> customFieldIds) {
    this.customFieldIds = JsonNullable.<java.util.List<java.util.UUID>>of(customFieldIds);
    return this;
  }

  public SubjectConfigDto addCustomFieldIdsItem(java.util.UUID customFieldIdsItem) {
    if (this.customFieldIds == null || !this.customFieldIds.isPresent()) {
      this.customFieldIds = JsonNullable.<java.util.List<java.util.UUID>>of(new java.util.ArrayList<>());
    }
    try {
      this.customFieldIds.get().add(customFieldIdsItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * Get customFieldIds
   * @return customFieldIds
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public java.util.List<java.util.UUID> getCustomFieldIds() {
        return customFieldIds.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELD_IDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<java.util.UUID>> getCustomFieldIds_JsonNullable() {
    return customFieldIds;
  }
  
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELD_IDS)
  public void setCustomFieldIds_JsonNullable(JsonNullable<java.util.List<java.util.UUID>> customFieldIds) {
    this.customFieldIds = customFieldIds;
  }

  public void setCustomFieldIds(java.util.List<java.util.UUID> customFieldIds) {
    this.customFieldIds = JsonNullable.<java.util.List<java.util.UUID>>of(customFieldIds);
  }


  public SubjectConfigDto approvalProcessConfig(ApprovalProcessConfigDto approvalProcessConfig) {
    this.approvalProcessConfig = approvalProcessConfig;
    return this;
  }

   /**
   * Get approvalProcessConfig
   * @return approvalProcessConfig
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_APPROVAL_PROCESS_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public ApprovalProcessConfigDto getApprovalProcessConfig() {
    return approvalProcessConfig;
  }


  @JsonProperty(JSON_PROPERTY_APPROVAL_PROCESS_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setApprovalProcessConfig(ApprovalProcessConfigDto approvalProcessConfig) {
    this.approvalProcessConfig = approvalProcessConfig;
  }


  public SubjectConfigDto commentaryConfig(CommentaryConfigDto commentaryConfig) {
    this.commentaryConfig = commentaryConfig;
    return this;
  }

   /**
   * Get commentaryConfig
   * @return commentaryConfig
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_COMMENTARY_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public CommentaryConfigDto getCommentaryConfig() {
    return commentaryConfig;
  }


  @JsonProperty(JSON_PROPERTY_COMMENTARY_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setCommentaryConfig(CommentaryConfigDto commentaryConfig) {
    this.commentaryConfig = commentaryConfig;
  }


  public SubjectConfigDto newsHeadlineFormat(java.util.List<HeadlineFormatConfigDto> newsHeadlineFormat) {
    this.newsHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(newsHeadlineFormat);
    return this;
  }

  public SubjectConfigDto addNewsHeadlineFormatItem(HeadlineFormatConfigDto newsHeadlineFormatItem) {
    if (this.newsHeadlineFormat == null || !this.newsHeadlineFormat.isPresent()) {
      this.newsHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(new java.util.ArrayList<>());
    }
    try {
      this.newsHeadlineFormat.get().add(newsHeadlineFormatItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * Get newsHeadlineFormat
   * @return newsHeadlineFormat
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public java.util.List<HeadlineFormatConfigDto> getNewsHeadlineFormat() {
        return newsHeadlineFormat.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_NEWS_HEADLINE_FORMAT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<HeadlineFormatConfigDto>> getNewsHeadlineFormat_JsonNullable() {
    return newsHeadlineFormat;
  }
  
  @JsonProperty(JSON_PROPERTY_NEWS_HEADLINE_FORMAT)
  public void setNewsHeadlineFormat_JsonNullable(JsonNullable<java.util.List<HeadlineFormatConfigDto>> newsHeadlineFormat) {
    this.newsHeadlineFormat = newsHeadlineFormat;
  }

  public void setNewsHeadlineFormat(java.util.List<HeadlineFormatConfigDto> newsHeadlineFormat) {
    this.newsHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(newsHeadlineFormat);
  }


  public SubjectConfigDto emailHeadlineFormat(java.util.List<HeadlineFormatConfigDto> emailHeadlineFormat) {
    this.emailHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(emailHeadlineFormat);
    return this;
  }

  public SubjectConfigDto addEmailHeadlineFormatItem(HeadlineFormatConfigDto emailHeadlineFormatItem) {
    if (this.emailHeadlineFormat == null || !this.emailHeadlineFormat.isPresent()) {
      this.emailHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(new java.util.ArrayList<>());
    }
    try {
      this.emailHeadlineFormat.get().add(emailHeadlineFormatItem);
    } catch (java.util.NoSuchElementException e) {
      // this can never happen, as we make sure above that the value is present
    }
    return this;
  }

   /**
   * Get emailHeadlineFormat
   * @return emailHeadlineFormat
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public java.util.List<HeadlineFormatConfigDto> getEmailHeadlineFormat() {
        return emailHeadlineFormat.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EMAIL_HEADLINE_FORMAT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.List<HeadlineFormatConfigDto>> getEmailHeadlineFormat_JsonNullable() {
    return emailHeadlineFormat;
  }
  
  @JsonProperty(JSON_PROPERTY_EMAIL_HEADLINE_FORMAT)
  public void setEmailHeadlineFormat_JsonNullable(JsonNullable<java.util.List<HeadlineFormatConfigDto>> emailHeadlineFormat) {
    this.emailHeadlineFormat = emailHeadlineFormat;
  }

  public void setEmailHeadlineFormat(java.util.List<HeadlineFormatConfigDto> emailHeadlineFormat) {
    this.emailHeadlineFormat = JsonNullable.<java.util.List<HeadlineFormatConfigDto>>of(emailHeadlineFormat);
  }


  public SubjectConfigDto ratingConfig(RatingConfigDto ratingConfig) {
    this.ratingConfig = ratingConfig;
    return this;
  }

   /**
   * Get ratingConfig
   * @return ratingConfig
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_RATING_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public RatingConfigDto getRatingConfig() {
    return ratingConfig;
  }


  @JsonProperty(JSON_PROPERTY_RATING_CONFIG)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setRatingConfig(RatingConfigDto ratingConfig) {
    this.ratingConfig = ratingConfig;
  }


  /**
   * Return true if this SubjectConfigDto object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SubjectConfigDto subjectConfigDto = (SubjectConfigDto) o;
    return Objects.equals(this.id, subjectConfigDto.id) &&
        equalsNullable(this.name, subjectConfigDto.name) &&
        equalsNullable(this.code, subjectConfigDto.code) &&
        Objects.equals(this.isHidden, subjectConfigDto.isHidden) &&
        equalsNullable(this.identifierType, subjectConfigDto.identifierType) &&
        equalsNullable(this.customFieldIds, subjectConfigDto.customFieldIds) &&
        Objects.equals(this.approvalProcessConfig, subjectConfigDto.approvalProcessConfig) &&
        Objects.equals(this.commentaryConfig, subjectConfigDto.commentaryConfig) &&
        equalsNullable(this.newsHeadlineFormat, subjectConfigDto.newsHeadlineFormat) &&
        equalsNullable(this.emailHeadlineFormat, subjectConfigDto.emailHeadlineFormat) &&
        Objects.equals(this.ratingConfig, subjectConfigDto.ratingConfig);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, hashCodeNullable(name), hashCodeNullable(code), isHidden, hashCodeNullable(identifierType), hashCodeNullable(customFieldIds), approvalProcessConfig, commentaryConfig, hashCodeNullable(newsHeadlineFormat), hashCodeNullable(emailHeadlineFormat), ratingConfig);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SubjectConfigDto {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    code: ").append(toIndentedString(code)).append("\n");
    sb.append("    isHidden: ").append(toIndentedString(isHidden)).append("\n");
    sb.append("    identifierType: ").append(toIndentedString(identifierType)).append("\n");
    sb.append("    customFieldIds: ").append(toIndentedString(customFieldIds)).append("\n");
    sb.append("    approvalProcessConfig: ").append(toIndentedString(approvalProcessConfig)).append("\n");
    sb.append("    commentaryConfig: ").append(toIndentedString(commentaryConfig)).append("\n");
    sb.append("    newsHeadlineFormat: ").append(toIndentedString(newsHeadlineFormat)).append("\n");
    sb.append("    emailHeadlineFormat: ").append(toIndentedString(emailHeadlineFormat)).append("\n");
    sb.append("    ratingConfig: ").append(toIndentedString(ratingConfig)).append("\n");
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
