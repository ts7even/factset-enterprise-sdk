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


package com.factset.sdk.PriceAlertingAPIforDigitalPortals.models;

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
import com.factset.sdk.PriceAlertingAPIforDigitalPortals.JSON;


/**
 * Price range for the trigger to monitor.
 */
@ApiModel(description = "Price range for the trigger to monitor.")
@JsonPropertyOrder({
  InlineResponse2003Range.JSON_PROPERTY_UPPER_LIMIT,
  InlineResponse2003Range.JSON_PROPERTY_LOWER_LIMIT
})
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class InlineResponse2003Range implements Serializable {
  private static final long serialVersionUID = 1L;

  public static final String JSON_PROPERTY_UPPER_LIMIT = "upperLimit";
  private Object upperLimit;

  public static final String JSON_PROPERTY_LOWER_LIMIT = "lowerLimit";
  private Object lowerLimit;


  public InlineResponse2003Range upperLimit(Object upperLimit) {
    this.upperLimit = upperLimit;
    return this;
  }

   /**
   * Upper limit.
   * @return upperLimit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Upper limit.")
  @JsonProperty(JSON_PROPERTY_UPPER_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Object getUpperLimit() {
    return upperLimit;
  }


  @JsonProperty(JSON_PROPERTY_UPPER_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setUpperLimit(Object upperLimit) {
    this.upperLimit = upperLimit;
  }


  public InlineResponse2003Range lowerLimit(Object lowerLimit) {
    this.lowerLimit = lowerLimit;
    return this;
  }

   /**
   * Lower limit.
   * @return lowerLimit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Lower limit.")
  @JsonProperty(JSON_PROPERTY_LOWER_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Object getLowerLimit() {
    return lowerLimit;
  }


  @JsonProperty(JSON_PROPERTY_LOWER_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLowerLimit(Object lowerLimit) {
    this.lowerLimit = lowerLimit;
  }


  /**
   * Return true if this inline_response_200_3_range object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse2003Range inlineResponse2003Range = (InlineResponse2003Range) o;
    return Objects.equals(this.upperLimit, inlineResponse2003Range.upperLimit) &&
        Objects.equals(this.lowerLimit, inlineResponse2003Range.lowerLimit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(upperLimit, lowerLimit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse2003Range {\n");
    sb.append("    upperLimit: ").append(toIndentedString(upperLimit)).append("\n");
    sb.append("    lowerLimit: ").append(toIndentedString(lowerLimit)).append("\n");
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
