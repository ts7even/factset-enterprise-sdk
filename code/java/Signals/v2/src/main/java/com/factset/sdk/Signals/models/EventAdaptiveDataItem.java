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
 * EventAdaptiveDataItem
 */
@JsonPropertyOrder({
  EventAdaptiveDataItem.JSON_PROPERTY_REQUEST_ID,
  EventAdaptiveDataItem.JSON_PROPERTY_SIGNAL_ID,
  EventAdaptiveDataItem.JSON_PROPERTY_ADAPTIVE_CARD
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EventAdaptiveDataItem implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_REQUEST_ID = "requestId";
  private String requestId;

  public static final String JSON_PROPERTY_SIGNAL_ID = "signalId";
  private String signalId;

  public static final String JSON_PROPERTY_ADAPTIVE_CARD = "adaptiveCard";
  private java.util.Map<String, Object> adaptiveCard = new java.util.HashMap<>();

  public EventAdaptiveDataItem() { 
  }

  @JsonCreator
  public EventAdaptiveDataItem(
    @JsonProperty(value=JSON_PROPERTY_REQUEST_ID, required=true) String requestId, 
    @JsonProperty(value=JSON_PROPERTY_SIGNAL_ID, required=true) String signalId, 
    @JsonProperty(value=JSON_PROPERTY_ADAPTIVE_CARD, required=true) java.util.Map<String, Object> adaptiveCard
  ) {
    this();
    this.requestId = requestId;
    this.signalId = signalId;
    this.adaptiveCard = adaptiveCard;
  }

  public EventAdaptiveDataItem requestId(String requestId) {
    this.requestId = requestId;
    return this;
  }

   /**
   * The id that was requested, ticker, cusip, factset entity id etc.
   * @return requestId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "FDS-US", required = true, value = "The id that was requested, ticker, cusip, factset entity id etc.")
  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getRequestId() {
    return requestId;
  }


  @JsonProperty(JSON_PROPERTY_REQUEST_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRequestId(String requestId) {
    this.requestId = requestId;
  }


  public EventAdaptiveDataItem signalId(String signalId) {
    this.signalId = signalId;
    return this;
  }

   /**
   * Signal Id for this event.
   * @return signalId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "dilutionTrigger", required = true, value = "Signal Id for this event.")
  @JsonProperty(JSON_PROPERTY_SIGNAL_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSignalId() {
    return signalId;
  }


  @JsonProperty(JSON_PROPERTY_SIGNAL_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSignalId(String signalId) {
    this.signalId = signalId;
  }


  public EventAdaptiveDataItem adaptiveCard(java.util.Map<String, Object> adaptiveCard) {
    this.adaptiveCard = adaptiveCard;
    return this;
  }

  public EventAdaptiveDataItem putAdaptiveCardItem(String key, Object adaptiveCardItem) {
    this.adaptiveCard.put(key, adaptiveCardItem);
    return this;
  }

   /**
   * A JSON object that&#39;s compliant with MS adaptive card schema.
   * @return adaptiveCard
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "A JSON object that's compliant with MS adaptive card schema.")
  @JsonProperty(JSON_PROPERTY_ADAPTIVE_CARD)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.ALWAYS)

  public java.util.Map<String, Object> getAdaptiveCard() {
    return adaptiveCard;
  }


  @JsonProperty(JSON_PROPERTY_ADAPTIVE_CARD)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.ALWAYS)
  public void setAdaptiveCard(java.util.Map<String, Object> adaptiveCard) {
    this.adaptiveCard = adaptiveCard;
  }


  /**
   * Return true if this eventAdaptiveDataItem object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EventAdaptiveDataItem eventAdaptiveDataItem = (EventAdaptiveDataItem) o;
    return Objects.equals(this.requestId, eventAdaptiveDataItem.requestId) &&
        Objects.equals(this.signalId, eventAdaptiveDataItem.signalId) &&
        Objects.equals(this.adaptiveCard, eventAdaptiveDataItem.adaptiveCard);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, signalId, adaptiveCard);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EventAdaptiveDataItem {\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    signalId: ").append(toIndentedString(signalId)).append("\n");
    sb.append("    adaptiveCard: ").append(toIndentedString(adaptiveCard)).append("\n");
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

