/*
 * Watchlist API For Digital Portals
 * Watchlists keeps track of users' individual investment objectives. They are meant to support the self-directed business of wealth management firms.  The Watchlist API for Digital Portals is fully integrated with the corresponding Quotes API, allowing access to detailed price and performance information of instruments in a watchlist. This also supports basic security identifier cross-reference. To complement the Watchlist API with direct access to price histories, please refer to the Time Series API for Digital Portals.
 *
 * The version of the OpenAPI document: 2
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
import com.factset.sdk.WatchlistAPIforDigitalPortals.models.InlineResponse2005Notation;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.WatchlistAPIforDigitalPortals.JSON;


/**
 * InlineResponse2005Data
 */
@JsonPropertyOrder({
  InlineResponse2005Data.JSON_PROPERTY_ID,
  InlineResponse2005Data.JSON_PROPERTY_NOTATION,
  InlineResponse2005Data.JSON_PROPERTY_COMMENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2005Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private BigDecimal id;

  public static final String JSON_PROPERTY_NOTATION = "notation";
  private InlineResponse2005Notation notation;

  public static final String JSON_PROPERTY_COMMENT = "comment";
  private String comment;

  public InlineResponse2005Data() { 
  }

  public InlineResponse2005Data id(BigDecimal id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the position.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the position.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public BigDecimal getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(BigDecimal id) {
    this.id = id;
  }


  public InlineResponse2005Data notation(InlineResponse2005Notation notation) {
    this.notation = notation;
    return this;
  }

   /**
   * Get notation
   * @return notation
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse2005Notation getNotation() {
    return notation;
  }


  @JsonProperty(JSON_PROPERTY_NOTATION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNotation(InlineResponse2005Notation notation) {
    this.notation = notation;
  }


  public InlineResponse2005Data comment(String comment) {
    this.comment = comment;
    return this;
  }

   /**
   * Personal note for the watchlist position.
   * @return comment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Personal note for the watchlist position.")
  @JsonProperty(JSON_PROPERTY_COMMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getComment() {
    return comment;
  }


  @JsonProperty(JSON_PROPERTY_COMMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setComment(String comment) {
    this.comment = comment;
  }


  /**
   * Return true if this inline_response_200_5_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2005Data inlineResponse2005Data = (InlineResponse2005Data) o;
    return Objects.equals(this.id, inlineResponse2005Data.id) &&
        Objects.equals(this.notation, inlineResponse2005Data.notation) &&
        Objects.equals(this.comment, inlineResponse2005Data.comment);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, notation, comment);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2005Data {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    notation: ").append(toIndentedString(notation)).append("\n");
    sb.append("    comment: ").append(toIndentedString(comment)).append("\n");
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
