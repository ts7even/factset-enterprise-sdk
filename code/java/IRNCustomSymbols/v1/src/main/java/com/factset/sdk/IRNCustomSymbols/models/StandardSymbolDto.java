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
import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.factset.sdk.IRNCustomSymbols.JSON;


/**
 * StandardSymbolDto
 */
@JsonPropertyOrder({
  StandardSymbolDto.JSON_PROPERTY_STANDARD_SYMBOL
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class StandardSymbolDto implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_STANDARD_SYMBOL = "standardSymbol";
  private String standardSymbol;

  public StandardSymbolDto() { 
  }

  @JsonCreator
  public StandardSymbolDto(
    @JsonProperty(value=JSON_PROPERTY_STANDARD_SYMBOL, required=true) String standardSymbol
  ) {
    this();
    this.standardSymbol = standardSymbol;
  }

  public StandardSymbolDto standardSymbol(String standardSymbol) {
    this.standardSymbol = standardSymbol;
    return this;
  }

   /**
   * Get standardSymbol
   * @return standardSymbol
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_STANDARD_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getStandardSymbol() {
    return standardSymbol;
  }


  @JsonProperty(JSON_PROPERTY_STANDARD_SYMBOL)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStandardSymbol(String standardSymbol) {
    this.standardSymbol = standardSymbol;
  }


  /**
   * Return true if this StandardSymbolDto object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    StandardSymbolDto standardSymbolDto = (StandardSymbolDto) o;
    return Objects.equals(this.standardSymbol, standardSymbolDto.standardSymbol);
  }

  @Override
  public int hashCode() {
    return Objects.hash(standardSymbol);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class StandardSymbolDto {\n");
    sb.append("    standardSymbol: ").append(toIndentedString(standardSymbol)).append("\n");
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

