/*
 * Signals API
 * Collection of endpoints for providing Signal Events, Definitions and Metadata
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: signals.api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.Signals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.Signals.models.ErrorItem;
import com.factset.sdk.Signals.models.EventAdaptiveDataItem;
import com.factset.sdk.Signals.models.EventMeta;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.Signals.JSON;


/**
 * EventAdaptiveCard
 */
@JsonPropertyOrder({
  EventAdaptiveCard.JSON_PROPERTY_DATA,
  EventAdaptiveCard.JSON_PROPERTY_META,
  EventAdaptiveCard.JSON_PROPERTY_ERRORS
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EventAdaptiveCard implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_DATA = "data";
  private EventAdaptiveDataItem data;

  public static final String JSON_PROPERTY_META = "meta";
  private EventMeta meta;

  public static final String JSON_PROPERTY_ERRORS = "errors";
  private java.util.List<ErrorItem> errors = null;

  public EventAdaptiveCard() { 
  }

  @JsonCreator
  public EventAdaptiveCard(
    @JsonProperty(value=JSON_PROPERTY_DATA, required=true) EventAdaptiveDataItem data, 
    @JsonProperty(value=JSON_PROPERTY_META, required=true) EventMeta meta
  ) {
    this();
    this.data = data;
    this.meta = meta;
  }

  public EventAdaptiveCard data(EventAdaptiveDataItem data) {
    this.data = data;
    return this;
  }

   /**
   * Get data
   * @return data
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public EventAdaptiveDataItem getData() {
    return data;
  }


  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setData(EventAdaptiveDataItem data) {
    this.data = data;
  }


  public EventAdaptiveCard meta(EventMeta meta) {
    this.meta = meta;
    return this;
  }

   /**
   * Get meta
   * @return meta
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public EventMeta getMeta() {
    return meta;
  }


  @JsonProperty(JSON_PROPERTY_META)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMeta(EventMeta meta) {
    this.meta = meta;
  }


  public EventAdaptiveCard errors(java.util.List<ErrorItem> errors) {
    this.errors = errors;
    return this;
  }

  public EventAdaptiveCard addErrorsItem(ErrorItem errorsItem) {
    if (this.errors == null) {
      this.errors = new java.util.ArrayList<>();
    }
    this.errors.add(errorsItem);
    return this;
  }

   /**
   * Get errors
   * @return errors
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ERRORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<ErrorItem> getErrors() {
    return errors;
  }


  @JsonProperty(JSON_PROPERTY_ERRORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setErrors(java.util.List<ErrorItem> errors) {
    this.errors = errors;
  }


  /**
   * Return true if this eventAdaptiveCard object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventAdaptiveCard eventAdaptiveCard = (EventAdaptiveCard) o;
    return Objects.equals(this.data, eventAdaptiveCard.data) &&
        Objects.equals(this.meta, eventAdaptiveCard.meta) &&
        Objects.equals(this.errors, eventAdaptiveCard.errors);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, meta, errors);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventAdaptiveCard {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    meta: ").append(toIndentedString(meta)).append("\n");
    sb.append("    errors: ").append(toIndentedString(errors)).append("\n");
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

