/*
 * OFDB API
 * OFDB api
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: cpd-hyd-engineering@factset.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.factset.sdk.OFDB.models;

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
import com.factset.sdk.OFDB.JSON;


/**
 * InlineObject
 */
@JsonPropertyOrder({
  InlineObject.JSON_PROPERTY_SYMBOL,
  InlineObject.JSON_PROPERTY_DATA
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineObject implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_SYMBOL = "symbol";
  private String symbol;

  public static final String JSON_PROPERTY_DATA = "data";
  private java.util.List<Object> data = null;


  public InlineObject symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Name of the symbol and unique to this database
   * @return symbol
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Name of the symbol and unique to this database")
  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getSymbol() {
    return symbol;
  }


  @JsonProperty(JSON_PROPERTY_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }


  public InlineObject data(java.util.List<Object> data) {
    this.data = data;
    return this;
  }

  public InlineObject addDataItem(Object dataItem) {
    if (this.data == null) {
      this.data = new java.util.ArrayList<>();
    }
    this.data.add(dataItem);
    return this;
  }

   /**
   * date has to be provide in case 3d OFDB with date and atleast one iterative field
   * @return data
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "date has to be provide in case 3d OFDB with date and atleast one iterative field")
  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public java.util.List<Object> getData() {
    return data;
  }


  @JsonProperty(JSON_PROPERTY_DATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setData(java.util.List<Object> data) {
    this.data = data;
  }


  /**
   * Return true if this inline_object object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineObject inlineObject = (InlineObject) o;
    return Objects.equals(this.symbol, inlineObject.symbol) &&
        Objects.equals(this.data, inlineObject.data);
  }

  @Override
  public int hashCode() {
    return Objects.hash(symbol, data);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineObject {\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
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
