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


package com.factset.sdk.QuotesAPIforDigitalPortals.models;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20042DataAssetClass;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20042DataNsin;
import com.factset.sdk.QuotesAPIforDigitalPortals.models.InlineResponse20042DataType;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.QuotesAPIforDigitalPortals.JSON;


/**
 * Set of basic data for the instrument.
 */
@ApiModel(description = "Set of basic data for the instrument.")
@JsonPropertyOrder({
  InlineResponse20043Data.JSON_PROPERTY_ID,
  InlineResponse20043Data.JSON_PROPERTY_NAME,
  InlineResponse20043Data.JSON_PROPERTY_SHORT_NAME,
  InlineResponse20043Data.JSON_PROPERTY_ISIN,
  InlineResponse20043Data.JSON_PROPERTY_NSIN,
  InlineResponse20043Data.JSON_PROPERTY_ASSET_CLASS,
  InlineResponse20043Data.JSON_PROPERTY_TYPE
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse20043Data implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_SHORT_NAME = "shortName";
  private String shortName;

  public static final String JSON_PROPERTY_ISIN = "isin";
  private String isin;

  public static final String JSON_PROPERTY_NSIN = "nsin";
  private InlineResponse20042DataNsin nsin;

  public static final String JSON_PROPERTY_ASSET_CLASS = "assetClass";
  private InlineResponse20042DataAssetClass assetClass;

  public static final String JSON_PROPERTY_TYPE = "type";
  private java.util.List<InlineResponse20042DataType> type = null;


  public InlineResponse20043Data id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Identifier of the instrument.
   * @return id
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Identifier of the instrument.")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setId(String id) {
    this.id = id;
  }


  public InlineResponse20043Data name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the instrument.
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of the instrument.")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public InlineResponse20043Data shortName(String shortName) {
    this.shortName = shortName;
    return this;
  }

   /**
   * Short name of the instrument.
   * @return shortName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Short name of the instrument.")
  @JsonProperty(JSON_PROPERTY_SHORT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getShortName() {
    return shortName;
  }


  @JsonProperty(JSON_PROPERTY_SHORT_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setShortName(String shortName) {
    this.shortName = shortName;
  }


  public InlineResponse20043Data isin(String isin) {
    this.isin = isin;
    return this;
  }

   /**
   * International Securities Identification Number of the instrument.
   * @return isin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "International Securities Identification Number of the instrument.")
  @JsonProperty(JSON_PROPERTY_ISIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIsin() {
    return isin;
  }


  @JsonProperty(JSON_PROPERTY_ISIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsin(String isin) {
    this.isin = isin;
  }


  public InlineResponse20043Data nsin(InlineResponse20042DataNsin nsin) {
    this.nsin = nsin;
    return this;
  }

   /**
   * Get nsin
   * @return nsin
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_NSIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20042DataNsin getNsin() {
    return nsin;
  }


  @JsonProperty(JSON_PROPERTY_NSIN)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setNsin(InlineResponse20042DataNsin nsin) {
    this.nsin = nsin;
  }


  public InlineResponse20043Data assetClass(InlineResponse20042DataAssetClass assetClass) {
    this.assetClass = assetClass;
    return this;
  }

   /**
   * Get assetClass
   * @return assetClass
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ASSET_CLASS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public InlineResponse20042DataAssetClass getAssetClass() {
    return assetClass;
  }


  @JsonProperty(JSON_PROPERTY_ASSET_CLASS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setAssetClass(InlineResponse20042DataAssetClass assetClass) {
    this.assetClass = assetClass;
  }


  public InlineResponse20043Data type(java.util.List<InlineResponse20042DataType> type) {
    this.type = type;
    return this;
  }

  public InlineResponse20043Data addTypeItem(InlineResponse20042DataType typeItem) {
    if (this.type == null) {
      this.type = new java.util.ArrayList<>();
    }
    this.type.add(typeItem);
    return this;
  }

   /**
   * Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).
   * @return type
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Instrument type as defined by FactSet Digital Solutions. Instrument types are arranged in a hierarchy, with level 1 representing the most coarse granularity and further levels successively refining the granularity (see MDG category system 18).")
  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<InlineResponse20042DataType> getType() {
    return type;
  }


  @JsonProperty(JSON_PROPERTY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setType(java.util.List<InlineResponse20042DataType> type) {
    this.type = type;
  }


  /**
   * Return true if this inline_response_200_43_data object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse20043Data inlineResponse20043Data = (InlineResponse20043Data) o;
    return Objects.equals(this.id, inlineResponse20043Data.id) &&
        Objects.equals(this.name, inlineResponse20043Data.name) &&
        Objects.equals(this.shortName, inlineResponse20043Data.shortName) &&
        Objects.equals(this.isin, inlineResponse20043Data.isin) &&
        Objects.equals(this.nsin, inlineResponse20043Data.nsin) &&
        Objects.equals(this.assetClass, inlineResponse20043Data.assetClass) &&
        Objects.equals(this.type, inlineResponse20043Data.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, shortName, isin, nsin, assetClass, type);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse20043Data {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    shortName: ").append(toIndentedString(shortName)).append("\n");
    sb.append("    isin: ").append(toIndentedString(isin)).append("\n");
    sb.append("    nsin: ").append(toIndentedString(nsin)).append("\n");
    sb.append("    assetClass: ").append(toIndentedString(assetClass)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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
