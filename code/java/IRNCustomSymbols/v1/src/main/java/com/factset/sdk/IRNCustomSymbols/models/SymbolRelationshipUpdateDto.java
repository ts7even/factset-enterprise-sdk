/*
 * IRN API v1
 * Allows users to extract, create, update and configure IRN data.
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.IRNCustomSymbols.models;

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
import java.time.OffsetDateTime;
import org.openapitools.jackson.nullable.JsonNullable;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.openapitools.jackson.nullable.JsonNullable;
import java.util.NoSuchElementException;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.IRNCustomSymbols.JSON;


/**
 * SymbolRelationshipUpdateDto
 */
@JsonPropertyOrder({
  SymbolRelationshipUpdateDto.JSON_PROPERTY_ID,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_SYMBOLS_RELATIONSHIP_ID,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_PARENT_SYMBOL,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_CHILD_SYMBOL,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_START_DATE,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_END_DATE,
  SymbolRelationshipUpdateDto.JSON_PROPERTY_COMMENT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class SymbolRelationshipUpdateDto implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private java.util.UUID id;

  public static final String JSON_PROPERTY_SYMBOLS_RELATIONSHIP_ID = "symbolsRelationshipId";
  private java.util.UUID symbolsRelationshipId;

  public static final String JSON_PROPERTY_PARENT_SYMBOL = "parentSymbol";
  private JsonNullable<String> parentSymbol = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_CHILD_SYMBOL = "childSymbol";
  private JsonNullable<String> childSymbol = JsonNullable.<String>undefined();

  public static final String JSON_PROPERTY_START_DATE = "startDate";
  private JsonNullable<OffsetDateTime> startDate = JsonNullable.<OffsetDateTime>undefined();

  public static final String JSON_PROPERTY_END_DATE = "endDate";
  private JsonNullable<OffsetDateTime> endDate = JsonNullable.<OffsetDateTime>undefined();

  public static final String JSON_PROPERTY_COMMENT = "comment";
  private JsonNullable<String> comment = JsonNullable.<String>undefined();

  public SymbolRelationshipUpdateDto() { 
  }

  public SymbolRelationshipUpdateDto id(java.util.UUID id) {
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


  public SymbolRelationshipUpdateDto symbolsRelationshipId(java.util.UUID symbolsRelationshipId) {
    this.symbolsRelationshipId = symbolsRelationshipId;
    return this;
  }

   /**
   * Get symbolsRelationshipId
   * @return symbolsRelationshipId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_SYMBOLS_RELATIONSHIP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.UUID getSymbolsRelationshipId() {
    return symbolsRelationshipId;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOLS_RELATIONSHIP_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSymbolsRelationshipId(java.util.UUID symbolsRelationshipId) {
    this.symbolsRelationshipId = symbolsRelationshipId;
  }


  public SymbolRelationshipUpdateDto parentSymbol(String parentSymbol) {
    this.parentSymbol = JsonNullable.<String>of(parentSymbol);
    return this;
  }

   /**
   * Get parentSymbol
   * @return parentSymbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getParentSymbol() {
        return parentSymbol.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_PARENT_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getParentSymbol_JsonNullable() {
    return parentSymbol;
  }
  
  @JsonProperty(JSON_PROPERTY_PARENT_SYMBOL)
  public void setParentSymbol_JsonNullable(JsonNullable<String> parentSymbol) {
    this.parentSymbol = parentSymbol;
  }

  public void setParentSymbol(String parentSymbol) {
    this.parentSymbol = JsonNullable.<String>of(parentSymbol);
  }


  public SymbolRelationshipUpdateDto childSymbol(String childSymbol) {
    this.childSymbol = JsonNullable.<String>of(childSymbol);
    return this;
  }

   /**
   * Get childSymbol
   * @return childSymbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getChildSymbol() {
        return childSymbol.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_CHILD_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getChildSymbol_JsonNullable() {
    return childSymbol;
  }
  
  @JsonProperty(JSON_PROPERTY_CHILD_SYMBOL)
  public void setChildSymbol_JsonNullable(JsonNullable<String> childSymbol) {
    this.childSymbol = childSymbol;
  }

  public void setChildSymbol(String childSymbol) {
    this.childSymbol = JsonNullable.<String>of(childSymbol);
  }


  public SymbolRelationshipUpdateDto startDate(OffsetDateTime startDate) {
    this.startDate = JsonNullable.<OffsetDateTime>of(startDate);
    return this;
  }

   /**
   * Get startDate
   * @return startDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public OffsetDateTime getStartDate() {
        return startDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_START_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<OffsetDateTime> getStartDate_JsonNullable() {
    return startDate;
  }
  
  @JsonProperty(JSON_PROPERTY_START_DATE)
  public void setStartDate_JsonNullable(JsonNullable<OffsetDateTime> startDate) {
    this.startDate = startDate;
  }

  public void setStartDate(OffsetDateTime startDate) {
    this.startDate = JsonNullable.<OffsetDateTime>of(startDate);
  }


  public SymbolRelationshipUpdateDto endDate(OffsetDateTime endDate) {
    this.endDate = JsonNullable.<OffsetDateTime>of(endDate);
    return this;
  }

   /**
   * Get endDate
   * @return endDate
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public OffsetDateTime getEndDate() {
        return endDate.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_END_DATE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<OffsetDateTime> getEndDate_JsonNullable() {
    return endDate;
  }
  
  @JsonProperty(JSON_PROPERTY_END_DATE)
  public void setEndDate_JsonNullable(JsonNullable<OffsetDateTime> endDate) {
    this.endDate = endDate;
  }

  public void setEndDate(OffsetDateTime endDate) {
    this.endDate = JsonNullable.<OffsetDateTime>of(endDate);
  }


  public SymbolRelationshipUpdateDto comment(String comment) {
    this.comment = JsonNullable.<String>of(comment);
    return this;
  }

   /**
   * Get comment
   * @return comment
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonIgnore

  public String getComment() {
        return comment.orElse(null);
  }

  @JsonProperty(JSON_PROPERTY_COMMENT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public JsonNullable<String> getComment_JsonNullable() {
    return comment;
  }
  
  @JsonProperty(JSON_PROPERTY_COMMENT)
  public void setComment_JsonNullable(JsonNullable<String> comment) {
    this.comment = comment;
  }

  public void setComment(String comment) {
    this.comment = JsonNullable.<String>of(comment);
  }


  /**
   * Return true if this SymbolRelationshipUpdateDto object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SymbolRelationshipUpdateDto symbolRelationshipUpdateDto = (SymbolRelationshipUpdateDto) o;
    return Objects.equals(this.id, symbolRelationshipUpdateDto.id) &&
        Objects.equals(this.symbolsRelationshipId, symbolRelationshipUpdateDto.symbolsRelationshipId) &&
        equalsNullable(this.parentSymbol, symbolRelationshipUpdateDto.parentSymbol) &&
        equalsNullable(this.childSymbol, symbolRelationshipUpdateDto.childSymbol) &&
        equalsNullable(this.startDate, symbolRelationshipUpdateDto.startDate) &&
        equalsNullable(this.endDate, symbolRelationshipUpdateDto.endDate) &&
        equalsNullable(this.comment, symbolRelationshipUpdateDto.comment);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, symbolsRelationshipId, hashCodeNullable(parentSymbol), hashCodeNullable(childSymbol), hashCodeNullable(startDate), hashCodeNullable(endDate), hashCodeNullable(comment));
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
    sb.append("class SymbolRelationshipUpdateDto {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    symbolsRelationshipId: ").append(toIndentedString(symbolsRelationshipId)).append("\n");
    sb.append("    parentSymbol: ").append(toIndentedString(parentSymbol)).append("\n");
    sb.append("    childSymbol: ").append(toIndentedString(childSymbol)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
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

