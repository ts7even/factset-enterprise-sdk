/*
 * Prime Developer Trial
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.WatchlistAPIforDigitalPortals.models;

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
import com.factset.sdk.WatchlistAPIforDigitalPortals.JSON;


/**
 * The data member contains the request&#39;s primary data.
 */
@ApiModel(description = "The data member contains the request's primary data.")
@JsonPropertyOrder({
  WatchlistPositionCreateData.JSON_PROPERTY_NAME,
  WatchlistPositionCreateData.JSON_PROPERTY_NOTATION,
  WatchlistPositionCreateData.JSON_PROPERTY_ADDITIONAL_DATA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class WatchlistPositionCreateData implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_NOTATION = "notation";
  private String notation;

  public static final String JSON_PROPERTY_ADDITIONAL_DATA = "additionalData";
  private String additionalData;


  public WatchlistPositionCreateData name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of watchlist
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Name of watchlist")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(String name) {
    this.name = name;
  }


  public WatchlistPositionCreateData notation(String notation) {
    this.notation = notation;
    return this;
  }

   /**
   * Identifier of the notation
   * @return notation
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Identifier of the notation")
  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getNotation() {
    return notation;
  }


  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setNotation(String notation) {
    this.notation = notation;
  }


  public WatchlistPositionCreateData additionalData(String additionalData) {
    this.additionalData = additionalData;
    return this;
  }

   /**
   * Additional data to the watched position.
   * @return additionalData
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Additional data to the watched position.")
  @JsonProperty(JSON_PROPERTY_ADDITIONAL_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getAdditionalData() {
    return additionalData;
  }


  @JsonProperty(JSON_PROPERTY_ADDITIONAL_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAdditionalData(String additionalData) {
    this.additionalData = additionalData;
  }


  /**
   * Return true if this _watchlist_position_create_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WatchlistPositionCreateData watchlistPositionCreateData = (WatchlistPositionCreateData) o;
    return Objects.equals(this.name, watchlistPositionCreateData.name) &&
        Objects.equals(this.notation, watchlistPositionCreateData.notation) &&
        Objects.equals(this.additionalData, watchlistPositionCreateData.additionalData);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, notation, additionalData);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WatchlistPositionCreateData {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    notation: ").append(toIndentedString(notation)).append("\n");
    sb.append("    additionalData: ").append(toIndentedString(additionalData)).append("\n");
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
