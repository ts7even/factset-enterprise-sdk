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
 * ProblemDetails
 */
@JsonPropertyOrder({
  ProblemDetails.JSON_PROPERTY_TYPE,
  ProblemDetails.JSON_PROPERTY_TITLE,
  ProblemDetails.JSON_PROPERTY_STATUS,
  ProblemDetails.JSON_PROPERTY_DETAIL,
  ProblemDetails.JSON_PROPERTY_INSTANCE,
  ProblemDetails.JSON_PROPERTY_EXTENSIONS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ProblemDetails implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TYPE = "type";
  private JsonNullable<String> type = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_TITLE = "title";
  private JsonNullable<String> title = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_STATUS = "status";
  private JsonNullable<Integer> status = JsonNullable.<Integer>undefined();

  public static final String JSON_PROPERTY_DETAIL = "detail";
  private JsonNullable<String> detail = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_INSTANCE = "instance";
  private JsonNullable<String> instance = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_EXTENSIONS = "extensions";
  private JsonNullable<java.util.Map<String, Object>> extensions = JsonNullable.<java.util.Map<String, Object>>undefined();


  public ProblemDetails type(String type) {
    this.type = JsonNullable.<String>of(type);
    return this;
  }

   /**
   * Get type
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getType() {
        return type.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getType_JsonNullable() {
    return type;
  }
  
  @JsonProperty(JSON_PROPERTY_TYPE)
  public void setType_JsonNullable(JsonNullable<String> type) {
    this.type = type;
  }

  public void setType(String type) {
    this.type = JsonNullable.<String>of(type);
  }


  public ProblemDetails title(String title) {
    this.title = JsonNullable.<String>of(title);
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getTitle() {
        return title.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_TITLE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getTitle_JsonNullable() {
    return title;
  }
  
  @JsonProperty(JSON_PROPERTY_TITLE)
  public void setTitle_JsonNullable(JsonNullable<String> title) {
    this.title = title;
  }

  public void setTitle(String title) {
    this.title = JsonNullable.<String>of(title);
  }


  public ProblemDetails status(Integer status) {
    this.status = JsonNullable.<Integer>of(status);
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public Integer getStatus() {
        return status.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<Integer> getStatus_JsonNullable() {
    return status;
  }
  
  @JsonProperty(JSON_PROPERTY_STATUS)
  public void setStatus_JsonNullable(JsonNullable<Integer> status) {
    this.status = status;
  }

  public void setStatus(Integer status) {
    this.status = JsonNullable.<Integer>of(status);
  }


  public ProblemDetails detail(String detail) {
    this.detail = JsonNullable.<String>of(detail);
    return this;
  }

   /**
   * Get detail
   * @return detail
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getDetail() {
        return detail.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_DETAIL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getDetail_JsonNullable() {
    return detail;
  }
  
  @JsonProperty(JSON_PROPERTY_DETAIL)
  public void setDetail_JsonNullable(JsonNullable<String> detail) {
    this.detail = detail;
  }

  public void setDetail(String detail) {
    this.detail = JsonNullable.<String>of(detail);
  }


  public ProblemDetails instance(String instance) {
    this.instance = JsonNullable.<String>of(instance);
    return this;
  }

   /**
   * Get instance
   * @return instance
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getInstance() {
        return instance.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_INSTANCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getInstance_JsonNullable() {
    return instance;
  }
  
  @JsonProperty(JSON_PROPERTY_INSTANCE)
  public void setInstance_JsonNullable(JsonNullable<String> instance) {
    this.instance = instance;
  }

  public void setInstance(String instance) {
    this.instance = JsonNullable.<String>of(instance);
  }


   /**
   * Get extensions
   * @return extensions
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public java.util.Map<String, Object> getExtensions() {
    
    if (extensions == null) {
      extensions = JsonNullable.<java.util.Map<String, Object>>of(new java.util.HashMap<>());
    }
    return extensions.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_EXTENSIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<java.util.Map<String, Object>> getExtensions_JsonNullable() {
    return extensions;
  }
  
  @JsonProperty(JSON_PROPERTY_EXTENSIONS)
  private void setExtensions_JsonNullable(JsonNullable<java.util.Map<String, Object>> extensions) {
    this.extensions = extensions;
  }



  /**
   * Return true if this ProblemDetails object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProblemDetails problemDetails = (ProblemDetails) o;
    return equalsNullable(this.type, problemDetails.type) &&
        equalsNullable(this.title, problemDetails.title) &&
        equalsNullable(this.status, problemDetails.status) &&
        equalsNullable(this.detail, problemDetails.detail) &&
        equalsNullable(this.instance, problemDetails.instance) &&
        equalsNullable(this.extensions, problemDetails.extensions);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(hashCodeNullable(type), hashCodeNullable(title), hashCodeNullable(status), hashCodeNullable(detail), hashCodeNullable(instance), hashCodeNullable(extensions));
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
    sb.append("class ProblemDetails {\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    detail: ").append(toIndentedString(detail)).append("\n");
    sb.append("    instance: ").append(toIndentedString(instance)).append("\n");
    sb.append("    extensions: ").append(toIndentedString(extensions)).append("\n");
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
