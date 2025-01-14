/*
 * EMS API
 * Allow clients to trade orders.
 *
 * The version of the OpenAPI document: 0.2.0
 * Contact: api@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.FactSetTrading.models;

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
import com.factset.sdk.FactSetTrading.JSON;


/**
 * EMSCancelOrder
 */
@JsonPropertyOrder({
  EMSCancelOrder.JSON_PROPERTY_ORIGINAL_ORDER_ID,
  EMSCancelOrder.JSON_PROPERTY_INBOUND_DESTINATION
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class EMSCancelOrder implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ORIGINAL_ORDER_ID = "originalOrderId";
  private String originalOrderId;

  public static final String JSON_PROPERTY_INBOUND_DESTINATION = "inboundDestination";
  private JsonNullable<String> inboundDestination = JsonNullable.<String>undefined();

  public EMSCancelOrder() { 
  }

  @JsonCreator
  public EMSCancelOrder(
    @JsonProperty(value=JSON_PROPERTY_ORIGINAL_ORDER_ID, required=true) String originalOrderId
  ) {
    this();
    this.originalOrderId = originalOrderId;
  }

  public EMSCancelOrder originalOrderId(String originalOrderId) {
    this.originalOrderId = originalOrderId;
    return this;
  }

   /**
   * Get originalOrderId
   * @return originalOrderId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_ORIGINAL_ORDER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getOriginalOrderId() {
    return originalOrderId;
  }


  @JsonProperty(JSON_PROPERTY_ORIGINAL_ORDER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setOriginalOrderId(String originalOrderId) {
    this.originalOrderId = originalOrderId;
  }


  public EMSCancelOrder inboundDestination(String inboundDestination) {
    this.inboundDestination = JsonNullable.<String>of(inboundDestination);
    return this;
  }

   /**
   * Inbound destination
   * @return inboundDestination
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Inbound destination")
  @JsonIgnore

  public String getInboundDestination() {
        return inboundDestination.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_INBOUND_DESTINATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getInboundDestination_JsonNullable() {
    return inboundDestination;
  }
  
  @JsonProperty(JSON_PROPERTY_INBOUND_DESTINATION)
  public void setInboundDestination_JsonNullable(JsonNullable<String> inboundDestination) {
    this.inboundDestination = inboundDestination;
  }

  public void setInboundDestination(String inboundDestination) {
    this.inboundDestination = JsonNullable.<String>of(inboundDestination);
  }


  /**
   * Return true if this EMSCancelOrder object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EMSCancelOrder emSCancelOrder = (EMSCancelOrder) o;
    return Objects.equals(this.originalOrderId, emSCancelOrder.originalOrderId) &&
        equalsNullable(this.inboundDestination, emSCancelOrder.inboundDestination);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(originalOrderId, hashCodeNullable(inboundDestination));
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
    sb.append("class EMSCancelOrder {\n");
    sb.append("    originalOrderId: ").append(toIndentedString(originalOrderId)).append("\n");
    sb.append("    inboundDestination: ").append(toIndentedString(inboundDestination)).append("\n");
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

