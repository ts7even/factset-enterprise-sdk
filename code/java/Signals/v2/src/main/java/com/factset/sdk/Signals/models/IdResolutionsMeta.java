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
 * IdResolutionsMeta
 */
@JsonPropertyOrder({
  IdResolutionsMeta.JSON_PROPERTY_TICKER_REGION,
  IdResolutionsMeta.JSON_PROPERTY_REGIONAL_PERM_ID
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class IdResolutionsMeta implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_TICKER_REGION = "tickerRegion";
  private java.util.Map<String, String> tickerRegion = null;

  public static final String JSON_PROPERTY_REGIONAL_PERM_ID = "regionalPermId";
  private java.util.Map<String, String> regionalPermId = null;

  public IdResolutionsMeta() { 
  }

  public IdResolutionsMeta tickerRegion(java.util.Map<String, String> tickerRegion) {
    this.tickerRegion = tickerRegion;
    return this;
  }

  public IdResolutionsMeta putTickerRegionItem(String key, String tickerRegionItem) {
    if (this.tickerRegion == null) {
      this.tickerRegion = new java.util.HashMap<>();
    }
    this.tickerRegion.put(key, tickerRegionItem);
    return this;
  }

   /**
   * Get tickerRegion
   * @return tickerRegion
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TICKER_REGION)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, String> getTickerRegion() {
    return tickerRegion;
  }


  @JsonProperty(JSON_PROPERTY_TICKER_REGION)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)
  public void setTickerRegion(java.util.Map<String, String> tickerRegion) {
    this.tickerRegion = tickerRegion;
  }


  public IdResolutionsMeta regionalPermId(java.util.Map<String, String> regionalPermId) {
    this.regionalPermId = regionalPermId;
    return this;
  }

  public IdResolutionsMeta putRegionalPermIdItem(String key, String regionalPermIdItem) {
    if (this.regionalPermId == null) {
      this.regionalPermId = new java.util.HashMap<>();
    }
    this.regionalPermId.put(key, regionalPermIdItem);
    return this;
  }

   /**
   * Get regionalPermId
   * @return regionalPermId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_REGIONAL_PERM_ID)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.Map<String, String> getRegionalPermId() {
    return regionalPermId;
  }


  @JsonProperty(JSON_PROPERTY_REGIONAL_PERM_ID)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)
  public void setRegionalPermId(java.util.Map<String, String> regionalPermId) {
    this.regionalPermId = regionalPermId;
  }


  /**
   * Return true if this idResolutionsMeta object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    IdResolutionsMeta idResolutionsMeta = (IdResolutionsMeta) o;
    return Objects.equals(this.tickerRegion, idResolutionsMeta.tickerRegion) &&
        Objects.equals(this.regionalPermId, idResolutionsMeta.regionalPermId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(tickerRegion, regionalPermId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class IdResolutionsMeta {\n");
    sb.append("    tickerRegion: ").append(toIndentedString(tickerRegion)).append("\n");
    sb.append("    regionalPermId: ").append(toIndentedString(regionalPermId)).append("\n");
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

